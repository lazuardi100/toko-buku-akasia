import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class BookItem extends React.Component {
  render() {
    return (
      <Grid item sm={4} md={4}>
        <Card>
          <Box sx={{ bgcolor: '#cfe8fc', height: '240px', display: 'flex' }}/>
          {/* <CardMedia
            component="img"
            height="140"
            image={this.props.image_url}
            alt={this.props.book_title}
          /> */}
          <CardContent>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              { this.props.book_author }
            </Typography>
            <Typography gutterBottom variant="h5" component="div">
              { this.props.book_title }
            </Typography>
            <Typography sx={{ fontSize: 14, fontWeight: 'medium' }} color="text.secondary">
              { this.props.book_price }
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Beli</Button>
          </CardActions>
        </Card>
      </Grid>
    )
  }
}

export default BookItem;