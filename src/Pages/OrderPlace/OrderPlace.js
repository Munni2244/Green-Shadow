import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation';
import Swal from 'sweetalert2';
import './OrderPlace.css'


const OrderPlace = () => {
    const { user } = useAuth();
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const { register, handleSubmit } = useForm();


    // get id booking
    useEffect(() => {
        fetch(`https://damp-eyrie-28424.herokuapp.com/products/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])


    //booking from
    const onSubmit = data => {
        data.status = 'Pending';
        data.title = `${order.name}`;
        data.price = `${order.price}`;
        data.img = `${order.img}`;
        data.name = `${user.displayName}`;
        data.email = `${user.email}`;
        fetch('https://damp-eyrie-28424.herokuapp.com/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Booking Successfully!'
                    )

                }

                console.log(data);
            })
    };

    return (
        <div>
            <Navigation />
            <div className="container ">
                <div style={{ marginTop: '60px' ,  }} className=" row shadow p-3 ">
                    <div style={{height:'420px'}} className="col-12 col-lg-6 col-md-6">
                        <img  width="550px" height="90%"  className="" src={order.img} alt="" />
                    </div>

                    <div className="col-12 col-lg-6 col-md-6 mt-5">
                        <h3>{order.name}</h3>
                        <p>{order.des}</p>
                        <h3>${order.price}</h3>
                    </div>
                </div>

               <div className="row">
               <div className="col-12 col-12">
                    <div className=" d-flex justify-content-center mt-5">
                        <div className=" text-center formStyle py-5">
                            <h1>Register For Services</h1>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} placeholder="Name" defaultValue={user ? user.displayName : ''} disabled /> <br />
                                <input {...register("email")} placeholder="email" defaultValue={user ? user.email : ''} disabled /> <br />

                                <input type="text" {...register("address")} placeholder="Address" /> <br />
                                <input type="date" {...register("date")} placeholder="date" /> <br />

                                <input type="number" {...register("number")} placeholder="Number" /> <br />
                                <input type="submit" />

                            </form>

                        </div>
                    </div>

                </div>
               </div>
            </div>
        </div>
    );
};

export default OrderPlace;