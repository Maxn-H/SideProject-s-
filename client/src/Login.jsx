import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './styles.css'

function Login() {

const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/login', {email, password})
    .then(result => {
        console.log(result)
        if(result.data === "Success") {
            navigate('/home')
        } 
        if (result.data == null) {
           myFunction()
        }
        
    })
    .catch(err=> console.log(err))
}
return(

    <div className="d-flex">
    <div className="bg-white">
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label htmlFor="email">
                <strong>Email</strong>
            </label>
            <input
            type="email"
            placeholder="Enter Email"
            autoComplete="Off"
            name="email"
            className="form-control rounded-0"
            onChange={(e) => setEmail(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="email">
            <strong>Password</strong>
            </label>
            <input
            type="password"
            placeholder="Enter password"
            name="password"
            className="form-control rounded-0"
            onChange={(e) => setPassword(e.target.value)}
            />
        </div>
        <button type="submit" className="btn">
            Login
        </button>
        </form>
        
    </div>
    </div>
)
}

export default Login;

function myFunction() {
    alert("I am an alert box!");
  }