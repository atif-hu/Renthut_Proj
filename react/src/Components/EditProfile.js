import React,{useState,useEffect} from 'react';   
import {Link} from 'react-router-dom'
import axios from 'axios'  

function EditProfile(props){
    // console.log(props.match.params.id)
    

    const id=props.match.params.id
    const[house,sethouse]=useState([])

    const [File_name,setfile]=useState(house.File_name)
    const [House_description,sethouse_desc]=useState('')
    const [address,setaddress]=useState('')
    const [city,setcity]=useState('')
    const [Rent_price,setrent]=useState('')
    const [Lease_terms ,setleaseterm]=useState('')
    const [deposit,setdeposit]=useState('')
    const [Ad_date,setaddate]=useState('')

    useEffect(()=>{
      fetch(`https://localhost:44391/Api/Landlord/${id}`).then((result)=>{
        result.json().then((resp)=>{
          console.log(resp)
          sethouse(resp)
        })
       
      })
    },[])

    function input1(e){
        setfile(e.target.value)
        
    }

    function input2(e){
        sethouse_desc(e.target.value)
        
    }

    function input3(e){
        setaddress(e.target.value)
        
    }

    function input4(e){
        setcity(e.target.value)
        
    }

    function input5(e){
        setrent(e.target.value)
        
    }

    function input6(e){
        setleaseterm(e.target.value)
        
    }

    function input7(e){
        setdeposit(e.target.value)
        
    }

    function input8(e){
        setaddate(e.target.value)
        
    }


    function handleUpdate(e){
        const obj={
            Id:props.match.params.id,
            File_name:File_name,
            House_description:House_description,
            Address:address,
            City:city,
            Rent_price:Rent_price,
            Lease_terms:Lease_terms,
            Deposit:deposit,
            Ad_date:Ad_date
        }
        axios.post('https://localhost:44391/Api/Landlord/UpdateHouseDetails', obj)  
        .then(res => console.log(res.data));  
        // debugger;  
        window.history.pushState("", "", "/Landlord_profile");
    }
    
    return(
        <div className='container'>
            {/* <p>{house.File_name}</p> */}
            <hr/>
            <h4 className="PageHeading">Update Student Informations</h4>
            <Link className='gotoprofile' to='/Landlord_profile'>Go back to profile</Link>
            <hr/>
        <div className='form'>
        <form >
            <div className='form-group'>
                <label>Choose File_name</label>
                <input className=' form-control input1 ' placeholder={"Previous value is "+house.File_name} type='text' onChange={input1}  />
            </div>
            <div className='form-group'>
                <label>House description</label>
                <input className='form-control input2' placeholder={"Previous value is "+house.House_description}  type='text' onChange={input2}  required/>
            </div>
            <div className='form-group'>
                <label>Full Address</label>
                <input className='form-control input8' placeholder={"Previous value is "+house.Address}  type='text' onChange={input3} required/>
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input className='form-control input7' placeholder={"Previous value is "+house.City}  type='text' onChange={input4}  required/>
            </div>
            <div className='form-group'>
                <label>Rent Price</label>
                <input className='form-control input3' placeholder={"Previous value is "+house.Rent_price}  type='text' onChange={input5}  required/>
            </div> 
            <div className='form-group'>
                <label>Lease terms(in years)</label>
                <input className='form-control input4' placeholder={"Previous value is "+house.Lease_terms}  type='text' onChange={input6}  required/>
            </div>
            <div className='form-group'>
                <label>Deposit</label>
                <input className='form-control input5' placeholder={"Previous value is "+house.Deposit}  type='text' onChange={input7}  required/>
            </div>
            <div className='form-group'>
                <label>Advertisement Date</label>
                <input className='form-control input6' placeholder={"Previous value is "+house.Ad_date}  type='date' onChange={input8} required/>
            </div>
            <button className='btn btn-success' type='submit' onClick={handleUpdate}>Update</button>
        </form>
        </div>
        <Link className='gotodash' to='/Dashboard'>Go to Dashboard</Link>
        </div>

    )

    
}
export default EditProfile;  

























// class EditProfile extends React.Component {  
//     constructor(props) {  
//         super(props)  

//     this.onChangeName = this.onChangeName.bind(this);  
//     this.onChangeHouseDesc = this.onChangeHouseDesc.bind(this);  
//     this.onChangeAddress = this.onChangeAddress.bind(this);  
//     this.onChangeCity = this.onChangeCity.bind(this);  
//     this.onChangeRentPrice = this.onChangeRentPrice.bind(this);  
//     this.onChangeLeaseterms = this.onChangeLeaseterms.bind(this);  
//     this.onChangeDeposit = this.onChangeDeposit.bind(this);  
//     this.onChangeDate = this.onChangeDate.bind(this);  
//     this.onSubmit = this.onSubmit.bind(this);  

//          this.state = {  
//             File_name: '',  
//             House_description: '',  
//             Address: '',  
//             City: '',  
//             Rent_price: '',  
//             Lease_terms: '',  
//             Deposit: '',  
//             Ad_date: ''  

//         }  
//     }  

