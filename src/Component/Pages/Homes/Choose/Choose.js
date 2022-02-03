import React from 'react';
import './Choose.css'
const Choose = () => {
    return (
        <div>
           
            <div className='container'>
            <h1 className='choose-head'>
            Why Choose TM?
            </h1>
            <p className='choose-lorem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
                <div className='row mt-5'>
                  <div className='col-lg-3'>
                  <div className="text-black chooses mb-3" style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  <i className="fas fa-hand-pointer"></i>
    <h5 className="card-title">Easy to Use</h5>
    <p className="card-text choose-menu">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard.</p>
  </div>
</div>

                  </div>
                  <div className='col-lg-3'>
                  <div className="text-black chooses mb-3" style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  <i className="far fa-clock"></i>
    <h5 className="card-title">24 / 7 Service </h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
  </div>
</div>

                  </div>

                  {/* 3rd  */}
                  <div className='col-lg-3'>
                  <div className=" text-black chooses mb-3" style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  <i className="far fa-user"></i>
    <h5 className="card-title">Expert Doctors </h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
  </div>
</div>

                  </div>

                  {/* end  */}
                  <div className='col-lg-3'>
                  <div className=" text-black  mb-3 chooses" style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  <i className="far fa-check-circle"></i>
    <h5 className="card-title">Trusted </h5>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
  </div>
</div>

                  </div>
                
                </div>
            </div>
        </div>
    );
};

export default Choose;