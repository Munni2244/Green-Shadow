import React from 'react';
import Banner from '../Banner/Banner';
import BannerInfo from '../BannerInfo/BannerInfo';
import Reviews from '../Review/Reviews';
import Products from '../Services/Products';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
           <Products></Products>
           <BannerInfo/>
           <Reviews></Reviews>
        </div>
    );
};

export default Home;