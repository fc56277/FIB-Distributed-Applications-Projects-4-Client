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
import { useSelector } from '../store';
import { Image } from '../types/GenericTypes';
import { handleTitleSearch } from '../utils/search';

const theme = createTheme();

const SearchImages = () => {
  const [images, setImages] = useState<Image[]>([]);
  const token = useSelector((state) => state.auth.bearerToken);
  const [successMsg, setSuccessMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const { searchByTitle, searchById, searchByAuthor, searchByCreationDate, searchByKeywords } =
    SERVER_ENDPOINTS;

  const updateFeedback = (res: any) => {
    if (res) {
      setImages(res.data);
      setSuccessMsg('Search successful.');
      setErrorMsg('');
    } else {
      setSuccessMsg('');
      setErrorMsg('Search failed');
    }
  };

  const titleSearch = async (event: FormEvent<HTMLFormElement>) => {
    handleTitleSearch(event, searchByTitle, token)
      .then((res) => {
        updateFeedback(res);
      })
      .catch((err) => {
        setErrorMsg('Title-search failed: ' + err);
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
            Search by title, description, keywords, author, or creation date.
          </Typography>
          <Box component="form" onSubmit={titleSearch} noValidate sx={{ mt: 1 }}>
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
          </Box>
          {successMsg && <Typography color="success">{successMsg}</Typography>}
          {errorMsg && <Typography color="error">Error: {errorMsg}</Typography>}
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default SearchImages;
