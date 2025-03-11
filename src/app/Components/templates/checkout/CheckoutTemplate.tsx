import { FC, useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  Typography, 
  Paper, 
  TextField, 
  Button, 
  Divider, 
  FormControl, 
  InputLabel, 
  MenuItem, 
  Select, 
  FormControlLabel, 
  Checkbox, 
  Stepper, 
  Step,
  StepLabel,
  Alert,
  CircularProgress
} from '@mui/material';
import Link from "next/link";

import Footer from '../../organisms/footer/Footer';
import { useAuthContext } from '../../../Context/AuthContext';

interface DeliveryAddress {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  phone: string;
}

interface PaymentInfo {
  cardNumber: string;
  cardName: string;
  expDate: string;
  cvc: string;
}

const CheckoutTemplate: FC = () => {
  const { user } = useAuthContext();
  
  // Stepper state
  const [activeStep, setActiveStep] = useState(0);
  const steps = ['Shipping', 'Payment', 'Review'];
  
  // Form states
  const [address, setAddress] = useState<DeliveryAddress>({
    firstName: user?.name.split(' ')[0] || '',
    lastName: user?.name.split(' ')[1] || '',
    address: '',
    city: '',
    postalCode: '',
    country: 'US',
    phone: '',
  });
  
  const [payment, setPayment] = useState<PaymentInfo>({
    cardNumber: '',
    cardName: '',
    expDate: '',
    cvc: '',
  });
  
  const [saveInfo, setSaveInfo] = useState(true);
  const [shipping] = useState(5.99);
  
  // Order completion state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);
  const [orderError, setOrderError] = useState<string | null>(null);
  
  // Validation state
  const [errors, setErrors] = useState<{
    firstName?: string;
    lastName?: string;
    address?: string;
    city?: string;
    postalCode?: string;
    phone?: string;
    cardNumber?: string;
    cardName?: string;
    expDate?: string;
    cvc?: string;
  }>({});
  
  // Handle shipping address form changes
  const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setAddress(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field if user is typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Handle payment form changes
  const handlePaymentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    // Format card number with spaces
    if (name === 'cardNumber') {
      const formatted = value
        .replace(/\s/g, '')
        .replace(/(.{4})/g, '$1 ')
        .trim()
        .slice(0, 19);
      
      setPayment(prev => ({
        ...prev,
        [name]: formatted
      }));
    } 
    // Format expiry date as MM/YY
    else if (name === 'expDate') {
      const formatted = value
        .replace(/\D/g, '')
        .replace(/^(\d{2})/, '$1/')
        .slice(0, 5);
      
      setPayment(prev => ({
        ...prev,
        [name]: formatted
      }));
    } 
    // Limit CVC to 3-4 digits
    else if (name === 'cvc') {
      const formatted = value.replace(/\D/g, '').slice(0, 4);
      
      setPayment(prev => ({
        ...prev,
        [name]: formatted
      }));
    }
    else {
      setPayment(prev => ({
        ...prev,
        [name]: value
      }));
    }
    
    // Clear error for this field if user is typing
    if (errors[name as keyof typeof errors]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };
  
  // Handle country selection
  // const handleCountryChange = (e:) => {
  //   setAddress(prev => ({
  //     ...prev,
  //     country: e.target.value
  //   }));
  // };
  
  // Validate shipping form
  const validateShippingForm = (): boolean => {
    const newErrors = {} as typeof errors;
    
    if (!address.firstName) newErrors.firstName = 'First name is required';
    if (!address.lastName) newErrors.lastName = 'Last name is required';
    if (!address.address) newErrors.address = 'Address is required';
    if (!address.city) newErrors.city = 'City is required';
    if (!address.postalCode) newErrors.postalCode = 'Postal code is required';
    if (!address.phone) newErrors.phone = 'Phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Validate payment form
  const validatePaymentForm = (): boolean => {
    const newErrors = {} as typeof errors;
    
    if (!payment.cardNumber || payment.cardNumber.replace(/\s/g, '').length < 16)
      newErrors.cardNumber = 'Valid card number is required';
      
    if (!payment.cardName) 
      newErrors.cardName = 'Name on card is required';
      
    if (!payment.expDate || !/^\d{2}\/\d{2}$/.test(payment.expDate))
      newErrors.expDate = 'Valid expiry date (MM/YY) is required';
      
    if (!payment.cvc || payment.cvc.length < 3)
      newErrors.cvc = 'Valid security code is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  // Handle next step
  const handleNext = () => {
    if (activeStep === 0) {
      // Validate shipping form
      if (!validateShippingForm()) return;
    } else if (activeStep === 1) {
      // Validate payment form
      if (!validatePaymentForm()) return;
    }
    
    setActiveStep(prev => prev + 1);
  };
  
  // Handle back step
  const handleBack = () => {
    setActiveStep(prev => prev - 1);
  };
  
  // Submit order
  const handlePlaceOrder = async () => {
    setIsSubmitting(true);
    setOrderError(null);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Order successful
      setOrderComplete(true);
    //   clearCart();
      
      // Redirect to confirmation after a delay
      setTimeout(() => {
        // setLocation('/');
      }, 5000);
    } catch (e) {
      console.log(e);
      
      setOrderError('There was a problem processing your order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  // Render shipping form
  const renderShippingForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="firstName"
          name="firstName"
          label="First name"
          value={address.firstName}
          onChange={handleAddressChange}
          error={!!errors.firstName}
          helperText={errors.firstName}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="lastName"
          name="lastName"
          label="Last name"
          value={address.lastName}
          onChange={handleAddressChange}
          error={!!errors.lastName}
          helperText={errors.lastName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="address"
          name="address"
          label="Address"
          value={address.address}
          onChange={handleAddressChange}
          error={!!errors.address}
          helperText={errors.address}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="city"
          name="city"
          label="City"
          value={address.city}
          onChange={handleAddressChange}
          error={!!errors.city}
          helperText={errors.city}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="postalCode"
          name="postalCode"
          label="Postal code"
          value={address.postalCode}
          onChange={handleAddressChange}
          error={!!errors.postalCode}
          helperText={errors.postalCode}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <FormControl fullWidth>
          <InputLabel id="country-label">Country</InputLabel>
          <Select
            labelId="country-label"
            id="country"
            value={address.country}
            label="Country"
            //onChange={handleCountryChange}
          >
            <MenuItem value="US">United States</MenuItem>
            <MenuItem value="CA">Canada</MenuItem>
            <MenuItem value="UK">United Kingdom</MenuItem>
            <MenuItem value="AU">Australia</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="phone"
          name="phone"
          label="Phone number"
          value={address.phone}
          onChange={handleAddressChange}
          error={!!errors.phone}
          helperText={errors.phone}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox 
              checked={saveInfo} 
              onChange={() => setSaveInfo(!saveInfo)} 
              color="primary" 
            />
          }
          label="Save this information for next time"
        />
      </Grid>
    </Grid>
  );
  
  // Render payment form
  const renderPaymentForm = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="cardName"
          name="cardName"
          label="Name on card"
          value={payment.cardName}
          onChange={handlePaymentChange}
          error={!!errors.cardName}
          helperText={errors.cardName}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          required
          fullWidth
          id="cardNumber"
          name="cardNumber"
          label="Card number"
          placeholder="1234 5678 9012 3456"
          value={payment.cardNumber}
          onChange={handlePaymentChange}
          error={!!errors.cardNumber}
          helperText={errors.cardNumber}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="expDate"
          name="expDate"
          label="Expiry date"
          placeholder="MM/YY"
          value={payment.expDate}
          onChange={handlePaymentChange}
          error={!!errors.expDate}
          helperText={errors.expDate}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          required
          fullWidth
          id="cvc"
          name="cvc"
          label="CVC"
          placeholder="123"
          value={payment.cvc}
          onChange={handlePaymentChange}
          error={!!errors.cvc}
          helperText={errors.cvc}
        />
      </Grid>
      <Grid item xs={12}>
        <Box display="flex" justifyContent="center" gap={2} mt={2}>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" 
            alt="Visa" 
            height="24" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" 
            alt="Mastercard" 
            height="24" 
          />
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1280px-PayPal.svg.png" 
            alt="PayPal" 
            height="24" 
          />
          <img 
            src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-Logo.wine.svg" 
            alt="Apple Pay" 
            height="24" 
          />
        </Box>
      </Grid>
    </Grid>
  );
  
  // Render order summary
  const renderOrderSummary = () => (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Order Summary
        </Typography>
        
        {/* <Box sx={{ mt: 2 }}>
          {[{id:"",name:"",image:""}].map(item => (
            <Box key={item.id} sx={{ display: 'flex', mb: 2, pb: 2, borderBottom: 1, borderColor: 'divider' }}>
              <Box
                component="img"
                src={item.image}
                alt={item.name}
                sx={{ width: 64, height: 64, objectFit: 'cover', borderRadius: 1, mr: 2 }}
              />
              <Box flexGrow={1}>
                <Typography variant="subtitle2">{item.name}</Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.color} • Qty: {item.quantity}
                </Typography>
              </Box>
              <Typography variant="subtitle2">
                ${(item.price * item.quantity).toFixed(2)}
              </Typography>
            </Box>
          ))}
        </Box>
         */}
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Subtotal</Typography>
          {/* <Typography variant="body1">${totalPrice.toFixed(2)}</Typography> */}
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Shipping</Typography>
          <Typography variant="body1">${shipping.toFixed(2)}</Typography>
        </Box>
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="body1">Tax</Typography>
        </Box>
        
        <Divider sx={{ my: 2 }} />
        
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
          <Typography variant="h6">Total</Typography>
          {/* <Typography variant="h6">${orderTotal.toFixed(2)}</Typography> */}
        </Box>
      </Grid>
      
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Shipping
        </Typography>
        <Typography gutterBottom>
          {address.firstName} {address.lastName}
        </Typography>
        <Typography gutterBottom>
          {address.address}
        </Typography>
        <Typography gutterBottom>
          {address.city}, {address.postalCode}
        </Typography>
        <Typography gutterBottom>
          Phone: {address.phone}
        </Typography>
      </Grid>
      
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>
          Payment
        </Typography>
        <Typography gutterBottom>
          Card: **** **** **** {payment.cardNumber.slice(-4)}
        </Typography>
        <Typography gutterBottom>
          Name: {payment.cardName}
        </Typography>
        <Typography gutterBottom>
          Expires: {payment.expDate}
        </Typography>
      </Grid>
      
      <Grid item xs={12}>
        <FormControlLabel
          control={
            <Checkbox 
              checked={true} 
              color="primary" 
            />
          }
          label="I agree to the terms and conditions"
        />
      </Grid>
    </Grid>
  );
  
  // Render based on active step
  const getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return renderShippingForm();
      case 1:
        return renderPaymentForm();
      case 2:
        return renderOrderSummary();
      default:
        return 'Unknown step';
    }
  };
  
  // If cart is empty, redirect to cart page
  if (0 === 0 && !orderComplete) {
    return (
      <Box>
        <Container maxWidth="sm" sx={{ py: 8 }}>
          <Paper elevation={0} variant="outlined" sx={{ p: 4, textAlign: 'center' }}>
            <Typography variant="h5" gutterBottom>
              Your cart is empty
            </Typography>
            <Typography variant="body1" color="text.secondary" paragraph>
              Add some items to your cart before proceeding to checkout.
            </Typography>
            <Button 
              variant="contained" 
              component={Link} 
              href="/shop"
              sx={{ mt: 2 }}
            >
              Continue Shopping
            </Button>
          </Paper>
        </Container>
        <Footer />
      </Box>
    );
  }
  
  // Order complete view
  if (orderComplete) {
    return (
      <Box>
        <Container maxWidth="sm" sx={{ py: 8 }}>
          <Paper elevation={0} variant="outlined" sx={{ p: 4, textAlign: 'center' }}>
            <Box sx={{ my: 2 }}>
              <img
                src="https://www.svgrepo.com/show/13650/success.svg"
                alt="Order Successful"
                style={{ width: 100, height: 100 }}
              />
            </Box>
            <Typography variant="h5" gutterBottom>
              Thank you for your order!
            </Typography>
            <Typography variant="body1" paragraph>
              Your order has been placed successfully. We sent a confirmation to your email.
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
              You will be redirected to the home page in a few seconds...
            </Typography>
            <Button 
              variant="contained" 
              component={Link} 
              href="/"
            >
              Return to Home
            </Button>
          </Paper>
        </Container>
        <Footer />
      </Box>
    );
  }
  
  return (
    <Box>
      <Box component="main">
        <Container maxWidth="lg">
          <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom mb={4}>
            Checkout
          </Typography>
          
          <Stepper activeStep={activeStep} sx={{ mb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          <Grid container spacing={4}>
            {/* Main Checkout Form */}
            <Grid item xs={12} md={8}>
              <Paper elevation={0} variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
                {getStepContent(activeStep)}
                
                {orderError && (
                  <Alert severity="error" sx={{ mt: 3 }}>
                    {orderError}
                  </Alert>
                )}
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
                  {activeStep !== 0 && (
                    <Button 
                      onClick={handleBack}
                      variant="outlined"
                      disabled={isSubmitting}
                    >
                      Back
                    </Button>
                  )}
                  
                  <Box sx={{ position: 'relative' }}>
                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handlePlaceOrder}
                        disabled={isSubmitting}
                      >
                        Place Order
                        {isSubmitting && (
                          <CircularProgress 
                            size={24} 
                            sx={{ 
                              position: 'absolute',
                              top: '50%',
                              left: '50%',
                              marginTop: '-12px',
                              marginLeft: '-12px',
                            }}
                          />
                        )}
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                </Box>
              </Paper>
            </Grid>
            
            {/* Order Summary */}
            <Grid item xs={12} md={4}>
              <Paper elevation={0} variant="outlined" sx={{ p: { xs: 2, md: 3 } }}>
                <Typography variant="h6" gutterBottom>
                  Order Summary
                </Typography>
                
                <Box sx={{ my: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    {/* <Typography variant="body2">Subtotal ({totalItems} items)</Typography> */}
                    {/* <Typography variant="body2">${totalPrice.toFixed(2)}</Typography> */}
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Shipping</Typography>
                    <Typography variant="body2">${shipping.toFixed(2)}</Typography>
                  </Box>
                  
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 1 }}>
                    <Typography variant="body2">Tax</Typography>
                    {/* <Typography variant="body2">${tax.toFixed(2)}</Typography> */}
                  </Box>
                </Box>
                
                <Divider sx={{ my: 2 }} />
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="subtitle1" fontWeight="bold">
                    Order total
                  </Typography>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {/* ${orderTotal.toFixed(2)} */}
                  </Typography>
                </Box>
                
                <Typography variant="caption" color="text.secondary">
                  By placing your order, you agree to our{' '}
                  <Link  href="/terms" color="primary">
                    Terms and Conditions
                  </Link>
                  {' '}and{' '}
                  <Link href="/privacy" color="primary">
                    Privacy Policy
                  </Link>
                  .
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      
      <Footer />
    </Box>
  );
};

export default CheckoutTemplate;
