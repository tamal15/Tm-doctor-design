import React from 'react';

const Question = () => {
    return (
        <div>

<section class="container">
          <h1 class="text-center  choose-head">Frequently Asked  <span class="client-color">Questions</span></h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard</p>
          <div class="row mx-auto d-flex justify-content-between">
            <div class="col-lg-5 d-flex justify-content-center align-items-center">
              <img src="https://i.ibb.co/G7MVhVv/question.png" class="img-fluid" alt=""/>
            </div>
            <div class="col-lg-6">

              <div class="accordion" id="accordionExample">
                <div class="border border-info item">
                  <h2 class="accordion-header" id="headingOne">
                    <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      <h6>What is TM?</h6>
                    </button>
                  </h2>
                  <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Safety First! Always obey the rules of the road. Obey all traffic
                        signals, signs, and laws. Get in the mindset of “driving” your
                        bike—not just.</p>
                    </div>
                  </div>
                </div>
                <br/>
                
                <div class="border border-info item">
                  <h2 class="accordion-header" id="headingTwo">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      <h6>What do you treat?</h6>
                    </button>
                  </h2>
                  <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>But if you can see marks on the shell or measure any foam crush at all, replace the helmetYou can also crack the helmet foam or damage it by dropping the helmet on a hard surface</p>
                    </div>
                  </div>
                </div>
                <br/>
                <div class="border border-info item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <h6>How does it work?</h6>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                     <p>Before going on a long ride, take your bike around the block and make sure it is safe to ride. * First of all, your tires are going to be deflated</p>
                    </div>
                  </div>
                </div>
                <br/>
                <div class="border border-info item">
                  <h2 class="accordion-header" id="headingFour">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                       <h6>Who provides consultation on TM?</h6>
                    </button>
                  </h2>
                  <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                      <p>Ride on the right in the same direction as other vehicles. Go with the flow – not against it. Obey All Traffic Laws. A bicycle is a vehicle and you're a driver.</p>
                    </div>
                  </div>
                </div>
                <br/>
                <div class="border border-info item">
                  <h2 class="accordion-header" id="headingThree">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      <h6>Are the registered Doctors varified?</h6>
                    </button>
                  </h2>
                  <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                     <p>Before going on a long ride, take your bike around the block and make sure it is safe to ride. * First of all, your tires are going to be deflated</p>
                    </div>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
        </section>

            
        </div>
    );
};

export default Question;