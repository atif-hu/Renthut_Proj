import React from 'react';
import {Link} from 'react-router-dom';
function Navbar()
{
    return(
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
                                      <Link to="/Houses" className="nav-link active">Houses</Link>
                                  </div>
                                  <div className="nav-item">
                                  <Link to="/Profile" className="nav-link active" >Profiles</Link>
                                  </div>
                                  <div className="nav-item">
                                  <Link to="/Requests" className="nav-link active">Requests</Link>
                                  </div>
                                  <div className="nav-item">
                                  <Link to="/" className="nav-link active">Logout</Link>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                                  </div>
                        </div>
                    </div>
              </div>
      </div>



    );
}
export default Navbar;