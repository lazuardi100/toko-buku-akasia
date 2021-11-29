import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { Link } from 'react-router-dom';

class BookItem extends React.Component {
  addToCart(isbn, author, title, price, e) {
    const book_data = {
      'isbn': isbn,
      'book_author': author,
      'book_title': title,
      'book_price': parseInt(price.slice(4))
    }

    let currentCart = JSON.parse(localStorage.getItem('tba-cart'))
    let cart = currentCart === null ? [] : currentCart

    if (Array.isArray(cart)) {
      cart.push(book_data);

      localStorage.setItem('tba-cart', JSON.stringify(cart));
    } else {
      console.err('LocalStorage Error: Saved cart data type is ' + cart.constructor.name);
    }
  }

  render() {
    return (
      <Grid item sm={4} md={4}>
        <Card>
          <Box sx={{ bgcolor: '#cfe8fc', height: '240px', display: 'flex' }} />
          {/* <CardMedia
            component="img"
            height="140"
            image={this.props.image_url}
            alt={this.props.book_title}
          /> */}
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {this.props.book_author}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.book_title}
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} color="text.secondary">
              {this.props.book_price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" component={Link} to={"/checkout?"+this.props.isbn}>Beli</Button>
            <Button
            size="small"
            onClick={this.addToCart.bind(this, this.props.isbn,
              this.props.book_author, this.props.book_title, this.props.book_price)}
            >
              Add to Cart
            </Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default BookItem;