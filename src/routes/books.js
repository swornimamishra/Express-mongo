// import express from 'express';
// import BooksController from '../controller/books.js';

// const router = express.Router();

// router.post('/create', BooksController.create);

// export default router;
import express from 'express'
import BooksController from '../controller/books.js'
const router = express.Router()

router.get('/user/:id',BooksController.getBooksByUserId)
router.get('/',BooksController.getAllBooks)
router.post('/create',BooksController.create)
router.post('/rent',BooksController.rentBook)
router.post('/return',BooksController.returnBook)


export default router