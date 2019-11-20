import React, { useState } from 'react';
import axios from 'axios'

const Login = (props) =>{

    const [user, setUser] = useState ({username:"" , password: ""})

    const handleChange = event =>{

        setUser({...setUser, [event.target.name]: event.target.value})
    }

    const handleSubmit = event => {

        event.preventDefault()
        axios.post(`http://localhost:3000/api/login`, user)
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


            <button type="submit">Login In</button>
            
            
        </form>
    )



}

export default Login