import React from 'react'
import { Outlet, Link } from 'react-router-dom'

const CustomerNavbar = () => {
  return (
    <div className=''>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          {/* <a className='navbar-brand' href='#'>
            Eagle Stalwart - Mail Transfer Application
          </a> */}
          <Link className='navbar-brand' to='/customer'>
            Eagle Stalwart - Mail Transfer Application
          </Link>
          {/* <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarID'
            aria-controls='navbarID'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button> */}

          {/* <a className='btn btn-outline-light' href='#'>
            Eagle Stalwart
          </a> */}
          

          <Link to='/customer/about' className='btn btn-outline-light'>
            About Us
          </Link>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default CustomerNavbar
