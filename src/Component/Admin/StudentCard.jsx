import {
  Card,
  CardContent,
  Paper,
  Table,
  Avatar,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";

import React, { useState } from "react";

import MoreVertIcon from "@mui/icons-material/MoreVert";
import { useNavigate  } from 'react-router-dom';


const StudentCard = (props) => {
  const navigate=useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const openMenu = (event, index) => {
    setAnchorEl(event.target);
    setSelectedStudent(index);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setSelectedStudent(null);
  };

  const handleUpdate = (student) => {
    console.log("updateStudentCard", student);
    handleMenuClose();
  };

  const handleDelete = (id) => {
    console.log("deleteStudentCard");
  };

  const handleMarks = (id) =>{
    navigate(`/record-marks/${id}`);
  }
  const Students = [
    {
      id: 1,
      name: "John Doe",
      age: 18,
      grade: "A",
      email: "john@example.com",
      enrollment: "202301",
      dob: "2005-05-15",
      guardians: "John Doe Sr., Jane Doe",
      contact: "123-456-7890",
      class: "12th Grade",
      attendance: "95%",
    },
    {
      id: 2,
      name: "Jane Smith",
      age: 17,
      grade: "B",
      email: "jane@example.com",
      enrollment: "202302",
      dob: "2006-07-20",
      guardians: "Mark Smith, Emily Smith",
      contact: "987-654-3210",
      class: "11th Grade",
      attendance: "92%",
    },
    // Add more student details as needed
  ];

  return (

    <Card sx={{ width: "100%", overflowX: "auto" }}>
      <CardContent>
        <Typography component="h1" variant="h5">
          Student List
        </Typography>
        <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Student Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Age</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>DoB</TableCell>
                <TableCell>Gaurdian's Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Attendance</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {Students.map((student, index) => (
                <TableRow key={student.enrollment}>
                  <TableCell>
                    <Avatar
                      alt={student.name}
                      src={student.avatar ? student.avatar : student.name}
                    />
                  </TableCell>

                  <TableCell>{student.enrollment}</TableCell>
                  <TableCell>{student.name}</TableCell>
                  <TableCell>{student.age}</TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.dob}</TableCell>
                  <TableCell>{student.guardians}</TableCell>
                  <TableCell>{student.contact}</TableCell>
                  <TableCell>{student.class}</TableCell>
                  <TableCell>{student.attendance}</TableCell>
                  <TableCell sx={{ padding: "12px" }}>
                    <IconButton onClick={(e) => openMenu(e, index)}>
                      <MoreVertIcon />
                    </IconButton>

                    <Menu
                      id="action-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl) && selectedStudent !== null}
                      onClose={handleMenuClose}
                      PaperProps={{
                        elevation: 1,
                        style: {
                          border: "1px solid #ccc",
                          marginRight: "20px",
                        },
                      }}
                    >
                      {console.log(selectedStudent)}
                      <MenuItem
                        onClick={() =>
                          handleUpdate(Students[selectedStudent])
                        }
                      >
                        Update
                      </MenuItem>
                      <MenuItem onClick={()=>handleMarks(Students[selectedStudent].id)}>Record Marks</MenuItem>
                      <MenuItem onClick={()=>handleDelete(Students[selectedStudent])}>Logout</MenuItem>
                    </Menu>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
