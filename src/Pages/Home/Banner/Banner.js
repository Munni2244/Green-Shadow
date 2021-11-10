import React from 'react';
import './Banner.css';
import bg1 from '../../../images/bg4.jpg';
import bg2 from '../../../images/lipsticks.jpg';

const Banner = () => {
    return (
        <div className="row ">
            <div className="col-12 col-lg-9 banner1 d-flex align-items-center justify-content-center ">
                    <div className="mb-5 me-5">
                    <h1> <span style={{color:'rgb(250, 117, 139)'}}>Women Latest </span> and Beautiful Maybelline </h1>
                    <h1><span style={{color:'rgb(250, 117, 139)'}}>Lipstick</span> Shades and Colors</h1>
                    <button className="allBtn" >ExPolore More</button>
                    </div>
                </div>
        

            <div className="col-12 col-lg-3 banner2">
                <img src={bg1} alt="" />
                <img src={bg2} alt="" />
            </div>
        </div>
    );
};

export default Banner;