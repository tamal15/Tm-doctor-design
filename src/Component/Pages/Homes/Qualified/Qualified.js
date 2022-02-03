import React from 'react';
import './Qualified.css'
const Qualified = () => {
    return (
        <div>
        <div className='container'>
            <h1 className='choose-head'>Are You a Qualified & Expert Doctor?</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

            <div className='row mt-5'>
               <div className='col-lg-6'>
                   <h3 className='part'>Be a Part of TM</h3>
               <h6 className='part-us'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h6>
                 <button className='read'>Sign up Now</button>
                 
               </div>
               <div className='col-lg-6'>
               <div className='valueing '>
                      <div className="qualified">
                      <img className='rounded-circle' src="https://i.ibb.co/wcG5ZzJ/i-Stock-1248327223-telemedicine-scaled-1.png" alt="" srcset="" />
                      </div>
                   </div>
               
               </div>
            </div>
        </div>
        
    </div>
    );
};

export default Qualified;