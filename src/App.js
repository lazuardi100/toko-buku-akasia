import React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

// import Sidebar from './Components/Sidebar';
import Home from './Pages/Home';
import Payment from './Pages/Payment';
import Checkout from './Pages/Checkout';
import PaymentDetail from './Pages/PaymentDetail';
import Cart from './Pages/Cart';
import BottomNav from './Components/BottomNav';

// import {getDatabase, push, ref, child, update} from "firebase/database";
// import data from './data.json'

// Importing React-Router for Routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {

  // function prepareData(){
  //   data.forEach(val => {
  //     importDB(val)
  //   })
  // }
  // function importDB(data){
  //   const db = getDatabase();

  //   let value = push(child(ref(db), 'book')).key;
  //   const datainput ={}
  //   datainput['/books/'+value] = data;

  //   update(ref(db), datainput);
  //   console.log(`Buku ${data.title} berhasil diinput`);
  // }
  return (
    <Router>
      <Box sx={{ display: 'flex', pb: 7 }}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              Toko Buku Akasia
            </Typography>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/payment' element={<Payment />} />
          <Route path='/paymentDetail/:bank' element={<PaymentDetail />} />
          <Route path='/checkout' element={<Checkout />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        {/* <Button onClick={prepareData} variant="contained">Import Database</Button> */}
        <BottomNav />
      </Box>
    </Router>
  );
}

export default App;
