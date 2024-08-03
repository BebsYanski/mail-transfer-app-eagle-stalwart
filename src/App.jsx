import { Route, Routes } from 'react-router-dom'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import Customer from './modules/customer'
import { AuthProvider } from './context/AuthContext'

import AdminCreation from './modules/agency/AdminCreation'
import Agency from './modules/agency'
import NotFound from './modules/NotFound'
import CustomerNavbar from './modules/customer/components/Navbar'
import About from './modules/customer/pages/about-us'
import Maps from './modules/customer/pages/maps'
import Home from './modules/customer/pages/home'

// Admin
import AdminNavbar from './modules/agency/administrator/components/Navbar'
import AdminDashboard from './modules/agency/administrator/pages/Dashboard'
import AdminHome from './modules/agency/administrator/pages/Home'
import AdminLogin from './modules/agency/administrator/pages/Login'
import Personnel from './modules/agency/administrator/pages/Personnel'
import AdminReports from './modules/agency/administrator/pages/Reports'
import CreatePersonnel from './modules/agency/administrator/pages/Personnel/CreatePersonnel'
import ViewPersonnel from './modules/agency/administrator/pages/Personnel/ViewPersonnel'
import EditPersonnel from './modules/agency/administrator/pages/Personnel/EditPersonnel'

// Dispatcher
import DispatcherNavbar from './modules/agency/dispatcher/components/Navbar'
import DispatcherLogin from './modules/agency/dispatcher/pages/login'
import DispatcherHome from './modules/agency/dispatcher/pages/home'
import DispatcherReport from './modules/agency/dispatcher/pages/report'
import Mail from './modules/agency/dispatcher/pages/mail-item'
import CreateMail from './modules/agency/dispatcher/pages/mail-item/CreateMail'
import EditMail from './modules/agency/dispatcher/pages/mail-item/EditMail'
import ViewMail from './modules/agency/dispatcher/pages/mail-item/ViewMail'

// Role Selection
import RoleSelection from './modules/RoleSelection'

// Auth Components
import ProtectedRoute from './context/ProtectedRoute'
import { useEffect, useState } from 'react'
import axios from 'axios'

// import './App.css'

function App() {



  return (
    <AuthProvider>
      {/* <h2>Welcome to Eagle Stalwart</h2> */}
      <Routes>
        <Route path='/' element={<RoleSelection />} />
        <Route path='/agency' element={<Agency />} />

        {/*    <Route path='/customer' element={<Home />} />
        <Route path='/customer/about' element={<About />} />
        <Route path='/customer/maps' element={<Maps />} /> */}

        <Route path='/customer' element={<CustomerNavbar />}>
          <Route path='/customer' element={<Home />} />
          <Route path='/customer/about' element={<About />} />
          <Route path='/customer/maps' element={<Maps />} />
        </Route>

        
            <Route path='/admin/login' element={<AdminLogin />} />
            <Route path='/dispatcher/login' element={<DispatcherLogin />} />
            <Route path='/admin/register' element={<AdminCreation />} />
          

        <Route element={<ProtectedRoute allowedRoles={['admin']} />}>
          <Route path='/admin' element={<AdminNavbar />}>
            <Route path='/admin' element={<AdminHome />} />
            <Route path='/admin/dashboard' element={<AdminDashboard />} />
            <Route path='/admin/reports' element={<AdminReports />} />
            <Route path='/admin/personnel' element={<Personnel />} />
            <Route path='/admin/addpersonnel' element={<CreatePersonnel />} />
            <Route
              path='/admin/editpersonnel/:id'
              element={<EditPersonnel />}
            />
            <Route
              path='/admin/viewpersonnel/:id'
              element={<ViewPersonnel />}
            />
          </Route>
        </Route>

        <Route element={<ProtectedRoute allowedRoles={['Dispatcher']} />}>
          <Route path='/dispatcher' element={<DispatcherNavbar />}>
            <Route path='/dispatcher' element={<DispatcherHome />} />
            <Route path='/dispatcher/report' element={<DispatcherReport />} />
            <Route path='/dispatcher/mail' element={<Mail />} />
            <Route path='/dispatcher/createmail' element={<CreateMail />} />
            <Route path='/dispatcher/editmail/:id' element={<EditMail />} />
            <Route path='/dispatcher/viewmail/:id' element={<ViewMail />} />
          </Route>
        </Route>

        <Route path='*' element={<NotFound />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
