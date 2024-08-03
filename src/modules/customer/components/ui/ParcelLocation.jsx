import React, { useState, useEffect } from 'react'

const ParcelLocation = ({ trackingNumber }) => {
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const response = await fetch(
          `http://your-backend-url/api/parcels/${trackingNumber}/location`
        )
        if (response.ok) {
          const data = await response.json()
          setLocation({ latitude: data.latitude, longitude: data.longitude })
        } else {
          console.error('Failed to fetch location')
        }
      } catch (error) {
        console.error(error)
      }
    }

    fetchLocation()
    const interval = setInterval(fetchLocation, 10000) // Poll every 10 seconds
    return () => clearInterval(interval)
  }, [trackingNumber])

  return (
    <div>
      <h1>Parcel Location</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>
    </div>
  )
}

export default ParcelLocation
