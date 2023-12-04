import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Delete() {

const [name, setName] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()
const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3001/delete', {email, password})
    .then(result => {
        console.log(result)
        if(result.data === "Success") {
            navigate('/home')
        }
        
    })
    .catch(err=> console.log(err))
}
return(
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
    <div className="bg-white p-3 rounded w-25">
    <h2>Delete Account</h2>
    <form>
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
            />
        </div>
        
        <button type="submit" className="btn btn-success w-100 rounded-0">
            Delete
        </button>
        </form>
        
        
    </div>
    </div>
)
}

export default Delete;