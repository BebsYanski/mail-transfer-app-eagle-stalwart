import React from 'react'
import { useNavigate } from 'react-router-dom'

const TrackInput = () => {

  const navigate = useNavigate();

  return (
    <div className='container my-5'>
      <div className='mb-3'>
        <label htmlFor='trackingId' className='form-label'>
          Track ID
        </label>
        <input
          type='text'
          className='form-control'
          name='trackingId'
          id='trackingId'
          aria-describedby='helpId'
          placeholder='track id goes here'
        />
        {/*  <small id='helpId' className='form-text text-muted'>
          Type in your Track Id
        </small> */}
      </div>

      <button onClick={()=> navigate('/customer/maps')} type='button' className='btn btn-primary'>
        Track Mail
      </button>
    </div>
  )
}

export default TrackInput
