// React
import React from 'react'
import ReactDOM from 'react-dom/client'
// React Router
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Routes
import Home, { Project } from './Home'
import ErrorPage from './ErrorPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <ErrorPage />,
    children: []
  },
  {
    path: '/project/:projectId',
    element: <Project />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

