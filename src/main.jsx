import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import Header from './components/Header'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { Biodegradables } from './pages/Biodegradables'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'

let router = createBrowserRouter([ 
  {
    path:'/',
    element:<Home />
  },
  {
    path:'/biodegradables',
    element:<Biodegradables />
  },
  {
    path:'/productos',
    element:<Productos />
  },
  {
    path:'/contacto',
    element: <Contacto />
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
