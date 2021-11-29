import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Snackbar from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';

import { Link } from 'react-router-dom';

class BookItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleSnackbarClose = this.handleSnackbarClose.bind(this);
    this.handleSnackbarUndo = this.handleSnackbarUndo.bind(this);

    this.state = {
      'snackbarOpen': false,
      'snackbarMessage': ''
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
        'snackbarMessage': title + ' telah ditambahkan ke keranjang!',
        'snackbarOpen': true
      });
    } else {
      console.error('LocalStorage Error: Saved cart data type is ' + cart.constructor.name);
    }
  }

  render() {
    const image_url = `https://covers.openlibrary.org/b/isbn/${this.props.isbn}-M.jpg`

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
      <Grid item sm={4} md={4}>
        <Card>
          <CardMedia
            component="img"
            height="240"
            image={image_url}
            alt={this.props.book_title}
            sx={{ objectFit: 'contain' }}
          />
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {this.props.book_author}
            </Typography>
            <Typography gutterBottom variant="h7" component="div">
              {this.props.book_title}
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} color="text.secondary">
              {this.props.book_price}
            </Typography>
          </CardContent>
          <CardActions sx={{ justifyContent: 'end' }}>
            <Button
              size="small"
              onClick={this.addToCart.bind(this, this.props.isbn, this.props.book_id,
                this.props.book_author, this.props.book_title, this.props.book_price)}
            >
              Add to Cart
            </Button>
            <Button size="small" component={Link} to={"/checkout?id=" + this.props.book_id}>Beli</Button>
          </CardActions>
        </Card>
        <Snackbar
          open={this.state.snackbarOpen}
          autoHideDuration={6000}
          onClose={this.handleSnackbarClose}
          message={this.state.snackbarMessage}
          action={action}
        />
      </Grid>
    )
  }
}

export default BookItem;