import React, { useState } from 'react'

import Header from '../components/Header'
import ProfileHeader from '../components/account/ProfileHeader'
import ProfileInfo from '../components/account/ProfileInfo'
import PostsList from '../components/account/PostsList'
import SearchInput from '../components/account/downloadSection/SearchInput'
import SearchTooltipLine from '../components/account/downloadSection/SearchTooltipLine'

import { Box } from '@mui/material';
import DownloadSection from '../components/account/downloadSection'
import {useGetUserQuery} from '../redux'
import { useParams } from 'react-router-dom'
import AccountWithData from '../components/account/AccountWithData'


 function Account() {
   const { profileName}  = useParams()


   if(!profileName) {
     return (
       <>
         <Header/>
         <Box sx={{ maxWidth: 900, margin: '0 auto', pt: 5, pl: 3, pr: 3 }}>
           <DownloadSection profileName={profileName}/>
         </Box>
       </>
     );
   }

   return <AccountWithData profileName={profileName}/>
}

export default Account
