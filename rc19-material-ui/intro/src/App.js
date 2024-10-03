import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Home from './pages/Home';
import { createTheme,ThemeProvider  } from '@mui/material/styles';
import { green, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <Container maxWidth={"xl"}>
      <Typography variant="h3" component="h1" gutterBottom>
        Cohort 17 - MUI
      </Typography>
      <Home/>
    </Container>
    </ThemeProvider>
  );
}

export default App;