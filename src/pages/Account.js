import React, { useState } from 'react'

import Header from '../components/Header'
import ProfileHeader from '../components/account/ProfileHeader'
import ProfileInfo from '../components/account/ProfileInfo'
import PostsList from '../components/account/PostsList'
import SearchInput from '../components/account/SearchInput'
import SearchTooltipLine from '../components/account/SearchTooltipLine'

import { Box } from '@mui/material';


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

  const [searchTerm, setSearchTerm] = useState('') // later get from redux

  return (
  <>
    <Header/>
      <Box sx={{ maxWidth: 900, margin: '0 auto', pt: 5, pl: 3, pr: 3 }}>
        <SearchInput searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <SearchTooltipLine searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>
        <ProfileHeader/>
        <ProfileInfo/>
        <PostsList/>
      </Box>

  </>

  )
}

export default Account
