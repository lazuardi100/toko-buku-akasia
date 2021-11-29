import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Profile() {
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}
    >
      <Toolbar />
      <CssBaseline />
      <Container maxWidth="md">
        <Box textAlign='center' sx={{ my: "5rem" }}>
          <img src='/images/coming-soon.svg' alt='Hello' height="250" width="250" />
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#4B84F1"
            sx={{ mb: "3rem" }}
          >
            Coming Soon
          </Typography>
        </Box>
      </Container>
    </Box >
  );
};