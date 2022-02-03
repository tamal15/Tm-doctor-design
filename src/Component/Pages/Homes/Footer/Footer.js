import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'
const Footer = () => {
    return (
        <div>

<div className="footer-container">
            <div className="row">
                <div className="col-lg-3">
                    <div className="left-container text-start">
                        <div className='tm-logo'>
                            <img src="https://i.ibb.co/vcZhcY0/logo.png" alt="" srcset="" />
                            <h3 className='ms-2 company'>TM</h3>
                        </div>
                         {/* <div className="icons-container d-flex text-center">
                            <div className="icons">
                            <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="icons">
                            <i class="fab fa-youtube"></i>
                            </div>
                            <div className="icons">
                            <i class="fab fa-twitter-square"></i>
                            </div>
                            <div className="icons">
                            <i class="fab fa-instagram-square"></i>
                            </div>
                        
                        </div> */}
                        <p>Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et.Lorem ipsum is dolor sit amet, csectetur adipiscing elit, dolore smod tempor incididunt ut labore et..</p>
                            <p>
                               <h4>Contact-us</h4>
                               <div className='contact-road'>
                               <i class="fas fa-map-marker-alt"></i>
                              
                               <div className='ms-2'>
                               House-20, Road-27, Block-A, Banani, Dhaka
                               </div>
                               </div>
                               <div className='contact-road'>
                               <i class="fas fa-phone-square-alt"></i>
                              
                               <div className='ms-2'>
                               +8801234567890, +88058269458
                               </div>
                               </div>
                               <div className='contact-road'>
                               <i className="fas fa-envelope"></i>
                              
                               <div className='ms-2'>
                               tmbd@mail.com
                               </div>
                               </div>
                               <div className='contact-road'>
                               <i class="fas fa-comment-dots"></i>
                              
                               <div className='ms-2'>
                               tmbd.com
                               </div>
                               </div>
                            </p>
                    </div>
                  
                </div>
              
                <div className="col-lg-3">
            <div className="menu-container">
            <ul>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Doctor</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Services</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Pharmacy Owner</li>
           </Link>
        </div>
        
           </ul>

           <h2 className='me-5 social'>Social Links</h2>

              <div className="icons-container d-flex text-center ms-2">
                            <div className="links-icons">
                            <i class="fab fa-facebook-square"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-youtube"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-linkedin"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-twitter-square"></i>
                            </div>
                            <div className="links-icons">
                            <i class="fab fa-instagram-square"></i>
                            </div>
                        
                        </div> 
       </div>

       </div>

       {/* 3rd column  */}
       <div className="col-lg-3">
            <div className="menu-container">
            <ul>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>About US</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Blog</li>
           </Link>
        </div>
            <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Contact-us</li>
           </Link>
        </div>
        
           </ul>

           <h5 className='download'>Download Our App</h5>
       </div>

       </div>

       {/* end  */}
       <div className="col-lg-3">
       <div className="right-footer-container">
       <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Terms & Conditions</li>
           </Link>
        </div>
       <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>Privacy Policy</li>
           </Link>
        </div>
       <div className='contact-road'>
            <p>  <i class="fas fa-angle-double-right"></i></p> 
                              <Link className="ms-2" to="/home" className="footer-menubar">
           <li>FAQ</li>
           </Link>
        </div>

          
          <div className='download-apps'>
          <img src="https://i.ibb.co/5vsfCnc/googleplay.png" alt="" srcset="" />
                         <img className='ms-3' src="https://i.ibb.co/5vsfCnc/googleplay.png" alt="" srcset="" />
          </div>
       </div>
       </div>
       <h5>Copyright TM 2021. All rights reserved. Created by Golden Infotech.</h5>

            </div>
        </div>

      
            
        </div>
    );
};

export default Footer;