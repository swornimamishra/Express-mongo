// import express from 'express';
// import UserRoutes from './user.js';
// import BooksRoutes from './books.js';

// const router = express.Router();

// router.use('/user', UserRoutes);
// router.use('/books', BooksRoutes);

// export default router;
import express from 'express'
import UserRoutes from './user.js'
import BooksRoutes from './books.js'
const router = express.Router()

router.use('/user',UserRoutes)
router.use('/book',BooksRoutes)

export default router