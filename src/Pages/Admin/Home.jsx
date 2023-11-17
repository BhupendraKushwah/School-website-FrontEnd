import React from "react";
import DashboardCard from "../../Component/DashboardCard";
import DashCard from "../../Component/DashCard";
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
