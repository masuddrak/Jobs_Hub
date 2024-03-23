import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Layout from './Layout/Layout';
import Home from './Pages/Home';
import Statistics from './Pages/Statistics';
import Applied from './Pages/Applied';
import JobDetails from './components/JobDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/applied",
        element:<Applied></Applied>,
        loader:()=>fetch("../public/jobs.json")
      },
      
      {
        path:"/applied/:applidID",
        element:<JobDetails></JobDetails>,
        loader:()=>fetch("../public/jobs.json")

      },

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
