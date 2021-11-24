import React from 'react';
import { Card, CardContent, CardActions, Typography } from "@mui/material";
import { Link } from 'react-router-dom';

function CardPayment({ bank, rekening }) {
    console.log(bank);
    return (
        <>
            <Card>
                <CardContent>
                    <Typography>{bank}  {rekening}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/paymentDetail/${bank}`} state={{ rekening }}>Pilih</Link>
                </CardActions>
            </Card>
        </>
    );
};

export default CardPayment;
