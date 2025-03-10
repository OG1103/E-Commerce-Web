import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductDetailsTemplate from "../app/Components/templates/productDetails/ProductDetailsTemplate";
import { getProductById } from "../app/Data/products";

const ProductDetails: FC = () => {
  const router = useRouter();
  const { id } = router.query;

  // Ensure id is a number before using it
  const productId = id ? parseInt(id as string, 10) : NaN;
  const product = productId ? getProductById(productId) : null;

  // Redirect to 404 if product is not found
  if (!product) {
    return null;
  }

  return <ProductDetailsTemplate product={product} />;
};

export default ProductDetails;
