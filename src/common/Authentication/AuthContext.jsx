import React, { createContext, useState, useEffect } from 'react'
import * as authService from './authService'

const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const role = localStorage.getItem('role')
    if (token && role) {
      setCurrentUser({ token, role })
    }
  }, [])

  const login = (user) => {
    setCurrentUser(user)
  }

  const logout = () => {
    authService.logout()
    setCurrentUser(null)
  }

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }
