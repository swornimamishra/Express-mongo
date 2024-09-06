import React from 'react'
import { Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import useLogout from '../hooks/useLogout';
function TopBar() {
  let navigate = useNavigate()
  let logout = useLogout()
  let role = sessionStorage.getItem('role')
  return <>
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand onClick={() => navigate('/dashboard')} >Head Library</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => navigate('/dashboard')} >Dashboard</Nav.Link>
            {
              role==='admin'?<Nav.Link onClick={() => navigate('/users')} >Users</Nav.Link>:""
              //agar login karne vala admin hoga tabhi vah users ko dekh sakta varna page blank dikhega users visible nahi hoga
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
      <Button variant='danger' style={{marginRight:"10px"}} onClick={()=>logout()}>Logout</Button>
    </Navbar>
  </>
}

export default TopBar