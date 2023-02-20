import { configureStore } from '@reduxjs/toolkit'
import filter from './slices/filterSlice'
import cartSlice from './slices/cartSlice'
import pizza from './slices/pizzaSlice'
import fullPizza from './slices/fullPizzaSlice'
import { useDispatch } from 'react-redux'

export const store = configureStore({
  reducer: { filter, cartSlice, pizza, fullPizza },
})

export type RootState = ReturnType<typeof store.getState>
type AppDispatch = typeof store.dispatch
export const useAppDispatch = () => useDispatch<AppDispatch>()
