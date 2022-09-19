import React from "react";

import Container from "./Note/Container";
import Content from "./Note/Content";
import Footer from "./Note/Footer";
import Header from "./Note/Header";

const Note = ({ note, handleEdit, handleDelete }) => (
  <Container key={note.id}>
    <Header handleDelete={handleDelete} handleEdit={handleEdit} note={note} />
    <Content description={note.description} />
    <Footer note={note} />
  </Container>
);

export default Note;
