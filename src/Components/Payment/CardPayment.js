import React from 'react';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { useNavigate } from 'react-router-dom';

function CardPayment({ bank, rekening, logo }) {
  const navigate = useNavigate();
  const handleClick = (bank) => {
    navigate(
      `/paymentDetail/${bank}`,
      {
        state: {
          logo,
          rekening,
        }
      }
    );
  }
  return (
    <>
      <Card>
        <CardContent>
          <Box sx={{ display: 'flex' }}>
            <img src={"/images/" + logo} alt={bank} height="20" width="70" />
            <Typography
              sx={{ mx: "0.5rem" }}
            >
              {rekening}
            </Typography>
          </Box>
        </CardContent>
        <CardActions>
          <Button onClick={() => { handleClick(bank) }}>
            Pilih
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default CardPayment;
