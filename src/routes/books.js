import express from 'express';
import BooksController from '../controller/books.js';

const router = express.Router();

router.post('/create', BooksController.create);

export default router;
