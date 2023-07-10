import React from 'react'
import { Box, Button, Grid, Paper } from '@mui/material'
import data from '../../exampleData.json'

function PostsList() {
  const posts = data.posts
  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
          <Grid item xs={6} sm={4} key={index}>

            <Paper sx={{ height: 300 }} >
              <img src={new URL(post.displayUrl).href} alt=""/>
              </Paper>
          </Grid>
        ))}
      </Grid>

      <Box sx={{ textAlign: 'center', marginTop: 5 , marginBottom: 5}}>
        <Button variant="contained">Показать еще</Button>
      </Box>
    </>
  )
}

export default PostsList