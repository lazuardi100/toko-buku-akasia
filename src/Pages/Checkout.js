import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";
import TextField from "@mui/material/TextField";
import ListCheckoutItem from "../Components/Checkout/ListCheckoutItem";
import CheckoutItem from "../Components/Checkout/CheckoutItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

import {
  getDatabase,
  ref,
  query,
  orderByChild,
  equalTo,
  onValue,
} from "firebase/database";

class Checkout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      book_data: {
        test: {
          authors: "Alice",
          title: "Sample Book",
          average_rating: "5",
        },
      },
      books: [],
    };

    this.getParams = this.getParams.bind(this);
    this.generatePrice = this.generatePrice.bind(this);
    this.getBookData = this.getBookData.bind(this);
  }

  getParams() {
    let parameter = new URLSearchParams(window.location.search);
    const paramId = parameter.get("id");
    return paramId.split(";");
  }

  componentDidMount() {
    this.getBookData(this.getParams());
  }

  generatePrice(x) {
    let generatedPrice = parseInt(x * 5 * 10000);
    return generatedPrice;
  }

  getBookData(idBook) {
    const tempData = [];

    idBook.forEach((book) => {
      const db = getDatabase();
      const dbref = query(
        ref(db, "books"),
        orderByChild("isbn"),
        equalTo(book)
      );

      onValue(dbref, (snapshot) => {
        snapshot.forEach((childSnapshot) => {
          // const childKey = childSnapshot.key;
          const childData = childSnapshot.val();

          tempData.push(childData);
        });
        console.log(tempData);

        this.setState({
          books: tempData,
        });
      });
    });
  }

  render() {
    var totalPrice = 0;
    let checkout_list = [];
    console.log("book state on render");
    console.log(this.state.books);
    let pos = 0;

    this.state.books.forEach((val) => {
      console.log(val);
      totalPrice += parseInt(this.generatePrice(val.average_rating));
      let currency = "Rp ";
      checkout_list.push(
        <CheckoutItem
          key={pos}
          isbn={val.isbn}
          book_author={val.authors}
          book_title={val.title}
          book_price={currency.concat(
            " ",
            this.generatePrice(val.average_rating)
          )}
        />
      );
      pos += 1;
    });

    console.log("checkout_list");
    console.log(checkout_list);

    return (
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      >
        <Toolbar />
        <CssBaseline />
        <Container maxWidth="md">
          <h3>Alamat Pengiriman</h3>
          <TextField
            fullWidth
            id="alamat-pengiriman"
            label=""
            variant="outlined"
            placeholder="Alamat Pengiriman"
          />
          <br />
          <br />
          <ListCheckoutItem>{checkout_list}</ListCheckoutItem>
          <br />
          <FormControl fullWidth>
            <InputLabel id="select-shipment">Pilih Pengiriman</InputLabel>
            <Select labelId="shipment-label" id="shipment-select">
              <MenuItem value={"Entar Aja"}>Entar Aja</MenuItem>
              <MenuItem value={"ENJ"}>ENJ</MenuItem>
              <MenuItem value={"SiLemot"}>SiLemot</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <TextField
            fullWidth
            id="kupon"
            label=""
            variant="outlined"
            placeholder="Masukkan Kupon"
          />
          <br />
          <br />
          {/* <Button fullWidth variant="contained" component={Link} to="/payment">Pilih Pembayaran</Button> */}
          <Button
            fullWidth
            variant="contained"
            onClick={() => {
              this.props.navigate("/payment", { state: { price: totalPrice } });
            }}
          >
            Pilih Pembayaran
          </Button>
          <br />
          <br />

          <h3>Alamat Pengiriman Rp {totalPrice}</h3>
        </Container>
      </Box>
    );
  }
}

function WithNavigate(props) {
  let navigate = useNavigate();
  return <Checkout {...props} navigate={navigate} />;
}

export default WithNavigate;
