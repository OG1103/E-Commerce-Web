import { FC, useEffect, useState } from "react";
import { useRouter } from "next/router";
import ProductListingTemplate from "../app/Components/templates/productListing/productListingTemplate";

const Shop: FC = () => {
  const router = useRouter();
  const { category, q, view } = router.query; // Extract query params

  // Ensure we get values properly (especially when SSR hydration happens)
  const [queryParams, setQueryParams] = useState({
    category: undefined as string | undefined,
    searchQuery: undefined as string | undefined,
    viewMode: "products" as "products" | "categories",
  });

  useEffect(() => {
    setQueryParams({
      category: typeof category === "string" ? category : undefined,
      searchQuery: typeof q === "string" ? q : undefined,
      viewMode: view === "categories" ? "categories" : "products",
    });
  }, [category, q, view]);

  return (
    // Add Meta Tags
    <ProductListingTemplate
      viewMode={queryParams.viewMode}
      categoryFilter={queryParams.category}
      searchQuery={queryParams.searchQuery}
    />
  );
};

export default Shop;
