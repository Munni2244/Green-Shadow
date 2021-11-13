import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const AddReview = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://localhost:4000/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Review Successfully!'
                    )

                }

                console.log(data);
            })

    };
    return (
        <div>
        <div className="row">
          <div className="col">
               <div className=" d-flex justify-content-center mt-5">
                   <div className=" text-center formStyle py-5">
                       <h1>Add Your Review</h1>
                       <form onSubmit={handleSubmit(onSubmit)}>
                           <input {...register("name")} placeholder="Your Name" /> <br />
                           <input {...register("des")} placeholder="Review desCription" /> <br />

                           <input type="url" {...register("img")} placeholder="Your Photo" /> <br />

                           <input type="number" {...register("rating",{ required: true, min: 1, max: 5 })} placeholder=" Rating" /> <br />
                           <input type="submit" />

                       </form>

                   </div>
               </div>

           </div>
          </div>
   </div>
    );
};

export default AddReview;