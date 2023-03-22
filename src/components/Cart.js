import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from './ProductCard'
import '../App.css';

function Cart() {
  const cart = useSelector(state => {
    return state.items
})
// console.log(cart)

const items = Object.values(cart);

  console.log(items,"cart page")
  return (
    <div className='cart product-page'>
       {items?.map((product) => {
      return (
        <div key={product.id}>
          <ProductCard product={product} />
        </div>
      )
    })}
    </div>
  )
}

export default Cart