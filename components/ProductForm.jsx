import { useState } from "react";

const ProductForm = ({addProduct}) => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };
  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    const newProduct = {
      name,
      price,
      image,
    };
    addProduct(newProduct);
    setName("");
    setPrice("");
    setImage("");
  };

  return (
    <form onSubmit={handleOnSubmit} className="mb-4">
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        placeholder="Product Name"
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="number"
        value={price}
        onChange={handlePriceChange}
        placeholder="Product Price"
        required
        className="border p-2 rounded w-full mb-2"
      />
      <input
        type="text"
        value={image}
        onChange={handleImageChange}
        placeholder="Product Image URL"
        required
        className="border p-2 rounded w-full mb-2"
      />
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        Add Product
      </button>
    </form>
  );
};
export default ProductForm;
