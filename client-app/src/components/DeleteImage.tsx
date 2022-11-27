import { createTheme } from '@mui/material/styles';
import * as React from 'react';

const theme = createTheme();

const DeleteImage = () => {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const { filename } = Object.fromEntries(data.entries());
    console.log({ filename });
    alert(
      `You're seeing this because you tried to delete an Image!\n Filename: ${filename}\n. DeleteImages isn't implemented yet, so you can't delete an Image.`
    );

    // This part will be responsible for sending the data to the server
    // Why not 8080???
    const response = await fetch('http://localhost:3000/RestAD-1.0-SNAPSHOT/api/deleteImage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ filename })
    });
    const result = await response.json();
    console.log(result);
  };

  return <div>Not implemented</div>;
};

export default DeleteImage;
