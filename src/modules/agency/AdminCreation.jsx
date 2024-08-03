import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const AdminCreation = () => {
  let navigate = useNavigate()

  const [admin, setAdmin] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    agency: '',
    password: '',
    role: "Administrator"
  })

  const { firstName, lastName, email, phoneNumber, agency, password } = admin

  const onInputChange = (e) => {
    setAdmin({ ...admin, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await axios.post('http://localhost:8080/admin/register', admin)
    navigate('/admin')
  }

  return (
    <div className='container'>
      <h2> Create Admin </h2>

      <form
        onSubmit={(e) => handleSubmit(e)}
        className='row g-3 needs-validation'
        noValidate
      >
        <div className='col-md-4'>
          <label htmlFor='validationCustom01' className='form-label'>
            First name{' '}
          </label>{' '}
          <input
            type='text'
            className='form-control'
            id='validationCustom01'
            name='firstName'
            placeholder='Add firstname'
            value={firstName}
            onChange={(e) => onInputChange(e)}
            required
          />
          <div className='valid-feedback'> Looks good! </div>
        </div>
        <div className='col-md-4'>
          <label htmlFor='validationCustom02' className='form-label'>
            Last name{' '}
          </label>{' '}
          <input
            type='text'
            className='form-control'
            id='validationCustom02'
            name='lastName'
            placeholder='Add lastname'
            value={lastName}
            onChange={(e) => onInputChange(e)}
            required
          />
          <div className='valid-feedback'> Looks good! </div>{' '}
        </div>{' '}
        <div className='col-md-4'>
          <label htmlFor='validationPassword' className='form-label'>
            Password{' '}
          </label>{' '}
          <div className='input-group'>
            <input
              type='password'
              value={password}
              name='password'
              placeholder='Add password'
              onChange={(e) => onInputChange(e)}
              className='form-control'
              id='validationPassword'
              aria-describedby='inputGroupPrepend'
              required
            />
            <div className='invalid-feedback'> Please add a password. </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className='col-md-6'>
          <label htmlFor='validationCustom03' className='form-label'>
            Email{' '}
          </label>
          <input
            type='email'
            value={email}
            name='email'
            onChange={(e) => onInputChange(e)}
            className='form-control'
            id='validationCustom03'
            required
          />
          <div className='invalid-feedback'> Please provide an email. </div>{' '}
        </div>{' '}
        <div className='col-md-3'>
          <label htmlFor='validationCustom04' className='form-label'>
            Agency{' '}
          </label>{' '}
          <input
            type='text'
            value={agency}
            name='agency'
            onChange={(e) => onInputChange(e)}
            className='form-control'
            id='validationCustom04'
            required
          />
          <div className='invalid-feedback'> Please provide an agency. </div>{' '}
        </div>{' '}
        <div className='col-md-3'>
          <label htmlFor='validationCustom05' className='form-label'>
            Phone Number{' '}
          </label>{' '}
          <input
            type='tel'
            value={phoneNumber}
            name='phoneNumber'
            onChange={(e) => onInputChange(e)}
            className='form-control'
            id='validationCustom05'
            required
          />
          <div className='invalid-feedback'>
            {' '}
            Please provide a phone number.{' '}
          </div>{' '}
        </div>{' '}
        <div className='col-12'>
          <div className='form-check'>
            <input
              className='form-check-input'
              type='checkbox'
              value=''
              id='invalidCheck'
              required
            />
            <label className='form-check-label' htmlFor='invalidCheck'>
              Agree to terms and conditions{' '}
            </label>{' '}
            <div className='invalid-feedback'>
              You must agree before submitting.{' '}
            </div>{' '}
          </div>{' '}
        </div>{' '}
        <div className='col-12'>
          <button className='btn btn-primary' type='submit'>
            Submit{' '}
          </button>

          <Link className='btn btn-danger mx-4' to={'/admin'}>
            Cancel{' '}
          </Link>
        </div>
      </form>
    </div>
  )
}

export default AdminCreation
