import React from 'react';
import ReactDOM from 'react-dom/client';
//importing pages
import App from './App';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';
import Doctor_cards from './pages/doctor_cards';
import DoctorDashboard from './pages/DoctorDashboard';
import DoctorAuth from './pages/DoctorAuth';


//importing react routers
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },

  {
    path: "/home",
    element: <Home/>,
  },

  {
    path: "/auth",
    element: <LoginPage/>,
  },

  {
    path: "/Doctor_cards/:domain",
    element: <Doctor_cards/>,
  },
  {
    path: "/Doctor_Dashboard",
    element:<DoctorDashboard/>
  },
  {
  path:"/regasdoctor",
  element:<DoctorAuth/>,
  },

  



]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
