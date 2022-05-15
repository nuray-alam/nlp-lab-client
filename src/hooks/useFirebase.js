import { useState, useEffect } from "react";
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import {
    getAuth, createUserWithEmailAndPassword, signOut,
    onAuthStateChanged, signInWithEmailAndPassword,
    signInWithPopup, GoogleAuthProvider, updateProfile,
    getIdToken
} from "firebase/auth";


// initialize firebase app
initializeFirebase();


const useFirebase = () => {

    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [authError, setAuthError] = useState("");
    const [admin, setAdmin] = useState(false);
    const [token, setToken] = useState("");

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();


    const registerUser = (email, password, name, history) => {
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {

                setAuthError("");

                const newUser = { email, displayName: name };
                setUser(newUser);

                //save user to the database
                // saveUser(email, name, "POST");
                //send name to firebase after creation
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {

                }).catch((error) => {

                });

                history.replace('/home')
            })
            .catch((error) => {
                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }


    const signInWithGoogle = (location, history) => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
            .then((result) => {

                // const user = result.user;
                // saveUser(user.email, user.displayName, "PUT")
                setAuthError("");
                const destination = location.state?.from || '/dashboard';
                history.replace(destination);
            }).catch((error) => {

                setAuthError(error.message);

            })
            .finally(() => setIsLoading(false));

    }

    const loginUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location.state?.from || '/dashboard';
                history.replace(destination);
                setAuthError("");
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));

    }


    // const saveUser = (email, displayName, method) => {
    //     const user = { email, displayName };
    //     fetch('https://localhost/users', {
    //         method: method,
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //         body: JSON.stringify(user)
    //     })
    //         .then()

    // }

    //observe user state
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
                getIdToken(user)
                    .then(idToken => {
                        setToken(idToken)
                    })

            } else {
                setUser({})
            }
            setIsLoading(false);
        });
        return () => unsubscribe;
    }, [auth])


    // useEffect(() => {
    //     fetch(`https://localhost/users/${user.email}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setAdmin(data.admin);
    //         })
    // }, [user.email])

    const logOut = () => {
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            // An error happened.
        })
            .finally(() => setIsLoading(false));
    }

    return {
        user,
        admin,
        registerUser,
        token,
        signInWithGoogle,
        isLoading,
        setIsLoading,
        authError,
        logOut,
        loginUser
    }
}

export default useFirebase;