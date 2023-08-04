import React, { useEffect, useState } from 'react'
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { useGetUserQuery, setPostField, setNumberOfPosts, useDownloadJsonMutation } from '../../../redux'
import { useDispatch, useSelector } from 'react-redux'
import { downloadData } from '../../../utils/helpers'

function PostsFields({profileName}) {
  const {data } = useGetUserQuery(profileName)
  const [downloadFile, {isLoading, error}] = useDownloadJsonMutation()
  const { selectedPostFields, numbersOfPosts, userInstId } = useSelector(state => state.jsonFields.accountPage)
  const dispatch = useDispatch()
  const [postFields, setPostFields] = useState([]);


  useEffect(() => {
    if(data) {
      const postsInfoKeys = Object.keys(data?.posts[0])
                      .filter((key) => key !== '_id' && key !== '__v' && key !== 'displayUrlD')
      setPostFields(postsInfoKeys)
    }
  }, [data])




  const handlePostFieldsChange = (event) => {
    dispatch(setPostField(event.target.value))
  };

  const handleNumPostsChange = (event) => {
    dispatch(setNumberOfPosts(+event.target.value))
  };

  const handlePostsDownload = async() => {
    if(!userInstId) {
      return
    }
    const body = {
      postFields:JSON.stringify(selectedPostFields),
      countPosts: numbersOfPosts ,
      userInstId,
    }
    const result = await downloadFile(body)  // todo is loading & error
    downloadData(result.data, userInstId)
  };



  return (
    <Grid item xs={12} sm={4}>
      <Typography variant="subtitle1">Select post fields</Typography>
      <FormControl fullWidth>
        <InputLabel>Select fields</InputLabel>
        <Select
          multiple
          value={selectedPostFields}
          label="Select fields"
          onChange={handlePostFieldsChange}
          renderValue={(selected) => selected.join(', ')}
        >
          {
            postFields && postFields.map((postField) => {
              return <MenuItem key={postField} value={postField}>{postField}</MenuItem>
            })
          }

        </Select>
      </FormControl>

      <Box margin='10px 0'
      >
        <TextField
          label="Number of posts"
          type="number"
          value={numbersOfPosts}
          onChange={handleNumPostsChange}
          fullWidth
        />
      </Box>


      <Button variant="contained" color="primary" onClick={handlePostsDownload} fullWidth>
        Download posts info
      </Button>
    </Grid>
  )
}

export default PostsFields