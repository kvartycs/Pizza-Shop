import { createSlice, PayloadAction, Slice } from '@reduxjs/toolkit'
import { RootState } from '../store'

export type ICartItem = {
  id: string
  price: number
  count: number
  image: string
  name: string
  type: string
  size: number
}

interface cartSliceState {
  totalPrice: number
  items: ICartItem[]
}

const initialState: cartSliceState = {
  items: [],
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<ICartItem>) {
      const findItem = state.items.find((obj) => obj.id === action.payload.id)
      if (findItem) {
        findItem.count++
      } else {
        state.items.push({ ...action.payload, count: 1 })
      }
    },
    removeItem(state, action: PayloadAction<string>) {
      state.items = state.items.filter((obj) => obj.id !== action.payload)
    },
    minusItem(state, action: PayloadAction<string>) {
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

export const selectCart = (state: RootState) => state.cartSlice
export const selectCartItemById = (id: string) => (state: RootState) =>
  state.cartSlice.items.find((obj) => obj.id === id)

export const { addItem, removeItem, clearItems, setPrice, minusItem } =
  cartSlice.actions

export default cartSlice.reducer
