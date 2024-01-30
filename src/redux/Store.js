import { configureStore } from '@reduxjs/toolkit'
import cardslice from './Slices/cardslice'

export const store = configureStore({
  reducer: {
    cart: cardslice
  },
})