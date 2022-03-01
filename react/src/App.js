import React from 'react';  
import logo from './logo.svg';  
// import './App.css';  
import Login from './Login';  
import Reg from './Reg';  
import Dashboard from './Dashboard';  
import SignupLogin_Page from './Components/SignupLogin_Page';
// import './css/style.css'
import { BrowserRouter as Router, Switch, Route, Link,IndexRoute } from 'react-router-dom';   

function App() {  
  


  return (  
    <div>
    <SignupLogin_Page/>
    </div>


  );  
}  
export default App;
