import { FC } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Grid,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import Link from "next/link";

const HeroBanner: FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box
      sx={{
        bgcolor: "grey.900",
        color: "common.white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 1 }}>
        <Grid container spacing={2}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              py: { xs: 8, md: 12 },
              pr: { md: 6 },
            }}
          >
            <Typography variant="h2" component="h1" fontWeight="bold" gutterBottom>
              Modern Shopping
              <Box component="span" display="block" color="primary.light">
                Redefined
              </Box>
            </Typography>

            <Typography
              variant="subtitle1"
              color="grey.300"
              paragraph
              sx={{
                mb: 4,
                maxWidth: 500,
              }}
            >
              Discover our curated collection of premium products designed for the
              modern lifestyle.
            </Typography>

            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 2,
              }}
            >
              <Link href="/shop" passHref legacyBehavior>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                  }}
                >
                  Shop Now
                </Button>
              </Link>

              <Link href="/shop?view=categories" passHref legacyBehavior>
                <Button
                  variant="outlined"
                  color="inherit"
                  size="large"
                  sx={{
                    px: 4,
                    py: 1.5,
                    borderColor: "grey.500",
                    "&:hover": {
                      borderColor: "common.white",
                      bgcolor: "rgba(255,255,255,0.05)",
                    },
                  }}
                >
                  Explore Categories
                </Button>
              </Link>
            </Box>
          </Grid>

          {!isMobile && (
            <Grid item md={6}>
              {/* Right side hero image */}
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  bottom: 0,
                  width: "50%",
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </Grid>
          )}
        </Grid>
      </Container>

      {isMobile && (
        <Box
          sx={{
            width: "100%",
            height: 300,
            backgroundImage:
              "url(https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      )}
    </Box>
  );
};

export default HeroBanner;
