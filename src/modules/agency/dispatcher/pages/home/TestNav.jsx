import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const TestNavBar = ({links}) => {
  const location = useLocation();
  const noNavBarPaths = ['/admin/register', '/admin/login', '/dispatcher/login']

  if (noNavBarPaths.includes(location.pathname)) {
    return null
  }

  return (
    <nav>
      <ul>
        {links.map((link) => (
          <li key={link.path}>
            <Link to={link.path}>{link.path}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default TestNavBar
