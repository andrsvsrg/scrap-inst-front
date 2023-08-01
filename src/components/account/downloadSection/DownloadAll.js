import React, { useState } from 'react'
import { Box, Button, Checkbox, Grid, Typography } from '@mui/material'
import { useDispatch, useSelector  } from 'react-redux'
import { toggleDownloadOnlySelectedFields } from '../../../redux'


function DownloadAll({profileName}) {
  const downloadOnlySelectedFields = useSelector(state => state.jsonFields.accountPage.downloadOnlySelectedFields)
  const dispatch = useDispatch()

  const handleDownloadOnlySelectedFieldsChange = (event) => {
    dispatch(toggleDownloadOnlySelectedFields(event.target.checked))
  };

  const handleDownloadAll = () => {
    console.log('Скачать все данные пользователя');
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