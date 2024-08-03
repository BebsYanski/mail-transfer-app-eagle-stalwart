import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
// import './personnel.css'

const CreateMail = () => {
  let navigate = useNavigate()
  const [personnel, setPersonnel] = useState({
    driver: true,
    dispatcher: false,
  })
  const [mail, setMail] = useState({
    cost: '',
    content: '',
    paymentMethod: '',
    priority: '',
    senderAgency: '',
    senderName: '',
    senderEmail: '',
    senderContact: '',
    recipientContact: '',
    recipientEmail: '',
    recipientName: '',
    recipientDestination: '',
  })


  /* const checkPersonnel = (e) => {
    let newpersonnel = { driver: null, dispatcher: null }
    setPersonnel({ ...newpersonnel, [e.target.id]: e.target.checked })
  } */

  const {
    cost,
    content,
    paymentMethod,
    priority,
    senderAgency,
    senderName,
    senderEmail,
    senderContact,
    recipientContact,
    recipientEmail,
    recipientName,
    recipientDestination,
  } = mail

  const onInputChange = (e) => {
      setMail({ ...mail, [e.target.name]: e.target.value})
    
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
      await axios.post('http://localhost:8080/mails', mail)
    
    navigate('/dispatcher/mail')
  }
 
  return (
    <div className='' style={{ minWidth: '80vw', padding: '2rem' }}>
      <h2 className='text-center'>Create A new Mail</h2>

      <div className='row'>
        <div className='col-md-10 offset-md-1 border rounded p-4 mt-2 shadow'>
          <div className='row'>
            <h3 className='mb-4 col-md-4'>Mail Infos</h3>
            <h3 className='mb-4 col-md-4'>Sender Infos</h3>
            <h3 className='mb-4 col-md-4'>Recipient Infos</h3>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className='row g-3 my-4 needs-validation'
            noValidate
          >
            <div className='row mt-3'>
              <div className='col-md-4'>
                <label htmlFor='mailContent' className='form-label'>
                  Mail Content
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='mailContent'
                  name='content'
                  placeholder=' content'
                  value={content}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='senderName' className='form-label'>
                  Sender name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='senderName'
                  name='senderName'
                  placeholder=' senderName'
                  value={senderName}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='recipientName' className='form-label'>
                  Recipient name
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipientName'
                  name='recipientName'
                  placeholder=' recipientName'
                  value={recipientName}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-4'>
                <label htmlFor='cost' className='form-label'>
                  Cost
                </label>
                <input
                  type='number'
                  className='form-control'
                  id='cost'
                  name='cost'
                  placeholder=' cost'
                  value={cost}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='senderContact' className='form-label'>
                  Sender Contact
                </label>
                <input
                  type='tel'
                  className='form-control'
                  id='senderContact'
                  name='senderContact'
                  placeholder=' senderContact'
                  value={senderContact}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='recipientContact' className='form-label'>
                  Recipient Contact
                </label>
                <input
                  type='tel'
                  className='form-control'
                  id='recipientContact'
                  name='recipientContact'
                  placeholder=' recipientContact'
                  value={recipientContact}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-4'>
                <label htmlFor='paymentMethod' className='form-label'>
                  Payment Method
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='paymentMethod'
                  name='paymentMethod'
                  placeholder=' paymentMethod'
                  value={paymentMethod}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='senderEmail' className='form-label'>
                  sender Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='senderEmail'
                  name='senderEmail'
                  placeholder=' senderEmail'
                  value={senderEmail}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='recipientEmail' className='form-label'>
                  Recipient Email
                </label>
                <input
                  type='email'
                  className='form-control'
                  id='recipientEmail'
                  name='recipientEmail'
                  placeholder=' recipientEmail'
                  value={recipientEmail}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>
            </div>

            <div className='row mt-3'>
              <div className='col-md-4'>
                <label htmlFor='priority' className='form-label'>
                  Priority
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='priority'
                  name='priority'
                  placeholder=' priority'
                  value={priority}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='senderAgency' className='form-label'>
                  Sender Agency
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='senderAgency'
                  name='senderAgency'
                  placeholder=' senderAgency'
                  value={senderAgency}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>

              <div className='col-md-4'>
                <label htmlFor='recipientDestination' className='form-label'>
                  Recipient Destination
                </label>
                <input
                  type='text'
                  className='form-control'
                  id='recipientDestination'
                  name='recipientDestination'
                  placeholder=' recipientDestination'
                  value={recipientDestination}
                  onChange={(e) => onInputChange(e)}
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </div>
            </div>

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
                  Agree to terms and conditions
                </label>
                <div className='invalid-feedback'>
                  You must agree before submitting.
                </div>
              </div>
            </div>
            <div className='col-12'>
              <button className='btn btn-primary' type='submit'>
                Create
              </button>
              <Link className='btn btn-danger mx-4' to={'/dispatcher'}>
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default CreateMail
