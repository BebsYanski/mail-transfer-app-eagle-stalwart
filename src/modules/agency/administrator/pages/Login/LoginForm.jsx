// src/modules/agency/administrator/pages/Login.js

import React, { useState } from 'react'
import { useAuth } from '../../../../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const LoginForm = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 const { login } = useAuth()
 const navigate = useNavigate()

 const handleSubmit = async (e) => {
   e.preventDefault()
   try {
     const response = await axios.post('http://localhost:8080/admin/login', {
       email,
       password,
     })
    //  const { authToken } = response.data
     login( response.data.authToken, 'admin' )
     navigate('/admin')
   } catch (error) {
     console.error('Error logging in:', error)
     alert("Login failed");
   }
 }

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className='row g-3 needs-validation'
        noValidate
      >
        <div className='col-md-6'>
          <label htmlFor='validationCustom01' className='form-label'>
            Email
          </label>
          <input
            type='email'
            placeholder='Email'
            className='form-control'
            id='validationCustom01'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className='valid-feedback'>Looks good!</div>
        </div>
        <div className='col-md-6'>
          <label htmlFor='validationCustom02' className='form-label'>
            Password
          </label>
          <input
            className='form-control'
            id='validationCustom02'
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <div className='valid-feedback'>Looks good!</div>
        </div>

        <div className=' col-12'>
          <button className='btn btn-primary' type='submit'>
            Login
          </button>
        </div>
      </form>
    </div>
  )
}

export default LoginForm
