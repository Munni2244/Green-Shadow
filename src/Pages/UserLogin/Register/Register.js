import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './User.css';

const Register = () => {
    const { register } = useAuth();
    const [registerData, setRegisterData] = useState({});

    const handleField = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        const newValue = { ...registerData };
        newValue[field] = value;
        console.log(newValue);
        setRegisterData(newValue);
    }

    const handleSubmit = (e) => {
        if (registerData.password !== registerData.password2) {
            alert("password did not mached")
        }
        register(registerData.email, registerData.password, registerData.name)
        e.preventDefault();

    }

    return (
        <div  className="row user">
            
            <div style={{marginTop:'100px'}} className="col-12 col-lg-12 text-center">
            <h1 className="mb-4">Please Register <i class="fas fa-sign-in-alt text-warning"></i></h1>
                <form onSubmit={handleSubmit} >
                    <div >
                        <input onBlur={handleField} name="name" type="text"  id="exampleInputName1" placeholder="Name" style={{ width: '35%' }} className="mb-3 p-2 rounded-pill field"/>
                    </div>

                    <div >
                        <input onBlur={handleField} name="email" type="email" style={{ width: '35%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1"  placeholder="Email" />
                    </div>

                    <div >
                        <input onBlur={handleField} name="password" type="password" id="exampleInputPassword1" placeholder="Password" style={{ width: '35%' }} className="mb-3  rounded-pill  p-2 field" />
                    </div>
                    <div>
                        <input onBlur={handleField} name="password2" type="password" style={{ width: '35%' }} className=" p-2 field  rounded-pill mb-3" placeholder="Confirm Password" />
                    </div>


                    <button type="submit" style={{ width: '35%' }} className=" p-2   rounded-pill mb-3">Submit</button>
                    <div>
                    <Link style={{color:'pink'}} to="/login"> Please Login!</Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;