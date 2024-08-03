import { useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const RoleSelection = () => {
  const navigate = useNavigate()
  const [admin, setAdmin] = useState([]);

  useEffect(()=>{
    loadUser()
  },[]);

  const loadUser = async ()=>{
     const result = await axios.get(`http://localhost:8080/admin`)
    let data = result.data
    setAdmin(data)
  }

  const handleRoleSelection = (role) => {
    if(admin.length === 0){
      navigate('/admin/register')
    } else{
      if (role === 'admin') {
        navigate('/admin/login')
      } else if (role === 'dispatcher') {
        navigate('/dispatcher/login')
      }
    }
  }

  return (
    <div className='container text-center'>
      <h2>Select Your Role</h2>
      <button
        className='mx-5 btn btn-outline-primary'
        onClick={() => handleRoleSelection('admin')}
      >
        Administrator
      </button>
      <button
        className='mx-5 btn btn-primary '
        onClick={() => handleRoleSelection('dispatcher')}
      >
        Dispatcher
      </button>
    </div>
  )
}

export default RoleSelection
