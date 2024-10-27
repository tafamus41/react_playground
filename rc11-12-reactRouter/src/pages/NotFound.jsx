import React from "react";
import { Container } from "react-bootstrap";
import notFound from "../img/notFound.jpeg";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
const navigate=useNavigate()

  return (
    <Container className="text-center">
      <img src={notFound} alt="" width="550px" />
      <button onClick={()=>navigate("/")} className="btn btn-info"> GO HOME</button>
    </Container>
  );
};

export default NotFound;
