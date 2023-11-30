import React from "react";
import DashboardCard from "../../Component/Admin/DashboardCard";
import Typography from "@mui/material/Typography";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const hashToken = localStorage.getItem("Token");
  const navigate=useNavigate()
  useEffect(()=>{
    if (!hashToken){
      navigate('/')
    }
  },[hashToken]);
  return (
        <div className="home" style={{ padding: "20px" }}>
          <Typography variant="h6" color="initial">
            Hi, Bhupendra
          </Typography>
          <DashboardCard />
        </div>
      
  );
};

export default HomePage;
