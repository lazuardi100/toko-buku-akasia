import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import CardPayment from '../Components/Payment/CardPayment';

export default function Home(props) {
    const bankData = [
        {
            "id": 1,
            "bank": "BNI",
            "rekening": "12345678",
        },
        {
            "id": 2,
            "bank": "OVO",
            "rekening": "089890890876",
        },
        {
            "id": 3,
            "bank": "GOPAY",
            "rekening": "089890890876",
        },
        {
            "id": 4,
            "bank": "DANA",
            "rekening": "089890890876",
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
                <h3>Pilih Metode Pembayaran</h3>
                <p>Pilih metode pembayaran dan pastikan rekening ini adalah milik kamu ya</p>
                <h4>Total Harga Rp. {props.price ? props.price : "200.000"} </h4>
                {bankData.map((data) => (
                    <>
                        <CardPayment bank={data["bank"]} rekening={data["rekening"]} />
                        <br />
                    </>
                ))}
            </Container>
        </Box>
    );
};