import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import ListBookItem from '../Components/Book/ListBookItem';
import BookItem from '../Components/Book/BookItem';

import { getDatabase, ref, child, get } from "firebase/database";

class Home extends React.Component {
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
    this.getBookData().then((book_data) => {
      this.setState({
        book_data: book_data
      })
    })
  }

  getBookData() {
    return new Promise((res, rej) => {
      const dbRef = ref(getDatabase());
      get(child(dbRef, 'books')).then((snapshot) => {
        if (snapshot.exists()) {
          res(snapshot.val());
        } else {
          rej("No data available")
        }
      }).catch((err) => {
        rej(err)
      })
    })
  }

  generatePrice(x) {
    let generatedPrice = parseInt(x * 5 * 10000);
    return `Rp. ${generatedPrice}`
  }

  render() {
    let book_list = [];
    Object.keys(this.state.book_data).forEach((key) => {
      const data = this.state.book_data[key]
      book_list.push(
        <BookItem
          key={key}
          book_id={key}
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
          <ListBookItem>
            {book_list}
          </ListBookItem>
        </Container>
      </Box>
    )
  }
}

export default Home;