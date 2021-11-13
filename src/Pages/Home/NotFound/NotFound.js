import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
const NotFound = () => {
    return (
        <div className="notFound text-center">
           <Link to="/home"> <button className="btn btn-danger mt-5"> Go Back Home</button></Link>
        </div>
    );
};

export default NotFound;