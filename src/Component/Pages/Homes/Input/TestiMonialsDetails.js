import React from 'react';

const TestiMonialsDetails = ({testiMonialDetail}) => {
    const {img} = testiMonialDetail;
    return (
        <div>
            {/* start  */}

            


            {/* end  */}
              <div class="item">
            <div class="shadow-effect">
                <img class="img-circle" src={img} />
                {/* <p>{description}</p> */}
            </div>
            {/* <div class="testimonial-name">
                <h5>{name}</h5>
                <small>{address}</small>
            </div> */}
        </div>
            
        </div>
    );
};

export default TestiMonialsDetails;