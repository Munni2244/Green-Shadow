import React from 'react';
import AddProduct from '../AddProduct/AddProduct';
import AddReview from '../Addreview/AddReview';

const DashBoardHome = () => {
    return (
        <div>
            <h1>This Is DashBoard home</h1>
            <AddProduct></AddProduct>
            <AddReview></AddReview>
        </div>
    );
};

export default DashBoardHome;