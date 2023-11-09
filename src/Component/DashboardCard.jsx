import React,{useState} from "react";
import { Box, Grid, Stack } from "@mui/material";
import DashCard from "./DashCard";

import {
  FaChalkboardTeacher,
  FaUserGraduate,
  FaUserTie,
  FaRupeeSign,
} from "react-icons/fa";
import { blue, green, pink, purple } from "@mui/material/colors";
import CalendarCard from "./CalendarCard";
import StudentCard from "./StudentCard";



const DashboardCard = () => {


  
  return (
    <Box sx={{ flexGrow: 1, p: 3 }} height={70}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction="row">
            <DashCard
              name={"Total Student"}
              value={250}
              width={24}
              icon={<FaUserGraduate />}
              color={pink}
            />
            <DashCard
              name={"Total Teacher"}
              value={20}
              width={24}
              icon={<FaUserTie />}
              color={blue}
            />
            <DashCard
              name={"Total Class"}
              value={12}
              width={24}
              icon={<FaChalkboardTeacher />}
              color={green}
            />
            <DashCard
              name={"Total Revenue"}
              value={52000}
              width={24}
              icon={<FaRupeeSign />}
              color={purple}
            />
          </Stack>
        </Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
        <Grid item xs={8} height={10}>
          <DashCard height={55} />
        </Grid>
        <Grid item xs={4}>
        <CalendarCard height={55} />
        </Grid>
      </Grid>

    
    </Box>
  );
};

export default DashboardCard;
