const ApiRoutes = {
    LOGIN:{
          path:'/user/login',
          authenticate:false
    },
    BOOK:{
        path: '/book',
        authenticate:true
    },
    USER:{
        path:'/user',
        authenticate:true
    }
}

export default ApiRoutes