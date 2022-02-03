import React from 'react';
import './Blog.css'
const Blog = () => {
    return (
        <div>

<section className="container my-5">
          <h1 className="text-center choose-head">News & Blogs</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
        


          <div className="row row-cols-1 row-cols-lg-4 g-2">
            <div className="col">
              <div className="card h-100">
                <img src="https://i.ibb.co/Qk2xr67/baby1.png" className="card-img-top  mx-auto" alt="..."/>
                <div className="card-body">
                 
                  <h6 className="card-text blog-date">November 5, 2021</h6>
                  <h6 className='blog-title'>Cild care for Winter Season</h6>
                  <p className='blog-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    <div className="bloggs ">
                    
                     <h6 className="my-2 blog-doc">Dr. Saifur Rahman</h6>
                     <button className='blog-button ms-2'>Read More</button>
                    </div>
                </div>
              
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://i.ibb.co/gdFVRdK/doctor1.png" className="card-img-top mx-auto" alt="..."/>
                <div className="card-body">
                
                <h6 className="card-text blog-date">November 5, 2021</h6>
                  <h6 className='blog-title'>Telemedicine Service</h6>
                  <p className='blog-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    <div className="bloggs ">
                    
                     <h6 className="my-2 blog-doc">Dr. Saifur Rahman</h6>
                     <button className='blog-button ms-2'>Read More</button>
                    </div>
                </div>
               
              </div>
            </div>
            <div className="col">
              <div className="card h-100">
                <img src="https://i.ibb.co/4SSGfKn/patient-1.png" className="card-img-top   mx-auto " alt="..."/>
                <div className="card-body">
                  
                <h6 className="card-text blog-date">November 5, 2021</h6>
                  <h6 className='blog-title'>Pregnancy Complications</h6>
                  <p className='blog-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    <div className="bloggs ">
                    
                     <h6 className="my-2 blog-doc">Dr. Saifur Rahman</h6>
                     <button className='blog-button ms-2'>Read More</button>
                    </div>
                </div>
              
              </div>
            </div>

            <div className="col">
              <div className="card h-100">
                <img src="https://i.ibb.co/54mBzV4/patient-2.png" className="card-img-top  mx-auto" alt="..."/>
                <div className="card-body">
                
                <h6 className="card-text blog-date">November 5, 2021</h6>
                  <h6 className='blog-title'>Backpain Treatment</h6>
                  <p className='blog-para'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been</p>
                    <div className="bloggs ">
                    
                     <h6 className="my-2 blog-doc">Dr. Saifur Rahman</h6>
                     <button className='blog-button ms-2'>Read More</button>
                    </div>
                </div>
               
              </div>
            </div>
          </div>
        </section>
            
        </div>
    );
};

export default Blog;