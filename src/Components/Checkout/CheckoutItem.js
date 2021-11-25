import * as React from 'react';
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

class CheckoutItem extends React.Component{
    render() {
        return(
            <List>
                <Card>
                    <Grid container spacing={3}>
                        <Grid item xs="auto">
                            <item>
                                <Box sx={{ bgcolor: '#cfe8fc', height: '90px', width: '60px', display: 'flex' }}/>
                            </item>
                        </Grid>
                        <Grid item xs>
                            <item>
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
                            </item>
                        </Grid>
                    </Grid>
                    
                    
                </Card>
            </List>
        )
    }
}

export default CheckoutItem;