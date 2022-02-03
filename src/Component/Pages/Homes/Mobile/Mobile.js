import React from 'react';
import './Mobile.css'
const Mobile = () => {
    return (
        <div>
           
            <div className='container'>
            <h1 className='choose-head'>Only Three Easy Steps to Follow</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                <div className='row button-top mt-5'>
                    <div className='col-lg-6'>
                       <div className='mobiles'>
                           <img src="https://i.ibb.co/KbY5MKn/mobile.png" alt="" srcset="" />
                       </div>
                    </div>
                    <div className='col-lg-6'>
                      <div className='searches'>
                          <h3 className='number'>1</h3>
                         <div>
                         <h3 className='me-4 search-firsts'>Search the Doctor for Appointment</h3>
                          <h6 className='ms-3 search-second'>Search your doctor by specialty or doctor name. Choose the right doctor for you by viewing their profile, rating & experience.</h6>
                         </div>
                         
                      </div>

                      {/* 2nd  */}
                      <div className='searches'>
                          <h3 className='number'>2</h3>
                         <div>
                         <h3 className=' search-firsts'>Get Doctor Consultation through Video Calling</h3>
                          <h6 className='ms-4 search-second'>Once you pay the required doctor fee, you will be joined to the queue. Doctor will make a secured video call to do the consultation.</h6>
                         </div>
                         
                      </div>

                      {/* 3rd  */}

                      <div className='searches'>
                          <h3 className='number'>3</h3>
                         <div>
                         <h3 className='me-4 search-firsts'>Get Your Prescription</h3>
                          <h6 className='ms-4 search-second'>Once the video consultation is complete, the doctor will upload the prescription. You can download the prescription immediately or later.
.</h6>
                         </div>
                         
                      </div>


                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Mobile;