
  import React from 'react'
  import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
  import 'leaflet/dist/leaflet.css';
  // [4.156, 9.2632]} Buea
  const GoogleMaps = ({ longitude, latitude, deliveryStatus }) => {
    return (
      <div>
        <MapContainer
          center={[latitude, longitude]}
          zoom={13}
          // scrollWheelZoom={false}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'
          />
          <Marker position={[latitude, longitude]}>
            <Popup>
              Delivery Status:{deliveryStatus} <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    )
  }
  
  export default GoogleMaps
  