import React from 'react'
import { ThemeProvider, createTheme, useColorScheme } from '@mui/material/styles';
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Switch = ({setTheme}) => {
    const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  const toggleColorMode = () => {
    setMode(mode === 'light' ? 'dark' : 'light');
    setTheme(mode === 'light' ? 'dark' : 'light')
  };

  return (
    <IconButton
        sx={{ ml: 1 }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
  )
}

export default Switch