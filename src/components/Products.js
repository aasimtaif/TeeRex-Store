import React from 'react'
import ProductCard from './ProductCard'
// import Filter from "./Filter"
import '../App.css';

function Products({ products }) {

    return (
        <div className='product-page'>
            {/* <Filter /> */}
            <input type="text" />
            {products?.map((product) => {
                return (
                    <div key={product.id}>
                        <ProductCard product={product} />
                    </div>
                )
            })}</div>
    )
}

export default Products