import { Box, Container, Grid, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Footer() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <Box component="footer" sx={{ bgcolor: "primary.main", color: "white", py: 3 }}>
            <Container>
                <Grid container spacing={3} justifyContent="space-between">
                    
                    {/* Company Info */}
                    <Grid item xs={12} md={4}>
                        <Typography variant="h6">E-Commerce</Typography>
                        <Typography variant="body2">Your one-stop shop for everything.</Typography>
                    </Grid>

                    {/* Quick Links */}
                    {!isMobile && (
                        <Grid item md={4}>
                            <Typography variant="h6">Quick Links</Typography>
                            <Typography variant="body2">About Us | Contact | Help</Typography>
                        </Grid>
                    )}

                    {/* Copyright */}
                    <Grid item xs={12} md={4} textAlign={isMobile ? "center" : "right"}>
                        <Typography variant="body2">© {new Date().getFullYear()} E-Commerce. All Rights Reserved.</Typography>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}
