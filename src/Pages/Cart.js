import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import CartItem from '../Components/Cart/CartItem';
import ListCartItem from '../Components/Cart/ListCartItem';

export default function Cart() {
    let totalPrice = 0;
    const tempData = [
        {
            "book_author": "Tere Liye",
            "book_title": "Selamat Tinggal",
            "book_price": "Rp. 68.000"
          },
          {
            "book_author": "Tere Liye",
            "book_title": "Pulang - Pergi",
            "book_price": "Rp. 89.000"
          },
        {
            "book_author": "Ilana Tan",
            "book_title": "The Star and I",
            "book_price": "Rp. 99.000"
          },
    ];
    return(
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}>
            <Toolbar />
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h3" component="div" gutterBottom>
                Keranjang Belanja 
                </Typography>
                <ListCartItem>
                {tempData.map((data, id) => (
                    <CartItem
                    key={id}
                    book_author={data['book_author']}
                    book_title={data['book_title']}
                    book_price={data['book_price']}
                />
                ))}
                </ListCartItem>
                {tempData.forEach(function(value){
                    totalPrice += value.book_price;
                })}
                <Paper elevation={0} sx={{ bgcolor: '#cfe8fc'}}> 
                <Grid item xs={2} sm={4} md={4}>
                    <Typography variant="h4" component="div" alignCenter gutterBottom> Total Pembayaran {totalPrice} </Typography>
                </Grid>
                </Paper>
                <Button>Lanjutkan Pembelian</Button>
            </Container>
        </Box>
    )
}