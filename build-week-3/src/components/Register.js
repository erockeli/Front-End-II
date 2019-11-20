import React, { useState } from 'react';
import axios from 'axios'

const Login = (props) =>{

    const [user, setUser] = useState ({username:"" , password: "", email: "",
full_name:"", city: ""})

    const handleChange = event =>{

        setUser({...setUser, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {

        event.preventDefault()
        axios.post(`http://localhost:4400/api/auth/register`, user)
        .then(res => {
            console.log(res)
            localStorage.setItem("token", res.data.payload)
            props.history.push("/restaurants")
        })
        .catch(err => console.log (err.response))
    }

    return(
        <form onSubmit ={handleSubmit}>
            <input type="text" 
            name="username" 
            placeholder= "username" 
            onChange={handleChange}
            value= {user.username}/>

            <input type="password" 
            name="password" 
            placeholder="password"
            onChange={handleChange}
            value={user.password}/>

        <input type="email" 
            name="email" 
            placeholder="email"
            onChange={handleChange}
            value={user.email}/>

            <input type="name" 
            name="full_name" 
            placeholder="Full Name"
            onChange={handleChange}
            value={user.full_name}/>

        <   input type="city" 
            name="city" 
            placeholder="city"
            onChange={handleChange}
            value={user.city}/>     


            <button type="submit">Register</button>
            
            
        </form>
    )



}

export default Register