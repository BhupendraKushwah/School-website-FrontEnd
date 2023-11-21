import React, { useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Checkbox, Button, Typography, Box, Avatar } from '@mui/material';



const RecordAttendance = ({userData,Role}) => {
  const [attendance, setAttendance] = useState({});

  const handleCheckboxChange = (userId) => {
    console.log(userId)
    setAttendance(prevAttendance => ({
      ...prevAttendance,
      [userId]: !prevAttendance[userId]
    }));
  };
  

  const handleSaveAttendance = () => {
    const formattedAttendance = userData.map((user) => {
      return {
        "user Name": user.Name,
        "Status": attendance[user._id] ? "Present" : "Absent"
      };
    });
  
    const data = {
      "TeacherAttendee": formattedAttendance
    };
  
    console.log(data);
  };
  
  return (
    <Box p={3}>
      <Typography variant="h4" gutterBottom>
        {Role==="teacher"?"Teacher Attendance":"Student Attendance"}
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Avatar</b></TableCell>
              <TableCell><b>{Role==="teacher"?"Id":"Enrollment Id"}</b></TableCell>
              <TableCell><b>Name</b></TableCell>
              <TableCell><b>{Role==="teacher"?"Class Teacher":"Class"}</b></TableCell>
              <TableCell><b>Present</b></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((user) => (
              <TableRow key={user._id}>
                
                <TableCell><Avatar>{user.Name[0]}</Avatar></TableCell>
                <TableCell>{Role==="teacher"?user._id:user.Enrollment}</TableCell>
                <TableCell>{user.Name}</TableCell>
                <TableCell>{Role==="teacher"?user.ClassTeacher:user.Class}</TableCell>
                <TableCell>
                  <Checkbox
                    checked={attendance[user._id] || false}
                    onChange={() => handleCheckboxChange(user._id)}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Box mt={3}>
        <Button variant="contained" color="primary" onClick={handleSaveAttendance}>
          Save Attendance
        </Button>
      </Box>
    </Box>
  );
};

export default RecordAttendance;
