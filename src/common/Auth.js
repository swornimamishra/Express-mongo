import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
const SALT_ROUNDS = 10;

const hashPassword = async (password)=>{
    const salt = await bcrypt.genSalt()
    console.log(salt)
    const hash = await bcrypt.hash(password,salt)
    console.log(hash)

    return hash
}

const hashCompare = async (password,hash)=>{
    return await bcrypt.compare(password,hash)
}
const createToken = async (payload)=>{
    let token = await jwt.sign(payload,process.env.JWT_SECRET,{
        expiresIn : process.env.JWT_EXPIRE
    })
    return token
}

// const decodeToken = async(token)=>{
//     return  jwt.decode(token)
// }
const decodeToken = async (token) => {
    try {
        return await jwt.decode(token, process.env.JWT_SECRET);
    } catch (error) {
        console.error('Error decoding token:', error);
        return null; // Return null if verification fails
    }
};


export default {
    hashPassword,
    hashCompare,
    createToken,
    decodeToken
}