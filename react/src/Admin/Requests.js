import React from 'react'
import {Link,BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {useEffect,useState} from 'react'

function Houses() {
  const[house,sethouse]=useState([])

  useEffect(()=>{
    fetch('https://localhost:44391/Api/Form').then((result)=>{
      result.json().then((resp)=>{
        console.log(resp)
        sethouse(resp)
      })
    })
  },[])
  // window.location.reload(false);

  function handleDelete(HId) {
    fetch(`https://localhost:44391/Api/Form/${HId}`, {
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

        <div className='container'>
          
          <h1>Houses uploaded for Rent</h1>
          <Link className='gotodash' to='/Admin'>Go back</Link>
          <hr/>
          <table className='table table-striped'>
          <tbody>
              <tr>
                <th>Name</th>
                <th>Phone Number</th>
                <th>Email</th>
                <th>Message</th>
                <th>Delete</th>
                
              </tr>

              {
                house.map((data)=>
                  <tr key={data.Id}>
                    <td>{data.Name}</td>
                    <td>{data.Phone}</td>
                    <td>{data.Email}</td>
                    <td>{data.Message}</td>
                    <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(data.Id)} >Delete</button></td>
                  </tr>
                
                )
              }
              </tbody>
          </table>
              
      
      
      
      
        </div>

  )
}

export default Houses