import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import { useParams } from 'react-router-dom';

export default function Home() {
    const { bank } = useParams();

    const current = new Date();
    const time = current.toLocaleTimeString("en-US", {
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
                <h3>Detail Pembayaran</h3>
                <h2>{bank}</h2>
                <h5>Jam: {time}</h5>
                <h5>Tanggal: {date}</h5>
                <h5>Jumlah Transfer: 20.000</h5>
                <h5>Biaya Admin: Gratis</h5>
                <Button>Bayar</Button>
            </Container>
        </Box>
    );
};