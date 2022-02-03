import React from 'react';
import './Patient.css'
const Patient = () => {
   
    return (
        <div>

<div className='container'>
                <h1 className='mt-5'>About Us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

                <div className='row mt-5 '>
                   <div className='col-lg-6'>
                       {/* <div className='values '> */}
                          <div className="about">
                          <img className='' src="https://i.ibb.co/fD42vLn/man.png" alt="" srcset="" />
                          </div>
                       {/* </div> */}
                   </div>
                   <div className='col-lg-6'>
                     <h6 className='patient-us'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. </h6>

                     <h3 className='names'>Foisal Morshed</h3>
                     <h5 className='versitys'>Student, CSE, University of Royal</h5>

                  
                    
                     
                     {/* <button className='read'>Read More</button> */}
                   </div>
                </div>
            </div>
            
            
        </div>
    );
};

export default Patient;