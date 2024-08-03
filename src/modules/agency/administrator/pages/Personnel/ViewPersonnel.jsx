import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const ViewPersonnel = () => {

  const [user,setUser] = useState({
    name:"",
    username:"",
    email:""
  });

  const {name,username,email} = user;

  const {id} = useParams();

  useEffect(() => {
    loadUser()
  },[]);

  const loadUser = async () => {
   /*  const result = await axios.get(`http://localhost:8080/user/${id}`)
    console.log(result.data)
    setUser(result.data) */

    alert("User Loaded");
  }


  return (
    <div>
      <h2>View Personnel</h2>

      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='personnel'
          id='dispatcher'
        />
        <label className='form-check-label' htmlFor='dispatcher'>
          {' '}
          Dispatcher{' '}
        </label>
      </div>
      <div className='form-check'>
        <input
          className='form-check-input'
          type='radio'
          name='personnel'
          id='driver'
          checked
          disabled
        />
        <label className='form-check-label' htmlFor='driver'>
          Driver
        </label>
      </div>

      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow '>
          <h2 className='text-center m-4'>User Details</h2>
          <div className='card'>
            <div className='card-header'>
              <p className='text-center'>
                <b>Details of user id: {user.id}</b>
              </p>
              <ul className='list-group list-group-flush'>
                <li className='list-group-item'>
                  <b>Name: </b>
                  {name}
                </li>
                <li className='list-group-item'>
                  <b>UserName: </b>
                  {username}
                </li>
                <li className='list-group-item'>
                  <b>Email: </b>
                  {email}
                </li>
              </ul>
            </div>
          </div>
          <div className='text-center'>
            <Link className='btn btn-primary my-2' to={'/'}>
              Return
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ViewPersonnel
