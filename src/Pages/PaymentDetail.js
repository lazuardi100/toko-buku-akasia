import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import { useParams, useLocation, useNavigate } from 'react-router-dom';

export default function Home() {
  // Get state
  const { state } = useLocation();
  const { logo, rekening } = state;

  // Params form URL
  const { bank } = useParams();

  // Navigating
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  }

  // Generating DATE and TIME
  const current = new Date();
  const time = current.toLocaleTimeString("id", {
    hour: "2-digit",
    minute: "2-digit",
  });
  const date = current.toLocaleDateString();

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}
    >
      <Toolbar />
      <CssBaseline />
      <Container maxWidth="md">
        <Box textAlign='center' sx={{ pt: "2rem", pb: "3rem" }}>
          <Typography
            variant="h4"
            fontWeight="bold"
            color="#4B84F1"
            sx={{ mb: "3rem" }}
          >
            Rincian Transfer
          </Typography>
          <img src={`/images/${logo}`} alt={logo} height="45" width="150" />
          <Typography
            variant="body1"
          >
            {bank} Payment
          </Typography>
          <Typography
            variant="h6"
            fontWeight="bold"
            sx={{ mt: "0.5rem" }}
          >
            {rekening}
          </Typography>
        </Box>
        <Typography variant="body1" sx={{ py: "0.5rem" }}>Jam: {time}</Typography>
        <Typography variant="body1" sx={{ py: "0.5rem" }}>Tanggal: {date}</Typography>
        <Typography variant="body1" sx={{ py: "0.5rem" }}>Jumlah Transfer: Rp. 20000</Typography>
        <Typography variant="body1" sx={{ py: "0.5rem" }}>Biaya Admin: Gratis</Typography>
        <Button fullWidth variant="contained" sx={{ my: "1.5rem" }} onClick={handleClick}>Bayar</Button>
      </Container>
    </Box >
  );
};