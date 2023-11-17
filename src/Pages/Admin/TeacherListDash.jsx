import React, { useState } from "react";
import TeacherCard from "../../Component/TeacherCard";
import {
  Grid,
  Stack,
  Typography,
  Button,
  Paper,
  TextField,
  InputAdornment,
  IconButton,
  useTheme,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";
import { Padding } from "@mui/icons-material";

const TeacherListDash = () => {
    const theme=useTheme()
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTeachers, setFilteredTeachers] = useState(null);

  const teacherData = [
    { id: 1, name: "John Doe", subject: "Math" },
    { id: 2, name: "Jane Smith", subject: "English" },
    { id: 3, name: "Bob Johnson", subject: "History" },
    { id: 4, name: "Alice Brown", subject: "Physics" },
  ];

  // Function to filter teachers based on the search term
  const handleSearch = () => {
    const filtered = teacherData.filter((teacher) =>
      teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredTeachers(filtered);
  };

  return (
    <div style={{backgroundColor:theme.palette.grey[50] ,padding:"20px" ,minHeight:"100%"}} >
        {console.log(theme.palette)}
        <Stack
      direction={{ xs: 'column', sm: 'row' }}
      justifyContent="space-between"
      alignItems={{ xs: 'stretch', sm: 'center' }}
      margin={2}
    >
      <Typography variant="h5">Teachers</Typography>
      <TextField
        label="Search"
        variant="outlined"
        size="small"
        fullWidth
        sx={{ maxWidth: { xs: '100%', sm: '50vw' } }}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleSearch}>
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        size="medium"
        sx={{ marginTop: { xs: '8px', sm: 0 } }}
      >
        Add Teacher
      </Button>
    </Stack>
      <Grid container spacing={2} marginTop={2}>
        {filteredTeachers
          ? filteredTeachers.map((teacher) => {
              return <TeacherCard teacher={teacher} key={teacher.id} />
        })
          : teacherData.map((teacher) => {
            return <TeacherCard teacher={teacher} key={teacher.id} />
      })}
      </Grid>
    </div>
  );
};

export default TeacherListDash;
