import { useState, useEffect } from 'react';
import axios from 'axios';
import { Products,Cart } from "./components/index"
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import './App.css';

function App() {
  const [products, setProducts] = useState();
  const BASE_URL = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await axios.get(BASE_URL);
        setProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getProducts()
  }, []);
  console.log(products)
  return (
    <div className="App">
      <Link to='/cart' className="cart-link">Open Cart</Link>
      <Routes>
        <Route exact path='/' element={ <Products products={products} />}/>
        <Route exact path='/cart' element={ <Cart />}/>
      </Routes>
     
    </div>
  );
}

export default App;
