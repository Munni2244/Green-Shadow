import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import HomeProducts from './HomeProducts';

const Products = () => {
    const {loading}=useAuth();
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('https://damp-eyrie-28424.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[products])

    if(loading){
        return(
            <div class="d-flex justify-content-center mt-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }
    return (
        <div style={{marginTop:'100px'}} className="container text-center ">
             <h1>OuR <span style={{color:'#d0936a'}}>ProDuctS</span></h1>
            <div className="row ">
               
            {
                products?.slice(0,6).map(service=> <HomeProducts service={service} key={service._id} ></HomeProducts> )
            }
        </div>
        </div>
    );
};

export default Products;