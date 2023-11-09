import './App.css'
import React from "react";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Sidebar from "./Component/Sidebar";
import Home from "./Pages/Home";

import Students from "./Pages/Students";
import LoginPage from './Pages/LoginPage';
import Navbar from './Component/Navbar';
import SidebarState from './Context/SidebarContext/SidebarState';
import StudentCard from './Component/StudentCard';
function App() {
  return (
    <SidebarState>
    <Router>
      <Navbar/>
      <Sidebar>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/logout" element={<LoginPage/>}></Route>
        <Route path="/student" element={<Students/>}></Route>
      </Routes>
      </Sidebar>
    </Router>
    </SidebarState>
  );
}

export default App;
