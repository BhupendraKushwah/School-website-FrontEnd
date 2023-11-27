import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Typography,
  IconButton,
  Grid,
  Paper,
  Box,
  Container,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import AdminContext from "../../Context/Admin/AdminContext";
import { useContext } from "react";

const RecordMarks = () => {
  const context = useContext(AdminContext);
  const { allStudent, fetchUser } = context;
  const [year, setYear] = useState("");
  const [examName, setExamName] = useState("");
  const [result, setResult] = useState("Pass");
  const [subjectMarks, setSubjectMarks] = useState([]);
  const [foundStudent, setFoundStudent] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchUser("student");
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {}, [allStudent]);

  useEffect(() => {
    console.log(allStudent, id);
    const foundStudent = allStudent.find((student) => student._id === id);
    if (foundStudent) {
      setFoundStudent(foundStudent);
    }
  }, [id, allStudent]);

  const handleAddSubject = () => {
    setSubjectMarks([...subjectMarks, { subject: "", marks: 0 }]);
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...subjectMarks];
    updatedSubjects.splice(index, 1);
    setSubjectMarks(updatedSubjects);
  };

  const sendData = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:5000/admin/students/record-marks",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Auth_Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNjU0MGZiMGFmZWUyMDVlZWY4ZjYyNTRjIiwiUm9sZSI6ImFkbWluIiwiaWF0IjoxNjk4NzYyNzE1fQ.Jwx5l5OVoZFn4Yc4BfX6q_rS3rvv2mQy9BE0jbDD5wU",
          },
          body: JSON.stringify(data),
        }
      );
        const result = await response.json();
      if (result.success) {
        alert("done")      
  
      } else {
        alert(result);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const marksData = {
      Student: {
          StudentName:foundStudent.Name,
          Enrollment:foundStudent.Enrollment,
          StudentId:id
      },
      MarksByYear: [
        {
          Year: year,
          SubjectMarks: subjectMarks,
          ExamName: examName,
          Result: result,
        },
      ],
    };
    sendData(marksData);
  };

  return (
    <Container maxWidth="sm">
      <Paper
        elevation={3}
        style={{
          padding: "20px",
          marginTop: "20px",
          backgroundColor: "#f8f8f8",
        }}
      >
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          style={{ color: "#333" }}
        >
          Add Marks
        </Typography>
        <Divider style={{ margin: "20px 0", backgroundColor: "#bbb" }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                value={foundStudent.Name}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                type="text"
                value={foundStudent.Enrollment}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Year"
                type="text"
                value={year}
                onChange={(e) => setYear(e.target.value)}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Exam Name"
                type="text"
                value={examName}
                onChange={(e) => setExamName(e.target.value)}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel>Result</InputLabel>
                <Select
                  value={result}
                  onChange={(e) => setResult(e.target.value)}
                >
                  <MenuItem value="Pass">Pass</MenuItem>
                  <MenuItem value="Fail">Fail</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Typography variant="h6" style={{ marginTop: "20px", color: "#555" }}>
            Subject Marks:
          </Typography>
          {subjectMarks.map((subject, index) => (
            <Grid
              container
              spacing={2}
              key={index}
              style={{ marginTop: "10px" }}
            >
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Subject"
                  type="text"
                  value={subject.subject}
                  onChange={(e) => {
                    const updatedSubjects = [...subjectMarks];
                    updatedSubjects[index].subject = e.target.value;
                    setSubjectMarks(updatedSubjects);
                  }}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={4}>
                <TextField
                  label="Marks"
                  type="number"
                  value={subject.marks}
                  onChange={(e) => {
                    const updatedSubjects = [...subjectMarks];
                    updatedSubjects[index].marks = e.target.value;
                    setSubjectMarks(updatedSubjects);
                  }}
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={2}
                style={{ display: "flex", alignItems: "flex-end" }}
              >
                <IconButton
                  onClick={() => handleRemoveSubject(index)}
                  aria-label="delete"
                >
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            marginTop="20px"
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddSubject}
              style={{ marginRight: "10px", backgroundColor: "#4caf50" }}
            >
              Add Subject
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ backgroundColor: "#2196f3" }}
            >
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RecordMarks;
