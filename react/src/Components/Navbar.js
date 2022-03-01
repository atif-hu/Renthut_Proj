import React from 'react'
import {Link} from 'react-router-dom'
import Footer from './Footer';

function Navbar() {
  return (
    // <div>
    //     <nav className="navbar navbar-expand-lg navheader">    
    //         <div className=" navbar-collapse" >    
    //           <ul className="navbar-nav mr-auto">
    //             <li className="nav-item">    
    //               <Link to={'/Login'} className="nav-link">Login</Link>    
    //             </li>    
    //             <li className="nav-item">    
    //               <Link to={'/Signup'} className="nav-link">Sign Up</Link>    
    //             </li>    
    //           </ul>    
    //         </div>    
    //       </nav>
    // </div>
    <div>
    <div className="navbar-dark bg-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">

                        <div className="navbar navbar-expand-lg">

                            <div className="container-fluid">

                                <Link to="/" className="navbar-brand">RentHut</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <div className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <div className="nav-item">
                                            <Link to="/Login" className="nav-link active">Login</Link>
                                        </div>
                                        <div className="nav-item">
                                            <Link to="/Signup" className="nav-link active" >SignUp</Link>
                                        </div>
                                        <div className="nav-item">
                                            <Link to="/contact" className="nav-link active">Contact Us</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <section className="showcase">
                <div className="overlay">
                    <h1>Renthut</h1>
                    <p style={{ color: 'white' }}>The Journey Towards You'r Dream Home ...!</p>
                </div>
            </section>

            <section className="showcase-items">
                <div>
                    <h3>Our Company</h3>
                    <div className="underline mx-auto"></div>
                    <p>
                        Renthut is India’s most innovative real estate advertising platform for homeowners,
                        landlords, developers, and real estate member's. The company offers listings for new homes,
                        rentals, plots and co-living spaces in India.
                    </p>
                </div>
            </section>

        </div>
        <Footer/>
        </div>
  )
}

export default Navbar