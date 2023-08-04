import React, { useState } from 'react'
import { Box, Button, Checkbox, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector  } from 'react-redux'
import { toggleDownloadOnlySelectedFields, useDownloadJsonMutation } from '../../../redux'
import { downloadData } from '../../../utils/helpers'


function DownloadAll({profileName}) {
  const [downloadFile, {isLoading, error}] = useDownloadJsonMutation()
  const { downloadOnlySelectedFields,numbersOfPosts, userInstId , selectedUserFields, selectedPostFields} = useSelector(state => state.jsonFields.accountPage)
  const dispatch = useDispatch()

  const handleDownloadOnlySelectedFieldsChange = (event) => {
    dispatch(toggleDownloadOnlySelectedFields(event.target.checked))
  };

  const handleDownloadAll = async () => {
    console.log('Скачать все данные пользователя');
    if(!userInstId) {
      return
    }
    let body
    if(downloadOnlySelectedFields) {
      body = {
        userField: JSON.stringify(selectedUserFields),
        postFields:JSON.stringify(selectedPostFields),
        countPosts: numbersOfPosts ,
        userInstId,
      }
    } else {
      body = {
        userField: JSON.stringify([]), // all
        postFields:JSON.stringify([]), // all
        countPosts: numbersOfPosts ,
        userInstId,
      }
    }

    const result = await downloadFile(body)  // todo is loading & error
    downloadData(result.data, userInstId)
  };

  return (
    <Grid item xs={12} sm={4}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
        <Box  >
          <Typography variant="subtitle1">Selected user</Typography>
          <Box style={{ height: '56px', display: 'flex', alignItems: 'center' }}>
            <Typography variant="h6" style={{ fontWeight: 'bold'}}>{profileName}</Typography>
          </Box>
          <Box style={{ height: '56px', display: 'flex', alignItems: 'center' , margin: '10px 0' }}>
            <Grid container alignItems="center">
              <Grid item>
                <Checkbox
                  checked={downloadOnlySelectedFields}
                  onChange={handleDownloadOnlySelectedFieldsChange}
                  color="primary"
                />
              </Grid>
              <Grid item>
                <Typography variant="subtitle2">Download just selected fields</Typography>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Box>
          <Button variant="contained" color="primary" onClick={handleDownloadAll} fullWidth>
            Download all
          </Button>
        </Box>
      </Box>
    </Grid>
  )
}

export default DownloadAll