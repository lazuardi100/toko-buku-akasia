import * as React from 'react';
import { Card, CardContent, CardActions, Typography, Button } from "@mui/material";

function CardPayment({ bank, rekening }) {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography>{bank}  {rekening}</Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Pilih</Button>
                </CardActions>
            </Card>
        </>
    );
};

export default CardPayment;
