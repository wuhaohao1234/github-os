import { configureStore } from '@reduxjs/toolkit'
import counter from './counter/counterSlice'
const store = configureStore({
  reducer: {
    counter 
  },
})
export default store;