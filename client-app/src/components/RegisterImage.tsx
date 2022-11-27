import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Navigate } from 'react-router-dom';
import { GenericProps } from '../types/GenericTypes';

const theme = createTheme();

const RegisterImage = (props: GenericProps) => {
  // Navigate/redirect user if token is empty
  if (!props.headerToken || props.headerToken.length === 0) {
    return <Navigate to={'/'} />;
  }
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { title, description, keywords, author, captureDate, storageDate, filename } =
      Object.fromEntries(data.entries());
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
            alignItems: 'center'
          }}>
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
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden />
            </Button>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Register
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default RegisterImage;
