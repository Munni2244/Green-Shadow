import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation';
import Swal from 'sweetalert2';
import './OrderPlace.css'
import Footer from '../Home/Footer/Footer';


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
                <div style={{ marginTop: '60px', }} className=" row  ">
                    <div style={{ height: '500px' }} className="col-12 col-lg-5 col-md-5">
                        <img width="100%" height="100%" className="" src={order.img} alt="" />
                    </div>

                    <div className="col-12 col-lg-7 col-md-7 ">

                        <div className=" ">
                            <div className=" text-center formStyle ">
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
                <div>
                    <h3 style={{color:'#d0936a'}}>{order.name}</h3>
                    <p>{order.des}</p>
                    <h3>${order.price}</h3>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default OrderPlace;