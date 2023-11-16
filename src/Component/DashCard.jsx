import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Hidden,
  Typography,
} from "@mui/material";

const DashCard = (props) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        minWidth: props.width + "%",
        height: props.height ? `${props.height}vh` : "auto",
      }}
    >
      <CardContent>
        {console.log(props.width+"%")}
        <Grid container spacing={2}>
          <Grid item>
            {props.icon && (
              <Avatar
                style={{
                  width: "4.5rem",
                  height: "4.5rem",
                  fontSize: "2.5rem",
                }}
                sx={{ bgcolor: props.color[500] }}
              >
                {props.icon}
              </Avatar>
            )}
          </Grid>
          <Grid item xs={!props.height ? 8 : 12}>
            <Box sx={{ px: 3 }} className="card-data">
              {!props.height && (
                <Typography gutterBottom variant="h6" color="text.secondary">
                  {props.name}
                </Typography>
              )}
              <Typography
                variant="h5"
                color="text.primary"
                style={{ padding: "0 10px" }}
              >
                {props.value}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default DashCard;
