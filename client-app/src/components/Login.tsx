import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { CLIENT_ENDPOINTS, SERVER_ENDPOINTS } from '../config/constants';
import axios from 'axios';

const theme = createTheme();

const Login = () => {
  const { loginUrl: loginApiUrl } = SERVER_ENDPOINTS;
  const client_endpoints = CLIENT_ENDPOINTS;
  // Find the first element where the name is similar to "register user"
  const registerUserEndpoint = client_endpoints.find((endpoint) => endpoint.displayName.toLowerCase().includes('register user'));
  if (!registerUserEndpoint) {
    throw new Error('Register user endpoint not found');
  };


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { username, password } = Object.fromEntries(data.entries());
    console.log({ username, password });

    // This part will be responsible for sending the data to the server
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json',
    };
    const requestBody = new URLSearchParams({
      username: username as string,
      password: password as string
    });
    const response = await axios.post(loginApiUrl, requestBody, { headers });
    const result = await response.data;
    console.log(result);
    alert(`Login finished with result: ${result}`);
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoComplete="username"
              autoFocus
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
              <Grid item>
                <Link href={registerUserEndpoint.route} variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default Login;