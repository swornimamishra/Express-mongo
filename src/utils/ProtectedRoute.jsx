//without valid login no one can access
import React from 'react'
import { Navigate } from 'react-router-dom'
function ProtectedRoute({children}) { 
    // so in admin protectedroute i will check the sessionStorage of roll if roll is admin then i will alow them otherwise not
    let token = sessionStorage.getItem('role')

  return token?children:<Navigate to='/login' />
  //if role is admin then proceed forther if role is not admin then proceet to logout function
}

export default ProtectedRoute