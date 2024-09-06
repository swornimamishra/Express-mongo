import React from 'react'
import { Navigate } from 'react-router-dom'
function AdminProtectedRoute({children}) { 
    // so in admin protectedroute i will check the sessionStorage of roll if roll is admin then i will alow them otherwise not
    let role = sessionStorage.getItem('role')

  return role==='admin'?children:<Navigate to='/login' />
  //if role is admin then proceed forther if role is not admin then proceet to logout function
}

export default AdminProtectedRoute