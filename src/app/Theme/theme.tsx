import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#003d52",
      light: "#0091c2",
    },
    secondary: {
      main: "#ffae00",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
    text: {
      primary: "#212121",
      secondary: "#757575",
    },
    background: {
      default: "#fff",
      paper: "#e7ecef",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontSize: "3rem",
      fontWeight: '700',
      color: '#003d52'
    },
    h2: {
      fontSize: "2.5rem",
      fontWeight: '700',
      color: '#003d52'
    },
    h3: {
      fontSize: "2rem",
      fontWeight: '700',
      color: '#003d52'
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: '700',
      color: '#003d52'
    },
    h5: {
      fontSize: "1.25rem",
      color: '#003d52'
    },
    h6: {
      fontSize: "1rem",
      color: '#003d52'
    },
    body1: {
      fontSize: "1rem",
      color: "#989898"
    },
    body2: {
      fontSize: "0.875rem",
      color: "#989898"
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          padding: "10px 20px",
        },
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
