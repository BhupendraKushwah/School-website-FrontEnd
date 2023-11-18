import React from "react";
import DashboardCard from "../../Component/Admin/DashboardCard";
import Typography from '@mui/material/Typography'

const HomePage = () => {
  return (
    <div className="home" style={{padding:"20px"}}>
      <Typography variant="h6" color="initial">Hi, Bhupendra</Typography>
      <DashboardCard/>
    </div>
  );
};

export default HomePage;
