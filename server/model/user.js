const mongoose=require('mongoose');

const userShema = new mongoose.Schema({
    productName: { type: String, required: true },
    price: { type: Number, required: true },
    oldPrice: { type: Number, required: true },
    category: { 
      type: String, 
      enum: ['Vegetables', 'Fruits & Nuts', 'Dairy & creams', 'Packages Food', 'Staples'],
      required: true 
    },
    isActive: { type: Boolean, default: true },
    description: { type: String }
})

const userModel=mongoose.model('product',userShema)
module.exports=userModel;