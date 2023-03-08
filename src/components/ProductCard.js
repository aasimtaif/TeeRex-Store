import React from 'react'
import '../App.css';
function ProductCard({ product }) {
    return (
        <div className= "product-card">
            <img src = {product.imageURL}/>
            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>
            <button>Add to Cart</button>

            </div>
    )
}

export default ProductCard