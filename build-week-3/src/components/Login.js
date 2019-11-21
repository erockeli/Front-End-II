import React, { useState } from 'react';
import axios from 'axios'

const Login = (props) =>{

    const [user, setUser] = useState ({email:"" , password: ""})

    const handleChange = event =>{

        setUser({...setUser, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {

        event.preventDefault()
        axios.post(`https://restaurantpassports.herokuapp.com/api/auth/login`, user)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload)
            // props.history.push("/restaurants")
        })
        .catch(err => console.log (err.response))
    }

    return(
        <form onSubmit ={handleSubmit}>


            <input type="text" 
            name="email" 
            placeholder= "email" 
            onChange={handleChange}
            value= {user.email}/>

            <input type="password" 
            name="password" 
            placeholder="password"
            onChange={handleChange}
            value={user.password}/>
  
            <button type="submit">Login</button>
            
            
        </form>
    )



}

export default Login