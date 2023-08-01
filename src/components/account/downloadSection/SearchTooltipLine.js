import React, { useState } from 'react'
import { Box, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setSearchTerm } from '../../../redux'
import { useNavigate } from 'react-router-dom'

function SearchTooltipLine() {
  const {searchType} = useSelector(state => state.search)
  const dispatch = useDispatch()
  const navigate = useNavigate();

  function handleSetSearchTerm(e) {
    const searchTerm = e.target.innerHTML.trim()
    dispatch(setSearchTerm(searchTerm))
    e.preventDefault();
    let route = '';
    if (searchType === 'post') {
      route = `/post/${searchTerm}`;
    } else if (searchType === 'username') {
      route = `/account/${searchTerm}`;
    }
    navigate(route);
  }

  const renderTooltipContent = () => {
    if (searchType === 'post') {
      return (
        <>
          <Typography variant="body2" component="span">
            Example format for post:
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>handleSetSearchTerm(e)}> CukhF05q3fk </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>handleSetSearchTerm(e)}> CultEylOIWd </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>handleSetSearchTerm(e)}> CuAKoyGtB_Z </Typography>
          </Typography>
        </>
      );
    }

    if (searchType === 'username') {
      return (
        <>
          <Typography variant="body2" component="span" >
            Example format for username:

            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>handleSetSearchTerm(e)}> bbcnews </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>handleSetSearchTerm(e)}> nba </Typography>,
            <Typography variant="body2" component="strong" sx={{fontWeight: '700', fontSize: '1.1rem', cursor:'pointer'}}    onClick={(e) =>handleSetSearchTerm(e)}> asics </Typography>

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