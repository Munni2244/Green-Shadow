import React from 'react';
import './Contact.css';
const Contact = () => {
    return (
        <div className="contact row ">
            <div className="mt-5" >
                <div className="text-center m-5">
                    <h1 className="text-light">Contact With Us</h1>
                    <input placeholder="Your Email" className="my-4" style={{padding:'5px', width:'50%',}} type="email" name="" id="" /> <br />
                   <textarea placeholder="text here" style={{ width:'50%',}} name="" id="" cols="50" rows="5"></textarea> <br />
                   <button className="btn btn-secondary">SubMit</button>
                   <h1 style={{color:'rgb(230, 107, 134)'}}>Call Now: 0011233444</h1>
                </div>
            </div>
        </div>
    );
};

export default Contact;