import React from 'react';
import { Link } from 'react-router-dom';
import './DashBoard.css';

const DashBoard = () => {
    return (
       <div>
           <div className="dashHeader text-end">
               <h1 className="mx-3">DashBoard</h1>
           </div>
            <div style={{marginTop:'-10px'}} className="row">
            <div className="col-12 col-lg-2 col-md-3 text-light ">
                <div className="dashBoard">
                    <ul>
                        <li>
                            <Link  to="/home"> Home</Link>
                        </li>
                    </ul>
                    <h5>__________________________</h5>
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
                   <button style={{backgroundColor:'black'}} className="btn mt-3 text-light"> LogOut</button>
               </ul>
                </div>
            </div>

            <div className="col-12 col-lg-10 col-md-9">
                <div>

                </div>
            </div>
        </div>
       </div>
    );
};

export default DashBoard;