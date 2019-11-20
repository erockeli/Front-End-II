import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Restaurant from './components/restaurants'
import { Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Route path="/login" component={Login}/>
      <Route path="/restaurants" component={Restaurant}/>
      
    
    </div>
  );
}

export default App;
