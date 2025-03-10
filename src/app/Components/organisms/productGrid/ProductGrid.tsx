import { FC } from 'react';
import { Grid, Typography, Box, Container } from '@mui/material';
import ProductCard from '../../molecules/productCard/ProductCard';
import { Product } from '../../../Data/products';

type ProductGridProps = {
  products: Product[];
  title?: string;
  subtitle?: string;
  columns?: {
    xs: number;
    sm: number;
    md: number;
    lg: number;
  };
  center?: boolean;
}

const ProductGrid: FC<ProductGridProps> = ({
  products,
  title,
  subtitle,
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
  center = false
}) => {
  if (products.length === 0) {
    return (
      <Box textAlign="center" py={6}>
        <Typography variant="h5" color="text.secondary">
          No products found
        </Typography>
      </Box>
    );
  }

  return (
    <Box py={4}>
      {(title || subtitle) && (
        <Box textAlign={center ? "center" : "left"} mb={4}>
          {title && (
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="subtitle1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid key={product.id} item xs={columns.xs} sm={columns.sm} md={columns.md} lg={columns.lg}>
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ProductGrid;
