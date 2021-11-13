import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import useAuth from '../../../../hooks/useAuth';
import img from '../../../../images/images.jpg';

const MyOrders = () => {
    const { user } = useAuth();
    const [myOrder, setMyOrder] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:4000/orders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrder(data))
    }, [user.email, myOrder])

    //delete data
    const CancelBooking = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'

        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:4000/orders/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.acknowledged) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )

                        }
                        else {
                            Swal.fire(
                                'Delete Cancel'
                            )

                        }
                    })
            }
        })

    }

    return (
        <div className="container ">
            <div className="text-center m-3">
            <h1>My orders</h1>
            </div>
            <div className="row ">

                        {
                    myOrder?.map(order=> ( 
                        
                       <div key={order._id} className="col-12 col-lg-6 col-md-12">
                            <div className="row">
                            <div className="col-12 col-md-6 col-lg-6">
                            <div><img width="100%" height="150px" src={order.img} alt="" /></div>
                        </div>
                        <div className=" col-12 col-md-12 col-lg-6">
                           <div>
                           <span><small>Date: {order.date}</small></span> <br />
                            <span>Products Name:{order.title}</span>  <br />
                            <span><small>Products Price: {order.price}</small></span> <br />
                            <span><small>Email:{order.email}</small></span> <br />
                            <span><small className="text-danger">{order.status}</small></span> <br />
                            <button className="btn btn-danger" onClick={()=>CancelBooking(order._id)}>Cancel</button>
                           </div>
                        </div>
                        </div>
                       </div>
                    ))
                        }
                        
                   
               
            </div>
        </div>
    );
};

export default MyOrders;