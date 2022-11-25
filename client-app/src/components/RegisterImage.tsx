import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { GenericProps } from '../types/GenericTypes';
import { Navigate, redirect } from 'react-router-dom';

const theme = createTheme();

const RegisterImage = (props: GenericProps) => {
  // Navigate/redirect user if token is empty
  if (!props.headerToken || props.headerToken.length === 0) {
    return (<Navigate to={'/'}/>);
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const {title, description, keywords, author, captureDate, storageDate, filename} = Object.fromEntries(data.entries());
    console.log({title, description, keywords, author, captureDate, storageDate, filename});
    alert(`You're seeing this because you tried to register an Image!\n Filename: ${filename}\n. \nRegisterImage isn't implemented yet, so you can't register an Image.`);

    // This part will be responsible for sending the data to the server
                                                // Why not 8080???
    const response = await fetch('http://localhost:3000/RestAD-1.0-SNAPSHOT/api/registerImage', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({title, description, keywords, author, captureDate, storageDate, filename})
    });
    const result = await response.json();
    console.log(result);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
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
            Register Image
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="title"
              label="title"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="description"
              id="description"
              autoComplete="description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="keywords"
              label="keywords"
              id="keywords"
              autoComplete="keywords"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="author"
              label="author"
              id="author"
              autoComplete="author"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="cap_date"
              label="cap_date"
              id="cap_date"
              autoComplete="cap_date"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="filename"
              label="filename"
              id="filename"
              autoComplete="filename"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default RegisterImage;