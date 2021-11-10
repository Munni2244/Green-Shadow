import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
    return (

            <nav className="navbar navbar-expand-lg navbar-light navigation-bar">
  <div className="container-fluid">
    <Link className="navbar-brand" href="#">GrEEn <span style={{color:'rgb(250, 117, 139)'}}>SHaDoW</span></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/home" className="nav-link active" aria-current="page" href="#">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-link active" href="#">Contact</Link>
        </li>

      </ul>
      <form className="d-flex">
        <ul  className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link active ">DashBoard</Link>
        </li>
        </ul>
        <button className="btn border" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>
    );
};

export default Navigation;