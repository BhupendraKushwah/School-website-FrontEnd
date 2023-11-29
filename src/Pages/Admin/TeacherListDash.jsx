import React, { useContext, useEffect } from "react";
import TeacherCard from "../../Component/Admin/TeacherCard";
import { Grid, Stack, Typography, Button, useTheme } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import SearchComponent from "../../Component/Admin/SearchComponent";
import AdminContext from "../../Context/Admin/AdminContext";

const TeacherListDash = () => {
  const theme = useTheme();
  const context = useContext(AdminContext);
  const { filterTeacherList, allTeacher, fetchUser } = context;

  useEffect(() => {
    const fetchData = async () => {
      try {
        fetchUser("teacher");
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      style={{
        backgroundColor: theme.palette.grey[50],
        padding: "20px",
        minHeight: "100%",
      }}
    >
      <Stack
        direction={{ xs: "column", sm: "row" }}
        justifyContent="space-between"
        alignItems={{ xs: "stretch", sm: "center" }}
        margin={2}
      >
        <Typography variant="h5">Teachers</Typography>
        <SearchComponent user={"teacher"} forWhich={"TeacherList"} />
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          size="medium"
          sx={{ marginTop: { xs: "8px", sm: 0 } }}
        >
          Add Teacher
        </Button>
      </Stack>
      {console.log(filterTeacherList)}
      <Grid container spacing={2} marginTop={2}>
        {filterTeacherList
          ? filterTeacherList.map((teacher) => {
              return <TeacherCard teacher={teacher} key={teacher._id} />;
            })
          : allTeacher.map((teacher) => {
              return <TeacherCard teacher={teacher} key={teacher._id} />;
            })}
      </Grid>
    </div>
  );
};

export default TeacherListDash;
