import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";

const NotFound = () => {
  return (
    <Container>
      <img src={notFound} alt="" width="550px" />
      <button className="btn btn-info"> GO HOME</button>
    </Container>
  );
};

export default NotFound;
