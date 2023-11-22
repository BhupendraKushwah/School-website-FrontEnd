import React, { useEffect, useState, useContext } from "react";
import {
  Card,
  CardContent,
  Table,
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Typography,
  styled,
  FormControl,
  Select,
  MenuItem,
  Stack,
} from "@mui/material";

import SearchComponent from "./SearchComponent";
import AdminContext from "../../Context/Admin/AdminContext";

const StyledCard = styled(Card)({
  width: "100%",
  height: "100%",
  overflowX: "auto",
  backgroundColor: "#f0f0f0", // Light gray background
});

const StyledCardContent = styled(CardContent)({
  paddingBottom: 16,
});

const StyledTableContainer = styled(TableContainer)({
  marginTop: 16,
  backgroundColor: "#ffffff", // White background
});

const StyledTableHeaderCell = styled(TableCell)({
  backgroundColor: "#1976D2", // Dark blue background
  color: "#ffffff", // White text
});

const StyledTableRow = styled(TableRow)({
  "&:nth-of-type(odd)": {
    backgroundColor: "#f5f5f5", // Light gray background for odd rows
  },
});

const TeacherAttendance = ({role}) => {

  const context = useContext(AdminContext);

  const { fetchAttendanceData, teacherData, filteredList } = context;

  useEffect(() => {
    fetchAttendanceData(role);
  }, []);


  const dataToRender =
    (filteredList.length > 0) ? filteredList : teacherData;

  
  // Calculate the Attendance in percentage
  const calculateAttendancePercentage = (attendanceByDate) => {
    const totalDays = attendanceByDate.length;
    const presentDays = attendanceByDate.filter(
      (day) => day.Status === "Present"
    ).length;

    if (totalDays === 0) {
      return 0;
    }
    return ((presentDays / totalDays) * 100).toFixed(2);
  };


  // get the teacher name from teacherId
  const getTeacherName = (id) => {
    return id; // Replace with your logic to get the teacher name
  };

  // get the total days of attendance
  const getTotalDays = (attendanceByDate) => attendanceByDate.length;

  // get the total present day from DB
  const getPresentDays = (attendanceByDate) =>
    attendanceByDate.filter((day) => day.Status === "Present").length;
  // get the total absent day from DB
  const getAbsentDays = (attendanceByDate) =>
    attendanceByDate.filter((day) => day.Status === "Absent").length;

  return (
    <StyledCard>
      <StyledCardContent>
        <Typography variant="h5" component="h1" color="inherit" gutterBottom>
          Attendance Report
        </Typography>
          <SearchComponent user={"teacher"} />
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableHeaderCell>TeacherId</StyledTableHeaderCell>
                <StyledTableHeaderCell>Teacher Name</StyledTableHeaderCell>

                <StyledTableHeaderCell>Attendance (%)</StyledTableHeaderCell>
                <StyledTableHeaderCell>Total Days</StyledTableHeaderCell>
                <StyledTableHeaderCell>Present Days</StyledTableHeaderCell>
                <StyledTableHeaderCell>Absent Days</StyledTableHeaderCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
                {console.log(filteredList)}
              {filteredList==="Not Found" ? (
                <StyledTableRow>
                  <TableCell colSpan={7} align="center" marginTop="5px">
                    No Data
                  </TableCell>
                </StyledTableRow>
              ) : (
                dataToRender.map((teacher) => (
                    <StyledTableRow key={teacher._id}>
                    <TableCell>{teacher.TeacherId}</TableCell>
                    <TableCell>{getTeacherName(teacher.TeacherId)}</TableCell>
                    <TableCell>
                      {calculateAttendancePercentage(teacher.AttendanceByDate)}%
                    </TableCell>
                    <TableCell>
                      {getTotalDays(teacher.AttendanceByDate)}
                    </TableCell>
                    <TableCell>
                      {getPresentDays(teacher.AttendanceByDate)}
                    </TableCell>
                    <TableCell>
                      {getAbsentDays(teacher.AttendanceByDate)}
                    </TableCell>
                  </StyledTableRow>
                ))
              )}
            </TableBody>
          </Table>
        </StyledTableContainer>
      </StyledCardContent>
    </StyledCard>
  );
};

export default TeacherAttendance;