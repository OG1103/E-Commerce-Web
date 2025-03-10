import { FC } from 'react';
import { Box, Typography, IconButton, Paper, Grid, ButtonGroup, Button } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

interface CartItemProps {
  item: object;
}

const CartItem: FC<CartItemProps> = ({ item }) => {  
  const handleIncrement = () => {
  };
  
  const handleDecrement = () => {
  };
  
  const handleRemove = () => {
  };
  
  return (
    <Paper 
      elevation={0}
      sx={{ 
        p: 2,
        mb: 2,
        borderBottom: 1,
        borderColor: 'divider',
        '&:last-child': {
          mb: 0
        }
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item xs={3} sm={2}>
          <Box
            component="img"
            // src={item.image}
            // alt={item.name}
            sx={{
              width: '100%',
              height: 80,
              objectFit: 'cover',
              borderRadius: 1,
              border: 1,
              borderColor: 'divider'
            }}
          />
        </Grid>
        
        <Grid item xs={9} sm={5}>
          <Typography variant="subtitle2" gutterBottom>
            {/* {item.name} */}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {/* {item.color} */}
          </Typography>
        </Grid>
        
        <Grid item xs={6} sm={2}>
          <ButtonGroup size="small" aria-label="quantity control">
            <Button 
              onClick={handleDecrement}
              variant="outlined"
            //   disabled={item.quantity <= 1}
            >
              -
            </Button>
            <Button variant="outlined" disableRipple>
              {/* {item.quantity} */}
            </Button>
            <Button onClick={handleIncrement} variant="outlined">
              +
            </Button>
          </ButtonGroup>
        </Grid>
        
        <Grid item xs={4} sm={2} textAlign="right">
          <Typography variant="subtitle2">
            {/* ${(item.price * item.quantity).toFixed(2)} */}
          </Typography>
        </Grid>
        
        <Grid item xs={2} sm={1} textAlign="right">
          <IconButton 
            edge="end" 
            aria-label="delete" 
            onClick={handleRemove}
            size="small"
            color="primary"
          >
            <DeleteOutlineIcon />
          </IconButton>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CartItem;
