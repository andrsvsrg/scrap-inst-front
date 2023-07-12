import React, { useEffect, useState } from 'react'
import { Box, Card, CardMedia, Skeleton, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'

function PostSmall({ post }) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    if(post) {
      setIsLoading(false)
    }
  }, [])

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <Box sx={{mouse:'pointer', position: 'relative', height: '100%', width: '100%'}}>
      {!isLoading ?
        (
          <Card
            onMouseOver={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            sx={{
              height: '100%',
              position: 'relative'
            }}
          >
            <CardMedia
              component="img"
              height="100%"
              image={new URL(post.displayUrl).href}
              alt=""
            />


            {
              (post.edgeChildren.length > 0)
              &&
              <Box sx={{ position: 'absolute', top: 5, right: 5 }}>
                <svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="22" role="img" viewBox="0 0 48 48"
                     width="22">
                  <path
                    d="M34.8 29.7V11c0-2.9-2.3-5.2-5.2-5.2H11c-2.9 0-5.2 2.3-5.2 5.2v18.7c0 2.9 2.3 5.2 5.2 5.2h18.7c2.8-.1 5.1-2.4 5.1-5.2zM39.2 15v16.1c0 4.5-3.7 8.2-8.2 8.2H14.9c-.6 0-.9.7-.5 1.1 1 1.1 2.4 1.8 4.1 1.8h13.4c5.7 0 10.3-4.6 10.3-10.3V18.5c0-1.6-.7-3.1-1.8-4.1-.5-.4-1.2 0-1.2.6z"></path>
                </svg>
              </Box>
            }

            {
              post.isVideo &&
              <Box sx={{ position: 'absolute', top: 5, right: 5 }}>
                <svg color="rgb(255, 255, 255)" fill="rgb(255, 255, 255)" height="18" role="img" viewBox="0 0 24 24"
                     width="18">
                  <path
                    d="M5.888 22.5a3.46 3.46 0 0 1-1.721-.46l-.003-.002a3.451 3.451 0 0 1-1.72-2.982V4.943a3.445 3.445 0 0 1 5.163-2.987l12.226 7.059a3.444 3.444 0 0 1-.001 5.967l-12.22 7.056a3.462 3.462 0 0 1-1.724.462Z"></path>
                </svg>
              </Box>
            }


            {isHovered &&
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '100%',
                  height: '100%',
                  display: 'block',
                  alignItems: 'center',
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  color: 'white',
                  padding: '4px 8px',
                  transition: 'opacity 0.3s'
                }}
              >
                <Box
                  sx={{ display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center' }}>
                  {/*<IconButton size="small" sx={{ mr: 1 }}>*/}
                    <Favorite sx={{ color: '#ffffff',  mr: 1  }}/>
                  {/*</IconButton>*/}

                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>{post.likes}</Typography>
                </Box>
              </Box>
            }
          </Card>
        )
        :
        <Box sx={{width: '300px', height: '270px'}}>
          <Skeleton
            variant="rectangular"
            sx={{ position: 'absolute', top: 0, right: 0, width: '100%', height: '100%' }}
          />
        </Box>



      }
      </Box>

    </>
  )
}

export default PostSmall