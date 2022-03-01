import React from 'react';
import '../App.css'
import { BrowserRouter as Router, Switch, Route, Link,IndexRoute,Routes } from 'react-router-dom';   
import Login from '../Login';  
import Reg from '../Reg';  
import Dashboard from '../Dashboard';
import Navbar from './Navbar';  
import Renter from './Renter';
import Landlord from './Landlord';
import Landlord_profile from './Landlord_profile';
import EditProfile from './EditProfile';
import Mailer from './Mailer';
import Admin from '../Admin/Admin'
import Houses from '../Admin/Houses'
import Profile from '../Admin/Profile'
import Requests from '../Admin/Requests'
import ContactForm from './ContactForm';

function SignupLogin_Page(){

    
    return(
      
        <Router>    
      
        <div>     
          <Switch>
        <Route exact path='/' component={Navbar} />
            <Route exact path='/Login' component={Login}/>    
            <Route exact path='/Signup' component={Reg} />    
            <Route exact path='/Dashboard' component={Dashboard} />    
            <Route exact path='/Renter' component={Renter}/>
                <Route exact path='/Landlord' component={Landlord}/>
                <Route exact path='/Landlord_profile' component={Landlord_profile}/>
                <Route exact path='/EditProfile/:id' component={EditProfile}/>
                <Route exact path='/mailer/:id' component={Mailer}/>
                <Route exact path='/admin' component={Admin}/>
                <Route exact path='/Houses' component={Houses}/>
                <Route exact path='/Profile' component={Profile}/>
                <Route exact path='/contact' component={ContactForm}/>
                <Route exact path='/Requests' component={Requests}/>
          </Switch>
         
        </div>   
         
      </Router>   
    )
}

export default SignupLogin_Page