import React from 'react'
import '../App.css';
import AddOrRemoveButton from './AddOrRemove';
function ProductCard({ product }) {
    return (
        <div className= "product-card">
            <img src = {product.imageURL} alt="product "/>
            <h4>{product.name}</h4>
            <p>₹ {product.price}</p>
            <AddOrRemoveButton product={product}/>

            </div>
    )
}

export default ProductCard