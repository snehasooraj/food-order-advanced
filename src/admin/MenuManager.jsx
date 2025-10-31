import React, { useEffect, useState } from "react";
import { food_list } from  '../assets/images/assets'



const categories = [
  "Salad",
  "Rolls",
  "Deserts",
  "Sandwich",
  "Cake",
  "Pure Veg",
  "Pasta",
  "Noodles",
];


const MenuManager = () => {
  const [product, setProduct] = useState({
     _id: "",
    name: "",
    price: "",
    category: "",
    image: "",
    description: "",
  });

  const [products, setProducts] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // Load products from localStorage and combine with static food_list
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("customProducts")) || [];
    setProducts([...food_list, ...stored]);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  // Handle image upload (convert to Base64 for localStorage)
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProduct({ ...product, image: reader.result });
    };
    if (file) reader.readAsDataURL(file);
  };

  // Add or Update product
  const handleAddOrUpdate = () => {
    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields!");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("customProducts")) || [];

    if (editIndex !== null) {
      // Update product
      stored[editIndex - food_list.length] = product;
      alert("Menu updated successfully!");
    } else {
      // Add new product
      stored.push({ ...product, _id: Date.now()});
      alert("Menu added successfully!");
    }

    localStorage.setItem("customProducts", JSON.stringify(stored));
    setProducts([...food_list, ...stored]);
    setProduct({
       _id:"",
      name: "",
      price: "",
      category: "",
      image: "",
      description: "",
    });
    setEditIndex(null);
  };

  // Edit product
  const handleEdit = (index) => {
    const selected = products[index];
    setProduct(selected);
    setEditIndex(index);
  };

  // Delete product (from static or local)
  const handleDelete = (index) => {
    if (index < food_list.length) {
      alert("Cannot remove static product!");
      return;
    }

    const stored = JSON.parse(localStorage.getItem("customProducts")) || [];
    stored.splice(index - food_list.length, 1);
    localStorage.setItem("customProducts", JSON.stringify(stored));
    setProducts([...food_list, ...stored]);
  };

  return (
    <div className="md:w-1/2 md:mx-auto  shadow p-6 mt-8 rounded-lg">
            <h2 className="text-xl font-bold text-center mb-4">
        {editIndex !== null ? " Edit Menu" : " Add Menu"}
      </h2>

      {/* Add Product Form */}
      <div className="grid grid-cols-2 gap-4">
        <input
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border p-2 rounded"
        />
        <input
          name="price"
          value={product.price}
          onChange={handleChange}
          placeholder="Price"
          type="number"
          className="border p-2 rounded"
        />
        <select
          name="category"
          value={product.category}
          onChange={handleChange}
          className="border p-2 rounded col-span-2"
        >
          <option value="">Select Category</option>
          {categories.map((c, i) => (
            <option key={i} value={c}>
              {c}
            </option>
          ))}
        </select>
       

        <input
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
          className="border p-2 rounded col-span-2"
        />
        <textarea
          name="description"
          value={product.description}
          onChange={handleChange}
          placeholder="Description"
          className="border p-2 rounded col-span-2"
        />
      </div>

      <button
        onClick={handleAddOrUpdate}
        className="bg-(--dark) text-white px-4 py-2 mt-4 rounded w-full"
      >
        {editIndex !== null ? "Update Menu" : "Add Menu"}
      </button>

      {/* Product List */}
      <h3 className="text-lg font-semibold mt-6 mb-2">Menu List</h3>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className=" text-left">
              <th className="border p-2">Image</th>
              <th className="border p-2">Name</th>
              <th className="border p-2">Category</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} >
                <td className="border p-2">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-12 h-12 object-cover rounded"
                  />
                </td>
                <td className="border p-2">{p.name}</td>
                <td className="border p-2">{p.category}</td>
                <td className="border p-2">₹{p.price}</td>
                <td className="border p-2 space-x-2">
                  <button
                    onClick={() => handleEdit(i)}
                    className="bg-(--dark) text-white px-2 py-1 rounded text-sm"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(i)}
                    className="bg-red-500 text-white px-2 py-1 rounded text-sm"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MenuManager;
