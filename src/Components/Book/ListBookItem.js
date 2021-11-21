import * as React from 'react';
import Grid from '@mui/material/Grid';

class ListBookItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ sm: 4, md: 8 }}>
                    { this.props.children }
                </Grid>
            </React.Fragment>
        )
    }
}

export default ListBookItem;