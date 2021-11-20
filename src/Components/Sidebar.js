import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { red } from '@mui/material/colors';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import ReceiptIcon from '@mui/icons-material/Receipt';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Sidebar() {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box' },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: 'auto' }}>
        <List>
          <ListItem button key="Home">
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button key="Keranjang">
            <ListItemIcon>
              <ShoppingBasketIcon />
            </ListItemIcon>
            <ListItemText primary="Keranjang" />
          </ListItem>
          <ListItem button key="Pesanan">
            <ListItemIcon>
              <ReceiptIcon />
            </ListItemIcon>
            <ListItemText primary="Pesanan" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem
            button
            key="Keluar"
            sx={{
              color: red[600],

              '&:hover': {
                bgcolor: red[400],
                color: 'white'
              }
            }}
          >
            <ListItemIcon
              sx={{
                color: 'inherit',
              }}
            >
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText
              primary="Keluar"
              primaryTypographyProps={{
                fontWeight: 'medium'
              }}
            />
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}