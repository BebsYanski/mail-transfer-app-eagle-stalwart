import React from 'react'
import { Route, Navigate, Outlet } from 'react-router-dom'
import { useAuth } from './AuthContext'

const ProtectedRoute = ({ allowedRoles }) => {
  const { authToken, role } = useAuth()

  return !authToken || !allowedRoles.includes(role) ? (
    <Navigate to='/' replace />
  ) : (
    <Outlet />
  )
}

export default ProtectedRoute


/* const ProtectedRoute = ({ children, allowedRoles }) => {
  const { authToken, role } = useAuth()

  if (!authToken || !allowedRoles.includes(role)) {
    return <Navigate to='/' />
  }

  return children
} */