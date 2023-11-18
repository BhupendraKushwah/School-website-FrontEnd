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

const AttendanceComponent = () => {
  const context = useContext(AdminContext);

  const { fetchAttendanceData, studentData, filteredAttendanceList } = context;

  const [selectedClass, setSelectedClass] = useState("Nursery");

  const setAllClasses = ["Nursery", "LKG", "UKG"];

  const dataToRender =
    filteredAttendanceList.length > 0 ? filteredAttendanceList : studentData;

  useEffect(() => {
    fetchAttendanceData();
  }, []);

  //for set all class in dropdown
  for (let i = 1; i <= 12; i++) {
    setAllClasses.push(`Class ${i}`);
  }

  // sortList the data by class using dropdown
  const sortedList = dataToRender.filter(
    (student) => student.AttendanceByDate[0].Class === selectedClass
  );
  // onchange event on clicking dropdown to set class
  const handleClassChange = (event) => {
    setSelectedClass(event.target.value);
  };

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

  // get the Student name from StudentId
  const getStudentName = (id) => {
    return id; // Replace with your logic to get the student name
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
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "stretch", sm: "center" }}
          margin={2}
        >
          <FormControl style={{ marginBottom: 16, minWidth: 120 }}>
            <Select
              id="class-select"
              value={selectedClass}
              onChange={handleClassChange}
            >
              {setAllClasses.map((classItem) => (
                <MenuItem key={classItem} value={classItem}>
                  {classItem}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <SearchComponent user={"Attendance"} />
        </Stack>
        <StyledTableContainer component={Paper}>
          <Table>
            <TableHead>
              <StyledTableRow>
                <StyledTableHeaderCell>StudentId</StyledTableHeaderCell>
                <StyledTableHeaderCell>Student Name</StyledTableHeaderCell>
                <StyledTableHeaderCell>Class</StyledTableHeaderCell>
                <StyledTableHeaderCell>Attendance (%)</StyledTableHeaderCell>
                <StyledTableHeaderCell>Total Days</StyledTableHeaderCell>
                <StyledTableHeaderCell>Present Days</StyledTableHeaderCell>
                <StyledTableHeaderCell>Absent Days</StyledTableHeaderCell>
              </StyledTableRow>
            </TableHead>
            <TableBody>
              {console.log(sortedList.length)}
              {sortedList.length === 0 ? (
                <StyledTableRow>
                  <TableCell colSpan={7} align="center" marginTop="5px">
                    No Data
                  </TableCell>
                </StyledTableRow>
              ) : (
                sortedList.map((student) => (
                  <StyledTableRow key={student._id}>
                    <TableCell>{student.StudentId}</TableCell>
                    <TableCell>{getStudentName(student.StudentId)}</TableCell>
                    <TableCell>{student.AttendanceByDate[0].Class}</TableCell>
                    <TableCell>
                      {calculateAttendancePercentage(student.AttendanceByDate)}%
                    </TableCell>
                    <TableCell>
                      {getTotalDays(student.AttendanceByDate)}
                    </TableCell>
                    <TableCell>
                      {getPresentDays(student.AttendanceByDate)}
                    </TableCell>
                    <TableCell>
                      {getAbsentDays(student.AttendanceByDate)}
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

export default AttendanceComponent;
