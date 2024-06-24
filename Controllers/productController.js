import mongoose from "mongoose"
import Product from "../Models/productSchema.js"
import Order from "../Models/orderSchema.js"

//create product
export const products = async(req,res)=>{
    try {
        const {name,price} = req.body
        const newProduct = new Product({
            name,
            price
        })
        await newProduct.save()
        res.status(200).json({message:"Products Added",data:newProduct})
    } catch (error) {
        res.status(500).json(error)
    }
}

//get order details by id
export const productOrderDetails = async(req,res)=>{
    try {
        const productId = req.params.id
        console.log(productId);

        const id = await Product.findById({_id:productId})

        console.log('id',id);

        const result = await Product.aggregate([
            
            {
                $lookup:{
                    from:'Order',
                    localField:'id._id',
                    foreignField:'product_id',
                    as:'productDetails'
                },
            },
            // {
            //     $project:{
            //         _id:1,
            //         name:1,
            //         price:1,
            //         productDetails:1,
            //     }
            
            // }
            
        ])
        res.status(200).json({message:'product Details are',data:result})
    } catch (error) {
        res.status(500).json("error")
    }
}

//get all order details
export const getAllProduct = async(req,res)=>{
    
    try {
        const result = await Product.aggregate([

            {
                $lookup:{
                    from: 'Order',
                    localField:'_id',
                    foreignField:'product_id',
                    as:'order details'
                }
                
            }

        ])
        res.status(200).json(result)
    } catch (error) {
        
    }
}