import React from "react";
import { FaRegPenToSquare, FaTrash } from "react-icons/fa6";
import {
  Card,
  CardContent,
  Avatar,
  Typography,
  Box,
  Grid,
  Stack,
} from "@mui/material";

const TeacherCard = ({ teacher }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3} key={teacher._id}>
      <Card sx={{ width: "100%", overflowX: "auto" }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={4} sm={3} md={2} lg={1}>
              <Avatar>{teacher.Name[0]}</Avatar>
            </Grid>
            <Grid item xs={8} sm={9} md={10} lg={11}>
              <Box
                sx={{
                  px: { xs: 1, sm: 3 },
                  textAlign: { xs: "center", sm: "left" },
                }}
                className="card-data"
              >
                <Typography variant="h6" color="text.primary">
                  {teacher.Name}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                  {teacher.Classes.map((val, index) => {
                    return (
                      <React.Fragment key={index}>
                        {val.subject}
                        {index !== teacher.Classes.length - 1 ? ", " : ""}
                      </React.Fragment>
                    );
                  })}
                </Typography>
                <Stack direction={{ xs: "column", sm: "row" }} spacing={1}>
                  <FaRegPenToSquare
                    variant="outlined"
                    color="primary"
                    style={{ cursor: "pointer" }}
                  >
                    Update
                  </FaRegPenToSquare>
                  <FaTrash
                    variant="outlined"
                    color="secondary"
                    style={{ cursor: "pointer" }}
                  >
                    Delete
                  </FaTrash>
                </Stack>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TeacherCard;
