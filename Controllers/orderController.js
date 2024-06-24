import Order from "../Models/orderSchema.js";

export const orders = async(req,res)=>{
    try {
        const {quantity,product_id} = req.body

        console.log(req.body);

        const order = new Order({quantity,product_id})

        console.log("quantity",quantity);

        console.log(order); 

        await order.save()

        console.log("test");
        
        res.status(200).json({message:"order created",data:order})

    } catch (error) {
        res.status(500).json(error)
    }
}