import React, { useState } from 'react'
import axios from 'axios'
import { API_KEY } from '../../pages/maps/Config'
import { useNavigate } from 'react-router-dom'

const SearchMail = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [mailDetails, setMailDetails] = useState(null)
  const [address, setAddress] = useState('')
  const navigate = useNavigate()

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8080/aMail/${trackingNumber}`
      )
      setMailDetails(response.data)
      const { latitude, longitude, deliveryStatus } = response.data
      console.log(latitude, longitude, deliveryStatus)
      localStorage.setItem('longitude', longitude)
      localStorage.setItem('latitude', latitude)
      localStorage.setItem('deliveryStatus', deliveryStatus)
      fetchAddress(latitude, longitude)
    } catch (error) {
      console.error('Error fetching mail details:', error)
    }
  }

  const fetchAddress = async (lat, lon) => {
    lat = 4.156
    lon = 9.2632
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      )
      console.log(response.data)
      const result = response.data
      setAddress(result.display_name)
    } catch (error) {
      console.error('Error fetching address:', error)
    }
  }

  // [4.156, 9.2632]} Buea

  return (
    <div>
      <h1 className='text-center'>Search Mail by Tracking Number</h1>
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
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            placeholder='Enter Tracking Number'
          />
          {/*  <small id='helpId' className='form-text text-muted'>
          Type in your Track Id
        </small> */}
        </div>

        <button
          onClick={() => {
            handleSearch()
            // navigate('/customer/maps')
          }}
          type='button'
          className='btn btn-primary'
        >
          Track Mail
        </button>
      </div>

      {mailDetails && (
        <div>
          <h2>Mail Details</h2>
          <p>Content: {mailDetails.content}</p>
          <p>Sender: {mailDetails.senderName}</p>
          <p>Recipient: {mailDetails.recipientName}</p>
          <p>Location: {address}</p>
          <p>Delivery Status: {mailDetails.deliveryStatus}</p>
        </div>
      )}
    </div>
  )
}

export default SearchMail
