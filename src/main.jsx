import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/error.jsx'
import Dashboard from '@/components/Dashboard/Dashboard.jsx'
import CreateNews from '@/components/CreateNews/CreateNews.jsx'
import ManageNews from '@/components/ManageNews/ManageNews.jsx'
import Performance from '@/components/Performance/Performance.jsx'
import 'react-toastify/dist/ReactToastify.css';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage/>,
    children: [
      {
        path: '/',
        element: <Dashboard/>
      },
      {
        path: '/create-news',
        element: <CreateNews/>
      },
      {
        path: '/manage-news',
        element: <ManageNews/>
      },
      {
        path: '/performance',
        element: <Performance/>
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
