import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import * as authService from '../../../common/Authentication/authService'

const AdminRegister = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await authService.registerAdmin(email, password)
      history.push('/admin/login')
    } catch (error) {
      console.error('Registration failed:', error)
    }
  }

  return (
    <div>
      <h1>Admin Registration</h1>
      <form onSubmit={handleRegister}>
        <input
          type='text'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='email'
          required
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
          required
        />
        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default AdminRegister
