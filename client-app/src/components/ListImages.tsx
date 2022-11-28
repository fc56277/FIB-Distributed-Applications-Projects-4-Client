import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { FormEvent, useState } from 'react';
import { SERVER_ENDPOINTS } from '../config/constants';
import { useSelector } from '../store';
import { Image } from '../types/GenericTypes';
import { apiGet } from '../utils/requests';

const theme = createTheme();

const ListImages = () => {
  const token = useSelector((state) => state.auth.bearerToken);
  const [images, setImages] = useState<Image[]>([]);
  const [error, setError] = useState<string>('');
  const { listImagesUrl } = SERVER_ENDPOINTS;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const headers = {
      username: token,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    };
    apiGet(listImagesUrl, headers)
      .then((response) => {
        console.log(JSON.stringify(response));
        if (!response) {
          return;
        }
        setImages(response.data);
      })
      .catch((error) => {
        console.error(error);
        setError('Failed to list images.');
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
            List Images
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              List All Images!
            </Button>
          </Box>
          {images.length > 0 && (
            <Box sx={{ mt: 5 }}>
              <Typography component="h1" variant="h5">
                Images
              </Typography>
              <ul>
                {images.map((image) => (
                  <li
                    key={
                      Math.random().toString(36).substring(2, 15) +
                      Math.random().toString(36).substring(2, 15)
                    }>
                    <img src={image.base64} alt={image.title} />
                    <p>{image.description}</p>
                  </li>
                ))}
              </ul>
            </Box>
          )}
        </Box>
        {error && <Box sx={{ mt: 5 }}>{error}</Box>}
      </Container>
    </ThemeProvider>
  );
};

export default ListImages;
