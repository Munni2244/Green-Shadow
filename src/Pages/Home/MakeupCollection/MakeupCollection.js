import React from 'react';
import img1 from '../../../images/1_82f02f89-18a0-4fda-9fd7-159576f8221e_1920X.jpg'
import img2 from '../../../images/2_7fab026f-23ce-4553-8bc3-fe3016156b32.jpg'
import img3 from '../../../images/3_c909998e-62a7-412b-8f12-3e0b409253fb.jpg'
import img4 from '../../../images/4_9c1af1b3-1e2b-4e75-8a46-635fe8157cc2.jpg'
const MakeupCollection = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
               <div className='text-center  my-5'>
               <h1 style={{color:'#d0936a'}}>Our Special Collections</h1>
                <p>Lorem ipsum dolor sit amet, consectetuer <br /> adipiscing elit, sed diam nonummy nibh euismod tincidunt tinioun jiom</p>
               </div>
                <div className='col-12 col-lg-6 col-md-6'>
                    <div style={{ marginTop: '70px' }} className='d-flex  '>

                        <img className='rounded-pill' width="200px" src={img1} alt="" />
                        <div className='ms-3 mt-3 text-secondary'>
                            <p>____Cosmetics</p>
                            <h5>Lipstick</h5>
                            <small>Lorem Ipsum is simply dummy text of the printing.</small> <br />
                            <small> Starting Price : $10</small>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 col-md-6'>
                    <div style={{ marginTop: '0px' }} className='d-flex ms-5 '>

                        <img className='rounded-pill' width="200px" src={img2} alt="" />
                        <div className='ms-3 mt-3 text-secondary'>
                            <p>____Cosmetics</p>
                            <h5>Cold Cream</h5>
                            <small>Lorem Ipsum is simply dummy text of the printing.</small> <br />
                            <small> Starting Price : $10</small>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 col-md-6'>
                    <div style={{ marginTop: '70px' }} className='d-flex '>

                        <img className='rounded-pill' width="200px" src={img3} alt="" />
                        <div className='ms-3 mt-3 text-secondary'>
                            <p>____Cosmetics</p>
                            <h5>Nail lacquer</h5>
                            <small>Lorem Ipsum is simply dummy text of the printing.</small> <br />
                            <small> Starting Price : $10</small>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 col-md-6'>
                    <div style={{ marginTop: '0px' }} className='d-flex ms-5 '>

                        <img className='rounded-pill' width="200px" src={img4} alt="" />
                        <div className='ms-3 mt-3 text-secondary'>
                            <p>____Cosmetics</p>
                            <h5>Makeup Brushes</h5>
                            <small>Lorem Ipsum is simply dummy text of the printing.</small> <br />
                            <small> Starting Price : $10</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MakeupCollection;