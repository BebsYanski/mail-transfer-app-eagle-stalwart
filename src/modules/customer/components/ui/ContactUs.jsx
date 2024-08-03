import React from 'react'

const ContactUs = () => {
  return (
    <div className=' container border rounded p-4 my-5 shadow'>
      <h2>Contact Us</h2>
      <div className='row '>
        <div className='row  col-md-6'>
          <h4 className='col-md-6'>Email:</h4>
          <a className='col-md-6' href='mailto:bebsyanski@gmail.com'>
            dummy@gmail.com
          </a>
        </div>

        <div className='row col-md-6'>
          <h4 className='col-md-6'>Tel:</h4>
          <a className='col-md-6' href='tel:+237680062425'>
            +237 680 062 425
          </a>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
