import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';


const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        fetch('http://damp-eyrie-28424.herokuapp.com/addProducts', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data?.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Add Product Successfully!'
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
                            <h1>Add A Products</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} placeholder="Product Name" /> <br />
                                <input {...register("des")} placeholder="Product desCription" /> <br />

                                <input type="number" {...register("price")} placeholder="Price" /> <br />

                                <input type="url" {...register("img")} placeholder="Img url" /> <br />
                                <input type="submit" />

                            </form>

                        </div>
                    </div>

                </div>
               </div>
        </div>
    );
};

export default AddProduct;