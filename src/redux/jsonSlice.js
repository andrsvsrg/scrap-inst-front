import {createSlice} from '@reduxjs/toolkit'


const initialState  = {
  accountPage:{
    selectedUserFields: [],
    selectedPostFields: [],
    downloadOnlySelectedFields: false,
    numbersOfPosts: 0,
  },
  postPage: {

  }
}

const jsonSlice = createSlice({
  name: 'json',
  initialState,
  reducers: {
    setUserField: (state, action) => {
      state.accountPage.selectedUserFields = action.payload
    },
    setPostField: (state, action) => {
      state.accountPage.selectedPostFields = action.payload
    },
    setNumberOfPosts: (state, action) => {
      state.accountPage.numbersOfPosts = action.payload
    },
    toggleDownloadOnlySelectedFields: (state) => {
      state.accountPage.downloadOnlySelectedFields = !state.accountPage.downloadOnlySelectedFields
    }
  },
})


export const {setNumberOfPosts, setUserField, setPostField, toggleDownloadOnlySelectedFields  } = jsonSlice.actions;
export default jsonSlice;