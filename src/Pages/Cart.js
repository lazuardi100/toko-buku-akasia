import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import CartItem from '../Components/Cart/CartItem';
import ListCartItem from '../Components/Cart/ListCartItem';

class Cart extends React.Component {
  constructor(props) {
    super(props);

    this.cartItemDelete = this.cartItemDelete.bind(this);

    this.state = {
      cart: [],
      total_price: 0,
      continue_link: '/checkout'
    }
  }

  componentDidMount() {
    const cart = JSON.parse(localStorage.getItem('tba-cart'));
    let book_id_in_cart = []

    cart.forEach((data) => {
      book_id_in_cart.push(data['book_id']);
    })

    this.setState({
      cart: cart,
      total_price: this.calculateTotalPrice(cart),
      continue_link: '/checkout?id=' + book_id_in_cart.join(';')
    })
  }

  updateCartLocalStorage(cart_items) {
    if (Array.isArray(cart_items)) {
      localStorage.setItem('tba-cart', JSON.stringify(cart_items));
    } else {
      console.error('LocalStorage Error: Saved cart data type is ' + cart_items.constructor.name);
    }
  }

  calculateTotalPrice(cart_items) {
    let total_price = 0

    cart_items.forEach((data) => {
      total_price += data['book_price'];
    });

    return total_price
  }

  cartItemDelete(book_id, e) {
    const cart = this.state.cart;
    let newCart = cart.filter(c => c['book_id'] !== book_id)

    this.setState({
      cart: newCart,
      total_price: this.calculateTotalPrice(newCart)
    });

    this.updateCartLocalStorage(newCart);
  }

  render() {
    return (
      <Box component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3, }}>
        <Toolbar />
        <CssBaseline />
        <Container maxWidth="md">
          <h2>Keranjang Belanja</h2>
          {this.state.cart ?
            <div>
              <ListCartItem>
                {this.state.cart.map((data, id) => (
                  <CartItem
                    key={data['book_id']+id}
                    book_id={data['book_id']}
                    book_author={data['book_author']}
                    book_title={data['book_title']}
                    book_price={data['book_price']}
                    delete_clicked={this.cartItemDelete}
                  />
                ))}
              </ListCartItem>
              <h3> Total Pembayaran = Rp.{this.state.total_price} </h3>
              <Button href={this.state.continue_link}>Lanjutkan Pembelian</Button>
            </div> : 
            <p> Kosong :( </p>}
        </Container>
      </Box>
    )
  }
}

export default Cart;