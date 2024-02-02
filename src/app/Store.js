import { configureStore } from '@reduxjs/toolkit'
import Counterslice from './Counterslice'

export const Store = configureStore({
  reducer: {
    counter: Counterslice,
  },
})