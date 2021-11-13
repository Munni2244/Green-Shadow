import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');

    const handleField = (e) => {
    setEmail(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const user={email};
        fetch('http://damp-eyrie-28424.herokuapp.com/makeAdmin',{
         method: "PUT",
         headers:{ "content-type": "application/json"},
         body: JSON.stringify(user)
        })
        .then(res=> res.json())
        .then(data=> console.log(data))
        

    }
    return (
        
            <div  className="row user ">

                <div style={{ marginTop: '100px' }} className="col-12 col-lg-12 text-center">
                    <h1 className="mb-4">Please Add A Admin <i class="fas fa-sign-in-alt text-warning"></i></h1>
                    <form onSubmit={handleSubmit} >

                        <div >
                            <input onBlur={handleField} name="email" type="email" style={{ width: '35%' }} className="mb-3 p-2 rounded-pill  field" id="exampleInputEmail1" placeholder="Email" />
                        </div>

                        <button type="submit" style={{ width: '35%' }} className=" p-2   rounded-pill mb-3">Submit</button>
                        <div>
                        </div>
                    </form>
                </div>
            </div>
   
    );
};

export default MakeAdmin;