import { FC } from "react";
import { Card, CardActionArea, CardMedia, Box, Typography } from "@mui/material";
import Link from "next/link";
import { Category } from "../../../Data/categories";

type CategoryCardProps = {
  category: Category;
};

const CategoryCard: FC<CategoryCardProps> = ({ category }) => {
  return (
    <Card
      elevation={2}
      sx={{
        height: "100%",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      {/* Use Next.js Link for Navigation */}
      <Link href={`/shop?category=${category.slug}`} passHref legacyBehavior>
        <CardActionArea component="a" sx={{ height: "100%" }}>
          <Box position="relative" sx={{ height: 240 }}>
            <CardMedia
              component="img"
              height="100%"
              image={category.image}
              alt={category.name}
              sx={{ objectFit: "cover" }}
            />
            <Box
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
              bgcolor="rgba(0, 0, 0, 0.3)"
            >
              <Typography variant="h5" fontWeight="bold" color="white">
                {category.name}
              </Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Link>
    </Card>
  );
};

export default CategoryCard;
