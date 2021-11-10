import React, { useEffect, useState } from 'react';
import HomeSurvices from './HomeSurvices';

const Services = () => {
    const [services, setServices]=useState([]);
    useEffect(()=>{
        fetch('./fakeData.json')
        .then(res=> res.json())
        .then(data=>setServices(data))
    },[])
    return (
        <div style={{marginTop:'100px'}} className="container ">
            <div className="row ms-5">
            {
                services.map(service=> <HomeSurvices service={service} ></HomeSurvices> )
            }
        </div>
        </div>
    );
};

export default Services;