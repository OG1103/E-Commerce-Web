export interface Category {
    id: number;
    name: string;
    image: string;
    description: string;
    slug: string;
  }
  
  export const categories: Category[] = [
    {
      id: 1,
      name: "Electronics",
      image: "/images/categories/electronics.jpg",
      description: "Discover the latest gadgets and electronics",
      slug: "electronics"
    },
    {
      id: 2,
      name: "Fashion",
      image: "/images/categories/fashion.jpg",
      description: "Stay on trend with our stylish clothing and accessories",
      slug: "fashion"
    },
    {
      id: 3,
      name: "Home & Furniture",
      image: "/images/categories/home.jpg",
      description: "Transform your space with modern furniture and decor",
      slug: "home-furniture"
    },
    {
      id: 4,
      name: "Fitness",
      image: "/images/categories/fitness.jpg",
      description: "Achieve your fitness goals with quality equipment",
      slug: "fitness"
    }
  ];
  
  export const getAllCategories = (): Category[] => {
    return categories;
  };
  
  export const getCategoryBySlug = (slug: string): Category | undefined => {
    return categories.find(category => category.slug === slug);
  };
  