import React, { useEffect, useState } from 'react';
import HomeProducts from './HomeProducts';

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div style={{marginTop:'100px'}} className="container text-center ">
             <h1>OuR <span style={{color:'rgb(250, 117, 139)'}}>ProDuctS</span></h1>
            <div className="row ms-5">
               
            {
                products.slice(0,6).map(service=> <HomeProducts service={service} key={service.id} ></HomeProducts> )
            }
        </div>
        </div>
    );
};

export default Products;