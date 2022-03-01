import React from 'react'
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {useEffect,useState} from 'react'

function Houses() {
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


  return (

        <div className='container'>
          
          <h1>Houses uploaded for Rent</h1>
          <Link className='gotodash' to='/Admin'>Go back</Link>
          <hr/>
          <table className='table table-striped'>
          <tbody>
              <tr>
                <th>File Name</th>
                <th>House Description</th>
                <th>Full Address</th>
                <th>Email</th>
                <th>Rent Price</th>
                <th>Lease Terms(in years)</th>
                <th>Deposit</th>
                <th>Advertisement date</th>
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
                  </tr>
                
                )
              }
              </tbody>
          </table>
              
      
      
      
      
        </div>

  )
}

export default Houses