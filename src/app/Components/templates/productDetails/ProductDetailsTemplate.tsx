import { FC, useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Button, 
  Divider, 
  IconButton, 
  Breadcrumbs,
  ButtonGroup,
  Tabs,
  Tab,
  Snackbar,
  Alert
} from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Link from 'next/link';

import Footer from '../../organisms/footer/Footer';
import Rating from '../../atoms/ratings/Ratings';
import PriceDisplay from '../../atoms/priceDisplay/PriceDisplay';
import ProductGrid from '../../organisms/productGrid/ProductGrid';
import { Product, getProductById, getProductsByCategory } from '../../../Data/products';

interface ProductDetailsTemplateProps {
  product: Product;
}

const ProductDetailsTemplate: FC<ProductDetailsTemplateProps> = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product.color);
  const [mainImage, setMainImage] = useState(product.images[0]);
  const [tabValue, setTabValue] = useState(0);
  const [notificationOpen, setNotificationOpen] = useState(false);
  
  // Get related products (same category)
  const relatedProducts = getProductsByCategory(product.category)
    .filter(p => p.id !== product.id)
    .slice(0, 4);
  
  const handleIncrement = () => {
    setQuantity(prev => prev + 1);
  };
  
  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  };
  
  const handleAddToCart = () => {
    setNotificationOpen(true);
  };
  
  const handleBuyNow = () => {
  };
  
  const handleColorChange = (color: string) => {
    setSelectedColor(color);
  };
  
  const handleImageChange = (image: string) => {
    setMainImage(image);
  };
  
  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };
  
  return (
    <Box>
      <Box component="main">
        <Container maxWidth="lg">
          {/* Breadcrumbs */}
          <Breadcrumbs 
            separator={<NavigateNextIcon fontSize="small" />} 
            aria-label="breadcrumb"
            sx={{ mb: 3 }}
          >
            <Link href="/" color="inherit">
              Home
            </Link>
            <Link href="/shop" color="inherit">
              Shop
            </Link>
            <Link 
              href={`/shop?category=${product.category.toLowerCase()}`} 
              color="inherit"
            >
              {product.category}
            </Link>
            <Typography color="text.primary">{product.name}</Typography>
          </Breadcrumbs>
          
          <Grid container spacing={4}>
            {/* Product Images */}
            <Grid item xs={12} md={6}>
              <Box mb={2}>
                <Box
                  component="img"
                  src={mainImage}
                  alt={product.name}
                  sx={{
                    width: '100%',
                    height: 'auto',
                    borderRadius: 1,
                    objectFit: 'cover',
                    aspectRatio: '1/1'
                  }}
                />
              </Box>
              
              <Grid container spacing={1}>
                {product.images.map((image, index) => (
                  <Grid item xs={3} key={index}>
                    <Box
                      component="img"
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      onClick={() => handleImageChange(image)}
                      sx={{
                        width: '100%',
                        height: 'auto',
                        borderRadius: 1,
                        cursor: 'pointer',
                        opacity: mainImage === image ? 1 : 0.6,
                        border: theme => 
                          mainImage === image 
                            ? `2px solid ${theme.palette.primary.main}` 
                            : '2px solid transparent',
                        transition: 'opacity 0.2s, border 0.2s',
                        '&:hover': {
                          opacity: 0.9
                        }
                      }}
                    />
                  </Grid>
                ))}
              </Grid>
            </Grid>
            
            {/* Product Info */}
            <Grid item xs={12} md={6}>
              <Box display="flex" justifyContent="space-between" alignItems="flex-start">
                <Box>
                  <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
                    {product.name}
                  </Typography>
                  
                  <Box display="flex" alignItems="center" mt={1} mb={2}>
                    <Rating value={product.rating} reviewCount={product.reviews} size="medium" />
                  </Box>
                </Box>
                
                <IconButton aria-label="add to favorites">
                  <FavoriteBorderIcon />
                </IconButton>
              </Box>
              
              <Typography variant="body1" color="text.secondary" paragraph>
                {product.description}
              </Typography>
              
              {/* Price and Availability */}
              <Box mt={3}>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6" component="span">
                    Price
                  </Typography>
                  
                  {product.discount && product.discount > 0 && (
                    <Typography
                      variant="caption"
                      bgcolor="success.light"
                      color="success.dark"
                      px={1}
                      py={0.5}
                      borderRadius={16}
                    >
                      {product.discount}% OFF
                    </Typography>
                  )}
                </Box>
                
                <Box mt={1}>
                  <PriceDisplay 
                    price={product.price} 
                    originalPrice={product.originalPrice} 
                    size="large"
                  />
                </Box>
                
                <Typography 
                  variant="body2" 
                  color={
                    product.stock === 'In stock' 
                      ? 'success.main' 
                      : product.stock === 'Low stock' 
                        ? 'warning.main' 
                        : 'error.main'
                  }
                  sx={{ mt: 1 }}
                >
                  {product.stock}
                </Typography>
              </Box>
              
              {/* Color Selection */}
              <Box mt={3}>
                <Typography variant="h6" component="h3" gutterBottom>
                  Color
                </Typography>
                
                <Box display="flex" gap={1} mt={1}>
                  {product.colors.map(color => (
                    <Box
                      key={color}
                      onClick={() => handleColorChange(color)}
                      sx={{
                        width: 36,
                        height: 36,
                        borderRadius: '50%',
                        bgcolor: color.toLowerCase(),
                        cursor: 'pointer',
                        border: theme => 
                          selectedColor === color 
                            ? `2px solid ${theme.palette.primary.main}` 
                            : '2px solid #e0e0e0',
                        '&:hover': {
                          borderColor: 'primary.light'
                        }
                      }}
                    />
                  ))}
                </Box>
              </Box>
              
              {/* Quantity */}
              <Box mt={4} display="flex" alignItems="center">
                <Typography variant="h6" component="span" mr={2}>
                  Quantity
                </Typography>
                
                <ButtonGroup variant="outlined" aria-label="quantity control">
                  <Button 
                    onClick={handleDecrement}
                    disabled={quantity <= 1}
                  >
                    -
                  </Button>
                  <Button disableRipple>
                    {quantity}
                  </Button>
                  <Button onClick={handleIncrement}>
                    +
                  </Button>
                </ButtonGroup>
              </Box>
              
              {/* Add to Cart / Buy Now */}
              <Box mt={4} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                <Button 
                  variant="contained" 
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={handleAddToCart}
                >
                  Add to Cart
                </Button>
                
                <Button 
                  variant="outlined" 
                  color="primary"
                  fullWidth
                  size="large"
                  onClick={handleBuyNow}
                >
                  Buy Now
                </Button>
              </Box>
              
              {/* Product Details */}
              <Box mt={4}>
                <Divider sx={{ mb: 2 }} />
                
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <Tabs 
                    value={tabValue} 
                    onChange={handleTabChange} 
                    aria-label="product details tabs"
                  >
                    <Tab label="Details" id="product-tab-0" />
                    <Tab label="Specifications" id="product-tab-1" />
                    <Tab label="Reviews" id="product-tab-2" />
                  </Tabs>
                </Box>
                
                <Box role="tabpanel" hidden={tabValue !== 0} id="tabpanel-0" sx={{ py: 2 }}>
                  <Typography variant="h6" component="h3" gutterBottom>
                    Product Details
                  </Typography>
                  
                  <Box component="ul" sx={{ pl: 2 }}>
                    {product.details.map((detail, index) => (
                      <Typography component="li" key={index} variant="body2" color="text.secondary" gutterBottom>
                        {detail}
                      </Typography>
                    ))}
                  </Box>
                </Box>
                
                <Box role="tabpanel" hidden={tabValue !== 1} id="tabpanel-1" sx={{ py: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Specifications content would go here.
                  </Typography>
                </Box>
                
                <Box role="tabpanel" hidden={tabValue !== 2} id="tabpanel-2" sx={{ py: 2 }}>
                  <Typography variant="body2" color="text.secondary">
                    Product reviews would go here.
                  </Typography>
                </Box>
              </Box>
            </Grid>
          </Grid>
          
          {/* Related Products */}
          <Box mt={8}>
            <Divider sx={{ mb: 4 }} />
            
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              You May Also Like
            </Typography>
            
            <ProductGrid 
              products={relatedProducts}
              columns={{ xs: 1, sm: 2, md: 4, lg: 4 }}
            />
          </Box>
        </Container>
      </Box>
      
      <Footer />
      
      {/* Notification */}
      <Snackbar
        open={notificationOpen}
        autoHideDuration={3000}
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseNotification} severity="success" variant="filled">
          {product.name} has been added to your cart
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default ProductDetailsTemplate;
