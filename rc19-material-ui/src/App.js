import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Home from "./pages/Home";
function App() {
  return (
    <Container maxWidth={"md"}>
      <Typography variant="h3" component="h1" gutterBottom >Hello MUI</Typography>
      <Home/>
    </Container>
  );
}

export default App;
