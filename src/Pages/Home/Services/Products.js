import React, { useEffect, useState } from 'react';
import HomeProducts from './HomeProducts';

const Products = () => {
    const [products, setProducts]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=>setProducts(data))
    },[])
    return (
        <div style={{marginTop:'100px'}} className="container ">
            <div className="row ms-5">
            {
                products.map(service=> <HomeProducts service={service} key={service.id} ></HomeProducts> )
            }
        </div>
        </div>
    );
};

export default Products;