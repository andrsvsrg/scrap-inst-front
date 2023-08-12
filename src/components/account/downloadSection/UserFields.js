import React, { useEffect, useState } from 'react'



import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { setAllUserField, setUserField, setUserInstId, useDownloadJsonMutation, useGetUserQuery } from '../../../redux'
import { useDispatch, useSelector } from 'react-redux'
import { downloadData } from '../../../utils/helpers'

function UserFields({profileName}) {
  const [userFields, setUserFields] = useState([])
  const dispatch = useDispatch()
  const { body, body: { userInstId, selectedUserFields } } = useSelector(state => state.jsonFields.accountPage);
  const {data } = useGetUserQuery(profileName)

  const [downloadFile, {isLoading, error}] = useDownloadJsonMutation()

  useEffect(() => {
    if(data) {
      const userInfoKeys = Object.keys(data?.user)
                  .filter((key) => key !== '_id' && key !== '__v' && key !== 'profilePicUrlD')
      setUserFields(userInfoKeys)
      dispatch(setAllUserField(userInfoKeys))
      if(data?.user?.userInstId) {
        dispatch(setUserInstId(data?.user?.userInstId))
      }
    }
  }, [data])



  const handleUserFieldsChange = (event) => {
    dispatch(setUserField(event.target.value))
  };


  const handleUserDownload = async() => {
    if(!userInstId || selectedUserFields.length === 0) {
      alert('Please select user fields')
      return
    }
    const reqBody = {
      ...body,
      numbersOfPosts: 0,
      selectedPostFields: []
    }
    const result = await downloadFile(reqBody)
    downloadData(result.data, userInstId)
  };

  return (
    <Grid display='flex'
          flexDirection='column'
          justifyContent='space-between'
          item
          xs={12}
          sm={4}
    >
      <Box>
        <Typography variant="subtitle1">Select user fields</Typography>
        <FormControl fullWidth>
          <InputLabel>Select fields</InputLabel>
          <Select
            multiple
            sx={{margin: '0 0 10px 0'}}
            label="Select fields"
            value={selectedUserFields}
            onChange={handleUserFieldsChange}
            renderValue={(selected) => selected.join(', ')}
          >
            {
              userFields && userFields.map((userKey) => {
                return <MenuItem key={userKey} value={userKey}>{userKey}</MenuItem>
              })
            }

          </Select>
        </FormControl>
      </Box>

      <Button variant="contained" color="primary" onClick={handleUserDownload} fullWidth>
        Download user info
      </Button>
    </Grid>
  )
}

export default UserFields