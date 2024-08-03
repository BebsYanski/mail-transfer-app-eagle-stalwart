import React from 'react'
import { Route } from 'react-router-dom'
import AdminNavbar from './components/Navbar'
import AdminHome from './pages/Home'
import AdminDashboard from './pages/Dashboard'
import AdminReports from './pages/Reports'
import Personnel from './pages/Personnel'
import CreatePersonnel from './pages/Personnel/CreatePersonnel'
import EditPersonnel from './pages/Personnel/EditPersonnel'
import ViewPersonnel from './pages/Personnel/ViewPersonnel'
import AdminLogin from './pages/Login'

const AdminRoute = () => {
  return (
    <>
      <Route path='/admin' element={<AdminNavbar />}>
        <Route path='/admin' element={<AdminHome />} />
        <Route path='/admin/dashboard' element={<AdminDashboard />} />
        <Route path='/admin/reports' element={<AdminReports />} />
        <Route path='/admin/personnel' element={<Personnel />} />
        <Route path='/admin/addpersonnel' element={<CreatePersonnel />} />
        <Route path='/admin/editpersonnel/:id' element={<EditPersonnel />} />
        <Route path='/admin/viewpersonnel/:id' element={<ViewPersonnel />} />
      </Route>
      <Route path='/admin/login' element={<AdminLogin />} />
    </>
  )
}

export default AdminRoute
