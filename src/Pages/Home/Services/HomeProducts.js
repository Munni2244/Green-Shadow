import React from 'react';
import { Link } from 'react-router-dom';
import './HomeProducts.css';

const HomeProducts = ({ service }) => {
    const {name, img, price,_id} = service;
    
    return (
        <div className="col-12 col-lg-4 col-md-6 ">
          
            <div style={{width:'280px', height:'400px', marginTop:'40px'}} className=" text-center shadow services">
                <img width="100%" height="250px" src={img} alt="" />
                <h4 style={{color:'#d0936a', fontWeight:'bold'}}>{name}</h4>
                <p className="fw-bold">${price}</p>
               <Link to={`/placeOrder/${_id}`}> <button style={{width:'60%'}} className="allBtn rounded-pill text-light">Order Now</button></Link>
            </div>
        </div>
    );
};

export default HomeProducts;