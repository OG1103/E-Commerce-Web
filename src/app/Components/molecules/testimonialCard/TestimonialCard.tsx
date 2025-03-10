import { FC } from 'react';
import { Card, CardContent, Box, Typography, Avatar } from '@mui/material';
import Rating from '../../atoms/ratings/Ratings';

interface TestimonialCardProps {
  name: string;
  avatar: string;
  rating: number;
  comment: string;
}

const TestimonialCard: FC<TestimonialCardProps> = ({ name, avatar, rating, comment }) => {
  return (
    <Card
      elevation={2}
      sx={{ 
        height: '100%',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <CardContent>
        <Box display="flex" alignItems="center" mb={2}>
          <Avatar 
            src={avatar} 
            alt={name}
            sx={{ width: 48, height: 48, mr: 2 }}
          />
          <Box>
            <Typography variant="subtitle1" fontWeight="medium">
              {name}
            </Typography>
            <Rating value={rating} />
          </Box>
        </Box>
        
        <Typography variant="body2" color="text.secondary">
          "{comment}"
        </Typography>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
