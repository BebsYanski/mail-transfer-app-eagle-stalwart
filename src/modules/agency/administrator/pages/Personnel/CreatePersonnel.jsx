import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './personnel.css'

const CreatePersonnel = () => {
  const navigate = useNavigate()
  const [personnel, setPersonnel] = useState({
    driver: true,
    dispatcher: false,
  })
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    agency: '',
    password: '',
    role: '',
  })
  const [error, setError] = useState('')
  let timeoutId // Define timeoutId here

  const { driver, dispatcher } = personnel
  const { firstName, lastName, email, phoneNumber, agency, password } = user

  const handlePersonnelChange = (e) => {
    const { id, checked } = e.target
    setPersonnel({
      driver: id === 'driver' ? checked : driver,
      dispatcher: id === 'dispatcher' ? checked : dispatcher,
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setUser({
      ...user,
      [name]: value,
      role: dispatcher ? 'Dispatcher' : 'Driver',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const endpoint = dispatcher
        ? 'http://localhost:8080/dispatcher/register'
        : 'http://localhost:8080/driver/register'
      await axios.post(endpoint, user)
      navigate('/admin/personnel')
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || 'An unexpected error occurred.'
      setError(errorMessage)
      alert(errorMessage)

      // Clear the error message after 5 seconds
      timeoutId = setTimeout(() => setError(''), 5000)
    }
  }

  // Clean up timeout on component unmount
  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <div style={{ minWidth: '80vw', padding: '5rem' }}>
      <h2 className='text-center'>Register A Personnel</h2>
      {error && <div className='alert alert-danger'>{error}</div>}
      <div className='form-check'>
        <label
          className='custom-radio form-check-label lead'
          style={{ fontWeight: '700' }}
          htmlFor='dispatcher'
        >
          <input
            className='form-check-input'
            type='radio'
            name='personnel'
            id='dispatcher'
            checked={dispatcher}
            onChange={handlePersonnelChange}
          />
          <span className='checkmark'></span>
          Dispatcher
        </label>
      </div>
      <div className='form-check'>
        <label
          className='custom-radio form-check-label lead'
          style={{ fontWeight: '700' }}
          htmlFor='driver'
        >
          <input
            className='form-check-input'
            type='radio'
            name='personnel'
            id='driver'
            checked={driver}
            onChange={handlePersonnelChange}
          />
          <span className='checkmark'></span>
          Driver
        </label>
      </div>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <form
            onSubmit={handleSubmit}
            className='row g-3 needs-validation'
            noValidate
          >
            <div className='col-md-4'>
              <label htmlFor='firstName' className='form-label'>
                First name
              </label>
              <input
                type='text'
                className='form-control'
                id='firstName'
                name='firstName'
                placeholder='Add firstname'
                value={firstName}
                onChange={handleInputChange}
                required
              />
              <div className='valid-feedback'>Looks good!</div>
            </div>
            <div className='col-md-4'>
              <label htmlFor='lastName' className='form-label'>
                Last name
              </label>
              <input
                type='text'
                className='form-control'
                id='lastName'
                name='lastName'
                placeholder='Add lastname'
                value={lastName}
                onChange={handleInputChange}
                required
              />
              <div className='valid-feedback'>Looks good!</div>
            </div>
            <div className='col-md-4'>
              <label htmlFor='password' className='form-label'>
                Password
              </label>
              <input
                type='password'
                className='form-control'
                id='password'
                name='password'
                placeholder='Add password'
                value={password}
                onChange={handleInputChange}
                required
              />
              <div className='invalid-feedback'>Please add a password.</div>
            </div>
            <div className='col-md-6'>
              <label htmlFor='email' className='form-label'>
                Email
              </label>
              <input
                type='email'
                className='form-control'
                id='email'
                name='email'
                value={email}
                onChange={handleInputChange}
                required
              />
              <div className='invalid-feedback'>Please provide an email.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='agency' className='form-label'>
                Agency
              </label>
              <input
                type='text'
                className='form-control'
                id='agency'
                name='agency'
                value={agency}
                onChange={handleInputChange}
                required
              />
              <div className='invalid-feedback'>Please provide an agency.</div>
            </div>
            <div className='col-md-3'>
              <label htmlFor='phoneNumber' className='form-label'>
                Phone Number
              </label>
              <input
                type='tel'
                className='form-control'
                id='phoneNumber'
                name='phoneNumber'
                value={phoneNumber}
                onChange={handleInputChange}
                required
              />
              <div className='invalid-feedback'>
                Please provide a phone number.
              </div>
            </div>
            <div className='col-12'>
              <div className='form-check'>
                <input
                  className='form-check-input'
                  type='checkbox'
                  id='invalidCheck'
                  required
                />
                <label className='form-check-label' htmlFor='invalidCheck'>
                  Agree to terms and conditions
                </label>
                <div className='invalid-feedback'>
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className='col-12'>
              <button className='btn btn-primary' type='submit'>
                Register
              </button>
              <Link className='btn btn-danger mx-4' to='/admin'>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreatePersonnel
