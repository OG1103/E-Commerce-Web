import { FC } from 'react';
import { Typography, Box } from '@mui/material';

interface PriceDisplayProps {
  price: number;
  originalPrice?: number;
  discount?: number;
  size?: 'small' | 'medium' | 'large';
}

const PriceDisplay: FC<PriceDisplayProps> = ({ 
  price, 
  originalPrice, 
  discount,
  size = 'medium' 
}) => {
  const fontSize = {
    small: {
      price: '1rem',
      original: '0.875rem'
    },
    medium: {
      price: '1.25rem',
      original: '1rem'
    },
    large: {
      price: '1.5rem',
      original: '1.25rem'
    }
  };

  return (
    <Box display="flex" alignItems="baseline" gap={1}>
      <Typography 
        fontWeight="bold" 
        color="text.primary"
        fontSize={fontSize[size].price}
      >
        ${price.toFixed(2)}
      </Typography>
      
      {originalPrice && originalPrice > price && (
        <Typography 
          color="text.secondary"
          fontSize={fontSize[size].original}
          sx={{ textDecoration: 'line-through' }}
        >
          ${originalPrice.toFixed(2)}
        </Typography>
      )}
      
      {discount && discount > 0 && (
        <Typography 
          fontSize="0.75rem" 
          bgcolor="success.light" 
          color="success.dark"
          px={0.75} 
          py={0.25} 
          borderRadius="1rem"
        >
          {discount}% OFF
        </Typography>
      )}
    </Box>
  );
};

export default PriceDisplay;
