import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart, removeFromCart } from '../redux/ReduxCart'
import './Items.css'

export default function AddOrRemoveButton({ product }) {

    const dispatch = useDispatch();

    const item = useSelector(state => {
        return (state.items[product.id]);
    })
    
    const  quantity  = item?.order_quantity
    console.log(quantity)

    function increment() {
        dispatch(addToCart(product))
    }

    function decrement() {
        dispatch(removeFromCart(product))
        // decreaseorder_quantity(product);
    }

    // console.log('AddToCart rendered', product.id);

    if (!quantity ) {
    return (
        <button onClick={increment}>Add to cart</button>
    );
    } else {

    return (
        <>
        
       
        <div>
            <button onClick={increment}>+</button>
            <span>{quantity}</span>
            <button onClick={decrement}>-</button>
        </div>
        <span>{item.error}</span>
        </>
    )
    }
}


