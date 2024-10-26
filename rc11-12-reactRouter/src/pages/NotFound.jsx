import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";

const NotFound = () => {
  return (
    <Container>
      <img src={notFound} alt="" width="550px" />
    </Container>
  );
};

export default NotFound;
