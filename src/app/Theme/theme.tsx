import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#232F3E", // Amazon-like Dark Blue for Header/Footer
      light: "#37475A", // Lighter Blue for Hover
    },
    secondary: {
      main: "#FF9900", // Amazon Gold/Orange for Highlights
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
      primary: "#111", // Dark text for better contrast
      secondary: "#757575", // Light Grey for Subtext
    },
    background: {
      default: "#F5F5F5", // Light Grey Background like Amazon
      paper: "#FFFFFF", // White Cards/Panels
    },
    divider: "#D5D9D9", // Borders and Separators
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
          borderRadius: 6,
          padding: "8px 16px",
          textTransform: "none",
        },
      },
    },
  },
  spacing: 8,
  breakpoints: {
    values: { xs: 0, sm: 600, md: 900, lg: 1200, xl: 1500 },
  },
});

export default theme;
