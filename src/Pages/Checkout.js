import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import ListCheckoutItem from '../Components/Checkout/ListCheckoutItem';
import CheckoutItem from '../Components/Checkout/CheckoutItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

export default function Checkout() {
    const tempData = [
        {
          "book_author": "Aristotle",
          "book_title": "Politics: A Treatise on Government",
          "book_price": "Rp. 135.000"
        },
        {
          "book_author": "Aristotle",
          "book_title": "The Ethics of Aristotle",
          "book_price": "Rp. 135.000"
        },
        {
          "book_author": "Robert T. Kiyosaki",
          "book_title": "Rich Dad Poor Dad",
          "book_price": "Rp. 219.000"
        },
        {
          "book_author": "Ilana Tan",
          "book_title": "The Star and I",
          "book_price": "Rp. 99.000"
        },
      ];
    return(
        <Box
            component="main"
            sx={{ flexGrow: 1, bgcolor: 'background.default',p: 3 }}
        >
            <Toolbar />
            <CssBaseline />
            <Container maxWidth="md">
                <h3>Alamat Pengiriman</h3>
                <TextField fullWidth id="alamat-pengiriman" label="" variant="outlined" placeholder="Alamat Pengiriman"/>
                <br />
                <br />
                <ListCheckoutItem>
                    {tempData.map((data,id) => (
                        <CheckoutItem 
                            key={id}
                            book_author={data['book_author']}
                            book_title={data['book_title']}
                            book_price={data['book_price']}
                        />
                    ))}
                </ListCheckoutItem>
                <br />
                <FormControl fullWidth>
                    <InputLabel id="select-shipment">Pilih Pengiriman</InputLabel>
                    <Select
                        labelId="shipment-label"
                        id="shipment-select"
                    >
                        <MenuItem value={"Entar Aja"}>Entar Aja</MenuItem>
                        <MenuItem value={"ENJ"}>ENJ</MenuItem>
                        <MenuItem value={"SiLemot"}>SiLemot</MenuItem>
                    </Select>
                </FormControl>
                <br />
                <br />
                <TextField fullWidth id="kupon" label="" variant="outlined" placeholder="Masukkan Kupon"/>
                <br />
                <br />
                <Button fullWidth variant="contained">Pilih Pembayaran</Button>
            </Container>
        </Box>
    );
};