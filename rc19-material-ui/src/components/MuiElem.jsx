import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

const MuiElem = () => {
  return (
    <Container maxWidth="xl">
      <Typography align="center" color="success" variant="h4" variantMapping={{"h4":"h2"}} >Mui Elements</Typography>
      <Typography align="center" color="success" variant="h5" component="h3" mt={5} >Mui Elements</Typography>
    </Container>
  );
};

export default MuiElem;
