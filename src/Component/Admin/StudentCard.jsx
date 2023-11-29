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
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useContext } from "react";
import AdminContext from "../../Context/Admin/AdminContext";
import SearchComponent from "./SearchComponent";

const StudentCard = (props) => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const context = useContext(AdminContext);
  const { fetchUser, allStudent, handleFetchMarks, filteredStudentList } =
    context;

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

  const handleRecordMarks = (id) => {
    navigate(`/record-marks/${id}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUser("student");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {}, [allStudent]);
  const data = filteredStudentList ? filteredStudentList : allStudent;

  return (
    <Card sx={{ width: "100%", overflowX: "auto" }}>
      <CardContent>
        <Typography component="h1" variant="h5">
          Student List
        </Typography>
        <SearchComponent user={"student"} forWhich={"studentList"} />
        <TableContainer component={Paper} sx={{ marginTop: "10px" }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Avatar</TableCell>
                <TableCell>Student Id</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Address</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>DoB</TableCell>
                <TableCell>Gaurdian's Name</TableCell>
                <TableCell>Contact</TableCell>
                <TableCell>Class</TableCell>
                <TableCell>Fees</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredStudentList === "Not Found" ||
              data === undefined ? (
                <TableRow>
                  <TableCell colSpan={7} align="center" marginTop="5px">
                    "Data Not Found"
                  </TableCell>
                </TableRow>
              ) : (
                data.map((student, index) => (
                  <TableRow key={student._id}>
                    <TableCell>
                      <Avatar
                        alt={student.Name}
                        src={student.Image ? student.Image : student.Name}
                      />
                    </TableCell>

                    <TableCell>{student.Enrollment}</TableCell>
                    <TableCell>{student.Name}</TableCell>
                    <TableCell>{student.Address}</TableCell>
                    <TableCell>{student.Email}</TableCell>
                    <TableCell>{student.DOB}</TableCell>
                    <TableCell>{student.Guardians}</TableCell>
                    <TableCell>{student.Contact}</TableCell>
                    <TableCell>{student.Class}</TableCell>
                    <TableCell>{student.Fees}</TableCell>
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
                        <MenuItem
                          onClick={() =>
                            handleUpdate(allStudent[selectedStudent])
                          }
                        >
                          Update
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            handleRecordMarks(allStudent[selectedStudent]._id)
                          }
                        >
                          Record Marks
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            handleFetchMarks(allStudent[selectedStudent]._id)
                          }
                        >
                          Show Marks
                        </MenuItem>
                        <MenuItem
                          onClick={() =>
                            handleDelete(allStudent[selectedStudent])
                          }
                        >
                          Logout
                        </MenuItem>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export default StudentCard;
