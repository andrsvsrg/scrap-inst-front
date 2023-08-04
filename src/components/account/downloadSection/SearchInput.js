import { InputBase, IconButton, Paper, Select, MenuItem } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {  useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'
import { setSearchType, setSearchTerm } from '../../../redux'


const SearchInput = () => {
  const { searchType, searchTerm } = useSelector((state) => state.search)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    if(!searchTerm) {
      return;
    }
    let route = '';
    if (searchType === 'post') {
      route = `/post/${searchTerm}`;
    } else if (searchType === 'username') {
      route = `/account/${searchTerm}`;
    }
    navigate(route);
  };

  const handleSearchTypeChange = (event) => {
      dispatch(setSearchType(event.target.value))
  };

  const handleSearchTerm = (event) => {
    if(event.target.value) {
      dispatch(setSearchTerm(event.target.value))
    }
  }


  return (
    <Paper
      component="form"
      onSubmit={handleSearch}
      sx={{
        display: 'flex',
        alignItems: 'center',
        borderRadius: '5px',
        backgroundColor: '#fafafa',
        padding: '4px 12px',
        width: '95%',
        margin: 'auto',
      }}
    >
      <Select
        value={searchType}
        onChange={handleSearchTypeChange}
        sx={{
          marginRight: '8px',
          height: '35px',
          minWidth: '80px',
          padding: '0px',
          background: '#ffffff',
          borderRadius: '5px',
          paddingLeft: '8px',
        }}
      >
        <MenuItem value="username">User search</MenuItem>
        <MenuItem value="post">Post search</MenuItem>
      </Select>
      <InputBase
        sx={{ marginLeft: '8px', flex: 1 ,  padding: '0px'}}
        value={searchTerm}
        onChange={(e) => handleSearchTerm(e)}
        placeholder="Enter username"
        inputProps={{ 'aria-label': 'search' }}
      />
      <IconButton type="submit" sx={{ padding: '8px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
};

export default SearchInput;