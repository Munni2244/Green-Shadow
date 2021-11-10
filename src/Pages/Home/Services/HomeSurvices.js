import React from 'react';

const HomeSurvices = ({ service }) => {
    const {name, img, price, des} = service;
    console.log(service);
    return (
        <div className="col-12 col-lg-4 col-md-6">
            <div style={{width:'300px', height:'460px', marginTop:'40px'}} className=" text-center">
                <img width="250px" height="200px" src={service.img} alt="" />
                <h4 style={{color:'rgb(250, 117, 139)'}}>{service.name}</h4>
                <p>{des}</p>
                <p>{price}</p>
                <button style={{width:'100px'}} className="allBtn rounded-pill text-light">Order Now</button>
            </div>
        </div>
    );
};

export default HomeSurvices;