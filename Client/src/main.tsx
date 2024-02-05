import React from 'react'
import ReactDOM from 'react-dom/client'

import './app/layout/styles.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './app/router/router.tsx'
import { StoreProvider } from './app/context/StoreContext.tsx'


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
        <RouterProvider router={router}></RouterProvider>
    </StoreProvider>
    
  </React.StrictMode>,
)
