import React from 'react';
import './Header.css';
// import '../../../image/bg-1.png'
const Header = () => {
    return (
        <div>
             <div className=' banners'>
                <div className='row container'>
                   <div className='col-lg-6'>
                    <div className=''>
                    <h1 className='heading'> Protect and Take Care of Your Health</h1>
                     <p className='para'>Download Our App and feel free to take your Health Advice from a Specialist.</p>
                     <button className='buttons'>Search for a Service</button>
                     <div className='row picture mt-4 apping'>
                       <div className='col-md-12 ms-5'> 
                       <img src="https://i.ibb.co/5vsfCnc/googleplay.png" alt="" srcset="" />
                         <img className='ms-3' src="https://i.ibb.co/5vsfCnc/googleplay.png" alt="" srcset="" />

                       </div>
                      
                     </div>
                    </div>
                   </div>
                   <div className='col-lg-6'>
                     <div className='health-banner'>
                       
                       
                       <img src="https://i.ibb.co/wcKyGVh/doctr.png" alt="" srcset="" />
                    
                     </div>
                   </div>
                </div>
            </div> 


          
            
        </div>
    );
};

export default Header;