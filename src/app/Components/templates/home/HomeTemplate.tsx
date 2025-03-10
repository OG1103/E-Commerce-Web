import { FC } from 'react';
import { Box, Container } from '@mui/material';
import Footer from '../../organisms/footer/Footer';
import HeroBanner from '../../organisms/heroBanner/HeroBanner';
import CategoryGrid from '../../organisms/categoryGrid/CategoryGrid';
import ProductGrid from '../../organisms/productGrid/ProductGrid';
import Newsletter from '../../organisms/newsletter/NewsLetter';
import Testimonials from '../../organisms/testimonials/Testimonials';
import { categories } from '../../../Data/categories';
import { getFeaturedProducts } from '../../../Data/products';
import Header from '../../organisms/header/Header';

const featuredProducts = getFeaturedProducts();

const HomeTemplate: FC = () => {
  return (
    <Box>
      <Header/>  
      <HeroBanner />
      
      <Box bgcolor="background.default">
        <Container maxWidth="lg">
          <CategoryGrid 
            categories={categories}
            title="Shop by Category"
            subtitle="Browse our wide selection of products across multiple categories"
            center={true}
          />
        </Container>
      </Box>
      
      <Box bgcolor="background.paper">
        <Container maxWidth="lg">
          <ProductGrid 
            products={featuredProducts}
            title="Featured Products"
            subtitle="Our most popular products based on sales"
            center={true}
          />
        </Container>
      </Box>
      
      <Testimonials />
      
      <Newsletter />
      
      <Footer />
    </Box>
  );
};

export default HomeTemplate;
