import { FC, useState } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper, 
  Divider, 
  TextField, 
  Button,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

import Footer from '../../organisms/footer/Footer';
import ProductGrid from '../../organisms/productGrid/ProductGrid';
import { getFeaturedProducts } from '../../../Data/products';

const CartTemplate: FC = () => {
  const [recommendedProducts] = useState(getFeaturedProducts().slice(0, 4));
  const [couponCode, setCouponCode] = useState('');
  const [shipping] = useState(5.99);
  const [grandTotal] = useState(0);
  
  const handleCouponChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCouponCode(e.target.value);
  };
  
  const applyCoupon = () => {
    // In a real application, this would validate the coupon with an API
    alert('Coupon functionality would be implemented here');
  };
  
  return (
    <Box>
      <Box component="main">
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom mb={4}>
            Your Shopping Cart
          </Typography>
          
          {0 === 0 ? (
            // Empty cart state
            <Paper elevation={0} variant="outlined" sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" gutterBottom>
                Your cart is empty
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
              </Typography>
              <Button 
                variant="contained" 
                color="primary"
                component={Link}
                href="/shop"
                sx={{ mt: 2 }}
              >
                Continue Shopping
              </Button>
            </Paper>
          ) : (
            // Cart with items
            <Grid container spacing={4}>
              {/* Cart Items Section */}
              <Grid item xs={12} lg={7} xl={8}>
                <Box mb={2}>
                  {/* <Paper elevation={0} variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
                    {items.map(item => (
                      <CartItem key={item.id} item={item} />
                    ))}
                  </Paper> */}
                </Box>
                
                <Box display="flex" justifyContent="flex-start" mt={2}>
                  <Button 
                    startIcon={<ArrowBackIcon />}
                    component={Link}
                    href="/shop"
                    sx={{ textTransform: 'none' }}
                  >
                    Continue Shopping
                  </Button>
                </Box>
              </Grid>
              
              {/* Order Summary Section */}
              <Grid item xs={12} lg={5} xl={4}>
                <Paper elevation={0} variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
                  <Typography variant="h6" gutterBottom>
                    Order Summary
                  </Typography>
                  
                  <List disablePadding>
                    <ListItem disableGutters sx={{ py: 1 }}>
                      <ListItemText primary="Subtotal" />
                      {/* <Typography variant="body2">${totalPrice.toFixed(2)}</Typography> */}
                    </ListItem>
                    
                    <ListItem disableGutters sx={{ py: 1 }}>
                      <ListItemText primary="Shipping estimate" />
                      <Typography variant="body2">${shipping.toFixed(2)}</Typography>
                    </ListItem>
                    
                    <Divider sx={{ my: 1 }} />
                    
                    <ListItem disableGutters sx={{ py: 1 }}>
                      <ListItemText 
                        primary={
                          <Typography variant="subtitle1" fontWeight="bold">
                            Order total
                          </Typography>
                        } 
                      />
                      <Typography variant="subtitle1" fontWeight="bold">
                        ${grandTotal.toFixed(2)}
                      </Typography>
                    </ListItem>
                  </List>
                  
                  <Box mt={3}>
                    <Box display="flex" gap={1} mb={2}>
                      <TextField
                        fullWidth
                        placeholder="Discount code"
                        size="small"
                        value={couponCode}
                        onChange={handleCouponChange}
                      />
                      <Button 
                        variant="outlined" 
                        onClick={applyCoupon}
                        sx={{ whiteSpace: 'nowrap' }}
                      >
                        Apply
                      </Button>
                    </Box>
                    
                    <Button 
                      variant="contained" 
                      color="primary"
                      fullWidth
                      size="large"
                      component={Link}
                      href="/checkout"
                    >
                      Checkout
                    </Button>
                  </Box>
                  
                  <Box mt={3} display="flex" justifyContent="center">
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
                      alt="Visa" 
                      height="20" 
                      style={{ margin: '0 8px' }}
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
                      alt="Mastercard" 
                      height="20" 
                      style={{ margin: '0 8px' }}
                    />
                    <img 
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png" 
                      alt="PayPal" 
                      height="20" 
                      style={{ margin: '0 8px' }}
                    />
                    <img 
                      src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" 
                      alt="Apple Pay" 
                      height="20" 
                      style={{ margin: '0 8px' }}
                    />
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          )}
          
          {/* Recommended Products */}
          <Box mt={8}>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              {0 === 0 ? 'Popular Products' : 'You might also like'}
            </Typography>
            
            <ProductGrid 
              products={recommendedProducts}
              columns={{ xs: 1, sm: 2, md: 4, lg: 4 }}
            />
          </Box>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default CartTemplate;
