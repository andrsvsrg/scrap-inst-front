import {createSlice} from '@reduxjs/toolkit'


const initialState  = {
  accountPage:{
    allUserFields:[],
    allPostFields: [],
    body: {
      selectedUserFields: [],
      selectedPostFields: [],
      numbersOfPosts: 12,
      userInstId: ''
    },
    downloadOnlySelectedFields: false,
  },
  postPage: {

  }
}

const jsonSlice = createSlice({
  name: 'json',
  initialState,
  reducers: {
    setAllUserField: (state, action) => {
      state.accountPage.allUserFields = action.payload
    },
    setAllPostField: (state, action) => {
      state.accountPage.allPostFields = action.payload
    },
    setUserField: (state, action) => {
      state.accountPage.body.selectedUserFields = action.payload
    },
    setPostField: (state, action) => {
      state.accountPage.body.selectedPostFields = action.payload
    },
    setNumberOfPosts: (state, action) => {
      state.accountPage.body.numbersOfPosts = action.payload
    },
    toggleDownloadOnlySelectedFields: (state) => {
      state.accountPage.downloadOnlySelectedFields = !state.accountPage.downloadOnlySelectedFields
    },
    setUserInstId: (state, action) => {
      state.accountPage.body.userInstId = action.payload
    },
    clearAllStates: (state) => {    // change for posts to
      state.accountPage = initialState.accountPage
    }

  },
})


export const {clearAllStates,setAllUserField,setAllPostField,  setNumberOfPosts, setUserInstId,setUserField, setPostField, toggleDownloadOnlySelectedFields  } = jsonSlice.actions;
export default jsonSlice;