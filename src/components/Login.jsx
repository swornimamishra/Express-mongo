import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import toast from 'react-hot-toast';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import { useNavigate } from 'react-router-dom';


function Login() {
  let navigate = useNavigate()

const handleLogin = async(e)=>{
  e.preventDefault()
  try{
    let formData = new FormData(e.target)  //yahan hum data ko formData se rahe hai or  
    let data = Object.fromEntries(formData)  //convert kar rahe hai form me hone vali entries or data ko  object me so when the data extraction is complete then we can make an api request
        //  toast.success("Login Successfull")
        if(data.email && data.password)
        {
           let res = await AxiosService.post(ApiRoutes.LOGIN.path,data)
           if(res.status===200)
            {
            sessionStorage.setItem('token',res.data.token),
            sessionStorage.setItem('name',res.data.name),
            sessionStorage.setItem('role',res.data.role)
            toast.success(res.data.message)
            navigate('/dashboard')
           }
        }
        else{
          toast.error("All Fields Are Required")
        }
  }catch (error)
  {
  toast.error(error.response.data.message || "Error Try Again!")
  }
}

useEffect(()=>{
    sessionStorage.clear()
},[])

  return <>
  <h2 style={{textAlign:"center"}}>Login Here!</h2>
  <div className='loginWrapper'>
  <Form onSubmit={handleLogin} >
  <Form.Group className="mb-3" >
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email"  name='email'/>
    {/* <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text> */}
  </Form.Group>

  <Form.Group className="mb-3" >
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" name="password"/>
  </Form.Group>
  {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group> */}
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
  </div>
</>
}

export default Login