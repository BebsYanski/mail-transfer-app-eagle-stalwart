import React from 'react'
import { Route, Routes, useRouteMatch } from 'react-router-dom'
import TestNavBar from './TestNav'
import AdminDashboard from './AdminDashBoard'
import AdminSettings from './AdminSettings'

const AdminHome = () => {
  const { path } = useRouteMatch()
  const adminLinks = [
    { path: `${path}/dashboard`, name: 'Dashboard' },
    { path: `${path}/settings`, name: 'Settings' },
  ]

  return (
    <div>
      <h1>Admin Home</h1>
      <TestNavBar links={adminLinks} />
      <Routes>
        <Route path={`${path}/dashboard`} component={AdminDashboard} />
        <Route path={`${path}/settings`} component={AdminSettings} />
        <Route path={path} exact>
          <h2>Welcome to the Admin Home</h2>
        </Route>
      </Routes>
    </div>
  )
}

export default AdminHome
