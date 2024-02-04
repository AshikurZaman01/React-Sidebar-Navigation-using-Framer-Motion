import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './Components/Roots/Roots';
import Home from './Components/Pages/Home/Home';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import FileManager from './Components/Pages/FileManager/FileManager';
import Analytics from './Components/Pages/Analytics/Analytics';
import Order from './Components/Pages/Order/Order';
import Users from './Components/Pages/Users/Users';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Roots></Roots>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>
      },
      {
        path: "/fileManager",
        element: <FileManager></FileManager>
      },
      {
        path: "/analytic",
        element: <Analytics></Analytics>
      },
      {
        path: "/order",
        element: <Order></Order>
      },
      {
        path: "/users",
        element: <Users></Users>
      }
    ]
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
