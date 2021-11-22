import * as React from 'react';
import Paper from '@mui/material/Paper';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import PersonIcon from '@mui/icons-material/Person';

export default function BottomNav() {
    const [value, setValue] = React.useState(0);

    return (
        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
            <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue)
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Keranjang" icon={<ShoppingBasketIcon />} />
                <BottomNavigationAction label="Profil" icon={<PersonIcon />} />
            </BottomNavigation>
        </Paper>
    )
}