// import Container from "@mui/material/Container";
// import Products from "./pages/Products"
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import CssBaseline from '@mui/material/CssBaseline';

// const theme = createTheme()

// function App() {
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline/> {/* reset.css gibi düşenbiliriz*/}
//     <Container>
//      <Products/>
//     </Container>
//     </ThemeProvider>
//   );
// }

// export default App;

//! Dark/Light Mode 1.yöntem

// import Brightness4Icon from "@mui/icons-material/Brightness4";
// import Brightness7Icon from "@mui/icons-material/Brightness7";
// import { createTheme, ThemeProvider } from "@mui/material";
// import CssBaseline from "@mui/material/CssBaseline";
// import IconButton from "@mui/material/IconButton";
// import { deepOrange, deepPurple, grey, teal } from "@mui/material/colors";
// import React from "react";
// import Products from "./pages/Products";

// const getDesignTokens = (mode) => ({
//   palette: {
//     mode,
//     ...(mode === "light"
//       ? {
//           // palette values for light mode
//           primary: {
//             main: "#dc143c",
//           },
//           secondary: {
//             main: teal[700],
//           },
//           morcivert: {
//             main: deepPurple["A200"],
//             light: deepPurple["A100"],
//             dark: "#dc143c",
//           },
//           text: {
//             primary: grey[900],
//             secondary: grey[800],
//           },
//         }
//       : {
//           // palette values for dark mode
//           primary: {
//             main: "#060606",
//           },
//           secondary: {
//             main: "#3f3f3f",
//           },
//           morcivert: {
//             main: "#00000",
//             light: deepPurple["A100"],
//             dark: deepPurple["A400"],
//           },
//           background: {
//             default: deepOrange[900],
//             paper: deepOrange[900],
//           },
//           text: {
//             primary: "#fff",
//             secondary: grey[500],
//           },
//         }),
//   },
// });

// function App() {
//   const [mode, setMode] = React.useState("light");
//   const colorMode = React.useMemo(
//     () => ({
//       // The dark mode switch would invoke this method
//       toggleColorMode: () => {
//         setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
//       },
//     }),
//     []
//   );
//   const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
//   return (
//     <ThemeProvider theme={theme}>
//       <CssBaseline />
//       <IconButton
//         sx={{ ml: 1 }}
//         onClick={colorMode.toggleColorMode}
//         color="inherit"
//       >
//         {theme.palette.mode === "dark" ? (
//           <Brightness7Icon />
//         ) : (
//           <Brightness4Icon />
//         )}
//       </IconButton>
//         <Products />
//     </ThemeProvider>
//   );
// }

// export default App;


//? Dark/Light Mode 2.yöntem
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from "@mui/material/CssBaseline";
import { deepOrange, deepPurple, grey, teal } from "@mui/material/colors";
import React, { useState } from "react";
import Products from "./pages/Products";
import Switch from "./components/Switch";

const darkTheme = createTheme({
  colorSchemes: {
    dark: true,
  },
  palette: {
    mode: 'dark',
    primary: {
      main: deepOrange[200],
    },
    secondary: {
      main: "#3f3f3f",
    },
    morcivert: {
      main: "#00000",
      light: deepPurple["A100"],
      dark: deepPurple["A400"],
    },
    background: {
      default: deepOrange[900],
      paper: deepOrange[900],
    },
    text: {
      primary: "#fff",
      secondary: grey[500],
    },
  },
});

const lightTheme = createTheme({
  colorSchemes: {
    dark: false,
  },
  palette: {
    mode: 'light',
    primary: {
      main: deepOrange[900],
    },
    secondary: {
      main: teal[700],
    },
    morcivert: {
      main: deepPurple["A200"],
      light: deepPurple["A100"],
      dark: "#dc143c",
    },
    text: {
      primary: grey[900],
      secondary: grey[800],
    },
  },
});

function App() {
  const [theme,setTheme] = useState("light")
  
  return (
    <ThemeProvider theme={theme==="dark" ? darkTheme: lightTheme}>
      <CssBaseline />
      <Switch setTheme={setTheme}/> {/* navbarda da yapabilirsiniz */}
        <Products />
    </ThemeProvider>
  );
}

export default App;
