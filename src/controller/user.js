import UserModel from "../model/user.js";
import Auth from "../common/Auth.js";

const getAll = async (req, res) => {
    try {
        // console.log(req.headers.authorization.split(" ")[1])
        
        let users = await UserModel.find({},{password:0});
        res.status(200).send({
            message: "Data Fetch Successful",
            users
        })
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
};

const getById = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await UserModel.findById(id);
        if (user) {
            res.status(200).send({
                message: "Data Fetch Successful",
                user
            })
        } else {
            res.status(400).send({
                message: "Invalid Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
};

const create = async (req, res) => {
    try {
        let user = await UserModel.findOne({
            email:req.body.email
        })
      if(!user)  
      {
        req.body.password = await Auth.hashPassword(req.body.password)
        await UserModel.create(req.body)
        res.status(200).send({
            message:"User Created Successfully"
        })
      }
      else{
        res.status(400).send({
            message:`User with ${req.body.email} Already Exists`
        })
      }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
};

const login = async (req, res) => {
    try {
        let user = await UserModel.findOne({
            email:req.body.email
        })
      if(user)  
      {
        if (await Auth.hashCompare(req.body.password,user.password))
      
      {
        let token = await Auth.createToken({
            name:user.name,
            email:user.email,
            role:user.role,
            status:user.status
        })
        res.status(200).send({
            message:"User Login Successfull",
            name :user.name,
            role:user.role,
            token
        })
      }
      else
      {
        res.status(401).send({
            message:"Invalid Password"
        })
      }
    }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
};

const editById = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await UserModel.findById(id);
        if (user) {

            user.name = req.body.name,
                user.email = req.body.email,
                user.mobile = req.body.mobile

            await user.save()
            res.status(200).send({
                message: "User Edited Successfully",
            })
        }
        else {
            res.status(400).send({
                message: "Invalid Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        })
    }
};

const deleteById = async (req, res) => {
    try {
        let { id } = req.params;
        let user = await UserModel.findById(id);
        if (user) {
            await UserModel.deleteOne({ _id: id })
            res.status(200).send({
                message: "User Deleted Successfully",
            })
        }
        else {
            res.status(400).send({
                message: "Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message: error.message || "Internal Server Error"
        });
    }
};

export default {
    create,
    getAll,
    getById,
    editById,
    deleteById,
    login
};
