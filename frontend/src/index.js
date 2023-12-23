import React from 'react';
import ReactDOM from 'react-dom/client';
//importing pages
import App from './App';
import Home from './pages/Home';
import LoginPage from './pages/LoginPage';


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
    path: "home",
    element: <Home/>,
  },

  {
    path: "login",
    element: <LoginPage/>,
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
