import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import ErrorPage from '@/error.jsx'
import User from '@/components/Users/User.jsx'
import Dashboard from '@/components/Dashboard/Dashboard.jsx'
import CreateNews from '@/components/CreateNews/CreateNews.jsx'
Dashboard

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
        path: 'users/:userId',
        element: <User/>,
      }
    ]
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
