import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import HeaderNavigation from './HeaderNavigation';
import './Navigation.css';

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
<div>
  <HeaderNavigation></HeaderNavigation>
<nav className="navbar navbar-expand-lg navbar-light navigation-bar">
      <div className="container-fluid">
        <Link to="/home" className="navbar-brand text-success fw-bold" href="#">GrEEn <span style={{ color: '#d0936a' }}>SHaDoW</span></Link>
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
             

              {user?.email && <li className="nav-item mt-2">
                <Link to="/dashboard" className="nav-link active ">DashBoard</Link>
              </li>}
              <span className="ms-3 mt-3 fw-bold fs-5  mt-1">{user?.displayName}</span>

              {user?.email ? <button onClick={logOut} className="btn border  mt-2 ms-2" style={{ height: '40px', borderRadius:'8px' }} type="submit">LogOut</button> :
                <Link to="/login"> <button className="btn border" type="submit">Login</button></Link>}
              <Link to="/register"> <button className="btn border" type="submit">Register</button></Link>
            </ul>

          </form>
        </div>
      </div>
    </nav>
</div>
  );
};

export default Navigation;