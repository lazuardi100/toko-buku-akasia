import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';

import ListBookItem from '../Book/ListBookItem';
import BookItem from '../Book/BookItem';

export default function Home() {
  const tempData = [
    {
      "book_author": "Aristotle",
      "book_title": "Politics: A Treatise on Government",
      "book_description": "The aim of the Politics, Aristotle says, is to investigate, on the basis of the constitutions collected, what makes for good government and what makes for bad government and to identify the factors favourable or unfavourable to the preservation of a constitution. Aristotle asserts that all communities aim at some good."
    },
    {
      "book_author": "Aristotle",
      "book_title": "The Ethics of Aristotle",
      "book_description": "Aristotle's ethics, or study of character, is built around the premise that people should achieve an excellent character as a pre-condition for attaining happiness or well-being."
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
              book_description={data['book_description']}
            />
          ))}
        </ListBookItem>
      </Container>
    </Box>
  )
}