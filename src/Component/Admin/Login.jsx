import React, { useState } from "react";
import {
  Container,
  Box,
  Typography,
  Avatar,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  CssBaseline,
  Grid,

} from "@mui/material";
import { Link, useNavigate ,} from 'react-router-dom';
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

const Login = (props) => {
  const navigate = useNavigate()
  const [credentials,setCredentials]=useState({
    email:"",
    password:""
  })
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url =process.env.REACT_APP_ADMIN_API_KEY+'login'
    try{const response = await fetch(url,{
      method:"POST",
      headers:{
        "content-type": "application/json",
      },
      body:JSON.stringify({Email:credentials.email,Password:credentials.password})
    })
    const result = await response.json()
    if(result.success){
      localStorage.setItem("Token",result.Token)
      navigate("admin/")
    }
    else{
      console.error(result.Error)
    }}
    catch(err){
      if(err=="TypeError: Failed to fetch"){
        alert("server error")
      }
      else{
        console.error(err)
      }
    }
  };
  onchange=(e)=>{
    setCredentials({ ...credentials, [e.target.name]: e.target.value })
  }
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />

      <Box
        sx={{
          marginTop: 5,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={onchange}
          />

          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={onchange}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="/" className="login-Links" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link to='/' className="login-Links" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>

      <Typography
        variant="body2"
        color="text.secondary"
        align="center"
        sx={{ mt: 8, mb: 4 }}
      >
        {"Copyright © "}
        <Link href="https://mui.com/">
          Your Website
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </Container>
  );
};

export default Login;
