import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';

import { useNavigate } from 'react-router-dom';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);

  // Bottom Navigation Handler Func
  const navigate = useNavigate();
  const handleClick = (id) => {
    switch (id) {
      case 'home':
        navigate('/');
        break;
      case 'cart':
        navigate('/cart');
        break;
      default:
        navigate('/');
        break;
    }
  }

  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
      >
        <BottomNavigationAction
          label="Home"
          icon={<HomeIcon />}
          onClick={() => handleClick('home')}
        />
        <BottomNavigationAction
          label="Keranjang"
          icon={<ShoppingBasketIcon />}
          onClick={() => handleClick('cart')}
        />
        <BottomNavigationAction
          label="Profil"
          icon={<PersonIcon />}
          onClick={() => handleClick('profile')}
        />
      </BottomNavigation>
    </Paper>
  )
}