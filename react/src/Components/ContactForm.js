import React,{useState} from 'react'
import {Link} from 'react-router-dom'

function ContactForm() {
    const [Name,setName]=useState('')
    const [Phone,setPhone]=useState('')
    const [Email,setEmail]=useState('')
    const [Message,setMessage]=useState('')
    
    function input1(e){
        setName(e.target.value)
    }
    
    function input2(e){
        setPhone(e.target.value)
    }
    
    function input3(e){
        setEmail(e.target.value)
    }
    
    function input4(e){
        setMessage(e.target.value)
    }

    const handleSubmit=(e)=>{
        // return alert('success '+File_name+' '+House_description+' '+address+' '+city+''+Rent_price+' '+Lease_terms +' '+deposit+' '+Ad_date)
        
        let data={Name,Phone,Email,Message}
        fetch("https://localhost:44391/Api/Form",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)}).then((result)=>{result.json().then((resp)=>{
                console.warn("resp",resp);
                
            })})
            // window.history.pushState("", "", "/");
        }


  return (


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
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div>
            <section className="grid">
            <h3>Contact Us</h3>
            <Link className='gotohome' to='/'><button className='btn btn-primary'>Go back</button></Link>
            <div className="underline mx-auto"></div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="card shadow">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-6 ">
                                    
                                    <div className="form-group">
                                        <label className="md-1">Full Name</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Name" onChange={input1} />
                                    </div>
                                    <div className="form-group">
                                        <label className="md-1">Phone</label>
                                        <input type="text" className="form-control" placeholder="Enter Your Phone Number" onChange={input2}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="md-1">E-mail</label>
                                        <input type="text" className="form-control" placeholder="Enter Your E-mail ID" onChange={input3}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="md-1">Message</label>
                                        <textarea rows="3" className="form-control" placeholder="Type your message..." onChange={input4}></textarea>
                                    </div>
                                    <div className="form-group py-3">
                                    <Link to='/'><button type="button" className="btn btn-primary shadow" onClick={handleSubmit}>Submit</button></Link>
                                    </div>
                                </div>
                                
                                <div className="col-md-6 border-start">
                                <br/><br/>
                                <center>
                                    <h5 className="main-heading">Address Information</h5>
                                    <div className="underline1"></div>
                                    <br/><br/><br/>
                                    <p>
                                        #68, Hyderabad India.
                                    </p>
                                    <p>
                                        Phone: +91 0000000000
                                    </p>
                                    <p>
                                        Email: renthut@domain.com
                                    </p>
                                    </center>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>



        </div>
    </div>
  )
}

export default ContactForm