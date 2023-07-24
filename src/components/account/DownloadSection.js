import React, { useState } from 'react';
import {
  Box,
  Button, Checkbox,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
  Typography
} from '@mui/material'
import SearchInput from './SearchInput'
import SearchTooltipLine from './SearchTooltipLine'


const DownloadSection = () => {
  const [userFields, setUserFields] = useState([]);
  const [numPosts, setNumPosts] = useState(12);
  const [postFields, setPostFields] = useState([]);
  const [username, setUsername] = useState('');
  const [downloadOnlySelectedFields, setDownloadOnlySelectedFields] = useState(false);

  const handleDownloadOnlySelectedFieldsChange = (event) => {
    setDownloadOnlySelectedFields(event.target.checked);
  };
  const handleUserFieldsChange = (event) => {
    setUserFields(event.target.value);
  };

  const handleNumPostsChange = (event) => {
    setNumPosts(event.target.value);
  };

  const handlePostFieldsChange = (event) => {
    setPostFields(event.target.value);
  };

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handleUserDownload = () => {
    console.log('Скачать информацию о пользователе');
    console.log('Выбранные поля:', userFields);
  };

  const handlePostsDownload = () => {
    console.log('Скачать информацию о постах');
    console.log('Количество постов:', numPosts);
    console.log('Выбранные поля:', postFields);
  };

  const handleDownloadAll = () => {
    console.log('Скачать все данные пользователя');
    console.log('Имя пользователя:', username);
    console.log('Выбранные поля пользователя:', userFields);
    console.log('Количество постов:', numPosts);
    console.log('Выбранные поля постов:', postFields);
  };

  return (
    <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', minWidth: '400px' }}>
      <SearchInput/>
      <SearchTooltipLine/>
      <Typography variant="h6" gutterBottom>
        Download instagram data
      </Typography>
      <Grid container spacing={2}>
        {/* First Column */}
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
                value={userFields}
                onChange={handleUserFieldsChange}
                renderValue={(selected) => selected.join(', ')}
              >
                <MenuItem value="userInstId">userInstId</MenuItem>
                <MenuItem value="username">username</MenuItem>
                <MenuItem value="biography">biography</MenuItem>
              </Select>
            </FormControl>
          </Box>

          <Button variant="contained" color="primary" onClick={handleUserDownload} fullWidth>
            Download user info
          </Button>
        </Grid>
        {/* Second Column */}
        <Grid item xs={12} sm={4}>
          <Typography variant="subtitle1">Select posts info</Typography>
          <FormControl fullWidth>
            <InputLabel>Select fields</InputLabel>
            <Select
              multiple
              value={postFields}
              label="Select fields"
              onChange={handlePostFieldsChange}
              renderValue={(selected) => selected.join(', ')}
            >
              <MenuItem value="shortcode">shortcode</MenuItem>
              <MenuItem value="displayUrl">displayUrl</MenuItem>
              <MenuItem value="isVideo">isVideo</MenuItem>
              {/* Добавьте здесь другие поля постов */}
            </Select>
          </FormControl>

          <Box margin='10px 0'
          >
            <TextField
              label="Number of posts"
              type="number"
              value={numPosts}
              onChange={handleNumPostsChange}
              fullWidth
            />
          </Box>


          <Button variant="contained" color="primary" onClick={handlePostsDownload} fullWidth>
            Download posts info
          </Button>
        </Grid>
        {/* Third Column */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%'}}>
            <Box  >
              <Typography variant="subtitle1">Selected user</Typography>
              <Box style={{ height: '56px', display: 'flex', alignItems: 'center' }}>
                <Typography variant="h6" style={{ fontWeight: 'bold'}}>almost_sportsman{username}</Typography>
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
      </Grid>
    </Paper>
  );
};
export default DownloadSection;
