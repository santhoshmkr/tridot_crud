
const userModel =require("./model/user")
const cors = require('cors')
const express = require('express');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());


// MongoDB connection
mongoose.connect('mongodb+srv://santhoshmkr0723:TWz1z1wvTHvuHEIa@cluster0.wxdvie1.mongodb.net/Product').then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));





app.post("/createProduct", (req, res) => {
            userModel.create(req.body)
            .then(Products => res.json(Products))
            .catch(err => res.json(err));
        })
    
        app.get("/allProducts", (req, res) => {
            userModel.find({})
            .then(Products => res.json(Products))
            .catch(err => res.json(err));
        })
            
    
    app.get("/updateProduct/:id",(req,res)=>{
        const id=req.params.id;
        userModel.findById({_id:id})
        .then(Products=>res.json(Products))
        .catch(err=>res.json(err))
    })
    
    app.put("/updateProduct/:id", (req, res) => {
        const id = req.params.id;
      
        userModel.findByIdAndUpdate(
          id, 
          {
            productName: req.body.productName,
            price: req.body.price,
            oldPrice: req.body.oldPrice,
            category: req.body.category,
            isActive: req.body.isActive,
            description: req.body.description
          },
          { new: true } 
        )
          .then((updatedProduct) => {
            if (!updatedProduct) {
              return res.status(404).json({ message: "Product not found" }); 
            }
            res.json(updatedProduct); 
          })
          .catch((err) => res.status(500).json({ message: "Error updating product", error: err })); 
      });
      
    
    
      app.delete("/deleteProduct/:id", (req, res) => {
        const id = req.params.id;
      
        userModel.findByIdAndDelete(id) 
          .then((deletedProduct) => {
            if (!deletedProduct) {
              return res.status(404).json({ message: "Product not found" }); 
            }
            res.json({ message: "Product deleted successfully", deletedProduct }); 
          })
          .catch((err) => res.status(500).json({ message: "Error deleting product", error: err })); 
      });
      
// Start the server
const PORT = 8080 || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
