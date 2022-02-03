import React from 'react';
import './About.css'
const About = () => {
    return (
        <div>
            <div className='container'>
                <h1 className='choose-head'>About Us</h1>
                <p className='about-chating'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

                <div className='row mt-5'>
                   <div className='col-lg-6'>
                       <div className=' '>
                       {/* values */}
                       {/* about */}
                          <div className="abouts">
                          <img className='' src="https://i.ibb.co/R4wV2hS/8.png" alt="" srcset="" />
                          </div>
                       </div>
                   </div>
                   <div className='col-lg-6'>
                     <h6 className='parts-us'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </h6>
                     <button className='read'>Read More</button>
                   </div>
                </div>
            </div>
            
        </div>
    );
};

export default About;