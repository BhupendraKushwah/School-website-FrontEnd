import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Typography,
  Box,
  Grid,
  FormGroup,
  FormControlLabel,
  Switch,
  IconButton,
} from "@mui/material";
import { Delete } from "@mui/icons-material";

const RecordAttendance = ({ userData, Role }) => {
  const [attendance, setAttendance] = useState({});
  const [currentTime, setCurrentTime] = useState(new Date());

  const handleCheckboxChange = (userId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [userId]: !prevAttendance[userId],
    }));
  };

  const handleSaveAttendance = () => {
    const formattedAttendance = userData.map((user) => {
      return {
        "User Name": user.Name,
        Status: attendance[user._id] ? "Present" : "Absent",
      };
    });

    const data = {
      Attendee: formattedAttendance,
    };

    console.log(data);
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <Box p={3}>
    <Grid container spacing={3} alignItems="center">
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight="bold">
            {Role === "teacher" ? "Teacher Attendance" : "Student Attendance"}
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}  sx={{ display: "flex", justifyContent: "flex-end" ,}}>
          <Box
            sx={{
              backgroundColor: "#3f51b5",
              color: "#fff",
              p: 1,
              borderRadius: 2,
              textAlign: "center",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.25)",
              width: "100%",
              maxWidth: "100px",
              margin:"20px 10px" 
            }}
          >
            <Typography variant="body1" color="inherit">
              Current Time
            </Typography>
            <Typography variant="body2" color="inherit">
              {currentTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", second: "2-digit" })}
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>#</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                {Role === "teacher" ? "ID" : "Enrollment ID"}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>
                {Role === "teacher" ? "Class Teacher" : "Class"}
              </TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Present</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user, index) => (
              <TableRow key={user._id}>
                <TableCell>{index + 1}</TableCell>
                <TableCell>
                  {Role === "teacher" ? user._id : user.Enrollment}
                </TableCell>
                <TableCell>{user.Name}</TableCell>
                <TableCell>
                  {Role === "teacher" ? user.ClassTeacher : user.Class}
                </TableCell>
                <TableCell>
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={attendance[user._id] || false}
                          onChange={() => handleCheckboxChange(user._id)}
                        />
                      }
                    />
                  </FormGroup>
                </TableCell>
                <TableCell>
                  <IconButton>
                    <Delete />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveAttendance}
        >
          Save Attendance
        </Button>
      </Box>
    </Box>
  );
};

export default RecordAttendance;
