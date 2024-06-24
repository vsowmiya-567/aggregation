import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config()
import productRouter from './Routers/productRouter.js';
import orderRouter from './Routers/orderRouter.js';
import connectDb from './Database/dbConfig.js';

const app = express()
const port = process.env.PORT
app.use(cors())
app.use(express.json())
app.use('/api',productRouter)
app.use('/apii',orderRouter)
app.get("/",(req,res)=>{
    res.status(200).json({message:"welcome"})
})
connectDb();
app.listen(port,()=>{
    console.log("app started with port",port);
})
