import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import CartItem from '../Components/Cart/CartItem';
import ListCartItem from '../Components/Cart/ListCartItem';

export default function Cart() {
    let totalPrice = 0;
    const tempData = [
        {
            "book_author": "Tere Liye",
            "book_title": "Selamat Tinggal",
            "book_price": 68000
          },
          {
            "book_author": "Tere Liye",
            "book_title": "Pulang - Pergi",
            "book_price": 89000
          },
        {
            "book_author": "Ilana Tan",
            "book_title": "The Star and I",
            "book_price": 99000
          },
    ];
    return(
        <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}>
            <Toolbar />
            <CssBaseline />
            <Container maxWidth="md">
            <h2>Keranjang Belanja</h2>
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
                <h4> Total Pembayaran Rp.{totalPrice} </h4>
                <Button alignCenter>Lanjutkan Pembelian</Button>
            </Container>
        </Box>
    )
}