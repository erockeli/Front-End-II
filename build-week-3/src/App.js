import React from 'react';

import './App.css';
import Login from "./components/Login"
import Register from "./components/Register"
import Restaurant from './components/restaurants'
import { Route, Redirect } from 'react-router-dom'


const ProtectedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    if(localStorage.getItem('token')) {
      return <Component {...props} />;
    } else { 
      return <Redirect to='/login'/>;
    }
  }}/>;
};

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <Route path="/register" component={Register}/>
      <ProtectedRoute path="/restaurants" component={Restaurant}/>
      
      
    
    </div>
  );
}

export default App;
