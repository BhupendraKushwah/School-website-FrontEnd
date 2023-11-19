import React, { useState } from 'react';
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
  } from '@mui/material';
  import DeleteIcon from '@mui/icons-material/Delete';

const RecordMarks = () => {
  const [year, setYear] = useState('');
  const [examName, setExamName] = useState('');
  const [result, setResult] = useState('Pass');
  const [subjectMarks, setSubjectMarks] = useState([]);

  const studentData =  {
    id: 1,
    name: "John Doe",
    age: 18,
    grade: "A",
    email: "john@example.com",
    enrollment: "202301",
    dob: "2005-05-15",
    guardians: "John Doe Sr., Jane Doe",
    contact: "123-456-7890",
    class: "12th Grade",
    attendance: "95%",
     
  };

  const handleAddSubject = () => {
    setSubjectMarks([...subjectMarks, { subject: '', marks: 0 }]);
  };

  const handleRemoveSubject = (index) => {
    const updatedSubjects = [...subjectMarks];
    updatedSubjects.splice(index, 1);
    setSubjectMarks(updatedSubjects);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const marksData = {
        Student: {
            Name:studentData.name,
            Enrollment:studentData.enrollment,
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

    //   try {
    //     const response = await fetch('http://localhost:5000/api/addMarks', {
    //       method: 'POST',
    //       headers: {
    //         'Content-Type': 'application/json',
    //       },
    //       body: JSON.stringify(marksData),
    //     });
  
    //     const result = await response.json();
  
    //     if (result.success) {
    //       // Reset the form or perform any other necessary actions
    //       setYear('');
    //       setExamName('');
    //       setResult('Pass');
    //       setSubjectMarks([]);
    //     } else {
    //       console.error(result.message);
    //     }
    //   } catch (error) {
    //     console.error('Error:', error);
    //   }
    console.log(marksData);
  };

  

  return (

    <Container maxWidth="sm">
        {console.log(studentData.id)}
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px', backgroundColor: '#f8f8f8' }}>
        <Typography variant="h5" align="center" gutterBottom style={{ color: '#333' }}>
          Add Marks
        </Typography>
        <Divider style={{ margin: '20px 0', backgroundColor: '#bbb' }} />
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Student Name"
                type="text"
                value={studentData.name}
                // onChange={(e) => setYear(e.target.value)}
                fullWidth
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Enrollment Number"
                type="text"
                value={studentData.enrollment}
                // onChange={(e) => setYear(e.target.value)}
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
                <Select value={result} onChange={(e) => setResult(e.target.value)}>
                  <MenuItem value="Pass">Pass</MenuItem>
                  <MenuItem value="Fail">Fail</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>

          <Typography variant="h6" style={{ marginTop: '20px', color: '#555' }}>
            Subject Marks:
          </Typography>
          {subjectMarks.map((subject, index) => (
            <Grid container spacing={2} key={index} style={{ marginTop: '10px' }}>
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
              <Grid item xs={12} sm={2} style={{ display: 'flex', alignItems: 'flex-end' }}>
                <IconButton onClick={() => handleRemoveSubject(index)} aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              </Grid>
            </Grid>
          ))}

          <Box display="flex" justifyContent="flex-end" alignItems="center" marginTop="20px">
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddSubject}
              style={{ marginRight: '10px', backgroundColor: '#4caf50' }}
            >
              Add Subject
            </Button>
            <Button type="submit" variant="contained" color="primary" style={{ backgroundColor: '#2196f3' }}>
              Submit
            </Button>
          </Box>
        </form>
      </Paper>
    </Container>
  );
};

export default RecordMarks;
