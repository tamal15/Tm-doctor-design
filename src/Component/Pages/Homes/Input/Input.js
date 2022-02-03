import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import user from '../../../image/doctr.PNG'

import './Input.css'
import TestiMonialsDetails from './TestiMonialsDetails';
const Input = () => {

    const testiMonials = [
        {
          
            img: 'https://i.ibb.co/Jj1S4zm/1.png'
        },
        {
           
            img: 'https://i.ibb.co/gF2xYHx/2.png'
        },
        {
          
            img: 'https://i.ibb.co/Qk2xr67/baby1.png'
        },
        {

            img: 'https://i.ibb.co/gdFVRdK/doctor1.png'
        },
    ]
     //Owl Carousel Settings
     const options = {
        loop: true,
        center: true,
        items: 3,
        margin: 0,
        autoplay: true,
        dots: true,
        autoplayTimeout: 8500,
        smartSpeed: 450,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    };
    return (
        <div className='calo'>

            {/* start  */}

            <div className='container'>
                <h1 className='choose-head'>What Are The Patients Saying About us</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>

                <div className='row mt-5 '>
                   <div className='col-lg-6'>
                       {/* <div className='values '> */}
                          <div className="patient-values">
                          <img className='' src="https://i.ibb.co/fD42vLn/man.png" alt="" srcset="" />
                          </div>
                       {/* </div> */}
                   </div>
                   <div className='col-lg-6'>
                     <h6 className='input-us'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages. </h6>

                     <h3 className='input-names'>Foisal Morshed</h3>
                     <h5 className='input-versitys'>Student, CSE, University of Royal</h5>


                   {/* start  */}

                   <div className='row'>
                <div className='col-md-12'>
                <OwlCarousel id="customer-testimonoals" className="owl-carousel owl-theme" {...options}>

                {
                                testiMonials.length === 0 ?
                                    <div class="item">
                                        <div class="shadow-effect">
                                            <img class="img-circle" src={user} />

                                           
                                        </div>
                                       
                                    </div> :
                                    testiMonials.map(testiMonialDetail => {
                                        return (
                                            <TestiMonialsDetails testiMonialDetail={testiMonialDetail} key={testiMonialDetail._key} />

                                        )
                                    })
                            }
                    </OwlCarousel>

                </div>
            </div>


                   {/* end  */}
                    
                     
                   
                   </div>
                </div>
            </div>
            

           
            
        </div>
    );
};

export default Input;