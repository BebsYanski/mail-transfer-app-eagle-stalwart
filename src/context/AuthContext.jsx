import React, { createContext, useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AuthContext = createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider = ({ children }) => {
  const [authToken, setAuthToken] = useState(
    localStorage.getItem('authToken') || ''
  )
  const [role, setRole] = useState(localStorage.getItem('role') || '')
  const navigate = useNavigate()

  const login = (token, userRole) => {
    setAuthToken(token)
    setRole(userRole)
    localStorage.setItem('authToken', token)
    localStorage.setItem('role', userRole)
  }

  const logout = () => {
    setAuthToken('')
    setRole('')
    localStorage.removeItem('authToken')
    localStorage.removeItem('role')
    navigate('/')
  }

  useEffect(() => {
    const token = localStorage.getItem('authToken')
    const userRole = localStorage.getItem('role')
    if (token && userRole) {
      setAuthToken(token)
      setRole(userRole)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ authToken, role, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
