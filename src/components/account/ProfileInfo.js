import React from 'react'
import { Box, Typography } from '@mui/material'
import data from '../../exampleData.json'
import { useParams } from 'react-router-dom'
function ProfileInfo() {
  const { profileName}  = useParams()
  console.log(profileName)
  const user = data.user
  const posts = data.posts
  console.log(posts)
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          marginBottom: { xs: 5, sm: 7 },
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: { xs: 'center', sm: 'flex-start' },
        }}
      >
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">posts</Typography>
          <Typography variant="subtitle1">{user.totalPosts || 'todo'}</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">followers</Typography>
          <Typography variant="subtitle1">{user.followed}</Typography>
        </Box>
        <Box sx={{ textAlign: 'center' }}>
          <Typography variant="h6">following</Typography>
          <Typography variant="subtitle1">{user.follow}</Typography>
        </Box>

      </Box>
    </>
  )
}

export default ProfileInfo