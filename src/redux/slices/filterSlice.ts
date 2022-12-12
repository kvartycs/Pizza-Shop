import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store'

interface FilterSliceState {
  choosenCategorie: number
  choosenSort: string
  searchValue: string
}

const initialState: FilterSliceState = {
  choosenCategorie: 0,
  choosenSort: '',
  searchValue: '',
}

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setChoosenCategorie(state, action: PayloadAction<number>) {
      state.choosenCategorie = action.payload
    },
    setChoosenSort(state, action: PayloadAction<string>) {
      state.choosenSort = action.payload
    },
    setSearchValue(state, action: PayloadAction<string>) {
      state.searchValue = action.payload
    },
  },
})

export const selectFilter = (state: RootState) => state.filter
export const selectSort = (state: RootState) => state.filter.choosenSort

export const { setChoosenCategorie, setChoosenSort, setSearchValue } =
  filterSlice.actions
export default filterSlice.reducer
