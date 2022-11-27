import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import { ChangeEvent, FormEvent, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { SERVER_ENDPOINTS } from '../config/constants';
import { GenericProps } from '../types/GenericTypes';
import { fileToBase64 } from '../utils/file';

const theme = createTheme();

const RegisterImage = (props: GenericProps) => {
  // Navigate/redirect user if token is empty
  if (!props.headerToken || props.headerToken.length === 0) {
    return <Navigate to={'/'} />;
  }
  const [file, setFile] = useState<File | null>(null);
  const { registerImageUrl } = SERVER_ENDPOINTS;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const title = data.get('title') as string;
    if (title === '') {
      alert('Please enter a title');
      return;
    }

    const description = data.get('description') as string;
    if (description === '') {
      alert('Please enter a description');
      return;
    }

    const keywords = data.get('keywords') as string;
    if (keywords === '') {
      alert('Please enter keywords');
      return;
    }

    const author = data.get('author') as string;
    if (author === '') {
      alert('Please enter an author');
      return;
    }

    const captureDate = data.get('captureDate') as string;
    if (captureDate === '') {
      alert('Please enter a capture date');
      return;
    }

    // Ensure that the capture date is in the correct format
    const date = new Date(captureDate);
    if (date.toString() === 'Invalid Date') {
      alert('Capture date is not in the correct format (required: YYYY-MM-DD)');
      return;
    }

    if (file === null) {
      alert('Please select a file');
      return;
    }
    const base64 = await fileToBase64(file).then((result) => {
      if (result) {
        return result;
      } else {
        throw new Error('Failed to convert file to base64');
      }
    });

    const requestBody = new URLSearchParams({
      title,
      description,
      keywords,
      author,
      capture: captureDate,
      file: base64
    });

    console.debug(JSON.stringify(requestBody));

    const response = await axios.post(registerImageUrl, requestBody, {
      headers: {
        // prettier-ignore
        'username': props.headerToken,
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    // Check if the response status is 400-500 range
    if (response.status >= 400 && response.status < 510) {
      alert('Failed to register image');
      return;
    }

    alert('Image successfully registered');
    console.log(JSON.stringify(response));
  };

  // Create a function that shows the name of the image file once it's uploaded
  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFile(file);
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
              label="Title of Image:"
              name="title"
              autoComplete="title"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="description"
              label="Description:"
              id="description"
              autoComplete="description"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="keywords"
              label="Image keywords (comma-separated):"
              id="keywords"
              autoComplete="keywords"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="author"
              label="Author (who took the photo):"
              id="author"
              autoComplete="author"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="captureDate"
              label="Date when the photo was taken (YYYY-MM-DD):"
              id="captureDate"
              autoComplete="captureDate"
            />
            <Button variant="contained" component="label">
              Upload File
              <input type="file" hidden onChange={handleFileChange} />
            </Button>
            {file && <p>File uploaded: {file.name}</p>}
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
