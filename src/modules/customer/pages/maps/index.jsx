import React from 'react'
import GoogleMaps from '../../components/ui/GoogleMaps'



const Maps = () => {

  const longitude = localStorage.getItem('longitude')
  const latitude = localStorage.getItem('latitude')
  const deliveryStatus = localStorage.getItem('deliveryStatus')

  return (
    <div className='container'>
      <GoogleMaps
        longitude={longitude}
        latitude={latitude}
        deliveryStatus={deliveryStatus}
      />
    </div>
  )
}

export default Maps