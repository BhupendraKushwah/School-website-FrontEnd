import React, { useState } from "react";
import AdminContext from "./AdminContext";

const AdminState = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTeacherList, setFilterTeacherList] = useState("");
  const [filteredStudentList, setFilteredStudentList] = useState("");  //for any type of filter and search in student
  const [teacherData, setTeacherData] = useState([]);
  const [allTeacher, setAllTeacher] = useState([]);
  const [allStudent, setAllStudent] = useState([]); //For Student Attendance

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

  const handleSearch = (user,forWhich) => {
    if (user === "teacher") {
      const Data=forWhich==="attendance"?teacherData.data:allTeacher
      const filtered = Data.filter((teacher) =>
      teacher.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      
      if (filtered.length > 0) {
        setFilterTeacherList(filtered);
        setSearchTerm("");
      } else {
        setFilterTeacherList("Not Found");
      }
    } else if (user === "student") {
      fetchAttendanceData("student");
      const Data=forWhich==="attendance"?studentData.data:allStudent
      const filtered = Data.filter((student) =>
        student.Name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      console.log(filtered.length > 0);
      if (filtered.length > 0) {
        setFilteredStudentList(filtered);
        setSearchTerm("");
      } else {
        setFilteredStudentList("Not Found");
      }
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

  const handleFetchMarks = async (id) => {
    console.log(id);
    const url = `http://localhost:5000/admin/students/get-marks/2024/${id}`;
    try {
      const response = await fetch(url, {
        headers: {
          Auth_Token:
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0MGZiMGFmZWUyMDVlZWY4ZjYyNTRjIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzYyNzE1fQ.Jwx5l5OVoZFn4Yc4BfX6q_rS3rvv2mQy9BE0jbDD5wU",
        },
      });
      const result = await response.json();
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <AdminContext.Provider
        value={{
          searchTerm,
          setSearchTerm,
          filterTeacherList,
          setFilterTeacherList,
          handleSearch,
          teacherData,
          setTeacherData,
          fetchAttendanceData,
          studentData,
          filteredStudentList,
          setFilteredStudentList,
          getCurrentDate,
          fetchUser,
          allStudent,
          setAllStudent,
          allTeacher,
          setAllTeacher,
          handleFetchMarks,
        }}
      >
        {props.children}
      </AdminContext.Provider>
    </div>
  );
};

export default AdminState;
