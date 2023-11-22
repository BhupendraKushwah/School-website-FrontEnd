import './App.css'
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sidebar from "./Component/Admin/Sidebar";
import Home from "./Pages/Admin/Home";

import Students from "./Pages/Admin/Students";
import Navbar from './Component/Admin/Navbar';
import SidebarState from './Context/SidebarContext/SidebarState';
import AdminState from './Context/Admin/AdminState'
import StudentCard from './Component/Admin/StudentCard';
import TeacherListDash from './Pages/Admin/TeacherListDash';
import AttendanceComponent from './Component/Admin/AttendanceComponent';
import RecordMarks from './Component/Admin/RecordMarks';
import TeacherAttendance from './Pages/Admin/RecordTeacherAttendance';
import LoginPage from './Pages/Admin/LoginPage';
import StudentAttendancePage from './Pages/Admin/StudentAttendancePage';
import TeacherAttendancePage from './Pages/Admin/TeacherAttendancePage';

function App() {
  return (
    <SidebarState>
      <AdminState>
    <Router>
      <Navbar/>
      <Sidebar>
      <Routes>
        <Route path="/" element={<RecordMarks/>}></Route>
        <Route path="/admin" element={<Home/>}></Route>
        <Route path="admin/students/management/studentList" element={<StudentCard/>}></Route>
        <Route path="admin/students/management/attendanceReport" element={<StudentAttendancePage/>}></Route>
        <Route path="/record-marks/:id" element={<RecordMarks />} />
        <Route path="admin/teacher/management/teacherList" element={<TeacherListDash/>}></Route>
        <Route path="admin/teacher/management/TeacherRegisterAttendee" element={<TeacherAttendance/>}></Route>
        <Route path={`/admin/teacher/management/TeacherAttendanceReport/:date`} element={<TeacherAttendancePage />} />
        <Route path="admin/student" element={<Students/>}></Route>
      </Routes>
      </Sidebar>
    </Router>
    </AdminState>
    </SidebarState>
  );
}

export default App;
