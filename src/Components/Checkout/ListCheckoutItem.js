import * as React from 'react';
import List from '@mui/material/Grid';

class ListCheckoutItem extends React.Component {
    render() {
        return (
            <React.Fragment>
                <List>
                    { this.props.children }
                </List>
            </React.Fragment>
        )
    }
}

export default ListCheckoutItem;