import React from 'react';
import './HomeProducts.css';

const HomeProducts = ({ service }) => {
    const {name, img, price, des} = service;
    
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <div style={{width:'300px', height:'490px', marginTop:'40px', borderRadius:'20px'}} className=" text-center shadow services">
                <img width="100%" height="230px" src={service.img} alt="" />
                <h4 style={{color:'rgb(250, 117, 139)'}}>{service.name}</h4>
                <p className="text-secondary">{des}</p>
                <p className="fw-bold">${price}</p>
                <button style={{width:'100px'}} className="allBtn rounded-pill text-light">Order Now</button>
            </div>
        </div>
    );
};

export default HomeProducts;