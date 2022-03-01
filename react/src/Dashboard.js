import React from 'react';
import './App.css';
import {Link} from 'react-router-dom'
import Services from './Components/Services'
import image6 from './Components/images/image6.jpg'
import image7 from './Components/images/image7.jpg'
import image8 from './Components/images/image8.jpg'



  function Dashboard(){

        
        return (
            
            <div className='container-fluid'>
                <h2>Welcome to Renthut</h2>
                <Link className='gotodash' to='/Login'>Logout</Link>
                <div className="col-md-12  mb-4 text-center">
                        <h3>Our Services</h3>
                        <div className="underline mx-auto"></div>
                    </div>
                <div className='dash1'>

                    <Link to='/Renter' className='renter' ><button type="button" className="btn btn-primary btn-lg btn1" >I am a Renter</button></Link>
                    <Link to='/Landlord' className="landlord"><button type="button"  className="btn btn-primary btn-lg btn2">I am a LandLord</button></Link>
                
                </div>
               
                <div className="section">
            <div className="container">
              

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





                {/* <div className='container'>
                <Services />
                </div> */}
            </div>
            // <div className="container-fluid">
            // <h2>Welcome </h2>
            //     <div className="dash1">
            //       <Link to="/Renter" className="renter">
            //         <button type="button" className="btn btn-info btn-lg btn1">
            //           I am a Renter
            //         </button>
            //       </Link>
            //       <Link to="/Landlord" className="landlord">
            //         <button type="button" className="btn btn-info btn-lg btn2">
            //           I am a LandLord
            //         </button>
            //       </Link>
            // </div>
            // <br />

            // <div>
            //     <Services />

            // </div>
            // </div>
        );
    
}
export default Dashboard;


