import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const instagramApi = createApi({
  reducerPath: 'instagramApi',
  baseQuery: fetchBaseQuery({baseUrl:'http://localhost:3001/api/'}),
  endpoints: (build) => ({
    getUser: build.query({
      query: (username) => `user/${username}`,
      keepUnusedDataFor: 10 * 60 * 1000,
    }),
    downloadJson: build.mutation({
      query: (requestData) => ({
        url: 'user/download',
        method: 'POST',
        body:requestData
      })
    })
  })
})

export const { useGetUserQuery, useDownloadJsonMutation } = instagramApi