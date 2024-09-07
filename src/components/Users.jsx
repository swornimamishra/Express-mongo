import React, { useState,useEffect } from 'react'
import TopBar from './TopBar'
import Table from 'react-bootstrap/Table';
import useLogout from '../hooks/useLogout';
import AxiosService from '../utils/AxiosService';
import ApiRoutes from '../utils/ApiRoutes';
import toast from 'react-hot-toast';

function Users() {
  let [data,setData] = useState([])
  let logout = useLogout()
  const getData = async()=>{
    try {
      let res = await AxiosService.get(ApiRoutes.USER.path,{
        authenticate:ApiRoutes.USER.path
      })
      if(res.status===200)
      {
        setData(res.data.users)
      }
    } catch (error) {
     console.log(error)
      if(error.response.status===401)
      {
         toast.error("Session Expired")
         logout()
      }
      else
      {
        toast.error(error.response.data.message || "Error Try Again!")
      }
    }
  }

  useEffect(()=>{
    //in order to get data we use here useEffect
  getData()
  },[])
  return <>
    <TopBar />
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((e,i)=>{
            return <tr key ={i}>
              <td>{i+1}</td>
              <td>{e.name}</td>
              <td>{e.email}</td>
              <td>{e.mobile}</td>
              <td>{e.status?"Active":"Inactive"}</td>
            </tr>
          })
        }
      </tbody>
    </Table>
  </>
}

export default Users