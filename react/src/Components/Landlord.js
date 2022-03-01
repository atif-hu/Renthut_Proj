import {Link} from 'react-router-dom'
import React,{useState} from 'react'



function Landlord() {

    const [File_name,setfile]=useState('')
    const [House_description,sethouse_desc]=useState('')
    const [address,setaddress]=useState('')
    const [city,setcity]=useState('')
    const [Rent_price,setrent]=useState('')
    const [Lease_terms ,setleaseterm]=useState('')
    const [deposit,setdeposit]=useState('')
    const [Ad_date,setaddate]=useState('')

    const input1=(e)=>{
        setfile(e.target.value)
    }
    const input2=(e)=>{
        sethouse_desc(e.target.value)
    }
    const input3=(e)=>{
        setaddress(e.target.value)
    }
    const input4=(e)=>{
        setcity(e.target.value)
    }
    const input5=(e)=>{
        setrent(e.target.value)
    }
    const input6=(e)=>{
        setleaseterm(e.target.value)
    }
    const input7=(e)=>{
        setdeposit(e.target.value)
    }
    const input8=(e)=>{
        setaddate(e.target.value)
    }

    const HandleClick=(e)=>{
        // return alert('success '+File_name+' '+House_description+' '+address+' '+city+''+Rent_price+' '+Lease_terms +' '+deposit+' '+Ad_date)
        
        let data={File_name,House_description,address,city,Rent_price,Lease_terms ,deposit,Ad_date}
        fetch("https://localhost:44391/Api/Landlord/InsertHouseDetails",{
            method:'POST',
            headers:{
                'Content-type':'application/json'
            },
            body:JSON.stringify(data)}).then((result)=>{result.json().then((resp)=>{
                console.warn("resp",resp);
                
            })})
            window.history.pushState("", "", "/Landlord_profile");
        }
    


  return (

    

    <div className='container'>
        <hr/>
        <h2>LandLord</h2>
        <Link className='gotoprofile' to='/Landlord_profile'>Go to Landlord Profile</Link>
        
        <hr/>
        <div className='form' style={{marginBottom:"2em"}}>
        <form >
            <div className='form-group'>
                <label>Choose File_name</label>
                <input className=' form-control input1 ' placeholder='drag or choose a File_name' type='text' accept="image/*" onChange={input1}  />
            </div>
            <div className='form-group'>
                <label>House description</label>
                <input className='form-control input2' placeholder='House description' type='text'onChange={input2} />
            </div>
            <div className='form-group'>
                <label>Full Address</label>
                <input className='form-control input8' placeholder='Address' type='text'onChange={input3} />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input className='form-control input7' placeholder='Email' type='text'onChange={input4} />
            </div>
            <div className='form-group'>
                <label>Rent Price</label>
                <input className='form-control input3' placeholder='Enter Price per month' type='text'onChange={input5} />
            </div> 
            <div className='form-group'>
                <label>Lease terms(in years)</label>
                <input className='form-control input4' placeholder='Enter Lease year' type='text'onChange={input6} />
            </div>
            <div className='form-group'>
                <label>Deposit</label>
                <input className='form-control input5' placeholder='Enter Deposit Money' type='text'onChange={input7} />
            </div>
            <div className='form-group'>
                <label>Advertisement Date</label>
                <input className='form-control input6' placeholder="Enter today's date" type='date' onChange={input8} />
            </div>
            <button className='btn btn-primary' type='submit' onClick={HandleClick}>Submit</button>
        </form>
        </div>
        <Link className='gotodash' to='/Dashboard'>Go to Dashboard</Link>
    </div>
    
  )
}

export default Landlord