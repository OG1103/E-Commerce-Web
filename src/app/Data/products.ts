export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalPrice?: number;
    discount?: number;
    rating: number;
    reviews: number;
    image: string;
    images: string[];
    category: string;
    color: string;
    colors: string[];
    stock: 'In stock' | 'Low stock' | 'Out of stock';
    featured: boolean;
    details: string[];
  }
  
  export const products: Product[] = [
    {
      id: 1,
      name: "Premium Headphones",
      description: "Experience premium sound quality with our top-of-the-line wireless headphones. Featuring active noise cancellation, Bluetooth 5.0 connectivity, and up to 30 hours of battery life.",
      price: 299.99,
      originalPrice: 374.99,
      discount: 20,
      rating: 4.5,
      reviews: 128,
      image: "/images/products/headphones.jpg",
      images: [
        "/images/products/headphones.jpg",
        "/images/products/headphones.jpg",
        "/images/products/headphones.jpg",
        "/images/products/headphones.jpg"
      ],
      category: "Electronics",
      color: "Black",
      colors: ["Black", "White", "Red", "Blue"],
      stock: "In stock",
      featured: true,
      details: [
        "Active Noise Cancellation",
        "Bluetooth 5.0 Connectivity",
        "Up to 30 hours of battery life",
        "Quick charge: 5 mins = 2 hours playback",
        "Premium sound quality",
        "Built-in microphone for calls"
      ]
    },
    {
      id: 2,
      name: "Smart Watch",
      description: "Stay connected and track your fitness with this elegant smart watch. Features health monitoring, notifications, and customizable watch faces.",
      price: 199.99,
      rating: 5.0,
      reviews: 86,
      image: "/images/products/smartwatch.jpg",
      images: [
        "/images/products/smartwatch.jpg",
        "/images/products/smartwatch.jpg",
        "/images/products/smartwatch.jpg",
        "/images/products/smartwatch.jpg"
      ],
      category: "Electronics",
      color: "Rose Gold",
      colors: ["Black", "Silver", "Rose Gold", "Blue"],
      stock: "In stock",
      featured: true,
      details: [
        "Health monitoring (heart rate, sleep, etc.)",
        "Water resistant up to 50m",
        "GPS tracking",
        "7-day battery life",
        "Customizable watch faces",
        "Smartphone notifications"
      ]
    },
    {
      id: 3,
      name: "Premium Sneakers",
      description: "Elevate your style and comfort with these premium sneakers. Designed for both casual wear and light athletic activities.",
      price: 149.99,
      rating: 4.0,
      reviews: 42,
      image: "/images/products/sneakers.jpg",
      images: [
        "/images/products/sneakers.jpg",
        "/images/products/sneakers.jpg",
        "/images/products/sneakers.jpg",
        "/images/products/sneakers.jpg"
      ],
      category: "Fashion",
      color: "White",
      colors: ["White", "Black", "Gray", "Red"],
      stock: "In stock",
      featured: true,
      details: [
        "Genuine leather upper",
        "Cushioned insole for comfort",
        "Durable rubber outsole",
        "Breathable design",
        "Stylish urban look",
        "Sizes available: 7-13 US"
      ]
    },
    {
      id: 4,
      name: "Wireless Speaker",
      description: "Fill your space with rich, clear sound from this compact wireless speaker. Features Bluetooth connectivity and long battery life.",
      price: 89.99,
      rating: 3.5,
      reviews: 28,
      image: "/images/products/speaker.jpg",
      images: [
        "/images/products/speaker.jpg",
        "/images/products/speaker.jpg",
        "/images/products/speaker.jpg",
        "/images/products/speaker.jpg"
      ],
      category: "Electronics",
      color: "Grey",
      colors: ["Grey", "Black", "Blue", "White"],
      stock: "Low stock",
      featured: true,
      details: [
        "Bluetooth 5.0 connection",
        "10 hours of playtime",
        "IPX5 water resistance",
        "Built-in microphone for calls",
        "Compact and portable design",
        "Deep bass and clear sound"
      ]
    },
    {
      id: 5,
      name: "Laptop Backpack",
      description: "A stylish and functional backpack with padded compartments for your laptop and other essentials. Perfect for commuting or travel.",
      price: 59.99,
      rating: 4.3,
      reviews: 36,
      image: "/images/products/headphones.jpg", // Replace with actual image
      images: [
        "/images/products/headphones.jpg", // Replace with actual images
        "/images/products/headphones.jpg",
        "/images/products/headphones.jpg",
        "/images/products/headphones.jpg"
      ],
      category: "Fashion",
      color: "Navy",
      colors: ["Navy", "Black", "Gray", "Green"],
      stock: "In stock",
      featured: false,
      details: [
        "Fits laptops up to 15.6 inches",
        "Water-resistant material",
        "Multiple compartments for organization",
        "Padded shoulder straps",
        "USB charging port",
        "Anti-theft design"
      ]
    },
    {
      id: 6,
      name: "Coffee Maker",
      description: "Brew perfect coffee every morning with this programmable coffee maker. Features adjustable brewing strength and a thermal carafe.",
      price: 129.99,
      originalPrice: 149.99,
      discount: 13,
      rating: 4.7,
      reviews: 52,
      image: "/images/products/smartwatch.jpg", // Replace with actual image
      images: [
        "/images/products/smartwatch.jpg", // Replace with actual images
        "/images/products/smartwatch.jpg",
        "/images/products/smartwatch.jpg",
        "/images/products/smartwatch.jpg"
      ],
      category: "Home & Furniture",
      color: "Silver",
      colors: ["Silver", "Black", "White"],
      stock: "In stock",
      featured: false,
      details: [
        "12-cup capacity",
        "Programmable 24-hour timer",
        "Adjustable brewing strength",
        "Thermal carafe keeps coffee hot",
        "Auto shut-off feature",
        "Easy-to-clean design"
      ]
    },
    {
      id: 7,
      name: "Fitness Tracker",
      description: "Monitor your activity levels, heart rate, and sleep patterns with this sleek fitness tracker. Syncs wirelessly with your smartphone.",
      price: 79.99,
      rating: 4.2,
      reviews: 91,
      image: "/images/products/smartwatch.jpg", // Replace with actual image
      images: [
        "/images/products/smartwatch.jpg", // Replace with actual images
        "/images/products/smartwatch.jpg",
        "/images/products/smartwatch.jpg",
        "/images/products/smartwatch.jpg"
      ],
      category: "Fitness",
      color: "Black",
      colors: ["Black", "Blue", "Red", "Purple"],
      stock: "In stock",
      featured: false,
      details: [
        "Activity tracking (steps, distance, calories)",
        "Heart rate monitoring",
        "Sleep tracking",
        "Water resistant up to 50m",
        "Smart notifications",
        "5-day battery life"
      ]
    },
    {
      id: 8,
      name: "Wireless Earbuds",
      description: "Enjoy your music on the go with these comfortable wireless earbuds. Features noise isolation and a compact charging case.",
      price: 129.99,
      rating: 4.4,
      reviews: 67,
      image: "/images/products/headphones.jpg", // Replace with actual image
      images: [
        "/images/products/headphones.jpg", // Replace with actual images
        "/images/products/headphones.jpg",
        "/images/products/headphones.jpg",
        "/images/products/headphones.jpg"
      ],
      category: "Electronics",
      color: "White",
      colors: ["White", "Black", "Blue"],
      stock: "Low stock",
      featured: false,
      details: [
        "True wireless design",
        "Bluetooth 5.0 technology",
        "Up to 20 hours total playtime with case",
        "Passive noise isolation",
        "Touch controls",
        "Sweat and water resistant"
      ]
    }
  ];
  
  export const getFeaturedProducts = (): Product[] => {
    return products.filter(product => product.featured);
  };
  
  export const getProductById = (id: number): Product | undefined => {
    return products.find(product => product.id === id);
  };
  
  export const getProductsByCategory = (category: string): Product[] => {
    return products.filter(product => product.category === category);
  };
  
  export const getAllProducts = (): Product[] => {
    return products;
  };
  