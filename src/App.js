import * as React from 'react';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

// import Sidebar from './Components/Sidebar';
import Home from './Components/Pages/Home';
import BottomNav from './Components/BottomNav';

function App() {
  return (
    <Box sx={{ display: 'flex', pb: 7 }}>
      <CssBaseline/>
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
      <Home />
      <BottomNav />
    </Box>
  );
}

export default App;
