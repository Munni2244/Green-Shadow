import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const ManageProducts = () => {
    const [manageProduct, setManageProduct]=useState([]);

    useEffect(()=>{
        fetch('https://damp-eyrie-28424.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>setManageProduct(data))
    },[manageProduct])

    //delete products
    const CancelBooking=(id)=>{
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
                fetch(`https://damp-eyrie-28424.herokuapp.com/products/${id}`,{
                        method:'DELETE'
                    })
                    .then(res=> res.json())
                    .then(data =>{
                        if(data.acknowledged){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                           
                        }
                        else{
                            Swal.fire(
                                'Delete Cancel'
                              )
                            
                        }
             })
            }
          })
        
    }
    return (
        <div>
         <div style={{marginTop:'60px'}} className="container text-center ">
     <h1>Manage <span style={{color:'rgb(250, 117, 139)'}}>ProDuctS</span></h1>
    <div className="row ms-5">
       
    {
        manageProduct?.map(product=> (
            <div className="col-12 col-lg-4 col-md-6">
            <div style={{width:'280px', height:'380px', marginTop:'40px'}} className=" text-center shadow services">
                <img width="100%" height="230px" src={product.img} alt="" />
                <h4 style={{color:'black', fontWeight:'bold'}}>{product.name}</h4>
                <p className="fw-bold">${product.price}</p>
              <button onClick={()=>CancelBooking(product._id)}  className="allBtn rounded-pill text-light"> Remove Product </button>
             
            </div>
        </div>
        ))
    }
</div>
</div>
    </div>
    );
};

export default ManageProducts;