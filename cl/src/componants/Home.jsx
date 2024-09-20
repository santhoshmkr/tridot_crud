import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Home() {
  const [products, setProducts] = useState([]);

  // Fetch all products
  useEffect(() => {
    axios.get("http://localhost:8080/allProducts")
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  // Delete product
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8080/deleteProduct/${id}`)
      .then((res) => {
        console.log("Product deleted:", res.data);
        setProducts(products.filter((product) => product._id !== id));
        window.location.reload();
      })
      .catch((err) => console.error("Error deleting product:", err));
  };

  return (
    <div className="flex flex-col justify-center items-center border p-4 m-10">

      <div className="w-full">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th></th>
              <th></th>
              <th> <div className="flex justify-center w-full my-10">
        <Link to="/add-product">
          <button type="submit" className="bg-blue-500 text-white p-2 rounded">
            Add Product
          </button>
        </Link>
      </div></th>
            </tr>
            <tr>
              <th className="w-2/12 p-2 border">Product Name</th>
              <th className="w-1/12 p-2 border">Product Price</th>
              <th className="w-2/12 p-2 border">Status</th>
              <th className="w-3/12 p-2 border">category</th>
              <th className="w-3/12 p-2 border">Description</th>

              <th className="w-3/12 p-2 border">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item, index) => (
              <tr key={index} className="border">
                <td className="w-2/12 p-2 border">{item.productName}</td>
                <td className="w-1/12 p-2 border">{item.price}</td>
                <td className="w-2/12 p-2 border">{item.isActive ? "In stock" : "out of staock"}</td>
                <td className="w-3/12 p-2 border">{item.category}</td>
                <td className="w-3/12 p-2 border">{item.description}</td>

                <td className="w-3/12 p-2 border">
                  <div className="flex justify-evenly">
                    <Link to={`/updateProduct/${item._id}`} className="mr-4 text-blue-500">Edit</Link>
                    <button
                      onClick={() => handleDelete(item._id)}
                      className="text-red-500"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

     

      
    </div>
  );
}

export default Home;
