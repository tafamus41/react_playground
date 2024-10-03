import { Typography } from "@mui/material";
import Container from "@mui/material/Container";
import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const MuiElem = () => {
  return (
    <Container maxWidth="xl">
      <Typography
        align="center"
        color="success"
        variant="h4"
        variantMapping={{ h4: "h2" }}
      >
        Mui Elements
      </Typography>
      <Typography
        align="center"
        color="error"
        variant="h5"
        component="h3"
        mt={5}
      >
        Mui Elements
      </Typography>
      <Typography
        align="center"
        color="error"
        variant="body1"
        mt={5}
        sx={{ border: "3px solid black", backgroundColor: "darkblue" }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro labore
        nulla ducimus distinctio, architecto incidunt nisi quod? Repudiandae
        magni, quas temporibus ducimus ratione perspiciatis facere explicabo
        laudantium quae ad ipsam rerum in, corporis repellendus accusamus cum
        expedita vero eum soluta iure aliquid voluptatum molestiae. Consequatur!
      </Typography>
      <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",gap:3,marginTop:3}}>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>
    </Container>
  );
};

export default MuiElem;
