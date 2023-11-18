import React,{ useContext } from 'react'
import AdminContext from '../../Context/Admin/AdminContext';
import {
    TextField,
    InputAdornment,
    IconButton,
  } from "@mui/material";
  import SearchIcon from "@mui/icons-material/Search";

const SearchComponent = (props) => {
  const context =useContext(AdminContext)
  const {handleSearch,searchTerm,setSearchTerm}=context
  return (
    <TextField
        label="Search By Name"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ maxWidth: { xs: '100%', sm: '50vw' } }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={()=>handleSearch(props.user)}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
  )
}

export default SearchComponent
