import model from '../model/index.js'
import mongodb from 'mongodb'

const getAll = async(req,res)=>{
    await model.client.connect()
    try{
      let db = model.client.db(model.dbName)
      let users = await db.collection('users').find({}).toArray()  //if you are not writing toArray then you will not get date you neet to get it in array formate then only javascript will accept it
     res.status(200).send({
        message:"Data Fetch Successful",
        users //this is to get all the data
     })
    
    }catch(error){
        res.status(500).send({
            message: error.massage || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const getById = async(req,res)=>{
    await model.client.connect()
    try{
        let {id} = req.params //from params i need to collect the data
      let db = model.client.db(model.dbName)
      let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(id)})  //if you are not writing toArray then you will not get date you neet to get it in array formate then only javascript will accept it
     res.status(200).send({
        message:"Data Fetch Successful",
        user //this is to get all the data
     })
    
    }catch(error){
        res.status(500).send({
            message: error.massage || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const editById = async(req,res)=>{
    await model.client.connect()
    try{
        let {id} = req.params //from params i need to collect the data
      let db = model.client.db(model.dbName)
      let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(id)})  //if you are not writing toArray then you will not get date you neet to get it in array formate then only javascript will accept it
      if(user)
        {
            await db.collection('users').updateOne({_id:new mongodb.ObjectId(id)},{$set:req.body})
     res.status(200).send({
        message:"User Edited Successfully",
     })
    }
     else
     {
        res.status(400).send({
            message:"Invalid User Id"
        })
     }
    
    }catch(error){
        res.status(500).send({
            message: error.massage || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const deleteById = async(req,res)=>{
    await model.client.connect()
    try{
        let {id} = req.params //from params i need to collect the data
      let db = model.client.db(model.dbName)
      let user = await db.collection('users').findOne({_id:new mongodb.ObjectId(id)})  //if you are not writing toArray then you will not get date you neet to get it in array formate then only javascript will accept it
      if(user)
        {
            await db.collection('users').deleteOne({_id:new mongodb.ObjectId(id)})
     res.status(200).send({
        message:"User Id Deleted Successfully",
     })
    }
     else
     {
        res.status(400).send({
            message:"Invalid User Id"
        })
     }
    
    }catch(error){
        res.status(500).send({
            message: error.massage || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
}

const create = async (req,res) => {
    await model.client.connect()
    try{
      let db = model.client.db(model.dbName)
      let user = await db.collection('users').findOne({Email:req.body.Email})
      if(!user){
      await db.collection('users').insertOne(req.body)
      res.status(200).send({
        message:"User Created Successfully"
      })
    }
    else{
        res.status(400).send({
            message:`User with ${req.body.Email} already exist `
        })
    }
    }catch(error){
        res.status(500).send({
            message: error.massage || "Internal Server Error"
        })
    }
    finally
    {
        await model.client.close()
    }
};

export default {
    create,
    getAll,
    getById,
    editById,
    deleteById
};
