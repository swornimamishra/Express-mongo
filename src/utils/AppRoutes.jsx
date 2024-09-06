import { Navigate } from "react-router-dom"
import Login from "../components/Login.jsx" 
import Dashboard from "../components/Dashboard.jsx"
import Users from "../components/Users.jsx"
import AdminProtectedRoute from "./AdminProtectedRoute.jsx"
import ProtectedRoute from "./ProtectedRoute.jsx"
const AppRoutes = [
    {
        path: '/login' ,   //this for home page
        element:<Login/>
    },
    {
       path: '/dashboard',
       element:<ProtectedRoute><Dashboard/> </ProtectedRoute>
       //only a person loged in can access
    },
    {
        path: '/users',
        element:<AdminProtectedRoute><Users/></AdminProtectedRoute>
        //so here we are calling users inside adminprotectedroute so users become children od AdminProtectedRoute
     },
    {
        path:'*' ,  //common route
        element:<Navigate to='/login'/> 
    }

]

export default AppRoutes