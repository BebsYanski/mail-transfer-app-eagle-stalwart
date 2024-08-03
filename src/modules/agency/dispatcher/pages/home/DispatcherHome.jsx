import React from 'react'
import { Route, Routes, useRouteMatch } from 'react-router-dom'
import TestNavBar from './TestNav'
import DispatcherDashboard from './DispatcherDashboard'
import DispatcherSettings from './DispatcherSettings'

const DispatcherHome = () => {
  const { path } = useRouteMatch()
  const adminLinks = [
    { path: `${path}/dashboard`, name: 'Dashboard' },
    { path: `${path}/settings`, name: 'Settings' },
  ]

  return (
    <div>
      <h1>Dispatcher Home</h1>
      <TestNavBar links={adminLinks} />
      <Routes>
        <Route path={`${path}/dashboard`} component={DispatcherDashboard} />
        <Route path={`${path}/settings`} component={DispatcherSettings} />
        <Route path={path} exact>
          <h2>Welcome to the Admin Home</h2>
        </Route>
      </Routes>
    </div>
  )
}

export default DispatcherHome
