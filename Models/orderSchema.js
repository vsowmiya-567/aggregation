import mongoose from "mongoose";

const orderSchema = mongoose.Schema({
    product_id: {
         type: mongoose.Schema.Types.ObjectId, 
         ref: 'Product', 
        //  required: true     // get 500 internal error while using require field so here we dont use this field
         },
    quantity: {
        type: Number, 
        required: true
        },
    // name:{
    //     type:String,
    //     ref:'Product'
    // }

})

const Order = mongoose.model('order',orderSchema)
export default Order;
