import React from 'react'
import AppRoutes from './utils/AppRoutes'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
AppRoutes

function App() {
  const router = createBrowserRouter(AppRoutes)  //jo bhi array humne create kiya hai vo lenge jaise humne create kiya array AppRoute

  return <RouterProvider router={router}></RouterProvider>
}

export default App