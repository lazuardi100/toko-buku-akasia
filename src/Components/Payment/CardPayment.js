import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import { Link } from 'react-router-dom';

function CardPayment({ bank, rekening }) {
    return (
        <>
            <Card>
                <CardContent>
                    <Typography>{bank}  {rekening}</Typography>
                </CardContent>
                <CardActions>
                    <Link to={`/paymentDetail/${bank}`}>Pilih</Link>
                </CardActions>
            </Card>
        </>
    );
};

export default CardPayment;
