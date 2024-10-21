import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import { Biodegradables } from './pages/Biodegradables'
import Productos from './pages/Productos'
import Contacto from './pages/Contacto'
import Bolsas from './pages/products/Bolsas'
import Envases from './pages/products/Envases'
import { Toallitas } from './pages/products/Toallitas'

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
    element:<Productos />,
    children:[
      {
        path:'/productos/bolsas',
        element:<Bolsas />
      },
      {
        path:'/productos/envases',
        element: <Envases />
      },
      {
        path:'/productos/toallitas',
        element:<Toallitas />
      }
    ]
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
