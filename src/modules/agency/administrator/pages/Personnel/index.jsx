import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Personnel = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [personnel, setPersonnel] = useState({ driver: true, dispatcher: false });
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const { driver, dispatcher } = personnel;

  useEffect(() => {
    loadUsers();
  }, [driver, dispatcher]);

  useEffect(() => {
    setFilteredUsers(users.filter(user =>
      user.firstName.toLowerCase().includes(searchTerm.toLowerCase())
    ));
  }, [searchTerm, users]);

  const checkPersonnel = (e) => {
    setPersonnel({
      driver: false,
      dispatcher: false,
      [e.target.id]: e.target.checked,
    });
  };

  const loadUsers = async () => {
    try {
      const endpoint = dispatcher ? 'dispatcher' : 'driverDetails';
      const role = dispatcher ? 'Dispatcher' : 'Driver';
      const result = await axios.get(`http://localhost:8080/${endpoint}`);
      localStorage.setItem('role', role);
      setUsers(Array.isArray(result.data) ? result.data : []);
    } catch (error) {
      console.error('Error loading users:', error);
      setUsers([]);
    }
  };

  const deleteUser = async (id) => {
    try {
      const endpoint = dispatcher ? 'dispatcher' : 'driver';
      await axios.delete(`http://localhost:8080/${endpoint}/${id}`);
      loadUsers();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className='container' style={{ minWidth: '80vw' }}>
      <div className='form-check'>
        <label className='custom-radio form-check-label lead' style={{ fontWeight: '700' }} htmlFor='dispatcher'>
          <input
            className='form-check-input'
            type='radio'
            name='personnel'
            id='dispatcher'
            checked={dispatcher}
            onChange={checkPersonnel}
          />
          <span className='checkmark'></span>
          Dispatcher
        </label>
      </div>
      <div className='form-check'>
        <label className='custom-radio form-check-label lead' style={{ fontWeight: '700' }} htmlFor='driver'>
          <input
            className='form-check-input'
            type='radio'
            name='personnel'
            id='driver'
            checked={driver}
            onChange={checkPersonnel}
          />
          <span className='checkmark'></span>
          Driver
        </label>
      </div>

      <div className='personnel mt-4'>
        <form className='col-md-6 d-flex my-2 my-lg-0'>
          <input
            className='form-control me-sm-2'
            type='text'
            placeholder='Search by name'
            value={searchTerm}
            onChange={handleSearchChange}
          />
          <button
            className='btn btn-outline-primary my-2 my-sm-0'
            type='button'
            onClick={() => setSearchTerm('')}
          >
            Clear
          </button>
        </form>

        <button
          className='col-md-2 btn btn-primary'
          type='button'
          onClick={() => navigate('/admin/addpersonnel')}
        >
          Create Personnel
        </button>
      </div>

      <div className=''>
        <div className='table-responsive py-4'>
          <table className='table table-primary shadow text-center'>
            <thead>
              <tr>
                <th scope='col'>S/N</th>
                <th scope='col'>First Name</th>
                <th scope='col'>Last Name</th>
                <th scope='col'>Email</th>
                <th scope='col'>Phone Number</th>
                <th scope='col'>Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.length > 0 ? (
                filteredUsers.map((user, index) => {
                  const { id, firstName, lastName, email, phoneNumber } = user;

                  return (
                    <tr key={id}>
                      <th scope='row'>{index + 1}</th>
                      <td>{firstName}</td>
                      <td>{lastName}</td>
                      <td>{email}</td>
                      <td>{phoneNumber}</td>
                      <td>
                        <Link to={`/admin/editpersonnel/${id}`} className='btn btn-primary mx-2'>
                          Edit
                        </Link>
                        <button onClick={() => deleteUser(id)} className='btn btn-danger mx-2'>
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td colSpan='6'>No users found.</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Personnel;