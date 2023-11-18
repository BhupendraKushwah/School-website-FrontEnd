import React from "react";
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
import BarChart from "./BarChart";

const DashboardCard = () => {
  const studentData = [
    {
      id: "653e1ea5c178869cc6362522",
      Image: "https://example.com/image.jpg",
      Enrollment: "EN124657",
      Password: "$2b$10$1dXkkCbo0Z/M6ZUQfgxAi.YHKR2U6gxOvqGuqCY/NjkS7PEsEElhK",
      Name: "John Doe",
      Email: "john@example.com",
      Role: "student",
      Class: "Class 8",
      Gender: "Male",
      DOB: "2005-08-15T00:00:00.000+00:00",
      Guardians: "Xavier Doe",
      Contact: "+1234567890",
      Address: "123 Street, City, Country",
      Fees: "9500",
      EnrollmentDate: "2023-10-29T08:58:13.836+00:00",
    },
    {
      id: "anotherId123",
      Image: "https://example.com/another-image.jpg",
      Enrollment: "EN987654",
      Password: "$2b$10$2sD1aVgFgL9tv8aGsRjEi.O2CpTz3NyJpZPUjH/miY/z1OAFW2ZBa",
      Name: "Jane Smith",
      Email: "jane@example.com",
      Role: "student",
      Class: "Class 10",
      Gender: "Female",
      DOB: "2004-11-20T00:00:00.000+00:00",
      Guardians: "Sarah Smith",
      Contact: "+9876543210",
      Address: "456 Avenue, Town, Country",
      Fees: "8000",
      EnrollmentDate: "2023-09-15T10:30:00.000+00:00",
    },
    {
      id: "studentId1",
      Image: "https://example.com/student1-image.jpg",
      Enrollment: "EN111111",
      Password: "$2b$10$abcd1234efgh5678ijklm9nopqrs1234tuvwx5678yzABCD",
      Name: "Alice Johnson",
      Email: "alice@example.com",
      Role: "student",
      Class: "Class 9",
      Gender: "Female",
      DOB: "2006-03-12T00:00:00.000+00:00",
      Guardians: "Bob Johnson",
      Contact: "+1112223333",
      Address: "789 Avenue, Village, Country",
      Fees: "8500",
      EnrollmentDate: "2022-08-10T12:45:00.000+00:00",
    },
    {
      id: "studentId2",
      Image: "https://example.com/student2-image.jpg",
      Enrollment: "EN222222",
      Password: "$2b$10$efgh5678ijklm9nopqrstuvwx5678yzABCD1234efgh5678",
      Name: "Robert Williams",
      Email: "robert@example.com",
      Role: "student",
      Class: "Class 11",
      Gender: "Male",
      DOB: "2005-05-25T00:00:00.000+00:00",
      Guardians: "Emily Williams",
      Contact: "+4445556666",
      Address: "101 Street, Suburb, Country",
      Fees: "9000",
      EnrollmentDate: "2021-07-22T09:20:00.000+00:00",
    },
    {
      id: "studentId3",
      Image: "https://example.com/student3-image.jpg",
      Enrollment: "EN333333",
      Password: "$2b$10$ijklm9nopqrstuvwx5678yzABCD1234efgh5678ijklm9n",
      Name: "Eva Davis",
      Email: "eva@example.com",
      Role: "student",
      Class: "Class 10",
      Gender: "Female",
      DOB: "2004-08-05T00:00:00.000+00:00",
      Guardians: "Michael Davis",
      Contact: "+7778889999",
      Address: "555 Road, Hamlet, Country",
      Fees: "7500",
      EnrollmentDate: "2022-05-18T15:10:00.000+00:00",
    },
    {
      id: "studentId4",
      Image: "https://example.com/student4-image.jpg",
      Enrollment: "EN444444",
      Password: "$2b$10$mnopqrstuvwx5678yzABCD1234efgh5678ijklm9nopqrstuv",
      Name: "Daniel Lee",
      Email: "daniel@example.com",
      Role: "student",
      Class: "Class 12",
      Gender: "Male",
      DOB: "2003-12-18T00:00:00.000+00:00",
      Guardians: "Jessica Lee",
      Contact: "+2223334444",
      Address: "888 Lane, Village, Country",
      Fees: "9800",
      EnrollmentDate: "2021-12-01T08:00:00.000+00:00",
    },
    {
      id: "studentId5",
      Image: "https://example.com/student5-image.jpg",
      Enrollment: "EN555555",
      Password: "$2b$10$qrstuvwx5678yzABCD1234efgh5678ijklm9nopqrstuvwx5",
      Name: "Sophia Brown",
      Email: "sophia@example.com",
      Role: "student",
      Class: "Class 9",
      Gender: "Female",
      DOB: "2006-02-28T00:00:00.000+00:00",
      Guardians: "David Brown",
      Contact: "+5556667777",
      Address: "222 Square, Town, Country",
      Fees: "8700",
      EnrollmentDate: "2023-01-30T14:30:00.000+00:00",
    },
    {
      id: "studentId6",
      Image: "https://example.com/student6-image.jpg",
      Enrollment: "EN666666",
      Password: "$2b$10$uvw5678yzABCD1234efgh5678ijklm9nopqrstuvw5678yzABCD",
      Name: "William Garcia",
      Email: "william@example.com",
      Role: "student",
      Class: "Class 11",
      Gender: "Male",
      DOB: "2005-10-12T00:00:00.000+00:00",
      Guardians: "Maria Garcia",
      Contact: "+9990001111",
      Address: "333 Lane, Suburb, Country",
      Fees: "9200",
      EnrollmentDate: "2021-09-25T11:45:00.000+00:00",
    },
    {
      id: "studentId7",
      Image: "https://example.com/student7-image.jpg",
      Enrollment: "EN777777",
      Password: "$2b$10$yzABCD1234efgh5678ijklm9nopqrstuvwx5678yzABCD1234",
      Name: "Olivia Martinez",
      Email: "olivia@example.com",
      Role: "student",
      Class: "Class 10",
      Gender: "Female",
      DOB: "2004-06-08T00:00:00.000+00:00",
      Guardians: "Carlos Martinez",
      Contact: "+1112223333",
      Address: "444 Street, Village, Country",
      Fees: "8000",
      EnrollmentDate: "2022-04-15T09:00:00.000+00:00",
    },
    {
      id: "studentId8",
      Image: "https://example.com/student8-image.jpg",
      Enrollment: "EN888888",
      Password: "$2b$10$ijklm9nopqrstuvwx5678yzABCD1234efgh5678ijklm9nop",
      Name: "Noah Taylor",
      Email: "noah@example.com",
      Role: "student",
      Class: "Class 12",
      Gender: "Male",
      DOB: "2003-11-22T00:00:00.000+00:00",
      Guardians: "Linda Taylor",
      Contact: "+4445556666",
      Address: "555 Avenue, Hamlet, Country",
      Fees: "9600",
      EnrollmentDate: "2021-11-10T08:30:00.000+00:00",
    },
    {
      id: "studentId9",
      Image: "https://example.com/student9-image.jpg",
      Enrollment: "EN999999",
      Password: "$2b$10$qrstuvwx5678yzABCD1234efgh5678ijklm9nopqrstuvwx5678",
      Name: "Emma White",
      Email: "emma@example.com",
      Role: "student",
      Class: "Class 9",
      Gender: "Female",
      DOB: "2006-07-04T00:00:00.000+00:00",
      Guardians: "Michael White",
      Contact: "+7778889999",
      Address: "666 Road, Suburb, Country",
      Fees: "8300",
      EnrollmentDate: "2023-03-01T13:15:00.000+00:00",
    },
    {
      id: "studentId10",
      Image: "https://example.com/student10-image.jpg",
      Enrollment: "EN101010",
      Password: "$2b$10$yzABCD1234efgh5678ijklm9nopqrstuvw5678yzABCD1234ef",
      Name: "Mason Harris",
      Email: "mason@example.com",
      Role: "student",
      Class: "Class 11",
      Gender: "Male",
      DOB: "2005-04-16T00:00:00.000+00:00",
      Guardians: "Sophie Harris",
      Contact: "+5556667777",
      Address: "777 Lane, Village, Country",
      Fees: "9100",
      EnrollmentDate: "2022-10-12T10:00:00.000+00:00",
    },
    {
      id: "studentId11",
      Image: "https://example.com/student11-image.jpg",
      Enrollment: "EN111111",
      Password: "$2b$10$uvw5678yzABCD1234efgh5678ijklm9nopqrstuvw5678yzABCD",
      Name: "Ava Turner",
      Email: "ava@example.com",
      Role: "student",
      Class: "Class 10",
      Gender: "Female",
      DOB: "2004-09-29T00:00:00.000+00:00",
      Guardians: "Daniel Turner",
      Contact: "+9990001111",
      Address: "888 Square, Town, Country",
      Fees: "7800",
      EnrollmentDate: "2022-01-20T11:30:00.000+00:00",
    },
    {
      id: "studentId12",
      Image: "https://example.com/student12-image.jpg",
      Enrollment: "EN121212",
      Password: "$2b$10$yzABCD1234efgh5678ijklm9nopqrstuvwx5678yzABCD1234",
      Name: "Liam Rodriguez",
      Email: "liam@example.com",
      Role: "student",
      Class: "Class 12",
      Gender: "Male",
      DOB: "2003-10-08T00:00:00.000+00:00",
      Guardians: "Isabella Rodriguez",
      Contact: "+1112223333",
      Address: "444 Avenue, Village, Country",
      Fees: "9400",
      EnrollmentDate: "2021-10-05T09:45:00.000+00:00",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, p: { xs: 3, sm: 3 } }} height={70}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Stack spacing={2} direction={{ xs: "column", sm: "row" }}>
            <DashCard
              name={"Total Student"}
              value={250}
              width={24 }
              icon={<FaUserGraduate />}
              color={pink}
            />
            <DashCard
              name={"Total Teacher"}
              value={20}
              width={24 }
              icon={<FaUserTie />}
              color={blue}
            />
            <DashCard
              name={"Total Class"}
              value={12}
              width={ 24 }
              icon={<FaChalkboardTeacher />}
              color={green}
            />
            <DashCard
              name={"Total Revenue"}
              value={52000}
              width={24 }
              icon={<FaRupeeSign />}
              color={purple}
            />
          </Stack>
        </Grid>
      </Grid>
      <Box height={20} />
      <Grid container spacing={2}>
  <Grid item xs={12} sm={9}>
    <BarChart studentData={studentData} />
  </Grid>
  <Grid item xs={12} sm={3}>
    <CalendarCard />
  </Grid>
</Grid>

    </Box>
  );
};

export default DashboardCard;
