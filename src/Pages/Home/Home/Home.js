import React from 'react';
import Banner from '../Banner/Banner';
import BannerInfo from '../BannerInfo/BannerInfo';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Review/Reviews';
import Products from '../Services/Products';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
           <Products></Products>
           <BannerInfo/>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;