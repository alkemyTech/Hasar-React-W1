import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#837AFF",
      light: "#000000",
    },
    secondary: {
      main: "#837AFF",
    },
    background: {
      default: "#fff",
    },
    text: {
      primary: "#00004D",
    },
  },
});

export default theme