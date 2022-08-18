import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from "./reducers/rootReducer";

import cartReducers from "./reducers/cartReducer"

export const stores = configureStore({
    reducer: {
      cart: cartReducers
    }
  })
