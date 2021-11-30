import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CardPayment from '../Components/Payment/CardPayment';

import { useLocation } from "react-router-dom";
import bank from '../Data/bank';

export default function Payment() {
  const { state } = useLocation()
  const { price } = state;
  const bankData = bank;

  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}
    >
      <Toolbar />
      <CssBaseline />
      <Container maxWidth="md">
        <Box
          sx={{ pt: "2rem", pb: "3rem" }}
          textAlign="center"
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            color="#4B84F1"
          >
            Pilih Metode Pembayaran
          </Typography>
          <Typography
            variant="body1"
          >
            Pilih metode pembayaran dan pastikan rekening ini adalah milik kamu ya
          </Typography>
          <Typography
            variant="h6"
            sx={{ pt: "1.5rem" }}
          >
            Total Harga Rp. {price}
          </Typography>
        </Box>
        {bankData.map((data, id) => (
          <React.Fragment
            key={id}
          >
            <CardPayment
              bank={data["bank"]}
              rekening={data["rekening"]}
              logo={data["logo"]}
              biayaAdmin={data["biaya_admin"]}
              totalPrice={price}
            />
            <br />
          </React.Fragment>
        ))}
      </Container>
    </Box>
  );
};