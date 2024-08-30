// const create = async () => {
//     // Your logic here
// };

// export default {
//     create,
// };
import BooksModel from "../model/books.js"
import UserModel from "../model/user.js"

const getAllBooks = async(req,res)=>{
    try {
        let books = await BooksModel.find({},{title:1,author:1,status:1})
        res.status(200).send({
            message:"Data Fetched Successfully",
            books
        })
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}

const getBooksByUserId = async(req,res)=>{
    try {
        let userId = req.params.id
        let user = await UserModel.findById(userId)
        if(user)
        {
            let books = await BooksModel.find({_id:{
                $in:user.books
            }},{title:1,author:1})
            res.status(200).send({
                message:"Data Fetched Successfully",
                books
            })
        }
        else
        {
            res.status(400).send({
                message:"Invalid User Id"
            })
        }
    } catch (error) {
        res.status(500).send({
            message:error.message || "Internal Server Error"
        })
    }
}
const create = async(req,res)=>{
try {
    await BooksModel.create(req.body)
    res.status(200).send({
        message:"Books Created Successfully"
    })
} catch (error) {
    res.status(500).send({
        message:error.message || "Internal Server Error"
    })
}
}

const rentBook = async(req,res)=>{
    let {userId,bookId} = req.body

    let user = await UserModel.findById(userId)
    let book = await BooksModel.findById(bookId)

    if(user && book && book.status)
    {
        //update the book
        book.borrowerByName = user.name
        book.borrowerById = user._id
        book.status = false
        await book.save()

        //update the user
        user.books.push(book._id)

        await user.save()

        res.status(200).send({
            message:"Book Rented Successfully"
        })
    }
    else
    {
        res.status(400).send({
            message: `${!user?'UserId Is Invalid':!book?'BookId is Invalid':!book.status?"The Book is not available to rent":""}`
        })
    }
}

const returnBook = async(req,res)=>{
    let {userId,bookId} = req.body

    let user = await UserModel.findById(userId)
    let book = await BooksModel.findById(bookId)

    if(user && book)
    {
        let index = user.books.indexOf(book._id)
        if(index!=-1)
        {
            //update the book
            book.borrowerByName = ""
            book.borrowerById = ""
            book.status = true
            await book.save()
            //update the user
            user.books.splice(index,1)
            await user.save()
            res.status(200).send({
                message:"Book Returned Successfully"
            })
        }
        else
        {
            res.status(400).send({
                message:"The book is not owned by this user"
            })
        }
    }
    else
    {
        res.status(400).send({
            message: `${!user?'UserId Is Invalid':!book?'BookId is Invalid':""}`
        })
    }
}
export default {
    create,
    getAllBooks,
    rentBook,
    returnBook,
    getBooksByUserId
}