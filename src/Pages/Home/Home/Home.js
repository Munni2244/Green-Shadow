import React from 'react';
import Banner from '../Banner/Banner';
import BannerInfo from '../BannerInfo/BannerInfo';
import Footer from '../Footer/Footer';
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
           <Footer></Footer>
        </div>
    );
};

export default Home;