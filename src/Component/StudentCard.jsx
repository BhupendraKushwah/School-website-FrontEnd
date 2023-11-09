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
} from "@mui/material";

import React from "react";
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";

const StudentCard = (props) => {
  const handleUpdate = (id) => {
    console.log("updateStudentCard");
  };
  const handleDelete = (id) => {
    console.log("deleteStudentCard");
  };

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
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
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
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
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
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
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
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
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
      avatar: "https://via.placeholder.com/50", // Replace with actual image URLs
    },
    // Add more student details as needed
  ];
  return (
    <Card
      sx={
        !props.height
          ? { maxWidth: 345, minWidth: props.width + "%" }
          : { height: props.height + "vh" }
      }
    >
      <CardContent>
        <Typography component="h1" variant="h5">New Students</Typography>
        <div style={{ height: "400px", overflowY: "auto" }}>
        <TableContainer component={Paper}>
          <Table>
            {<TableHead>
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
            </TableHead>}
            <TableBody>
              {Students.map((student) => (
                <TableRow key={student.enrollment}>
                  <TableCell>
                    <Avatar alt={student.name} src={student.avatar} />
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
                  <TableCell className="ActionBtn" sx={{ padding:"0" }}>
                    <FaRegPenToSquare
                      variant="outlined"
                      color="primary"
                      className="StudentActions"
                      onClick={() => handleUpdate(student.id)}
                    >
                      Update
                    </FaRegPenToSquare>
                    <FaTrash
                      variant="outlined"
                      color="secondary"
                      className="StudentActions"
                      onClick={() => handleDelete(student.id)}
                    >
                      Delete
                    </FaTrash>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
