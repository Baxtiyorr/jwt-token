import { configureStore } from "@reduxjs/toolkit";

import getDataReducer from './slice/fetchData'
import getCartProductsReducer from './slice/crat'

const store = configureStore({
    reducer:{
        getData: getDataReducer,
        getCartProducts: getCartProductsReducer
    }
})

export default store