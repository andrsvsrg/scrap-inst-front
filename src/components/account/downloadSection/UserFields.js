import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { setUserField, useGetUserQuery } from '../../../redux'
import { useDispatch, useSelector } from 'react-redux'

function UserFields({profileName}) {
  const [userFields, setUserFields] = useState([])
  const dispatch = useDispatch()
  const selectedUserFields = useSelector(state => state.jsonFields.accountPage.selectedUserFields)

  const {data } = useGetUserQuery(profileName)

 console.log(selectedUserFields)

  useEffect(() => {
    if(data) {
      const userInfoKeys = Object.keys(data?.user)  // todo send to redux - jsonSlice
                  .filter((key) => key !== '_id' && key !== '__v')
      console.log(userInfoKeys)
      setUserFields(userInfoKeys)
    }
  }, [data])



  const handleUserFieldsChange = (event) => {
    dispatch(setUserField(event.target.value))
  };

  const handleUserDownload = () => {
    console.log('Скачать информацию о пользователе');
    console.log('Выбранные поля:', selectedUserFields);
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