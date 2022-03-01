import React from "react";
import { Link } from "react-router-dom";

function Footer(){
    return(
        <section className="section footer bg-dark text-white">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Company Information</h6>
                        <hr/>
                        <p className="text-white">
                        Renthut.com is India’s most innovative real estate advertising platform for homeowners,
                        landlords, developers, and real estate member's. The company offers listings for new homes, 
                        rentals, plots and co-living spaces in India. 
                        </p>
                    </div>
                    <div className="col-md-4">
                        <h6>Quick Links</h6>
                        <hr/>
                        <div><Link to="/home">Home</Link></div>
                        <div><Link to="/contact">Contact-US</Link></div>
                        <div><Link to="/">Terms & Conditons</Link></div>
                    </div>
                    <div className="col-md-4">
                        <h6>Contact Information</h6>
                        <hr/>
                        <div><p className="text-white mb-1">#68, Hyderabad India.</p></div>
                        <div><p className="text-white mb-1">+91 0000000000</p></div>
                        <div><p className="text-white mb-1">+91 0000000000</p></div>
                        <div><p className="text-white mb-1">renthut@domain.com</p></div>
                    </div>
                </div>
            </div>
        </section>

    );
}

export default Footer;