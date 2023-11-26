import React, { useState } from "react";
import AdminContext from "./AdminContext";

const AdminState = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredList, setFilteredList] = useState("");
  const [filteredAttendanceList, setFilteredAttendanceList] = useState("");
  const [teacherData, setTeacherData] = useState([]);
  const [allTeacher, setAllTeacher] = useState([]);
  const [allStudent, setAllStudent] = useState([]);

  const [studentData, setStudentData] = useState([]);

  const fetchAttendanceData = async (role) => {
    try {
      let url =
        role === "student"
          ? "http://localhost:5000/admin/Students/attendanceReport/Class 9"
          : `http://localhost:5000/admin/teacher/TeacherAttendanceReport/${getCurrentDate()}`;

      const response = await fetch(url, {
        headers: {
          Auth_Token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0MGZiMGFmZWUyMDVlZWY4ZjYyNTRjIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzYyNzE1fQ.Jwx5l5OVoZFn4Yc4BfX6q_rS3rvv2mQy9BE0jbDD5wU",
        },
      });
      const data = await response.json();
      if (role === "student") {
        setStudentData(data);
      } else {
        const successData = data.message
          ? { success: "false", data: data.message }
          : { success: "true", data: data };

        setTeacherData(successData);
      }
    } catch (error) {
      console.error("Error fetching attendance data:", error);
    }
  };

  const handleSearch = (user) => {
    if (user === "teacher") {
      const filtered = teacherData.filter((teacher) =>
        teacher.TeacherId.includes(searchTerm)
      );
      if (filtered.length > 0) {
        setFilteredList(filtered);
        // setSearchTerm("")
      } else {
        setFilteredList("Not Found");
      }
    } else if (user === "Attendance") {
      fetchAttendanceData("student");
      const filtered = studentData.filter((student) =>
        student.StudentId.includes(searchTerm)
      );
      setFilteredAttendanceList(filtered);
      setSearchTerm("");
    }
  };

  const getCurrentDate = () => {
    return new Date().toISOString().split("T")[0];
  };

  const fetchUser = async (role) => {
    const url =
      role === "student"
        ? "http://localhost:5000/admin/Students/searchStudent"
        : "http://localhost:5000/admin/teacher/fetch-teachers";
    const response = await fetch(url, {
      headers: {
        Auth_Token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0MGZiMGFmZWUyMDVlZWY4ZjYyNTRjIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzYyNzE1fQ.Jwx5l5OVoZFn4Yc4BfX6q_rS3rvv2mQy9BE0jbDD5wU",
      },
    });
    const result = await response.json();

    if (role === "student") {
      setAllStudent(result);
    } else {
      setAllTeacher(result);
    }
  };

  const handleFetchMarks=async(id)=>{
    console.log(id)
    const url=`http://localhost:5000/admin/students/get-marks/2024/${id}`
    try{
    const response=await fetch(url,{
      headers:{
        Auth_Token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0MGZiMGFmZWUyMDVlZWY4ZjYyNTRjIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzYyNzE1fQ.Jwx5l5OVoZFn4Yc4BfX6q_rS3rvv2mQy9BE0jbDD5wU"
      },
    })
    const result =await response.json();
    console.log(result);
    }
    catch (e) {
      console.log(e,)
    }
  }

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
          fetchUser,
          allStudent,
          setAllStudent,
          allTeacher,
          setAllTeacher,
          handleFetchMarks
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminState;
