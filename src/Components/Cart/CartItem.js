import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

class CartItem extends React.Component {
  render() {
    return (
      <Grid item sm={1} md={1}>
        <Card>
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {this.props.book_author}
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              {this.props.book_title}
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} color="text.secondary">
              Rp. {this.props.book_price}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small" onClick={this.props.delete_clicked.bind(this, this.props.book_id)}>Hapus</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default CartItem;