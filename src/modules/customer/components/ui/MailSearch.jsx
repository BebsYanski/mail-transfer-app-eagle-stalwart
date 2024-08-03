import React, { useState } from 'react'
import axios from 'axios'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix default icon issues
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
})

const MailSearch = () => {
  const [trackingNumber, setTrackingNumber] = useState('')
  const [mailDetails, setMailDetails] = useState(null)
  const [address, setAddress] = useState('')
  const [mapVisible, setMapVisible] = useState(false)

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
      if (latitude && longitude) {
        fetchAddress(latitude, longitude)
        setMapVisible(true)
      } else {
        setAddress('No location available')
      }
    } catch (error) {
      console.error('Error fetching mail details:', error)
      setMailDetails(null)
      setAddress('Error fetching mail details')
    }
  }

  const fetchAddress = async (lat, lon) => {
    try {
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      )
      const result = response.data
      setAddress(result.display_name)
    } catch (error) {
      console.error('Error fetching address:', error)
      setAddress('Error fetching address')
    }
  }

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
        <div style={{ padding: '20px 20px', textAlign: 'center' }}>
          <h2 style={{ margin: '20px 0' }}>Mail Details</h2>
          <p>
            <span style={{ fontWeight: 700, marginRight: 10 }}>Content:</span>
            {mailDetails.content}
          </p>
          <p>
            <span style={{ fontWeight: 700, marginRight: 10 }}>Sender:</span>{' '}
            {mailDetails.senderName}
          </p>
          <p>
            <span style={{ fontWeight: 700, marginRight: 10 }}>Recipient:</span>{' '}
            {mailDetails.recipientName}
          </p>
          <p>
            <span style={{ fontWeight: 700, marginRight: 10 }}>Location:</span>{' '}
            {address}
          </p>
          <p>
            <span style={{ fontWeight: 700, marginRight: 10 }}>
              Delivery Status:
            </span>
            {mailDetails.deliveryStatus}
          </p>
        </div>
      )}

      {mapVisible &&
        mailDetails &&
        mailDetails.latitude &&
        mailDetails.longitude && (
          <MapContainer
            center={[mailDetails.latitude, mailDetails.longitude]}
            zoom={13}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
            />
            <Marker position={[mailDetails.latitude, mailDetails.longitude]}>
              <Popup>
                <div>
                  <p>{address}</p>
                  <p>Delivery Status: {mailDetails.deliveryStatus}</p>
                </div>
              </Popup>
            </Marker>
          </MapContainer>
        )}
    </div>
  )
}

export default MailSearch
