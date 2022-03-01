import React from 'react';
import image6 from './images/image6.jpg'
import image7 from './images/image7.jpg'
import image8 from './images/image8.jpg'


function Services() {
    return (
        <section className="section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12  mb-4 text-center">
                        <h3>Our Services</h3>
                        <div className="underline mx-auto"></div>
                    </div>

                    <div className='section-items'>
                        <div>
                            <img src={image6} alt="Services" />
                            <div className="card-body">
                                <h6>Avoid Brokers</h6>                                
                                <p>
                                    We directly connect you to verified owners to save brokerage.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={image7} alt="Services" />
                            <div className="card-body">
                                <h6>Select Without Visit</h6>                               
                                <p>
                                    Easy listing process. Extensive Information makes it easy.
                                </p>
                            </div>
                        </div>

                        <div>
                            <img src={image8} alt="Services" />
                            <div className="card-body">
                                <h6>We Provide</h6>                        
                                <p>
                                    Owing to our outstanding customer service
                                    we have maintained the 85% customer retention rate.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Services;