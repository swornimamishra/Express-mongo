// import express from 'express';
// import BooksController from '../controller/books.js';

// const router = express.Router();

// router.post('/create', BooksController.create);

// export default router;
import express from 'express'
import BooksController from '../controller/books.js'
import validate from '../middleware/validate.js'
const router = express.Router()

router.get('/user/:id',validate,BooksController.getBooksByUserId)
router.get('/',validate,BooksController.getAllBooks)
router.post('/create',validate,BooksController.create)
router.post('/rent',validate,BooksController.rentBook)
router.post('/return',BooksController.returnBook)


export default router