import React, { useContext } from "react";
import {
  FaTh,
  FaChalkboardTeacher,
  FaChalkboard,
  FaRupeeSign,
  FaSignOutAlt,
  FaUserAlt,
} from "react-icons/fa";
import { MdFeedback } from "react-icons/md";

import { NavLink } from "react-router-dom";
import SidebarContext from "../../Context/SidebarContext/SidebarContext";

const Sidebar = ({ children }) => {

  const context =useContext(SidebarContext)
  const {isOpen,openSubmenuIndex,setOpenSubmenuIndex}=context

  const toggleManagement = (index) => {
    if (openSubmenuIndex === index) {
      setOpenSubmenuIndex(null); // Close the current open submenu if clicked again
    } else {
      setOpenSubmenuIndex(index); // Open the clicked submenu
    }
  };

  const menuItem = [
    {
      path: "admin/",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "admin/students/management",
      name: "Students Management",
      icon: <FaUserAlt />,
      submenu: [
        { path: "admin/students/management/studentList", name: "Student List" },
        {
          path: "admin/students/management/attendanceReport",
          name: "Attendance Report",
        },
        { path: "admin/students/management/record-marks", name: "Record Marks" },
        { path: "admin/students/management/get-marks", name: "Fetch Marks" },
      ],
    },
    {
      path: "/teacher/management",
      name: "Teacher Management",
      icon: <  FaChalkboardTeacher />,
      submenu: [
        { path: "admin/teacher/management/teacherList", name: "Teacher List" },
        {
          path: "admin/teacher/management/forgot-password",
          name: "Teacher forgot password",
        },
        {
          path: "admin/teacher/management/TeacherRegisterAttendee",
          name: "Teacher Attendance",
        },
        {
          path: "admin/teacher/management/TeacherAttendanceReport",
          name: "Attendance Report",
        },
      ],
    },
    {
      path: "admin/class",
      name: "Class",
      icon: <FaChalkboard />,
    },
    {
      path: "admin/feedbacks",
      name: "Feedbacks",
      icon: <MdFeedback />,
    },
    {
      path: "admin/fee-structure",
      name: "Fee Structure",
      icon: <FaRupeeSign />,
    },
    {
      path: "admin/logout",
      name: "Logout",
      icon: <FaSignOutAlt />,
    },
  ];
  

  return (
    <div className="container">
      <div style={{ width: isOpen ? "300px" : "70px" }} className="sidebar">
        
        {menuItem.map((item, index) => (
          <div key={index}>
            {item.submenu ? (
              <div>
                <div className="link" onClick={() => toggleManagement(index)}>
                  <div className="icon">{item.icon}</div>
                  <div
                    style={{ display: isOpen ? "block" : "none" }}
                    className="link_text"
                  >
                    {item.name}
                  </div>
                </div>
                {openSubmenuIndex === index && isOpen && (
                  <div className="submenu">
                    {item.submenu.map((subItem, subIndex) => (
                      <NavLink
                        to={subItem.path}
                        key={subIndex}
                        className="link sub-link"
                        activeclassname="active"
                      >
                        <div className="icon">{subItem.icon}</div>
                        <div className="link_text">{subItem.name}</div>
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink to={item.path} className="link" activeclassname="active">
                <div className="icon">{item.icon}</div>
                <div
                  style={{ display: isOpen ? "block" : "none" }}
                  className="link_text"
                >
                  {item.name}
                </div>
              </NavLink>
            )}
          </div>
        ))}
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;