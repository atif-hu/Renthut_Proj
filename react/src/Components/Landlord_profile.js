import React from 'react'
import {Link} from 'react-router-dom'
import {useEffect,useState} from 'react'

function Landlord_profile() {
  const[house,sethouse]=useState([])

  useEffect(()=>{
    fetch('https://localhost:44391/Api/Landlord/HouseDetails').then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        sethouse(resp)
      })
     
    })
  },[])
  
  // window.location.reload(false);

  function handleDelete(HId) {
    fetch(`https://localhost:44391/Api/Landlord/${HId}`, {
      method: 'DELETE'
    }).then((result) => {
      result.json().then((resp) => {
        console.warn(resp)
      })
    })
    // this.props.dispatch(push('/Landlord_profile'));
    handleRefresh()
  }

  function handleRefresh(e) {
    window.location.reload(false);
    
  }

  return (

        <div className='containerlandlord'>
          <h1 style={{marginBottom:"15px"}}>Landlord_profile</h1>
          <Link className='gotodash' to='/Dashboard'>Go to Dashboard</Link>
          <Link  to='/Landlord'><button className='btn btn-primary'>Add new house details</button></Link>
          <button onClick={handleRefresh} className="btn btn-info refreshbtn" >Refresh</button>
          <hr/>
          <table className='table table-striped' style={{marginRight:"2em"}}>
          <tbody>
              <tr>
                <th>File Name</th>
                <th>House Description</th>
                <th>Full Address</th>
                <th>Email</th>
                <th>Rent Price</th>
                <th>Lease Terms</th>
                <th>Deposit</th>
                <th>Advertisement date</th>
                <th></th>
                <th>Action</th>
              </tr>

              {
                house.map((data)=>
                  <tr key={data.Id}>
                    <td>{data.File_name}</td>
                    <td>{data.House_description}</td>
                    <td>{data.Address}</td>
                    <td>{data.City}</td>
                    <td>{data.Rent_price}</td>
                    <td>{data.Lease_terms}</td>
                    <td>{data.Deposit}</td>
                    <td>{data.Ad_date}</td>
                    <td><Link to={{pathname: `/EditProfile/${data.Id}`}} params={{}}><button className='btn btn-success btn-sm' >Edit</button></Link></td>
                    <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(data.Id)} >Delete</button></td>
                  </tr>
                
                )
              }
              </tbody>
          </table>
              
      
      
      
      
        </div>

  )
}

export default Landlord_profile