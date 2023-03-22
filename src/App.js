import { useState, useEffect } from 'react';
import axios from 'axios';
import { Products, Cart } from "./components/index"
import { Link } from "react-router-dom";
import { Routes, Route } from 'react-router-dom'
import './Filter.css';

const BASE_URL = 'https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json'

function App() {
  const colors = ['red', 'green', 'blue', 'yellow', 'black', 'grey', 'white'];
  const gender = ['men', 'women'];
  const type = ['polo', 'hoodie', 'basic']

  function Filter() {
    return (
      <div className='filter-section'>
        <p>Colour</p>
        {colors.map((color,index) => {
          return (
            <div key={index} className='color filter-input'>
              <input type="checkbox" value={color} /><p> {color}</p>
            </div>
          )
        })}
        <p>Gender</p>
        {gender.map((color,index) => {
          return (
            <div key={index} className='color filter-input'>
              <input type="checkbox" value={color} /><p> {color}</p>
            </div>
          )
        })}
         <p>Type</p>
        {type.map((color,index) => {
          return (
            <div key={index} className='color filter-input'>
              <input type="checkbox" value={color} /><p> {color}</p>
            </div>
          )
        })}
      </div>
    )
  }


  const [products, setProducts] = useState();
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
  // console.log(products)
  return (
    <>
      <Link to='/cart' className="cart-link">Open Cart</Link>
      <div className="App">
        <Filter />
        <Routes>
          <Route exact path='/' element={<Products products={products} />} />
          <Route exact path='/cart' element={<Cart />} />
        </Routes>

      </div>
    </>
  );
}

export default App;
