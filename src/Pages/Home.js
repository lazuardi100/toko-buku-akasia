import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import ListBookItem from '../Components/Book/ListBookItem';
import BookItem from '../Components/Book/BookItem';

import { getDatabase, ref, child, get } from "firebase/database";

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.handleSnackbarUndo = this.handleSnackbarUndo.bind(this);
    this.addToCart = this.addToCart.bind(this);

    this.state = {
      snackbarOpen: false,
      snackbarMessage: '',
      book_data: {
        'test': {
          'authors': "Alice",
          'title': "Sample Book",
          'average_rating': '5'
        }
      }
    }
  }

  componentDidMount() {
    this.getBookData().then((book_data) => {
      this.setState({
        book_data: book_data
      })
    })
  }

  getBookData() {
    return new Promise((res, rej) => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, 'books')).then((snapshot) => {
        if (snapshot.exists()) {
          res(snapshot.val());
        } else {
          rej("No data available")
        }
      }).catch((err) => {
        rej(err)
      })
    })
  }

  generatePrice(x) {
    let generatedPrice = parseInt(x * 5 * 10000);
    return `Rp. ${generatedPrice}`
  }

  addToCart(isbn, book_id, author, title, price, e) {
    const book_data = {
      'isbn': isbn,
      'book_id': book_id,
      'book_author': author,
      'book_title': title,
      'book_price': parseInt(price.slice(4))
    }

    let currentCart = JSON.parse(localStorage.getItem('tba-cart'))
    let cart = currentCart === null ? [] : currentCart

    if (Array.isArray(cart)) {
      cart.push(book_data);

      localStorage.setItem('tba-cart', JSON.stringify(cart));

      this.setState({
        snackbarMessage: 'Berhasil menambah ke keranjang!',
        snackbarOpen: true
      });
    } else {
      console.error('LocalStorage Error: Saved cart data type is ' + cart.constructor.name);
    }
  }

  handleSnackbarClose(e, reason) {
    if (reason === 'clickaway') {
      return;
    }

    this.setState({
      'snackbarOpen': false
    });
  }

  handleSnackbarUndo(e) {
    let currentCart = JSON.parse(localStorage.getItem('tba-cart'));
    let cart = currentCart === null ? [] : currentCart;

    if (cart.length !== 0) {
      cart = cart.slice(0, -1);

      localStorage.setItem('tba-cart', JSON.stringify(cart));
      this.setState({
        'snackbarOpen': false
      });
    } else {
      console.error('Cart is already empty!');
    }
  }

  render() {
    let book_list = [];
    Object.keys(this.state.book_data).forEach((key) => {
      const data = this.state.book_data[key]
      book_list.push(
        <BookItem
          key={key}
          book_id={key}
          isbn={data['isbn']}
          book_author={data['authors']}
          book_title={data['title']}
          book_price={this.generatePrice(data['average_rating'])}
          onAddToCart={this.addToCart}
        />
      )
    })

    const action = (
      <React.Fragment>
        <Button color="secondary" size="small" onClick={this.handleSnackbarUndo}>
          UNDO
        </Button>
        <IconButton
          size="small"
          aria-label="close"
          color="inherit"
          onClick={this.handleSnackbarClose}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </React.Fragment>
    );

    return (
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
        <CssBaseline />
        <Container maxWidth="md">
          <ListBookItem>
            {book_list}
          </ListBookItem>
        </Container>
        <Snackbar
          open={this.state.snackbarOpen}
          autoHideDuration={2000}
          onClose={this.handleSnackbarClose}
          message={this.state.snackbarMessage}
          action={action}
        />
      </Box>
    )
  }
}

export default Home;