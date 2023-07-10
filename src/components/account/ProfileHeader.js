import React, { useEffect, useState } from 'react'
import { Avatar, Box, Typography } from '@mui/material'
import VerifiedIcon from '@mui/icons-material/Verified';
import data from '../../exampleData.json'
import { useParams } from 'react-router-dom'
function ProfileHeader() {
  // const [data, setData] = useState()
  // const { profileName}  = useParams()
  // console.log(profileName)
  // // const
  // async function getInfo() {
  //   await fetch(`http://localhost:3001/api/user/${profileName}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setData(data)
  //       console.log(data)
  //     })
  //     .catch((e) => console.log(e))
  // }
  //
  // useEffect(() => {
  //   getInfo()
  // }, [])
  // let user
  // if(data) {
  //   user = data.user
  //
  //   const url = new URL(user.profilePicUrl).href
  //   console.log(url)
  // }

  const user = data.user
  return (
    <>
      {data && <Box sx={{ display:'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', marginBottom: { xs: 4, sm: 6 }}}>
          <Avatar src={new URL(user.profilePicUrl).href} sx={{ width: 80, height: 80, marginRight: { xs: 0, sm: 16 } }} />
          <Box>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              <Box sx={{display: 'flex', alignItems: 'center' }}>
                {user.username}
                {user.isVerified && <VerifiedIcon sx={{ml: 2}}/> }
              </Box>

            </Typography>
            <Typography variant="subtitle1" sx={{ color: 'gray' ,  display: {xs: 'flex'}, flexDirection: 'column',  justifyContent:{ xs:'center', sm: 'start'}}}>
              <Typography variant='span'>Biography: <Typography variant='span' sx={{ fontWeight: 'bold' }}>{user.biography ? user.biography  : ''}</Typography></Typography>
              <Typography variant='span'>Category name: <Typography variant='span' sx={{ fontWeight: 'bold' }}>{user.categoryName ?  user.categoryName  : ''}</Typography></Typography>
              <Typography variant='span'>Links: <Typography variant='span' sx={{ fontWeight: 'bold' }}>{user.bioLinks.length  ?  user.bioLinks.join(', ')  : ''}</Typography></Typography>
              <Typography variant='span'>Full name: <Typography variant='span' sx={{ fontWeight: 'bold' }}>{user.fullName  ?  user.fullName  : ''}</Typography></Typography>
            </Typography>
          </Box>
        </Box>
      }

    </>
  )
}

export default ProfileHeader