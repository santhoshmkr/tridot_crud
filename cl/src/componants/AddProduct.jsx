import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddProduct() {
  const [product, setProduct] = useState({
    productName: '',
    price: '',
    oldPrice: '',
    category: 'Vegetables',
    isActive: false,
    description: '',
  });
  
  const navigate = useNavigate();

  // Handle form inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({
      ...product,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8080/createProduct', product)
      .then((res) => {
        console.log('Product added:', res.data);
        navigate('/'); 
      })
      .catch((err) => console.error('Error adding product:', err));
  };

  return (
    <div className="flex justify-center items-center mt-10">
      <form onSubmit={handleSubmit} className="border p-4">
        <h2 className="text-2xl mb-4">Add New Product</h2>
        <div className="mb-4">
          <label>Product Name</label>
          <input
            type="text"
            name="productName"
            value={product.productName}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Sale Price</label>
          <input
            type="number"
            name="price"
            value={product.price}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Old Price</label>
          <input
            type="number"
            name="oldPrice"
            value={product.oldPrice}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label>Category</label>
          <select
            name="category"
            value={product.category}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          >
            <option value="Vegetables">Vegetables</option>
            <option value="Fruits & Nuts">Fruits & Nuts</option>
            <option value="Dairy & creams">Dairy & creams</option>
            <option value="Packages Food">Packages Food</option>
            <option value="Staples">Staples</option>
          </select>
        </div>
        <div className="mb-4">
          <label>Is Active</label>
          <input
            type="checkbox"
            name="isActive"
            checked={product.isActive}
            onChange={handleChange}
            className="ml-2"
          />
        </div>
        <div className="mb-4">
          <label>Description</label>
          <textarea
            name="description"
            value={product.description}
            onChange={handleChange}
            required
            className="border p-2 w-full"
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
