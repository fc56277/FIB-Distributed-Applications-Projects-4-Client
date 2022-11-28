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
import { apiGet } from '../utils/requests';

const theme = createTheme();

const ListImages = () => {
  const token = useSelector((state) => state.auth.bearerToken);
  const [images, setImages] = useState([]);
  const { listImagesUrl } = SERVER_ENDPOINTS;

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const headers = {
      username: token,
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json'
    };
    const response = await apiGet(listImagesUrl, headers);
    console.log(response);
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
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default ListImages;
