import React from 'react';
import img from '../../../images/client-3_2261e4cf-6fb3-4393-9ce7-402218c4ce88_250x2502.png';
import img1 from '../../../images/client-4_526a639c-4cd2-4a26-ac9f-595f12541c6e_250x250.png';
import img2 from '../../../images/client-1_15806fbd-cd4b-479b-b6b7-49289cebddd8_250x250.png';
import img3 from '../../../images/client-5_fdc8a6da-7025-42db-bb62-fa4a2bcf7f63_250x250.png';
import img4 from '../../../images/client-2_f64d1b8c-fc0d-4e92-9217-90b6ec4dba39_250x250.png';

const BannerBeauty = () => {
    return (
        <div style={{backgroundColor:'#faf3ed', height:'300px', marginTop:'100px'}} >
            <div className='row ms-5'>
                <div className='col-12 col-lg-3 col-md-3 p-5 mt-5'>
               <img width="120px" src={img} alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-2 py-5 mt-5'>
               <img width="120px" src={img1} alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-2 py-5 mt-5'>
               <img width="120px" src={img2} alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-2 py-5 mt-5'>
               <img width="120px" src={img3} alt="" />
                </div>
                <div className='col-12 col-lg-2 col-md-2 py-5 mt-5'>
               <img width="120px" src={img4} alt="" />
                </div>
            </div>
        </div>
    );
};

export default BannerBeauty;