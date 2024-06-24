import express from 'express'
import { orders } from '../Controllers/orderController.js'

const router = express.Router()

router.post('/createOrder',orders)
export default router;