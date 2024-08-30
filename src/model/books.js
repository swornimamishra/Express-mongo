import mongoose from './index.js'

const BooksSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now()
    },
    status:{
        type:Boolean,
        default:true
    },
    borrowerByName:{
        type:String
    },
    borrowerById:{
        type:String
    }
},{
    versionKey:false,
    collection:'books'
})

const BooksModel = mongoose.model('books',BooksSchema)
export default BooksModel