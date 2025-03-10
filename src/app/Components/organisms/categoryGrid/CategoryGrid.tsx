import { FC } from 'react';
import { Grid, Typography, Box } from '@mui/material';
import CategoryCard from '../../molecules/categoryCard/CategoryCard';
import { Category } from '../../../Data/categories';

interface CategoryGridProps {
  categories: Category[];
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

const CategoryGrid: FC<CategoryGridProps> = ({
  categories,
  title,
  subtitle,
  columns = { xs: 1, sm: 2, md: 3, lg: 4 },
  center = false
}) => {
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
        {categories.map((category) => (
          <Grid key={category.id} item xs={columns.xs} sm={columns.sm} md={columns.md} lg={columns.lg}>
            <CategoryCard category={category} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategoryGrid;
