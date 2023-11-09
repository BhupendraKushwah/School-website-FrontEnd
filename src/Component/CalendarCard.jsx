import React, { useState } from "react";
import { Card, CardContent } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Import the default Calendar styles

const CalendarCard = () => {
  return (
    <Card
      sx={{
        maxWidth: 450,
        maxHeight:55+'vh'
      }}
    >
      <CardContent sx={{ flex: "1 1 auto" }}>
        <div>
          
          <div style={{fontSize:".9rem"}}>
            <FullCalendar
              plugins={[dayGridPlugin]}
              initialView="dayGridMonth"
              
            />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
