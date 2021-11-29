import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import TextField from '@mui/material/TextField';
import ListCheckoutItem from '../Components/Checkout/ListCheckoutItem';
import CheckoutItem from '../Components/Checkout/CheckoutItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import { getDatabase, ref, child, get} from "firebase/database";

class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          book_data: {
            'test': {
              'authors': "Alice",
              'title': "Sample Book",
              'average_rating': '5'
            }
          }
        }
      }

      componentDidMount() {
        this.getBookData(['-MpBvVzSczLWTrVVscDC','-MpBvVzXoPv9IiSpqddI']).then((book_data) => {
          this.setState({
            book_data: book_data
          })
        })
      }

      generatePrice(x) {
        let generatedPrice = parseInt(x * 5 * 10000);
        return `Rp. ${generatedPrice}`
      }

      getBookData(isbn) {
          return Promise.all(isbn.map(function (isbn) {
            return new Promise((res, rej) => {
                const dbRef = ref(getDatabase());
                get(child(dbRef, 'books/' + isbn)).then((snapshot) => {
                  if (snapshot.exists()) {
                    res(snapshot.val());
                  } else {
                    rej("No data available")
                  }
                }).catch((err) => {
                  rej(err)
                })
              })
          }))
        
      }
    //   getBookData(isbn) {
    //       return Promise.all(isbn.map(function (isbn){
    //           return new Promise((resolve,reject) => {
    //               const dbRef = ref(getDatabase);
    //               get(child(dbRef, 'books/' + isbn)).once('value', function (snapshot) {
    //                 return resolve([isbn, snapshot.val()]);
    //               });
    //           });
    //       })).then(function (results) {
    //           return results.reduce(function (result, item) {
    //             var key = item[0],
    //             value = item[1];
    //             result[key] = value;
    //             return result;
    //       }, {});
    //     });
    //   }

      render() {
        let checkout_list = [];
        Object.keys(this.state.book_data).forEach((key) => {
          const data = this.state.book_data[key]
          checkout_list.push(
            <CheckoutItem
              key={key}
              isbn={data['isbn']}
              book_author={data['authors']}
              book_title={data['title']}
              book_price={this.generatePrice(data['average_rating'])}
            />
          )
        })



        return (
            <Box
                component="main"
                sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
            >
                <Toolbar />
                <CssBaseline />
                <Container maxWidth="md">
                    <h3>Alamat Pengiriman</h3>
                    <TextField fullWidth id="alamat-pengiriman" label="" variant="outlined" placeholder="Alamat Pengiriman" />
                    <br />
                    <br />
                    <ListCheckoutItem>
                        {checkout_list}
                    </ListCheckoutItem>
                    <br />
                    <FormControl fullWidth>
                        <InputLabel id="select-shipment">Pilih Pengiriman</InputLabel>
                        <Select
                            labelId="shipment-label"
                            id="shipment-select"
                        >
                            <MenuItem value={"Entar Aja"}>Entar Aja</MenuItem>
                            <MenuItem value={"ENJ"}>ENJ</MenuItem>
                            <MenuItem value={"SiLemot"}>SiLemot</MenuItem>
                        </Select>
                    </FormControl>
                    <br />
                    <br />
                    <TextField fullWidth id="kupon" label="" variant="outlined" placeholder="Masukkan Kupon" />
                    <br />
                    <br />
                    <Button fullWidth variant="contained" component={Link} to="/payment">Pilih Pembayaran</Button>
                </Container>
            </Box>
        )
      }
    
    
}



export default Checkout;