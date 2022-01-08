import React from 'react';
import { Link } from 'react-router-dom';

const ExploreProducts = ({product}) => {
    const {name, img, des, price, _id}=product;

    return (
        <div className="col-12 col-lg-3 col-md-3 ">

        <div style={{ width: '200px', height: '400px', marginTop: '40px' }} className=" text-center  services">
            <div className='services-img'>
                <img width="90%" height="250px" src={img} alt="" />
                <Link to={`/placeOrder/${_id}`} className='cart-link'> 
            <h3><i className="fas fa-cart-plus"></i></h3>
           </Link>
            </div>               
             <h6 style={{ color: '#d0936a' }}>{name}</h6>
            <p className="fw-bold">${price}</p>
           
        </div>
    </div>
    );
};

export default ExploreProducts;