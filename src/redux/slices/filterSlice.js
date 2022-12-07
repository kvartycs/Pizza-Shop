import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  choosenCategorie: 0,
  choosenSort: 0,
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setChoosenCategorie(state, action) {
      state.choosenCategorie = action.payload
    },
    setChoosenSort(state, action) {
      state.choosenSort = action.payload
    },
  },
})

export const { setChoosenCategorie, setChoosenSort } = filterSlice.actions
export default filterSlice.reducer
