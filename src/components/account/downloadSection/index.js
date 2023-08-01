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
import UserFields from './UserFields'
import PostsFields from './PostsFields'
import DownloadAll from './DownloadAll'
import { useGetUserQuery } from '../../../redux'


const DownloadSection = ({profileName}) => {


  const [userFields, setUserFields] = useState([]);
  const [numPosts, setNumPosts] = useState(12);
  const [postFields, setPostFields] = useState([]);

  const [downloadOnlySelectedFields, setDownloadOnlySelectedFields] = useState(false);


  return (
    <Paper elevation={3} sx={{ padding: '20px', marginBottom: '20px', minWidth: '400px' }}>
      <SearchInput/>
      <SearchTooltipLine/>
      <Typography variant="h6" gutterBottom>
        Download instagram data
      </Typography>
      <Grid container spacing={2}>
        <UserFields profileName={profileName}/>
        <PostsFields profileName={profileName}/>
        <DownloadAll profileName={profileName}/>
      </Grid>
    </Paper>
  );
};
export default DownloadSection;




//
// const handleDownloadOnlySelectedFieldsChange = (event) => {
//   setDownloadOnlySelectedFields(event.target.checked);
// };
// const handleUserFieldsChange = (event) => {
//   setUserFields(event.target.value);
// };
//
// const handleNumPostsChange = (event) => {
//   setNumPosts(event.target.value);
// };
//
// const handlePostFieldsChange = (event) => {
//   setPostFields(event.target.value);
// };
//
//
// const handleUserDownload = () => {
//   console.log('Скачать информацию о пользователе');
//   console.log('Выбранные поля:', userFields);
// };
//
// const handlePostsDownload = () => {
//   console.log('Скачать информацию о постах');
//   console.log('Количество постов:', numPosts);
//   console.log('Выбранные поля:', postFields);
// };
//
// const handleDownloadAll = () => {
//   console.log('Скачать все данные пользователя');
//   console.log('Имя пользователя:', profileName);
//   console.log('Выбранные поля пользователя:', userFields);
//   console.log('Количество постов:', numPosts);
//   console.log('Выбранные поля постов:', postFields);
// };
