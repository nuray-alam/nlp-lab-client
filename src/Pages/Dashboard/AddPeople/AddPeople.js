import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';


const AddPeople = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
let history = useHistory();

      // onSubmit event handler
      const onSubmit = data => {
        const newPeople = data;
        console.log(newPeople);
        // positing the data to the server and db
        fetch('http://localhost:5000/addPeople', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newPeople)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert("People Added Successfully");
                    reset();
                    history.push('/dashboard');
                }
            })
    };
    return (
        <div className=" w-75 mx-auto my-5 border p-5">
            <h2 className="$text-dark text-center fw-bolder">Add a New People</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="d-flex flex-column">

                <label className="$text-dark fw-bold fs-5">Name:</label>
                <input className="mb-3" {...register("name", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                


                <label className="$text-dark fw-bold fs-5">Position:</label>
                <input className="mb-3" type="text" {...register("position", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}

                <label className="$text-dark fw-bold fs-5">Image Url:</label>
                <input className="mb-3" {...register("imgUrl", { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}


                <label className="$text-dark fw-bold fs-5">Facebook Profile Link:</label>
                <input className="mb-3"  {...register("fbLink")} />


                <label className="$text-dark fw-bold fs-5">LinkedIn Profile Link:</label>
                <input className="mb-3"  {...register("linkedInLink")} />


                <label className="$text-dark fw-bold fs-5">Twitter Profile Link:</label>
                <input className="mb-3"  {...register("twitterLink")} />

                <button className="mx-auto btn btn-dark " type="submit"  >Submit</button>
            </form>
        </div >
    );
};

export default AddPeople;