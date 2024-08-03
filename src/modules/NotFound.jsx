import React from 'react'
import { Link } from 'react-router-dom'
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='container notfound text-center'>
      <div className="loading"></div>
      <h1>Oops... Page Not Found</h1>
      <Link className='my-4' to={'/'}>Go back To Home Page</Link>
    </div>
  )
}

export default NotFound
