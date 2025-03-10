import { FC } from "react";
import {
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import Link from "next/link";
import Rating from "../../../Data/ratings";
import PriceDisplay from "../../atoms/priceDisplay/PriceDisplay";
import { Product } from "../../../Data/products";

type ProductCardProps = {
  product: Product;
};

const ProductCard: FC<ProductCardProps> = ({ product }) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Use Next.js Link for Navigation */}
      <Link href={`/product/${product.id}`} passHref legacyBehavior>
        <CardActionArea
          component="a"
          sx={{
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "stretch",
          }}
        >
          <CardMedia
            component="img"
            height="200"
            image={product.image}
            alt={product.name}
            sx={{ objectFit: "cover" }}
          />
          <CardContent sx={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
            <Box display="flex" justifyContent="space-between" mb={1}>
              <Typography variant="subtitle2" color="text.primary">
                {product.name}
              </Typography>
              <Typography
                variant="caption"
                color={
                  product.stock === "In stock"
                    ? "success.main"
                    : product.stock === "Low stock"
                    ? "warning.main"
                    : "error.main"
                }
              >
                {product.stock}
              </Typography>
            </Box>

            <Typography variant="body2" color="text.secondary" mb={1}>
              {product.color}
            </Typography>

            <Box display="flex" justifyContent="space-between" alignItems="center" mb={1} mt="auto">
              <PriceDisplay price={product.price} originalPrice={product.originalPrice} size="small" />
              <Rating value={product.rating} size="small" showCount />
            </Box>

            <Button variant="contained" color="primary" fullWidth onClick={handleAddToCart} sx={{ mt: 2 }}>
              Add to Cart
            </Button>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default ProductCard;
