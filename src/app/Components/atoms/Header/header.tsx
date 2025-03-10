import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  InputBase,
  Button,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <AppBar position="static" color="primary">
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Left: Logo / Menu */}
        <Box display="flex" alignItems="center">
          {isMobile && (
            <IconButton color="inherit">
              <MenuIcon />
            </IconButton>
          )}
          <Typography variant="h6" sx={{ fontWeight: "bold", color: "white" }}>
            E-Commerce
          </Typography>
        </Box>

        {/* Center: Search Bar (Hidden on Mobile) */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              bgcolor: "white",
              borderRadius: 2,
              px: 2,
            }}
          >
            <InputBase placeholder="Search products..." sx={{ flex: 1 }} />
            <IconButton color="primary">
              <SearchIcon />
            </IconButton>
          </Box>
        )}

        {/* Right: Sign In & Cart */}
        <Box display="flex" alignItems="center">
          <Button color="inherit" startIcon={<AccountCircleIcon />}>
            Sign In
          </Button>
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
