import axios from 'axios'

const API_URL = 'http://localhost:8080' // Update with your Spring Boot backend URL

export const registerAdmin = async (email, password) => {
  const response = await axios.post(`${API_URL}/admin/register`, {
    email,
    password,
  })
  return response.data
}

export const login = async (email, password) => {
  const response = await axios.post(`${API_URL}/login`, {
    email,
    password,
  })
  if (response.data.token) {
    localStorage.setItem('token', response.data.token)
    localStorage.setItem('role', response.data.role) // Assuming your API returns the user's role
  }
  return response.data
}

export const logout = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('role')
}
