import { Navigate } from "react-router-dom"
import Login from "../components/Login.jsx" 
const AppRoutes = [
    {
        path: '/login' ,   //this for home page
        element:<Login/>
    },
    {
        path:'*' ,  //common route
        element:<Navigate to='/login'/> 
    }

]

export default AppRoutes