import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { AuthContext } from '../Authentication/AuthContext'

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const { currentUser } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!currentUser) {
          return <Redirect to='/admin/login' />
        }

        if (roles && roles.indexOf(currentUser.role) === -1) {
          return <Redirect to='/' />
        }

        return <Component {...props} />
      }}
    />
  )
}

export default PrivateRoute
