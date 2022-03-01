import React from 'react';
import {useState} from 'react';
import  { useEffect } from 'react';
import {Link} from 'react-router-dom'


function Profile(){
    
  

    const[house,sethouse]= useState([]);

    useEffect(()=>{
        fetch('https://localhost:44391/Api/Login/EmployeeDetails').then((result)=>{
        result.json().then((resp)=>{
        sethouse(resp)
        
        })
        
        })
        
        },[])

        function handleDelete(HId) {
            fetch(`https://localhost:44391/Api/Login/${HId}`, {
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

    return(
        <div className='container'>
            
            <h1>Profiles</h1>
            <Link className='gotodash' to='/Admin'>Go back </Link>
            <hr/>
            
    <table className="table table-striped" >
        <tbody>
        
        <tr>
            <th>Id</th>
            <th>EmployeeName</th>
            <th>Password</th>
            <th>Email</th>
            <th>Department</th>
            <th>City</th>
            <th>Delete</th>
        </tr>
{

    house.map((data)=>

    <tr key={data.Id}>
        <td>{data.Id}</td>
        <td>{data.EmployeeName}</td>
        <td>{data.Password}</td>
        <td>{data.Email}</td>
        <td>{data.Age}</td>
        <td>{data.City}</td>
        <td><button className='btn btn-danger btn-sm' onClick={()=>handleDelete(data.Id)} >Delete</button></td>
    </tr>
    
    )
}
</tbody>
    </table>
        </div>
        




    );
}
export default Profile;
