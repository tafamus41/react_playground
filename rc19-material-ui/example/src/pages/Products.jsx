import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
// import Grid from '@mui/material/Grid';// deprecated
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid2"; // güncel versiyon
import ProductCard from "../components/ProductCard";
import { Container } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setProducts(res.products));
  }, []);
  return (
    <div>
      <Navbar />
      {/* Grid deprecated ama eski sürümlerde kullanılan component. piyasada bulunan eski projelerde karşınıza gelir.*/}
      {/* <Grid container columnSpacing={2} rowSpacing={3}>
        <Grid item xs={6} md={8} lg={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={4} lg={4}>
          <Item>xs=6 md=4</Item>
        </Grid>
        <Grid item xs={6} md={8} lg={4}>
          <Item>xs=6 md=8</Item>
        </Grid>
      </Grid> */}
      {/* <Grid container spacing={2} mt={5}>
        {products.map((item) => (
          <Grid key={item.id} size={{ xs: 12,sm:6, md: 4, lg:3 }}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid> */}
      <Container maxWidth="xl">
      <Grid container spacing={2} mt={5}>
        {products.map((item) => (
          <Grid key={item.id} size={{ xs: 12,sm:6, md: 4, lg:3 }}>
            <ProductCard {...item} />
          </Grid>
        ))}
      </Grid>
      </Container>
    </div>
  );
};

export default Products;
