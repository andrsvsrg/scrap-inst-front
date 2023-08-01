import {createSlice} from '@reduxjs/toolkit'


const initialState  = {
  searchTerm: '',
  searchType: 'username'   // ['username', 'post']
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setSearchType: (state, action) => {
      state.searchType = action.payload;
    },
  },
})


export const { setSearchTerm, setSearchType } = searchSlice.actions;
export default searchSlice;