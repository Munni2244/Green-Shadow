import React from 'react';
import Banner from '../Banner/Banner';
import BannerBeauty from '../Banner/BannerBeauty';
import BannerInfo from '../BannerInfo/BannerInfo';
import Footer from '../Footer/Footer';
import MakeupCategory from '../MakeupCategory/MakeupCategory';
import MakeupCollection from '../MakeupCollection/MakeupCollection';
import HeaderNavigation from '../Navigation/HeaderNavigation';
import Navigation from '../Navigation/Navigation';
import Reviews from '../Review/Reviews';
import Products from '../Services/Products';

const Home = () => {
    return (
        <div>
            <Navigation/>
            <Banner></Banner>
            <MakeupCategory></MakeupCategory>
            <MakeupCollection></MakeupCollection>
            <BannerBeauty></BannerBeauty>

           <Products></Products>
           <BannerInfo/>
           <Reviews></Reviews>
           <Footer></Footer>
        </div>
    );
};

export default Home;