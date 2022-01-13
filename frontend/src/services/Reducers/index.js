import { combineReducers } from 'redux'

import cardItems from './reducer'
import cartReducer from './cartReducer'
import  {productReducer,selectedProductReducer}  from './productReducer'
import orderReducer from './orderReducer'

const reducers =  combineReducers({
    allProducts : productReducer,
    product : selectedProductReducer,
    cart : cartReducer,
    order : orderReducer,
    cardItems,
})

export default reducers