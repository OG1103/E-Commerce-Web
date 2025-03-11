import { FC } from "react";
import { Box, Container, Grid, Typography, Link as MuiLink, Divider, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Link from "next/link";
import Logo from "../../atoms/logo/Logo";

const Footer: FC = () => {
  //const theme = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        pt: 6,
        pb: 3,
        borderTop: 1,
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand and Social Links */}
          <Grid item xs={12} md={3}>
            <Logo size="large" />
            <Typography variant="body2" color="text.secondary" sx={{ mt: 2, mb: 3 }}>
              Your one-stop shop for premium products
            </Typography>
            <Box>
              <IconButton color="primary" aria-label="facebook" size="small" sx={{ mr: 1 }}>
                <FacebookIcon />
              </IconButton>
              <IconButton color="primary" aria-label="twitter" size="small" sx={{ mr: 1 }}>
                <TwitterIcon />
              </IconButton>
              <IconButton color="primary" aria-label="instagram" size="small" sx={{ mr: 1 }}>
                <InstagramIcon />
              </IconButton>
              <IconButton color="primary" aria-label="linkedin" size="small">
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {/* Shop Links */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle2" color="text.secondary" textTransform="uppercase" gutterBottom>
              Shop
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/shop" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">All Products</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/shop?featured=true" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Featured</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/shop?sort=newest" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">New Arrivals</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/shop?discount=true" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Discounted</MuiLink>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Company Links */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle2" color="text.secondary" textTransform="uppercase" gutterBottom>
              Company
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/about" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">About Us</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/careers" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Careers</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/contact" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Contact Us</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/blog" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Blog</MuiLink>
                </Link>
              </Box>
            </Box>
          </Grid>

          {/* Support Links */}
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle2" color="text.secondary" textTransform="uppercase" gutterBottom>
              Support
            </Typography>
            <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/faq" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">FAQs</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/shipping" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Shipping</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/returns" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Returns</MuiLink>
                </Link>
              </Box>
              <Box component="li" sx={{ mb: 1 }}>
                <Link href="/warranty" passHref legacyBehavior>
                  <MuiLink color="inherit" underline="hover">Warranty</MuiLink>
                </Link>
              </Box>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ mt: 4, mb: 3 }} />

        <Typography variant="body2" color="text.secondary" align="center" sx={{ pt: 1 }}>
          &copy; {currentYear} ModernShop, Inc. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
