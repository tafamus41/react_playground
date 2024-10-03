import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";

const MuiElem = () => {
  return (
    <Container maxWidth="xl">
      <Typography align="center" color="success" variant="h4" variantMapping={{"h4":"h2"}} >Mui Elements</Typography>
      <Typography align="center" color="error" variant="h5" component="h3" mt={5} >Mui Elements</Typography>
      <Typography align="center" color="error" variant="body1" mt={5} sx={{border:"3px solid black", backgroundColor:"darkblue"}} >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro labore nulla ducimus distinctio, architecto incidunt nisi quod? Repudiandae magni, quas temporibus ducimus ratione perspiciatis facere explicabo laudantium quae ad ipsam rerum in, corporis repellendus accusamus cum expedita vero eum soluta iure aliquid voluptatum molestiae. Consequatur!</Typography>
    </Container>
  );
};

export default MuiElem;
