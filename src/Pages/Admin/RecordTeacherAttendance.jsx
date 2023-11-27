import React, { useContext, useEffect } from "react";
import RecordAttendance from "../../Component/Admin/RecordAttendance";
import AdminContext from "../../Context/Admin/AdminContext";

const RecordTeacherAttendance = () => {
  const context = useContext(AdminContext);
  const { fetchUser, allTeacher } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUser("teacher");
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);
  return <RecordAttendance userData={allTeacher} Role={"teacher"} />;
};

export default RecordTeacherAttendance;
