import Auth from "../common/Auth.js";
// import UserModel from "../model/user.js";
const AdminGuard = async(req,res,next)=>{
    try{
        let token = req.headers.authorization.split(" ")[1]
        if(token){
            // let user = await UserModel.findOne({email:req.body.email})
            let data = await Auth.decodeToken(token)
            // if(data.role===user.role && data.role==="admin")
            if(data.role==="admin")

            next()
            else{
                  res.status(401).send({
                    message:"Unauthorized Access"
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
export default AdminGuard 