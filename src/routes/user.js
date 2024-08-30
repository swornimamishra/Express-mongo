import express from 'express'
import UserController from '../controller/user.js'
import validate from '../middleware/validate.js'
import AdminGuard from '../middleware/AdminGuard.js'
const router = express.Router()

router.get('/',validate,AdminGuard,UserController.getAll)
router.get('/:id',validate,UserController.getById)
router.post('/create',UserController.create)
router.post('/login',UserController.login)
router.put('/edit/:id',validate,UserController.editById)
router.delete('/delete/:id',validate,UserController.deleteById)

export default router