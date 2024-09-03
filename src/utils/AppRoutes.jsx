import { Navigate } from "react-router-dom"
import Login from "../components/Login.jsx" 
import Dashboard from "../components/Dashboard.jsx"
const AppRoutes = [
    {
        path: '/login' ,   //this for home page
        element:<Login/>
    },
    {
       path: '/dashboard',
       element:<Dashboard/> 
    },
    {
        path:'*' ,  //common route
        element:<Navigate to='/login'/> 
    }

]

export default AppRoutes