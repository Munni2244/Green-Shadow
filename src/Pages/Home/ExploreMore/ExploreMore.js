import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import ExploreProducts from './ExploreProducts';

const ExploreMore = () => {
    const [allProducts, setAllProducts]=useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res=> res.json())
        .then(data=>setAllProducts(data))
    },[])
    
    return (
       <div>
           <Navigation/>
            <div style={{marginTop:'60px'}} className="container text-center ">
        <h1>More <span style={{color:'rgb(250, 117, 139)'}}>ProDuctS</span></h1>
       <div className="row ms-5">
          
       {
           allProducts?.map(product=> <ExploreProducts product={product} key={product.id} ></ExploreProducts> )
       }
   </div>
   </div>
       </div>
    );
};

export default ExploreMore;