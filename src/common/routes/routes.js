// routes.js
import AdminHome from '../../modules/agency/administrator/pages/Home/index';
import DispatcherHome from '../../modules/agency/dispatcher/pages/home/index';
import AdminRegister from '../../modules/agency/administrator/AdminRegistration';
import AdminLogin from '../../modules/agency/administrator/pages/Login/AdminLogin';
import DispatcherLogin from '../../modules/agency/dispatcher/pages/login/DispatcherLogin';


const routes = [
  {
    path: '/admin',
    component: AdminHome,
    roles: ['admin'],
  },
  {
    path: '/dispatcher',
    component: DispatcherHome,
    roles: ['dispatcher'],
  },
  {
    path: '/admin/register',
    component: AdminRegister,
    roles: [],
  },
  {
    path: '/admin/login',
    component: AdminLogin,
    roles: [],
  },
  {
    path: '/dispatcher/login',
    component: DispatcherLogin,
    roles: [],
  },

  // add other routes here
]

export default routes
