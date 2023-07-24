import React from 'react'
import { Box, Typography } from '@mui/material'
import data from '../../exampleData.json'
import { useParams } from 'react-router-dom'
function ProfileInfo() {
  const { profileName}  = useParams()
  const user = data.user
 console.log(profileName)

  return (
    <>
      <Box sx={{ display: 'flex', width: '100%' }}>
          <Typography sx={{display:'block', margin: '8px 15px 8px 0px'}}
                      variant="h6">
            posts: {user.totalPosts || 'todo'}
          </Typography>
          <Typography sx={{display:'block', margin: '8px 15px'}}
                      variant="h6">
            followers: {user.followed}
          </Typography>
          <Typography sx={{display:'block', margin: '8px 15px'}}
                      variant="h6">
            following: {user.follow}
          </Typography>

      </Box>
    </>
  )
}

export default ProfileInfo