import { omit } from "lodash";
const ADD_TO_CART = "cart/ADD_TO_CART"
const REMOVE_FROM_CART = "cart/REMOVE_FROM_CART"


// //actions
export const addToCart = (itemObj) => {
    return ({
        type: ADD_TO_CART,
        payload: itemObj,

    })
}

export const removeFromCart = (itemObj) => {
    return ({
        type: REMOVE_FROM_CART,
        payload: itemObj

    })
}

export default function cartReducer(state = {
    items: {},
}, action) {
    switch (action.type) {
        case ADD_TO_CART: {
            const product = action.payload;
            if (state.items[product.id]) {
                if (state.items[product.id].order_quantity === product.quantity) {
                    // console.log("unavailable")
                    return {
                        ...state,
                        items: {
                            [product.id]: {
                                ...state.items[product.id],
                                error: "Out of stock"
                            }
                        }

                    }
                }
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            order_quantity: state.items[product.id].order_quantity + 1,
                        }
                    }
                };
            } else {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...product,
                            order_quantity: 1,
                        }
                    }
                }
            }
        }
        case REMOVE_FROM_CART: {
            const product = action.payload;

            if (state.items[product.id].order_quantity <= 1) {
                return {
                    ...state,
                    items: omit(state.items, [product.id])
                }
            } else {
                return {
                    ...state,
                    items: {
                        ...state.items,
                        [product.id]: {
                            ...state.items[product.id],
                            order_quantity: state.items[product.id].order_quantity - 1,
                        }
                    }
                }
            }
        }

        default:
            return state;
    }
}