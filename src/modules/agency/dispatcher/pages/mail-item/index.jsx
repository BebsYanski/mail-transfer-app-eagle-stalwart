import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Mail = () => {
  const [mails, setMails] = useState([])
  const [drivers, setDrivers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')

  const { id } = useParams()
  let navigate = useNavigate()

  useEffect(() => {
    loadMails()
  }, [])

  useEffect(() => {
    axios
      .get('http://localhost:8080/driverDetails')
      .then((response) => {
        console.log(response.data)
        setDrivers(response.data)
      })
      .catch((error) => console.error('Error fetching drivers: ', error))
  }, [])

  const handleAssign = (mailId, driverId) => {
    axios
      .put(`http://localhost:8080/${mailId}/assign-driver`, { driverId })
      .then((response) => {
        console.log('Mail assigned to driver: ', response.data)
        loadMails() // Reload mails to reflect changes
      })
      .catch((error) => console.error('Error assigning mail:', error))
  }

  const handleDriverChange = (mailId, driverId) => {
    handleAssign(mailId, driverId)
  }

  const loadMails = async () => {
    let result = await axios.get('http://localhost:8080/mailDetails')
    let data = result.data
    setMails(data)
    console.log('Mails Loaded')
  }

  const deleteMails = async (id) => {
    await axios.delete(`http://localhost:8080/mail/${id}`)
    loadMails()
  }

  // Filter mails based on search term
  const filteredMails = mails.filter((mail) =>
    mail.content.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className='container' style={{ minWidth: '80vw' }}>
      <div className='personnel mt-4'>
        <form
          className='col-md-6 d-flex my-2 my-lg-0'
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className='form-control me-sm-2'
            type='text'
            placeholder='Search by mail content'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)} // Update search term state
          />
          <button
            className='btn btn-outline-primary my-2 my-sm-0'
            type='submit'
            onClick={() => setSearchTerm('')}
          >
            Clear
          </button>
        </form>

        <button
          className='col-md-2 btn btn-primary'
          type='button'
          onClick={() => navigate('/dispatcher/createmail')}
        >
          Create Mail
        </button>
      </div>

      <div className=''>
        <div className='table-responsive py-4'>
          <table className='table table-primary shadow text-center'>
            <thead>
              <tr>
                <th scope='col'>S/N</th>
                <th scope='col'>Mail Content</th>
                <th scope='col'>Sender</th>
                <th scope='col'>Recipient</th>
                <th scope='col'>Destination</th>
                <th scope='col'>Cost</th>
                <th scope='col'>Action</th>
                <th scope='col'>Assign Driver</th>
              </tr>
            </thead>
            <tbody>
              {filteredMails.map((mail, index) => {
                const {
                  id,
                  cost,
                  content,
                  senderName,
                  senderContact,
                  senderAgency,
                  recipientName,
                  recipientContact,
                  recipientDestination,
                  driverId,
                  driverName,
                } = mail

                return (
                  <tr key={id}>
                    <th scope='row'>{index + 1}</th>
                    <td>{content}</td>
                    <td>{senderName}</td>
                    <td>{recipientName}</td>
                    <td>{recipientDestination}</td>
                    <td>{cost}</td>
                    <td>
                      <Link
                        to={`/dispatcher/viewmail/${id}`}
                        className='btn btn-primary mx-2'
                      >
                        View
                      </Link>
                      <Link
                        to={`/dispatcher/editmail/${id}`}
                        className='btn btn-outline-primary mx-2'
                      >
                        Edit
                      </Link>
                      <button
                        onClick={() => deleteMails(id)}
                        className='btn btn-danger mx-2'
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <select
                        value={driverId || ''}
                        id='drivers'
                        onChange={(e) => handleDriverChange(id, e.target.value)}
                      >
                        <option disabled value=''>
                          Select Driver
                        </option>
                        {drivers.map((driver) => (
                          <option key={driver.id} value={driver.id}>
                            {driver.firstName + ' ' + driver.lastName}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Mail
