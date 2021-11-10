import React from 'react';
import Banner from '../Banner/Banner';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Review/Reviews';
import Products from '../Services/Products';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
           <Products></Products>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;