import React from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

function useLogout() {
    let navigate = useNavigate()
  return ()=>{
    toast.success('Log Out Successfull')
    sessionStorage.clear()
    navigate('/login')
  }
}

export default useLogout