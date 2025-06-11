
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: string;
  brand: string;
  description: string;
  features: string[];
  inStock: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: "1",
    name: "iPhone 15 Pro Max",
    price: 1199,
    originalPrice: 1299,
    image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    category: "phones",
    brand: "Apple",
    description: "The most advanced iPhone yet with titanium design, A17 Pro chip, and revolutionary camera system.",
    features: ["6.7-inch Super Retina XDR display", "A17 Pro chip", "Pro camera system", "5G connectivity"],
    inStock: true,
    rating: 4.8,
    reviews: 1247
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    price: 1099,
    image: "https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500",
    category: "phones",
    brand: "Samsung",
    description: "Premium Android smartphone with S Pen, advanced AI features, and incredible camera capabilities.",
    features: ["6.8-inch Dynamic AMOLED", "Snapdragon 8 Gen 3", "S Pen included", "200MP camera"],
    inStock: true,
    rating: 4.7,
    reviews: 892
  },
  {
    id: "3",
    name: "MacBook Pro 16-inch M3",
    price: 2399,
    originalPrice: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500",
    category: "laptops",
    brand: "Apple",
    description: "Supercharged for pros with M3 chip, stunning Liquid Retina XDR display, and all-day battery life.",
    features: ["M3 Pro chip", "16-inch Liquid Retina XDR", "22-hour battery", "Thunderbolt 4 ports"],
    inStock: true,
    rating: 4.9,
    reviews: 634
  },
  {
    id: "4",
    name: "Dell XPS 13 Plus",
    price: 1299,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    category: "laptops",
    brand: "Dell",
    description: "Ultra-slim laptop with Intel 13th gen processors, stunning 13.4-inch display, and premium build quality.",
    features: ["13.4-inch InfinityEdge display", "Intel 13th Gen i7", "16GB RAM", "512GB SSD"],
    inStock: true,
    rating: 4.6,
    reviews: 423
  },
  {
    id: "5",
    name: "Sony WH-1000XM5",
    price: 399,
    originalPrice: 449,
    image: "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    category: "accessories",
    brand: "Sony",
    description: "Industry-leading noise canceling headphones with exceptional sound quality and all-day comfort.",
    features: ["30-hour battery", "Industry-leading noise canceling", "Speak-to-Chat technology", "Quick Charge"],
    inStock: true,
    rating: 4.8,
    reviews: 2156
  },
  {
    id: "6",
    name: "AirPods Pro (2nd Gen)",
    price: 249,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500",
    category: "accessories",
    brand: "Apple",
    description: "Adaptive Audio automatically tunes the noise control for you to provide the best listening experience.",
    features: ["Adaptive Audio", "Active Noise Cancellation", "Spatial Audio", "USB-C charging"],
    inStock: true,
    rating: 4.7,
    reviews: 1834
  },
  {
    id: "7",
    name: "Samsung 65\" QLED 4K TV",
    price: 1799,
    originalPrice: 1999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500",
    category: "smart-tvs",
    brand: "Samsung",
    description: "Quantum Dot technology delivers brilliant colors and exceptional contrast for the ultimate viewing experience.",
    features: ["65-inch QLED display", "4K resolution", "Smart TV platform", "Gaming features"],
    inStock: true,
    rating: 4.6,
    reviews: 567
  },
  {
    id: "8",
    name: "LG OLED 55\" C3 Series",
    price: 1499,
    image: "https://images.unsplash.com/photo-1567690187548-f07b1d7bf5a9?w=500",
    category: "smart-tvs",
    brand: "LG",
    description: "Self-lit OLED pixels deliver perfect blacks and infinite contrast for an incredible picture.",
    features: ["55-inch OLED display", "webOS smart platform", "Dolby Vision IQ", "HDMI 2.1"],
    inStock: true,
    rating: 4.8,
    reviews: 743
  }
];

export const categories = [
  { id: "phones", name: "Smartphones", icon: "📱" },
  { id: "laptops", name: "Laptops", icon: "💻" },
  { id: "accessories", name: "Accessories", icon: "🎧" },
  { id: "smart-tvs", name: "Smart TVs", icon: "📺" }
];

export const brands = ["Apple", "Samsung", "Dell", "Sony", "LG"];
