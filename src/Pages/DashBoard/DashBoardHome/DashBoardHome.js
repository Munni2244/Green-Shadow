import React from 'react';
import useAuth from '../../../hooks/useAuth';


const DashBoardHome = () => {
    const {user}=useAuth();
    return (
        <div className="text-center mt-5 text-success">
            <h1>WelCome To Our DashBoard  <i class="fas fa-handshake text-warning"></i></h1>
            <h1>{user.displayName}</h1>
          
        </div>
    );
};

export default DashBoardHome;