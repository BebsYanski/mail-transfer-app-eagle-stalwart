import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { jsPDF } from 'jspdf'


const ViewMail = () => {
  let navigate = useNavigate()
  const { id } = useParams()

  const [mail, setMail] = useState({
    
    cost: '',
    content: '',
    paymentMethod: '',
    trackingNumber: '',
    dateCreated: '',
    senderAgency: '',
    senderName: '',
    senderEmail: '',
    senderContact: '',
    recipientContact: '',
    recipientEmail: '',
    recipientName: '',
    recipientDestination: '',
  })

  useEffect(() => {
    loadUser()
  }, [])

  const loadUser = async () => {
     const result = await axios.get(`http://localhost:8080/${id}/mailDetails`)
    console.log(result.data)
    setMail(result.data)

    // alert('User Loaded')
  }

  const generateReceipt = () => {
    if (!mail.id) return;

    const doc = new jsPDF();

    doc.text('Mail Receipt', 80, 20);
    doc.text(`Date Created: ${mail.mailCreationDate}`, 20, 40);
    doc.text(`Mail ID: ${mail.id}`, 20, 60);
    doc.text(`Tracking Number: ${mail.trackingNumber}`, 20, 70);
    doc.text(`Tracking Website(URL): 'https://www.eaglestalwart/customers.com'`, 20, 80);
    doc.text(`Content: ${mail.content}`, 20, 90);
    doc.text(`Sender Name: ${mail.senderName}`, 20, 100);
    doc.text(`Sender Contact: ${mail.senderContact}`, 20, 110);
    doc.text(`Recipient Name: ${mail.recipientName}`, 20, 120);
    doc.text(`Recipient Contact: ${mail.recipientContact}`, 20, 130);
    doc.text(`Recipient Email: ${mail.recipientEmail}`, 20, 140);
    doc.text(`Destination: ${mail.recipientDestination}`, 20, 150);
    doc.text(`Cost: ${mail.cost}`, 20, 160);

    doc.save('receipt.pdf');

    navigate('/dispatcher/mail')
  };


  return (
    <div className='' style={{ minWidth: '100vw', padding: '1rem' }}>
      <h2 className='text-center'>Mail Details</h2>

      <div className='row'>
        <div className='col-md-10 row offset-md-1 border rounded p-4 mt-2 shadow'>
          <div className='card col-4'>
            <div className='card-header'>
              <h3 className='mb-4'>Mail Infos</h3>
            </div>

            <ul className='list-group list-group-flush card-body'>
              <li className='list-group-item'>
                <b>Content:</b>
                {mail.content}
              </li>
              <li className='list-group-item'>
                <b>Tracking Number:</b>
                {mail.trackingNumber}
              </li>
              <li className='list-group-item'>
                <b>Cost:</b>
                {mail.cost}
              </li>
              <li className='list-group-item'>
                <b>Payment Method:</b>
                {mail.paymentMethod}
              </li>
              <li className='list-group-item'>
                <b>Date Created:</b>
                {mail.mailCreationDate}
              </li>
            </ul>
          </div>

          <div className='card col-4'>
            <div className='card-header'>
              <h3 className='mb-4'>Sender Infos</h3>
            </div>

            <ul className='list-group list-group-flush card-body'>
              <li className='list-group-item'>
                <b>Sender Name:</b>
                {mail.senderName}
              </li>
              <li className='list-group-item'>
                <b>Sender Email:</b>
                {mail.senderEmail}
              </li>
              <li className='list-group-item'>
                <b>Sender Contact:</b>
                {mail.senderContact}
              </li>
              <li className='list-group-item'>
                <b>Sender Agency:</b>
                {mail.senderAgency}
              </li>
            </ul>
          </div>

          <div className='card col-4'>
            <div className='card-header'>
              <h3 className='mb-4'>Recipient Infos</h3>
            </div>

            <ul className='list-group list-group-flush card-body'>
              <li className='list-group-item'>
                <b>Recipient Name:</b>
                {mail.recipientName}
              </li>
              <li className='list-group-item'>
                <b>Recipient Email:</b>
                {mail.recipientEmail}
              </li>
              <li className='list-group-item'>
                <b>Recipient Contact:</b>
                {mail.recipientContact}
              </li>
              <li className='list-group-item'>
                <b>Recipient Destination:</b>
                {mail.recipientDestination}
              </li>
            </ul>
          </div>
        </div>
        <div className='my-5 text-center'>
          <button
            type='button'
            className='btn btn-primary text-center'
            onClick={generateReceipt}
          >
            Generate Receipt
          </button>
        </div>
      </div>
    </div>
  )
}

export default ViewMail
