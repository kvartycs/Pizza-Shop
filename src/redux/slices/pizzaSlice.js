import axios from 'axios'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizasStatus',
  async ({ choosenCategorie, choosenSort }) => {
    const { data } = await axios.get(
      `https://636f205cf2ed5cb047d607ba.mockapi.io/items?${
        choosenCategorie > 0 ? `category=${choosenCategorie}` : ''
      }&sortBy=${choosenSort ? choosenSort.replace('-', '') : ''}&order=${
        choosenSort ? (choosenSort.includes('-') ? 'asc' : 'desc') : ''
      }`
    )
    return data
  }
)

const initialState = {
  items: [],
  status: 'loading',
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action) {
      state.items = action.payload
    },
  },
  extraReducers: {
    [fetchPizzas.pending]: (state) => {
      state.status = 'loading'
      state.items = []
    },
    [fetchPizzas.fulfilled]: (state, action) => {
      state.items = action.payload
      state.status = 'success'
    },
    [fetchPizzas.rejected]: (state) => {
      state.status = 'error'
      state.items = []
    },
  },
})

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
