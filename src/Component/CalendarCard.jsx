import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

const CalendarCard = () => {
  return (
    <Card>
      <CardContent>
        <Grid container direction="column" alignItems="stretch">
          <Grid item xs={12}>
            {/* Adjust the size based on your requirements */}
            <div
              style={{
                fontSize: ".8rem",
                width: "100%", // Default width for larger screens
                maxWidth: "100%", // Adjust maximum width as needed
                margin: "auto", // Center the calendar
              }}
            >
              <FullCalendar
  plugins={[dayGridPlugin]}
  initialView="dayGridMonth"
  dayHeaderContent={({ date }) => {
    const options = { weekday: 'short' };
    return new Intl.DateTimeFormat('en-US', options).format(date);
  }}
  titleFormat={{
    year: 'numeric',
    month: 'long',
  }}
/>

            </div>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default CalendarCard;
