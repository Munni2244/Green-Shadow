import React from 'react';
import img1 from '../../../images/icon-1_c6c38e2f-e460-4f05-a46f-386ad7db417c_medium.png';
import img2 from '../../../images/icon-2_3518e6f1-8365-4512-a519-83ede94f3a3a_medium2.png';

const MakeupCategory = () => {
    return (
        <div>
            <div className='container text-center'>
                <div style={{marginTop:'80px'}} className='row ms-2 '>
                    <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-4 shadow-lg '>
                       <img src={img1} alt="" />
                         <h6 style={{color:'#d0936a'}} className='m-2'>Bridal Makeup</h6>
                         <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                     </div>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-4 shadow-lg'>
                     <img src={img2} alt="" />

                         <h6 style={{color:'#d0936a'}} className='m-2'>Makeup Lessons</h6>
                         <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                     </div>
                    </div>
                    <div className='col-12 col-lg-4 col-md-4 text-center mb-4'>
                     <div style={{backgroundColor:'#fff'}} className='p-4 shadow-lg'>
                     <img src={img1} alt="" />
                         <h6 style={{color:'#d0936a'}} className='m-2'>Special Makeup</h6>
                         <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</small>
                     </div>
                    </div>
                   
                    
                </div>
        </div>
        </div>
    );
};

export default MakeupCategory;