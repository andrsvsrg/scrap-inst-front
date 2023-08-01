import { configureStore } from '@reduxjs/toolkit'
import { instagramApi } from './instagramApi'
import  searchSlice  from './searchSlice'
import jsonSlice from './jsonSlice'
export const store = configureStore({
  reducer:{
      [instagramApi.reducerPath]: instagramApi.reducer,
      search: searchSlice.reducer,
      jsonFields: jsonSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(instagramApi.middleware)
})

