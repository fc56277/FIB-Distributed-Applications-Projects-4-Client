import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { FormEvent, useState } from 'react';
import { SERVER_ENDPOINTS } from '../config/constants';
import { apiPost } from '../utils/requests';

const theme = createTheme();

const SearchImages = () => {
  const { searchImageUrl: apiSearchUrl } = SERVER_ENDPOINTS;
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    // If no time, implement only one of the searches by title i.e.
    const { title } = Object.fromEntries(data.entries());

    // This part will be responsible for sending the data to the server
    const headers = {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    };

    const requestBody = new URLSearchParams({
      title: title as string
    });
    apiPost(requestBody, apiSearchUrl, headers)
      .then((response) => {
        console.log(JSON.stringify(response));
        setSuccessMsg('Image successfully searched');
      })
      .catch((error) => {
        console.error(error);
        setErrorMsg('Image search failed.');
      });
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
            Search
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              name="title"
              label="title"
              id="title"
              autoComplete="title"
            />
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Search
            </Button>
            {successMsg && <Typography color="success">{successMsg}</Typography>}
            {errorMsg && <Typography color="error">Error: {errorMsg}</Typography>}
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SearchImages;
