import React from 'react'
import { Outlet, Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../../../../context/AuthContext'
import Personnel from '../pages/Personnel/index';

const AdminNavbar = () => {
    const { logout } = useAuth();

  let navigate = useNavigate();
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container-fluid'>
          <Link className='navbar-brand' to='/admin'>
            Eagle Stalwart
          </Link>
          <button
            className='navbar-toggler d-lg-none'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#collapsibleNavId'
            aria-controls='collapsibleNavId'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='collapsibleNavId'>
            <ul className='navbar-nav me-auto mt-2 mt-lg-0'>
              <li className='nav-item'>
                <Link className='text-white nav-link' to='/admin/reports'>
                  Reports
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='text-white nav-link' to='/admin/dashboard'>
                  Dashboard
                </Link>
              </li>
              <li className='nav-item'>
                <Link className='text-white nav-link' to='/admin/personnel'>
                  Personnels
                </Link>
              </li>
            </ul>

            <button
              className='btn btn-outline-light'
              type='button'
              onClick={() => navigate('/admin/addpersonnel')}
            >
              Create Personnel
            </button>
            <button className='mx-5 btn btn-danger' onClick={logout}>
              Logout
            </button>
          </div>
        </div>
      </nav>
      <Outlet />
    </div>
  )
}

export default AdminNavbar
