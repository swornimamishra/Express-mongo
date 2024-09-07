import axios from "axios";
const AxiosService = axios.create({
    baseURL:'http://localhost:8000',
    headers:{
        "Content-Type":'application/json'
    }
})

AxiosService.interceptors.request.use((config)=>{
    if(config.authenticate)
    {
        let token = sessionStorage.getItem('token')
        config.headers.Authorization = `Bearer ${token}`
    }
    return config
},(error)=>{
    return promise.reject(error)
})

export default AxiosService