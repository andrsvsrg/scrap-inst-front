import React from 'react'
import { useGetUserQuery } from '../../redux'
import Header from '../Header'
import { Box, CircularProgress, Typography } from '@mui/material'
import DownloadSection from './downloadSection'
import ProfileHeader from './ProfileHeader'
import PostsList from './PostsList'

function AccountWithData({profileName}) {
  const { data, error, isLoading } = useGetUserQuery(profileName)

  console.log(data)


  // const [searchTerm, setSearchTerm] = useState('') // later get from redux

  return (
    <>
      <Header/>
      <Box sx={{ maxWidth: 900, margin: '0 auto', pt: 5, pl: 3, pr: 3 }}>
        <DownloadSection profileName={profileName}/>
        {/*<SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>*/}
        {/*<SearchTooltipLine searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>*/}
        {
          data ? (
            <>
              <ProfileHeader user={data.user} />
              <PostsList posts={data.posts} />
            </>
          ) : isLoading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px' }}>
              <CircularProgress />
            </Box>
          ) : error ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', color: 'red' }}>
              <Typography variant="h5">Error: {error.message}</Typography>
            </Box>
          ) : null
        }

      </Box>
    </>
  )
}

export default AccountWithData