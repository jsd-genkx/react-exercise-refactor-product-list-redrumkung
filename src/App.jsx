import { useState } from 'react'
import ProductForm from "../components/ProductForm"
import ProductList from "../components/ProductList"

function App() {
  const [products, setProducts] = useState([
    {
      id: "pid-1",
      name: "Product 1",
      price: 10.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      isSelected: false,
    },
    {
      id: "pid-2",
      name: "Product 2",
      price: 10.0,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIXzoYdO9tqmkjlVHmpgXnOsQb9DWkz_Mfi1Jc7zNzaw&s",
      isSelected: false,
    },
  ]);

  const addProduct = (newProduct) => {
      setProducts([
        ...products,
        {...newProduct, id: `pid-${products.length + 1}` }
      ])
  }

  return (  
    <div className='p-4'>
    <h1>Ronnapat Test</h1>
     <ProductForm addProduct = {addProduct} />
     <ProductList products = {products} />
    </div>
  )
}

export default App
