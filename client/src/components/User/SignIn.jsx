import { Link } from 'react-router-dom'
import { useState } from 'react'
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const SignIn = (props) => {
  const [fields, setFields] = useState({username: '', password:''})

  const handleChange = async (event) => {
    setFields({
      ...fields,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await fetch('/users/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify(fields)
    })
    console.log(res)
    const data = await res.json()
    console.log(data.authorised)
    props.handleLogin(data.authorised)
  }



  // const handleSubmit = async (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const newUser = {
  //     username: data.get("username"),
  //     password: data.get("password")
  //   }
  //   const res = await fetch("/users/login", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(newUser)
  //   })
  //   const newData = await res.json()
  //   console.log(newData.msg);
  //   console.log(newData)
  //   props.handleLogin(newData.authorised)
    
  // };

  return (
    <Container sx={{mb: 20}} component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form onSubmit={handleSubmit}> 
          <Box sx={{ mt: 3 }}>
          <Grid container spacing={2}>
              <Grid item xs={12}>
              <TextField
                required
                fullWidth
                value={fields.username}
                onChange={handleChange}
                name="username"
                type="text"
                id="username"
                label="Username"
                autoFocus
              />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  value={fields.password}
                  onChange={handleChange}
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                />
            </Grid>
          </Grid>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Link to='/signup' style={{textDecoration:'none'}}>
              Don't have an account? Sign Up
            </Link>
          </Box>
        </form>
      </Box>
    </Container>
  );
}

export default SignIn