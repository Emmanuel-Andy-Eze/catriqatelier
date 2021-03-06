import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productDetailsReducer, productListReducer } from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers';


const cartItemsFromStorage = window.localStorage.getItem('cartItems') ? JSON.parse(window.localStorage.getItem('cartItems')) : []

const initialState = {
    cart: {cartItems: cartItemsFromStorage} 
}

const reducer = combineReducers({
    productList: productListReducer,
    productDetail: productDetailsReducer,
    cart: cartReducer,
})

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store