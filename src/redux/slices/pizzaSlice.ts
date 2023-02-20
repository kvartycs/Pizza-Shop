import axios from 'axios'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

type FetchPizzasArgs = {
  choosenCategorie: number
  choosenSort: string
  searchValue: string
}

type Pizza = {
  id: string
  price: number
  image: string
  name: string
  types: number[]
  sizes: number[]
}

export const fetchPizzas = createAsyncThunk(
  'pizza/fetchPizasStatus',
  async ({ choosenCategorie, choosenSort, searchValue }: FetchPizzasArgs) => {
    const { data } = await axios.get<Pizza[]>(
      `https://636f205cf2ed5cb047d607ba.mockapi.io/items?${
        choosenCategorie > 0 ? `category=${choosenCategorie}` : ''
      }&sortBy=${choosenSort ? choosenSort.replace('-', '') : ''}&order=${
        choosenSort ? (choosenSort.includes('-') ? 'asc' : 'desc') : ''
      }`
    )

    return data as Pizza[]
  }
)

enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

interface PizzaSliceState {
  items: Pizza[]
  status: Status
}

const initialState: PizzaSliceState = {
  items: [],
  status: Status.LOADING,
}

const pizzaSlice = createSlice({
  name: 'pizza',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state, action) => {
      state.status = Status.LOADING
      state.items = []
    })
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.items = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchPizzas.rejected, (state, action) => {
      state.status = Status.ERROR
      state.items = []
    })
  },
})

export const selectPizzaData = (state: RootState) => state.pizza

export const { setItems } = pizzaSlice.actions

export default pizzaSlice.reducer
