import React from 'react';
import bg1 from '../../../images/mob-slider1_767x.jpg';
import bg2 from '../../../images/mob-slider2_767x.jpg';
import bg3 from '../../../images/mob-slider3_767x.jpg';
import { Link } from 'react-router-dom';

import "./styles.css";


const Banner = () => {
    return (
        <div className="row ">
        <div className="col-12 col-lg-9  ">
                <div className='banner1 d-flex align-items-center justify-content-center'>
                <div className="mb-5 me-5">
                <h1> <span style={{color:'#d0936a'}}>Women Latest </span> and Beautiful Maybelline </h1>
                <h1><span >Cosmetics</span>  and Colors</h1>
               <Link to="/explore"> <button className="allBtn fw-bold text-light" >ExPolore More</button></Link>
                </div>
                </div>
            </div>
    

        <div className="col-12 col-lg-3 ">
           <div className='banner2 '>
           <img className='' src={bg1} alt="" />
            <img className='mt-3' src={bg2} alt="" />
           </div>
        </div>
    </div>
    );
};

export default Banner;