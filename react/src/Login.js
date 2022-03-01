import React, { Component } from 'react';
import './App.css';
import {Link} from 'react-router-dom'

class Login extends Component {
    constructor() {
        super();
        this.state = {

            Email: '',
            Password: ''
        }
        this.Password = this.Password.bind(this);
        this.Email = this.Email.bind(this);
        this.login = this.login.bind(this);
    }
    Email(event) {
        this.setState({ Email: event.target.value })
    }
    Password(event) {
        this.setState({ Password: event.target.value })
    }
    login(event) {
        // debugger;
        fetch('https://localhost:44391/Api/login/Login', {
            method: 'post',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                Email: this.state.Email,
                Password: this.state.Password
            })
        }).then((Response) => Response.json())
            .then((result) => {
                console.log(result);
                if (result.Status == "Invalid"){
                    alert('Invalid User');
                }
                else if (result.Status=="Admin"){
                    this.props.history.push("/admin")
                }
                else{
                  
                    this.props.history.push("/Dashboard");
                }
            })
    }

    render() {
    
        return (
          
            <div className='a'>
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
            <section className="vh-100 gradient-custom">
             <div className="container py-5 h-100">
               <div className="row d-flex justify-content-center align-items-center h-100">
                 <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                   <div className="card bg-dark text-white" style={{borderRadius:1+'rem'}} >
                     <div className="card-body p-5 text-center">

                       <div className="mb-md-5 mt-md-4 pb-5">

                         <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                         <p className="text-white-50 mb-5">Please enter your login and password!</p>

                         <div className="form-outline form-white mb-4">
                           <input type="email" id="typeEmailX" className="form-control form-control-lg" onChange={this.Email} />
                           <label className="form-label text-left" htmlFor="typeEmailX" >Email</label>
                         </div>

                         <div className="form-outline form-white mb-4">
                           <input type="password" id="typePasswordX" className="form-control form-control-lg" onChange={this.Password}  />
                           <label className="form-label" htmlFor="typePasswordX">Password</label>
                         </div>


                         <button className="btn btn-outline-light btn-lg px-5" type="submit" onClick={this.login} >Login</button>

                         <div className="d-flex justify-content-center text-center mt-4 pt-1">
                           <a href="#!" className="text-white"><i className="fab fa-facebook-f fa-lg"></i></a>
                           <a href="#!" className="text-white"><i className="fab fa-twitter fa-lg mx-4 px-2"></i></a>
                           <a href="#!" className="text-white"><i className="fab fa-google fa-lg"></i></a>
                         </div>

                       </div>

                       <div >
                         <p className="mb-0 text-white-50">Don't have an account? <a href="/Signup" className="text-white-50 fw-bold" >Sign Up</a></p>
                       </div>

                     </div>
                   </div>
                 </div>
               </div>
             </div>
            </section>
            </div>
            
        );
    }
}
export default Login;