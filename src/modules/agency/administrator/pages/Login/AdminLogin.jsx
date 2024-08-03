import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { AuthContext } from '../../../../../common/Authentication/AuthContext'
import * as authService from '../../../../../common/Authentication/authService'


const AdminLogin = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login } = useContext(AuthContext)
  const history = useHistory()

  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const user = await authService.login(email, password)
      login(user)
      history.push('/admin/home')
    } catch (error) {
      console.error('Login failed:', error)
    }
  }

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
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
        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default AdminLogin
