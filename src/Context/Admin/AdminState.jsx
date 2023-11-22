import React, { useState } from "react";
import AdminContext from "./AdminContext";

const AdminState = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState("");
  const [filteredAttendanceList, setFilteredAttendanceList] = useState("");
  const [teacherData, setTeacherData] = useState([]);
  const [studentData, setStudentData] = useState([]);

  const fetchAttendanceData = async (role) => {
    try {
      if(role === "student"){
      const response = await fetch("http://localhost:5000/admin/Students/attendanceReport/Class 9",{
        headers:{
          Auth_Token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0MGZiMGFmZWUyMDVlZWY4ZjYyNTRjIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzYyNzE1fQ.Jwx5l5OVoZFn4Yc4BfX6q_rS3rvv2mQy9BE0jbDD5wU"
        }
      }); // Assuming the file is in the public directory
      const data = await response.json();
      setStudentData(data);
    }else{
      const response = await fetch(`http://localhost:5000/admin/teacher/TeacherAttendanceReport/${getCurrentDate()}`,{
        headers:{
          Auth_Token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0MGZiMGFmZWUyMDVlZWY4ZjYyNTRjIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzYyNzE1fQ.Jwx5l5OVoZFn4Yc4BfX6q_rS3rvv2mQy9BE0jbDD5wU"
        }
      }); // Assuming the file is in the public directory
      const data = await response.json();
      setTeacherData(data);
    }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };


  const handleSearch = (user) => {
    
    if (user === "teacher") {
      fetchAttendanceData("teacher");
      const filtered = teacherData.filter((teacher) =>
        teacher.TeacherId.includes(searchTerm)
      );
      if(filtered.length > 0) {
      setFilteredList(filtered);
      // setSearchTerm("")
      }
      else{
        setFilteredList("Not Found");
      }
     
    } else if (user === "Attendance") { 
      fetchAttendanceData("student");
      const filtered = studentData.filter((student) =>
        student.StudentId.includes(searchTerm)
      );
      setFilteredAttendanceList(filtered);
      setSearchTerm("")
    }
  };

  const getCurrentDate = () => {
    return new Date().toISOString().split("T")[0];
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
          getCurrentDate,
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminState;
