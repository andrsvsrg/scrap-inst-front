import React from 'react'
import { Box, Button, Grid, Link } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom';
import data from '../../exampleData.json'
import PostSmall from './PostSmall'

function PostsList({posts}) {


  return (
    <>
      <Grid container spacing={2}>
        {posts.map((post, index) => (
            <Grid item xs={6} sm={4} key={index}>
              <Link component={RouterLink} to={`/post/${post.shortcode}`}>
                <PostSmall post={post}/>
              </Link>
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