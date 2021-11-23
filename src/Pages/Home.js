import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import ListBookItem from '../Components/Book/ListBookItem';
import BookItem from '../Components/Book/BookItem';

export default function Home() {
  const tempData = [
    {
      "book_author": "Aristotle",
      "book_title": "Politics: A Treatise on Government",
      "book_price": "Rp. 135.000"
    },
    {
      "book_author": "Aristotle",
      "book_title": "The Ethics of Aristotle",
      "book_price": "Rp. 135.000"
    },
    {
      "book_author": "Robert T. Kiyosaki",
      "book_title": "Rich Dad Poor Dad",
      "book_price": "Rp. 219.000"
    },
    {
      "book_author": "Ilana Tan",
      "book_title": "The Star and I",
      "book_price": "Rp. 99.000"
    },
  ];
  return (
    <Box
      component="main"
      sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    >
      <Toolbar />
      <CssBaseline />
      <Container maxWidth="md">
        <ListBookItem>
          {tempData.map((data, id) => (
            <BookItem
              key={id}
              book_author={data['book_author']}
              book_title={data['book_title']}
              book_price={data['book_price']}
            />
          ))}
        </ListBookItem>
      </Container>
    </Box>
  )
}