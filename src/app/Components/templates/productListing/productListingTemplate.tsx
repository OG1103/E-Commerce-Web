import { FC, useState, useEffect } from "react";
import {
  Box,
  Container,
  Typography,
  Grid,
  Divider,
  TextField,
  InputAdornment,
  MenuItem,
  FormControl,
  Select,
  SelectChangeEvent,
  Breadcrumbs,
  Pagination,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import Link from "next/link";

import Footer from "../../organisms/footer/Footer";
import CategoryGrid from "../../organisms/categoryGrid/CategoryGrid";
import ProductGrid from "../../organisms/productGrid/ProductGrid";
import { categories } from "../../../Data/categories";
import { getAllProducts, Product } from "../../../Data/products";

interface ProductListingTemplateProps {
  viewMode?: "products" | "categories";
  categoryFilter?: string;
  searchQuery?: string;
}

const ProductListingTemplate: FC<ProductListingTemplateProps> = ({
  viewMode = "products",
  categoryFilter,
  searchQuery = "",
}) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState(searchQuery);
  const [sortBy, setSortBy] = useState("featured");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFeaturedOnly, setShowFeaturedOnly] = useState(false);
  const [showDiscountsOnly, setShowDiscountsOnly] = useState(false);

  const productsPerPage = 8;

  // Load all products
  useEffect(() => {
    setProducts(getAllProducts());
  }, []);

  // Filter products based on search, category, and other filters
  useEffect(() => {
    let result = [...products];

    // Apply category filter
    if (categoryFilter) {
      result = result.filter(
        (product) =>
          product.category.toLowerCase() === categoryFilter.toLowerCase()
      );
    }

    // Apply search filter
    if (searchTerm) {
      const search = searchTerm.toLowerCase();
      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(search) ||
          product.description.toLowerCase().includes(search) ||
          product.category.toLowerCase().includes(search)
      );
    }

    // Featured only filter
    if (showFeaturedOnly) {
      result = result.filter((product) => product.featured);
    }

    // Discounts only filter
    if (showDiscountsOnly) {
      result = result.filter(
        (product) => product.discount && product.discount > 0
      );
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        // In a real app, you would sort by date added
        // Here we just randomize for demonstration
        result.sort(() => Math.random() - 0.5);
        break;
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }

    setFilteredProducts(result);
    setCurrentPage(1); // Reset to first page when filters change
  }, [
    products,
    categoryFilter,
    searchTerm,
    sortBy,
    showFeaturedOnly,
    showDiscountsOnly,
  ]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  );

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const handleSortChange = (event: SelectChangeEvent) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getTitle = () => {
    if (viewMode === "categories") return "Shop by Category";
    if (categoryFilter) {
      const category = categories.find((c) => c.slug === categoryFilter);
      return category ? category.name : "All Products";
    }
    return "All Products";
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
            <Link href="/" passHref legacyBehavior>
              Home
            </Link>
            <Typography color="text.primary">Shop</Typography>
            {categoryFilter && (
              <Typography color="text.primary" textTransform="capitalize">
                {categoryFilter.replace("-", " ")}
              </Typography>
            )}
          </Breadcrumbs>

          <Typography
            variant="h4"
            component="h1"
            fontWeight="bold"
            gutterBottom
          >
            {getTitle()}
          </Typography>

          {viewMode === "categories" ? (
            // Category view
            <CategoryGrid categories={categories} />
          ) : (
            // Products view
            <>
              {/* Filters and sorting */}
              <Grid container spacing={3} sx={{ mb: 4, mt: 2 }}>
                <Grid item xs={12} sm={6} md={4}>
                  <TextField
                    fullWidth
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={handleSearchChange}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SearchIcon />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>

                <Grid item xs={12} sm={6} md={3}>
                  <FormControl fullWidth>
                    <Select
                      value={sortBy}
                      onChange={handleSortChange}
                      displayEmpty
                    >
                      <MenuItem value="featured">Featured</MenuItem>
                      <MenuItem value="price-low">Price: Low to High</MenuItem>
                      <MenuItem value="price-high">Price: High to Low</MenuItem>
                      <MenuItem value="rating">Highest Rated</MenuItem>
                      <MenuItem value="newest">Newest</MenuItem>
                    </Select>
                  </FormControl>
                </Grid>

                <Grid item xs={12} md={5}>
                  <Box
                    display="flex"
                    justifyContent={{ xs: "flex-start", md: "flex-end" }}
                  >
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={showFeaturedOnly}
                          onChange={(e) =>
                            setShowFeaturedOnly(e.target.checked)
                          }
                        />
                      }
                      label="Featured Only"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={showDiscountsOnly}
                          onChange={(e) =>
                            setShowDiscountsOnly(e.target.checked)
                          }
                        />
                      }
                      label="On Sale"
                    />
                  </Box>
                </Grid>
              </Grid>

              <Divider sx={{ mb: 4 }} />

              {/* Product Grid */}
              <Box mb={4}>
                <ProductGrid
                  products={currentProducts}
                  columns={{ xs: 1, sm: 2, md: 3, lg: 4 }}
                />
              </Box>

              {/* Pagination */}
              {totalPages > 1 && (
                <Box display="flex" justifyContent="center" mt={4}>
                  <Pagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handlePageChange}
                    color="primary"
                    siblingCount={1}
                  />
                </Box>
              )}
            </>
          )}
        </Container>
      </Box>

      <Footer />
    </Box>
  );
};

export default ProductListingTemplate;
