import React, { useEffect } from 'react'

import Header from '../components/Header'
import ProfileHeader from '../components/account/ProfileHeader'
import ProfileInfo from '../components/account/ProfileInfo'
import PostsList from '../components/account/PostsList'

import { Box } from '@mui/material';
import { useParams } from 'react-router-dom'

 function Account() {

  //  const { profileName}  = useParams()
  //  console.log(profileName)
  // // const
  //  async function getInfo() {
  //   await fetch(`http://localhost:3001/api/user/${profileName}`)
  //     .then((response) => response.json())
  //     .then((data) => console.log(data))
  //     .catch((e) => console.log(e))
  //  }
  //
  //  useEffect(() => {
  //    getInfo()
  //  }, [])


  return (
  <>
    <Header/>
      <Box sx={{ maxWidth: 900, margin: '0 auto', pt: 16, pl: 3, pr: 3 }}>
        <ProfileHeader/>
        <ProfileInfo/>
        <PostsList/>
      </Box>

  </>

  )
}

export default Account
