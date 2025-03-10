import { FC, useState } from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Box,
  Badge,
  Button,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Container,
  useTheme,
  Avatar,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../atoms/logo/Logo";
import { useAuthContext } from "@/app/Context/AuthContext";

// Custom navigation link component for mobile menu
const MobileNavLink: FC<{ to: string; children: React.ReactNode; onClick?: () => void }> = ({
  to,
  children,
  onClick,
}) => {
  return (
    <ListItem
      sx={{
        "&:hover": { bgcolor: "rgba(0, 0, 0, 0.08)" },
      }}
      onClick={onClick}
    >
      <Link href={to} passHref legacyBehavior>
        <ListItemText primary={children} />
      </Link>
    </ListItem>
  );
};

const Header: FC = () => {
  const router = useRouter();
  const theme = useTheme();
  const authContext = useAuthContext();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuAnchor, setUserMenuAnchor] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenuAnchor(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setUserMenuAnchor(null);
  };

  const handleSignOut = () => {
    authContext.signOut();
    handleCloseUserMenu();
    router.push("/");
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Categories", path: "/shop?view=categories" },
  ];

  const renderNavLinks = () => {
    return navItems.map((item) => (
      <Link key={item.name} href={item.path} passHref legacyBehavior>
        <Button
          color="inherit"
          sx={{
            mx: 1,
            opacity: router.pathname === item.path ? 1 : 0.8,
            fontWeight: router.pathname === item.path ? "medium" : "normal",
          }}
        >
          {item.name}
        </Button>
      </Link>
    ));
  };

  const renderMobileMenu = () => (
    <Drawer anchor="right" open={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)}>
      <Box width={250} role="presentation">
        <List>
          {navItems.map((item) => (
            <MobileNavLink key={item.name} to={item.path}>
              {item.name}
            </MobileNavLink>
          ))}
          <Divider sx={{ my: 1 }} />
          {!authContext.user ? (
            <>
              <MobileNavLink to="/signup">
                Sign Up
              </MobileNavLink>
              <MobileNavLink to="/signin">
                Sign In
              </MobileNavLink>
            </>
          ) : (
            <>
              <ListItem>
                <ListItemText primary={`Hello, ${authContext.user.name}`} secondary={authContext.user.email} />
              </ListItem>
              <ListItem  onClick={()=>{}}>
                <ListItemText primary="Sign Out" />
              </ListItem>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <AppBar position="sticky" color="primary" elevation={0} sx={{ mb: 0 }}>
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Logo color="white" />

          {/* Desktop Nav Links */}
          {!isMobile && (
            <Box sx={{ ml: 4, flexGrow: 1, display: "flex" }}>{renderNavLinks()}</Box>
          )}

          {/* Right-side Actions */}
          <Box sx={{ ml: "auto", display: "flex", alignItems: "center" }}>
            {/* Search Icon */}
            <IconButton color="inherit" aria-label="search">
              <SearchIcon />
            </IconButton>

            {/* Cart */}
            <Link href="/cart" passHref legacyBehavior>
              <IconButton color="inherit" aria-label="cart">
                <Badge badgeContent={0} color="primary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Link>

            {/* User Menu */}
            {authContext.user ? (
              <>
                <IconButton onClick={handleOpenUserMenu} sx={{ ml: 1 }} aria-controls="user-menu" aria-haspopup="true">
                  <Avatar sx={{ width: 32, height: 32, bgcolor: "primary.main" }}>
                    {authContext.user.name[0]}
                  </Avatar>
                </IconButton>
                <Menu
                  id="user-menu"
                  anchorEl={userMenuAnchor}
                  open={Boolean(userMenuAnchor)}
                  onClose={handleCloseUserMenu}
                  anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                >
                  <Link href="/account" passHref legacyBehavior>
                    <MenuItem onClick={handleCloseUserMenu} component="a">
                      My Account
                    </MenuItem>
                  </Link>
                  <Link href="/orders" passHref legacyBehavior>
                    <MenuItem onClick={handleCloseUserMenu} component="a">
                      My Orders
                    </MenuItem>
                  </Link>
                  <Divider />
                  <MenuItem onClick={handleSignOut}>Sign Out</MenuItem>
                </Menu>
              </>
            ) : (
              <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 1, ml: 2 }}>
                <Link href="/signup" passHref legacyBehavior>
                  <Button
                    color="inherit"
                    variant="outlined"
                    sx={{ borderColor: "rgba(255,255,255,0.7)", "&:hover": { borderColor: "white" } }}
                  >
                    Sign Up
                  </Button>
                </Link>
                <Link href="/signin" passHref legacyBehavior>
                  <Button
                    color="inherit"
                    variant="contained"
                    sx={{ bgcolor: "white", color: "primary.main", "&:hover": { bgcolor: "rgba(255,255,255,0.9)" } }}
                  >
                    Sign In
                  </Button>
                </Link>
              </Box>
            )}

            {/* Mobile Menu Button */}
            {isMobile && (
              <IconButton color="inherit" aria-label="open menu" edge="end" onClick={() => setMobileMenuOpen(true)} sx={{ ml: 1 }}>
                <MenuIcon />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </Container>

      {/* Mobile Menu Drawer */}
      {renderMobileMenu()}
    </AppBar>
  );
};

export default Header;
