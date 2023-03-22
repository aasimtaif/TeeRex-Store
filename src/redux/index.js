import { createStore } from "redux";

import cartReducer from './ReduxCart'

const store = createStore(cartReducer)

export default store