import React, { useState } from "react";
import AdminContext from "./AdminContext";

const AdminState = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState("");
  const [filteredAttendanceList, setFilteredAttendanceList] = useState("");
  const [teacherData, setTeacherData] = useState([]);
  const [studentData, setStudentData] = useState([]);

  const fetchAttendanceData = async () => {
    try {
      const response = await fetch("/attendanceData.json"); // Assuming the file is in the public directory
      const data = await response.json();
      setStudentData(data);
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };
  const handleSearch = (user) => {
    if (user === "teacher") {
      const filtered = teacherData.filter((teacher) =>
        teacher.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredList(filtered);
    } else if (user === "Attendance") {
      fetchAttendanceData();
      const filtered = studentData.filter((student) =>
        student.StudentId.includes(searchTerm)
      );
      setFilteredAttendanceList(filtered);
    }
  };
  return (
    <div>
      <AdminContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          filteredList,
          setFilteredList,
          handleSearch,
          teacherData,
          setTeacherData,
          fetchAttendanceData,
          studentData,
          filteredAttendanceList,
          setFilteredAttendanceList,
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminState;
