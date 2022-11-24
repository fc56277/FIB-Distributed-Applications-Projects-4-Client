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

const theme = createTheme();

const ListImages = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //const data = new FormData(event.currentTarget);
    //const {} = Object.fromEntries(data.entries());
    //console.log({filename});
    //alert(`You're seeing this because you tried to search for an Image!\n Filename: ${filename}\n. \SearchImages isn't implemented yet, so you can't search for an Image.`);

    // This part will be responsible for sending the data to the server
                                                // Why not 8080???
    const response = await fetch('http://localhost:3000/RestAD-1.0-SNAPSHOT/api/listImages', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({filename})
    });
    const result = await response.json();
    console.log(result);
  };