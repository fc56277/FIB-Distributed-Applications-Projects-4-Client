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
import { RawAxiosRequestHeaders } from 'axios';
import * as React from 'react';
import { REGISTER_ENDPOINT, SERVER_ENDPOINTS } from '../config/constants';
import { LoginProps } from '../types/LoginTypes';
import { apiPost } from '../utils/requests';

const theme = createTheme();

const Login = ({updateStateCallback}: LoginProps) => {
  const { loginUrl: loginApiUrl } = SERVER_ENDPOINTS;
  const registerUserEndpoint = REGISTER_ENDPOINT;


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
    const response = await apiPost(requestBody, loginApiUrl, headers, 'Login failed in POST request');
    // The following part is to check if the username-header value (which gets set by the server) actually
    // exists. If it does, then we update the state of the parent-component, namely App.tsx - so that it can
    // pass it down to its children (the other pages). If it doesn't exist, then we don't update the parent,
    // but we just show an alert that even though we logged in, the header did not get set properly
    if (response) {
      if (response.headers && response.headers !== undefined) {
        const headers = response.headers.toJSON;
        const asd = headers as ((asStrings?: boolean | undefined) => any);
        const a = asd();
        console.log(`Checking type of headers-object: ${typeof headers}`);
        console.log(`Checking contents of headers-object: ${JSON.stringify(headers)}`);
        if ((response.headers.has??('username')) || false) {
          // If value exists, then extract it. If not, replace with default ''
          const usernameHeader = ''; // ((response.headers.get??('username')) || '');
          
          if (usernameHeader.length === 0) {
            console.error('Parsing header failed - header existed, but could not extract value');
          } else {
            console.log('Succesfully extracted header. Updating state.');
            updateStateCallback(usernameHeader);
          }
        } else {
          console.error('Response from login - username-header was not found');
        }
      }
    }

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