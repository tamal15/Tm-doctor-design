import React from 'react';
import './HealthCare.css'
const HealthCare = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='choose-head'>Our Services</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

                <div className='row mt-5 '>
                   <div className='col-lg-6'>
                       {/* <div className='values '> */}
                          <div className="about">
                          <img className='' src="https://i.ibb.co/HryP7kJ/design.png" alt="" srcset="" />
                          </div>
                       {/* </div> */}
                   </div>
                   <div className='col-lg-6'>
                     <h6 className='healths-us'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. </h6>

                    
                     <button className='read'>Read More</button>

                     <div>
                     <div className='expert mt-3'>
    <i class="fas fa-angle-double-right"></i>
   <h6 className='ms-2'>   General Healthcare</h6>
    </div>
                     </div>
                     <div>
                     <div className='expert mt-3'>
    <i class="fas fa-angle-double-right"></i>
   <h6 className='ms-2'>  Maternal Healthcare</h6>
    </div>
                     </div>
                     <div>
                     <div className='expert mt-3'>
    <i class="fas fa-angle-double-right"></i>
   <h6 className='ms-2'>  Child Healthcare</h6>
    </div>
                     </div>
                     <div>
                     <div className='expert mt-3'>
    <i class="fas fa-angle-double-right"></i>
   <h6 className='ms-2'>  Elder Healthcare</h6>
    </div>
                     </div>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default HealthCare;