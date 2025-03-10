import { FC } from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';
import TestimonialCard from '../../molecules/testimonialCard/TestimonialCard';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 5,
    comment: 'The quality of the products exceeded my expectations. Fast shipping and excellent customer service. Will definitely shop here again!'
  },
  {
    id: 2,
    name: 'Michael Thompson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4,
    comment: 'Great selection of products at competitive prices. The website is easy to navigate and checkout was a breeze. Very satisfied with my purchase.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    rating: 4.5,
    comment: 'I absolutely love the premium headphones I purchased. The sound quality is amazing and they\'re so comfortable to wear for long periods. Highly recommended!'
  }
];

const Testimonials: FC = () => {
  return (
    <Box py={8} bgcolor="background.default">
      <Container maxWidth="lg">
        <Box textAlign="center" mb={6}>
          <Typography
            variant="h4"
            component="h2"
            fontWeight="bold"
            gutterBottom
          >
            What Our Customers Say
          </Typography>
          <Typography 
            variant="subtitle1" 
            color="text.secondary"
            sx={{ maxWidth: 600, mx: 'auto' }}
          >
            Read testimonials from our satisfied customers
          </Typography>
        </Box>
        
        <Grid container spacing={4}>
          {testimonials.map((testimonial) => (
            <Grid item xs={12} md={4} key={testimonial.id}>
              <TestimonialCard
                name={testimonial.name}
                avatar={testimonial.avatar}
                rating={testimonial.rating}
                comment={testimonial.comment}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Testimonials;
