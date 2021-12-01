import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

class CheckoutItem extends React.Component {
  render() {
    const image_url = `https://covers.openlibrary.org/b/isbn/${this.props.isbn}-M.jpg`

    return (
      <List>
        <Card>
          <Grid container spacing={3}>
            <Grid item xs="auto">
              <CardMedia
                component="img"
                height="240"
                image={image_url}
                alt={this.props.book_title}
                sx={{ objectFit: 'contain' }}
              />
            </Grid>
            <Grid item xs>
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
            </Grid>
          </Grid>
        </Card>
      </List>
    )
  }
}

export default CheckoutItem;