import { FC, useState } from 'react';
import { Box, Container, Typography, TextField, Button, Link, Alert } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

const Newsletter: FC = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    
    // Mock submission
    setSubmitted(true);
    setError(null);
    setEmail('');
  };
  
  return (
    <Box 
      sx={{ 
        bgcolor: 'primary.main', 
        color: 'primary.contrastText',
        py: { xs: 6, md: 8 }
      }}
    >
      <Container maxWidth="lg">
        <Box 
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: { xs: 'center', md: 'flex-start' },
            justifyContent: 'space-between',
          }}
        >
          <Box 
            sx={{ 
              flex: { md: '0 0 45%' },
              mb: { xs: 4, md: 0 },
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            <Typography
              variant="h4"
              component="h2"
              fontWeight="bold"
              gutterBottom
            >
              Sign up for our newsletter
            </Typography>
            <Typography variant="subtitle1">
              Stay up to date with the latest products, exclusive offers, and more.
            </Typography>
          </Box>
          
          <Box 
            component="form" 
            onSubmit={handleSubmit}
            sx={{ 
              width: { xs: '100%', md: '50%' },
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {submitted ? (
              <Alert severity="success" sx={{ mb: 2 }}>
                Thank you for subscribing to our newsletter!
              </Alert>
            ) : (
              <>
                <Box 
                  sx={{ 
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    gap: 1,
                    width: '100%'
                  }}
                >
                  <TextField
                    fullWidth
                    variant="outlined"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    error={!!error}
                    helperText={error}
                    sx={{
                      bgcolor: 'background.paper',
                      '& .MuiOutlinedInput-root': {
                        borderRadius: { xs: 1, sm: '4px 0 0 4px' }
                      }
                    }}
                  />
                  <Button
                    type="submit"
                    variant="contained"
                    color="secondary"
                    endIcon={<SendIcon />}
                    sx={{
                      py: 1.5,
                      px: 3,
                      whiteSpace: 'nowrap',
                      borderRadius: { xs: 1, sm: '0 4px 4px 0' }
                    }}
                  >
                    Subscribe
                  </Button>
                </Box>
              </>
            )}
            
            <Typography variant="caption" sx={{ mt: 2, color: 'primary.light' }}>
              We care about your data. Read our{' '}
              <Link href="#" color="inherit" underline="always">
                Privacy Policy
              </Link>
              .
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Newsletter;
