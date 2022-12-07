import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
    },
    minusItem(state, action) {
      const findItem = state.items.find((obj) => obj.id === action.payload)
      if (findItem) {
        findItem.count--
      }
    },
    clearItems(state) {
      state.items = []
      state.totalPrice = 0
    },
    setPrice(state, action) {
      state.totalPrice += action.payload
    },
  },
})

export const { addItem, removeItem, clearItems, setPrice, minusItem } =
  cartSlice.actions

export default cartSlice.reducer
