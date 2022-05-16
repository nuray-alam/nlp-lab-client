import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import People from '../People/People';
import Footer from '../../Shared/Footer/Footer';
const Peoples = () => {

    const [peoples, setPeoples] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    //getting all people
    useEffect(() => {
        fetch('http://localhost:5000/peoples')
            .then(res => res.json())
            .then(data => {
                // setPeoples(data.slice(0, 6))
                setPeoples(data)

                setIsLoading(false);
            })
    }, [])

    if (isLoading) {
        return <div className="d-flex w-75 mx-auto my-5 justify-content-center">
            <div className="me-3">
                <Spinner animation="border" variant="primary" />
            </div>
            <div><h4>Loading...</h4></div>
        </div>
    }

    return (
        <div>
            <Navigation></Navigation>
            <div className="bikes-section mb-5 mt-3 w-75 mx-auto">
                <h5 className="text-center text-dark mb-5">All Peoples</h5>
                <Row xs={1} md={2} lg={2} xl={3} className="g-3">
                    {
                        peoples.map(people => <People key={people._id} people={people}></People>)
                    }
                </Row>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Peoples;