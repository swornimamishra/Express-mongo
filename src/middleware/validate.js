import Auth from "../common/Auth.js";
const validate = async(req,res,next)=>{
    try{
        let token = req?.headers?.authorization?.split(" ")[1]  //? is conditional way of fetching the data
        if(token){
            let data = await Auth.decodeToken(token)
            if(Math.floor(+new Date()/1000)<data.exp)

            next()
            else{
                  res.status(401).send({
                    message:"Token Expired"
                  })
            }
        }
       else{
         res.status(401).send({
            message:"No Token Found"
         })
       }
    }catch(error){
        res.status(500).send({
            message:error.message||"Internal Server Error"
        })
    }
}
export default validate