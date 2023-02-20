import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store'
import axios from 'axios'
import FullPizza from '../../pages/FullPizza'

type getFullPizzaArgs = {
  id: string
}
interface FullPizza {
  price: number
  image: string
  name: string
}
export const fetchFullPizza = createAsyncThunk(
  'pizza/getFullPizza',
  async ({ id }: getFullPizzaArgs) => {
    const { data } = await axios.get<FullPizza>(
      'https://636f205cf2ed5cb047d607ba.mockapi.io/items/' + id
    )
    console.log(id)
    console.log(data)

    return data as FullPizza
  }
)
interface FullPizzaState {
  item: FullPizza
  status: Status
}
enum Status {
  LOADING = 'loading',
  SUCCESS = 'success',
  ERROR = 'error',
}

const initialState: FullPizzaState = {
  item: { price: 0, image: '', name: '' },
  status: Status.LOADING,
}

const fullPizzaSlice = createSlice({
  name: 'fullPizza',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchFullPizza.pending, (state, action) => {
      state.status = Status.LOADING
      state.item = { price: 0, image: '', name: '' }
    })
    builder.addCase(fetchFullPizza.fulfilled, (state, action) => {
      //@ts-ignore
      state.item = action.payload
      state.status = Status.SUCCESS
    })
    builder.addCase(fetchFullPizza.rejected, (state, action) => {
      state.status = Status.ERROR

      state.item = { price: 0, image: '', name: '' }
    })
  },
})

export const selectFullPizzaData = (state: RootState) => state.fullPizza
export const {} = fullPizzaSlice.actions

export default fullPizzaSlice.reducer
