import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Link } from 'react-router-dom';

class BookItem extends React.Component {
  render() {
    const image_url = `https://covers.openlibrary.org/b/isbn/${this.props.isbn}-M.jpg`

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
              onClick={this.props.onAddToCart.bind(this, this.props.isbn, this.props.book_id,
                this.props.book_author, this.props.book_title, this.props.book_price)}
            >
              Add to Cart
            </Button>
            <Button size="small" component={Link} to={"/checkout?id=" + this.props.book_id}>Beli</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default BookItem;