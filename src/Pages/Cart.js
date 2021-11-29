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
  const cart = JSON.parse(localStorage.getItem('tba-cart'));

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}>
      <Toolbar />
      <CssBaseline />
      <Container maxWidth="md">
        <h2>Keranjang Belanja</h2>
        <ListCartItem>
          {cart.map((data, id) => (
            <CartItem
              key={id}
              book_author={data['book_author']}
              book_title={data['book_title']}
              book_price={data['book_price']}
            />
          ))}
        </ListCartItem>
        {cart.forEach(function (value) {
          totalPrice += value.book_price;
        })}
        <h3> Total Pembayaran Rp.{totalPrice} </h3>
        <Button alignCenter>Lanjutkan Pembelian</Button>
      </Container>
    </Box>
  )
}