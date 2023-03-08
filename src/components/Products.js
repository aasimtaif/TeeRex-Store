import React from 'react'
import ProductCard from './ProductCard'
import '../App.css';

function Products({ products }) {
    return (
        <div className='product-page'>  
            <input type = "text" />
            {products?.map((product) => {
            return (
                <div key={product.id}>
                    <ProductCard product={product}  />
                    </div>
            )
    })}</div>
            )
        }

export default Products