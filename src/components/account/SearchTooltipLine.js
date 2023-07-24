import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'

function SearchTooltipLine({ setSearchTerm }) {
  const [searchType, setSearchType] = useState('post');

  function setSearch(e) {
    console.log(e.target.innerHTML.trim())
    setSearchTerm(e.target.innerHTML.trim())
  }

  const renderTooltipContent = () => {
    if (searchType === 'post') {
      return (
        <>
          <Typography variant="body2" component="span">
            Example format for post:
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>setSearch(e)}> CukhF05q3fk </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>setSearch(e)}> CultEylOIWd </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>setSearch(e)}> CuAKoyGtB_Z </Typography>
          </Typography>
        </>
      );
    }

    if (searchType === 'username') {
      return (
        <>
          <Typography variant="body2" component="span" >
            Example format for username:

            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>setSearch(e)}> bbcnews </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>setSearch(e)}> nba </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>setSearch(e)}> asics </Typography>

            (Click to insert )
          </Typography>
        </>
      );
    }

    return null;
  };

  return (
    <Box display="flex" alignItems="center" paddingLeft='12px'  paddingRight='12px' marginBottom={4} marginTop={2}>

      <Box  marginLeft={1}>{renderTooltipContent()}</Box>
    </Box>
  )
}
export default SearchTooltipLine