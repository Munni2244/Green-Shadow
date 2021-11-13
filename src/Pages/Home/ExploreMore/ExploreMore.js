import React, { useEffect, useState } from 'react';
import Navigation from '../Navigation/Navigation';
import ExploreProducts from './ExploreProducts';
import './ExploreMore.css'
import Footer from '../Footer/Footer';

const ExploreMore = () => {
    const [allProducts, setAllProducts]=useState([]);
    useEffect(()=>{
        fetch('https://damp-eyrie-28424.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>setAllProducts(data))
    },[allProducts])
    
    return (
       <div >
           <Navigation/>
           <div className="explore text-center text-light d-flex align-items-center justify-content-center">
               <div className=" mt-5">
               <h1 >More <span style={{color:'rgb(250, 117, 139)'}}>ProDuctS</span></h1>

               </div>
           </div>
            <div style={{marginTop:'60px'}} className="container text-center ">
        
       <div className="row ms-5">
          
       {
           allProducts?.map(product=> <ExploreProducts product={product} key={product.id} ></ExploreProducts> )
       }
   </div>
   </div>
   <Footer></Footer>
       </div>
    );
};

export default ExploreMore;