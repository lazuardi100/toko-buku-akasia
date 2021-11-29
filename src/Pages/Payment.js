import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

import CardPayment from '../Components/Payment/CardPayment';

import { useLocation } from "react-router-dom";

export default function Home(props) {
  const {state} = useLocation()
  const { price } = state;
  const bankData = [
    {
      "id": 1,
      "bank": "BNI",
      "rekening": "0234383278",
      "logo": "bni.png",
    },
    {
      "id": 2,
      "bank": "OVO",
      "rekening": "085748957862",
      "logo": "ovo.png",
    },
    {
      "id": 3,
      "bank": "GOPAY",
      "rekening": "085748957862",
      "logo": "gopay.png",
    },
    {
      "id": 4,
      "bank": "DANA",
      "rekening": "085748957862",
      "logo": "dana.png",
    },
  ];
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
            variant="h4"
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
            />
            <br />
          </React.Fragment>
        ))}
      </Container>
    </Box>
  );
};