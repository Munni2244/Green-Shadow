import React, { useEffect, useState } from 'react';
import Swal from 'sweetalert2';

const ManageAllOrders = () => {
    const [allOrder, setAllOrder] = useState([]);
    useEffect(() => {
        fetch('https://damp-eyrie-28424.herokuapp.com/allOrders')
            .then(res => res.json())
            .then(data => setAllOrder(data))
    }, [allOrder])

    ////cancel booking
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
                fetch(`https://damp-eyrie-28424.herokuapp.com/orders/${id}`, {
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
    // 

    ///update Booking
    const ApproveBooking = (id) => {
        fetch(`https://damp-eyrie-28424.herokuapp.com/updateOrders/${id}`, {
            method: "PUT",
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div >
            <div className="m-3">
                <h1 className="text-center text-danger mb-4">All Orders</h1>
                <div className="table-responsive">
                    <table className="table table-dark table-hover">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Service</th>
                                <th scope="col">Reg Date:</th>
                                <th scope="col">Address</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Status</th>
                            </tr>
                        </thead>
                        {

                            allOrder?.map(orders =>


                                <tbody key={orders._id}>
                                    <tr>
                                        <th scope="row">#</th>
                                        <td>{orders.name}</td>
                                        <td>{orders.email}</td>
                                        <td>{orders.title}</td>
                                        <td>{orders.date}</td>
                                        <td>{orders.address}</td>
                                        <td>{orders.price}</td>
                                        <td>{orders.status} <button onClick={() => ApproveBooking(orders._id)} className="btn btn-success">Approve</button> <button onClick={() => CancelBooking(orders._id)} className="btn btn-danger ms-1">Cancel</button></td>

                                    </tr>
                                </tbody>

                            )
                        }
                    </table>
                </div>

            </div>
        </div>
    );


};

export default ManageAllOrders;