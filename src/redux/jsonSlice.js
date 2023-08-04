import {createSlice} from '@reduxjs/toolkit'


const initialState  = {
  accountPage:{
    selectedUserFields: [],
    selectedPostFields: [],
    downloadOnlySelectedFields: false,
    numbersOfPosts: 0,
    userInstId: ''
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
    },
    setUserInstId: (state, action) => {
      state.accountPage.userInstId = action.payload
    },
    clearAllStates: (state) => {    // change for all
      state.accountPage = initialState.accountPage
    }

  },
})


export const {clearAllStates, setNumberOfPosts, setUserInstId,setUserField, setPostField, toggleDownloadOnlySelectedFields  } = jsonSlice.actions;
export default jsonSlice;