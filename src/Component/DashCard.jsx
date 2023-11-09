import React from "react";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  Stack,
  Typography,
} from "@mui/material";


const DashCard = (props) => {
  return (
    <Card
      sx={
        !props.height
          ? { maxWidth: 345, minWidth: props.width + "%" }
          : { height: props.height + "vh" }
      }
    >
      <CardContent >
        <Stack direction="row">
          {props.icon && (
            <Avatar
              style={{ width: "4.5rem", height: "4.5rem", fontSize: "2.5rem" }}
              sx={{ bgcolor: props.color[500] }}
            >
              {props.icon}
            </Avatar>
          )}

          <Box sx={{ px:3 }} className="card-data">
            {!props.height && (
              <Typography gutterBottom variant="h6" color="text.secondary">
                {props.name}
              </Typography>
            )}
            <Typography variant="h5" color="text.primary" style={{padding:"0 10px"}}>
              {props.value}
            </Typography>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default DashCard;