//   componentDidMount() {  
//     axios.get('http://localhost:52564/Api/Student/StudentdetailById?id='+this.props.match.params.id)  
//     .then(response => {  
//               this.setState({   
//                 File_name: response.data.File_name,   
//                 House_description: response.data.House_description,  
//                 Address: response.data.Address,  
//                 City: response.data.City,
//                 Rent_price: response.data.Rent_price,
//                 Lease_terms: response.data.Lease_terms,
//                 Deposit: response.data.Deposit,
//                 Ad_date: response.data.Ad_date
//              });  

//           })  
//           .catch(function (error) {  
//               console.log(error);  
//           })  
//     }  

//   onChangeName(e) {  
//     this.setState({  
//         File_name: e.target.value  
//     });  
//   }  
//   onChangeHouseDesc(e) {  
//     this.setState({  
//         House_description: e.target.value  
//     });    
//   }  
//   onChangeAddress(e) {  
//     this.setState({  
//         Address: e.target.value  
//     });  
//     }  
//     onChangeCity(e) {  
//         this.setState({  
//             City: e.target.value  
//         });  
//     }  
//     onChangeRentPrice(e) {  
//         this.setState({  
//             Rent_price: e.target.value  
//         });  
//     }  
//     onChangeLeaseterms(e) {  
//         this.setState({  
//             Lease_terms: e.target.value  
//         });  
//     }  
//     onChangeDeposit(e) {  
//         this.setState({  
//             Deposit: e.target.value  
//         });  
//     }  
//     onChangeDate(e) {  
//         this.setState({  
//             Ad_date: e.target.value  
//         });  
//     }  

//   onSubmit(e) {  
//     // debugger;  
//     // e.preventDefault();  
//     const obj = {  
//         Id:this.props.match.params.id,  
//         File_name: this.state.Name,  
//       House_description: this.state.House_description,  
//       Address: this.state.Address,  
//       City: this.state.City,
//       Rent_price: this.state.Rent_price,
//       Lease_terms: this.state.Lease_terms,
//       Deposit: this.state.Deposit,
//       Ad_date: this.state.Ad_date


//     };  
//     axios.post('https://localhost:44391/Api/Landlord/UpdateHouseDetails', obj)  
//         .then(res => console.log(res.data));  
//         // debugger;  
//         this.props.history.push('/Landlord_profile')  
//   }  
//     render() {  
//         return (  
//             <Container className="App">  

//              <h4 className="PageHeading">Update House Information</h4>  
//                 <Form className="form" onSubmit={this.onSubmit}>  
//                     <Col>  
//                         <FormGroup row>  
//                             <Label for="filename" sm={2}>File Name</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="filename" value={this.state.File_name} onChange={this.onChangeName}  
//                                 placeholder="Enter File Name" />  
//                             </Col>  
//                         </FormGroup>  
//                         <FormGroup row>  
//                             <Label for="desc" sm={2}>House Description</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="desc" value={this.state.House_description} onChange={this.onChangeHouseDesc} placeholder="Enter house description" />  
//                             </Col>  
//                         </FormGroup>  
//                          <FormGroup row>  
//                             <Label for="Address" sm={2}>Address</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="Address" value={this.state.Address} onChange={this.onChangeAddress} placeholder="Enter Address" />  
//                             </Col>  
//                         </FormGroup>  
//                          <FormGroup row>  
//                             <Label for="City" sm={2}>City</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="City"value={this.state.City} onChange={this.onChangeCity} placeholder="Enter City" />  
//                             </Col>  
//                         </FormGroup>   
//                          <FormGroup row>  
//                             <Label for="rent" sm={2}>Rent Price</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="rent" value={this.state.Rent_price} onChange={this.onChangeRentPrice} placeholder="Enter Rent Price" />  
//                             </Col>  
//                         </FormGroup>   
//                          <FormGroup row>  
//                             <Label for="Leaseterms" sm={2}>Lease terms</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="Leaseterms" value={this.state.Lease_terms} onChange={this.onChangeLeaseterms} placeholder="Enter Lease terms" />  
//                             </Col>  
//                         </FormGroup>   
//                          <FormGroup row>  
//                             <Label for="Deposit" sm={2}>Deposit</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="Deposit" value={this.state.Deposit} onChange={this.onChangeDeposit} placeholder="Enter Deposit money" />  
//                             </Col>  
//                         </FormGroup>   
//                          <FormGroup row>  
//                             <Label for="Addate" sm={2}>City</Label>  
//                             <Col sm={10}>  
//                                 <Input type="text" name="Addate" value={this.state.Ad_date} onChange={this.onChangeDate} placeholder="Enter Date" />  
//                             </Col>  
//                         </FormGroup>   
//                     </Col>  
//                     <Col>  
//                         <FormGroup row>  
//                             <Col sm={5}>  
//                             </Col>  
//                             <Col sm={1}>  
//                           <Button type="submit" color="success">Submit</Button>{' '}  
//                             </Col>  
//                             <Col sm={1}>  
//                                 <Button color="danger">Cancel</Button>{' '}  
//                             </Col>  
//                             <Col sm={5}>  
//                             </Col>  
//                         </FormGroup>  
//                     </Col>  
//                 </Form>  
//             </Container>  
//         );  
//     }  

// }  

