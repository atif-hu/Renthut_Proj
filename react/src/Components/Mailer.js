import React from 'react'
import emailjs from 'emailjs-com'
import {Link} from 'react-router-dom'

function Mailer(props) {
    const landlordmail=props.match.params.id
    console.log(landlordmail)

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(
            'service_9w3fb1g',
            "template_i9gabhs",
            e.target,
            "80NkA_CvinGG-Lxw5"
        ).then(res=>{
            console.log(res);
        }).catch(err=> console.log(err));
        window.history.pushState("", "", "/Renter");
    }

  return (
    <div className='container'>
        <h1>Contact Landlord</h1>
        <Link className='gotodash' to='/Renter'>Go back</Link>
        <hr/>
        <div className='container border mailerform'>
        <form className='row' style={{margin:"25px 85px 75px 100px"}} onSubmit={sendEmail}>
            <label>Name</label>
            <input className='form-control' type="text" name='name'/>

            <label>Email</label>
            <input className='form-control' type="email" name='user_email'/>

            <label>Landlord Email</label>
            <input className='form-control' type="email" name="landlordmail" value={landlordmail || ''} readOnly />

            <label>Message</label>
            <textarea className='form-control' name='message'row='4'/>
            <input type='submit' value='Send' className=' form-control btn btn-primary' style={{marginTop:"30px"}} />
            {/* <button onClick={sendEmail}  className=' form-control btn btn-primary' style={{marginTop:"30px"}}>Send</button> */}
        </form>
        </div>
    </div>
  )
}

export default Mailer