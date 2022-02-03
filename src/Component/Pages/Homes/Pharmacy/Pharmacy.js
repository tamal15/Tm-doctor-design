import React from 'react';
import './Pharmacy.css'
const Pharmacy = () => {
    return (
        <div>
          
            <div className='container'>
            <h1 className='choose-head'>Order Medicine Online from Popular Pharmacy Nearby </h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard </p>
                <div className='row'>
                <div className='col-lg-4'>
                  <div className="card text-black  mb-3 " style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  
    <h5 className="card-title medicin-head">Shahbag Medicine Corner </h5>
    <div className='medicins'>
    <i class="fas fa-map-marker-alt"></i>
    <div className='ms-2 medicin-text'>
    Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
    </div>
    </div>
  </div>
</div>

                  </div>


                  {/* 2nd  */}
                  <div className='col-lg-4'>
                  <div className="card text-black  mb-3 " style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  
    <h5 className="card-title medicin-head">Shahbag Medicine Corner  </h5>
    <div className='medicins'>
    <i class="fas fa-map-marker-alt"></i>
    <div className='ms-2 medicin-text'>
    Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
    </div>
    </div>
  </div>
</div>

                  </div>

                  {/* 3rd  */}
                  <div className='col-lg-4'>
                  <div className="card text-black  mb-3 " style={{"max-width": "20rem"}}>
  
  <div className="card-body">
  
    <h5 className="card-title medicin-head">Shahbag Medicine Corner  </h5>
    <div className='medicins'>
    <i class="fas fa-map-marker-alt"></i>
    <div className='ms-2 medicin-text'>
    Bangabandhu Sheikh Mojib Medical University Gate No-03, Shahbag, Dhaka- 1000, Bangladesh
    </div>
    </div>
  </div>
</div>

                  </div>

                  {/* end  */}
                </div>
                <button className='views-all'>View All</button>
            </div>
        </div>
    );
};

export default Pharmacy;