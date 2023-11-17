import './App.css'
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Home from "./Pages/Admin/Home";

import Students from "./Pages/Admin/Students";
import LoginPage from './Pages/Admin/LoginPage';
import Navbar from './Component/Navbar';
import SidebarState from './Context/SidebarContext/SidebarState';
import StudentCard from './Component/StudentCard';
import TeacherListDash from './Pages/Admin/TeacherListDash';
function App() {
  return (
    <SidebarState>
    <Router>
      <Navbar/>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/admin" element={<Home/>}></Route>
        <Route path="admin/students/management/studentList" element={<StudentCard/>}></Route>
        <Route path="admin/teacher/management/teacherList" element={<TeacherListDash/>}></Route>
        <Route path="admin/logout" element={<LoginPage/>}></Route>
        <Route path="admin/student" element={<Students/>}></Route>
      </Routes>
      </Sidebar>
    </Router>
    </SidebarState>
  );
}

export default App;
