import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css';

const DashBoard = () => {
    return (
        <div className="row ">
            <div className="col-12 col-lg-2 col-md-3 bg-dark  ">
                <div className="dashBoard">
               <ul>
                   <li>
                       <Link to="/allOrders">AllOrders</Link>
                   </li>
                   <li>
                       <Link to="/manageOrder">ManageOrder</Link>
                   </li>
                   <li>
                       <Link to="/addProduct">AddProduct</Link>
                   </li>
                   <li>
                       <Link to="/makeAdmin">MakeAdmin</Link>
                   </li>
                   <li>
                       <Link to="/Pay">Pay</Link>
                   </li>
                   <li>
                       <Link to="/myOrder">MyOrder</Link>
                   </li>
                   <li>
                       <Link to="/review">Review</Link>
                   </li>
                   <button style={{backgroundColor:'pink'}} className="btn mt-3"> LogOut</button>
               </ul>
                </div>
            </div>

            <div className="col-12 col-lg-10 col-md-9">
                <div>

                </div>
            </div>
        </div>
    );
};

export default DashBoard;