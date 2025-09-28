// constants/page.tsx

// Navbar links
export const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

// Products data (use local images in /public/images/)
export const sampleProducts = [
  {
    id: "1",
    name: "Wireless Earbuds",
    price: 15000,
    image: "/images/earbuds.jpg",
    description:
      "Crystal-clear sound with compact wireless earbuds, perfect for daily use.",
  },
  {
    id: "2",
    name: "Smart Watch",
    price: 25000,
    image: "/images/smartwatch.jpg",
    description:
      "Track your health and stay connected with our sleek smart watch.",
  },
  {
    id: "3",
    name: "Laptop Backpack",
    price: 12000,
    image: "/images/backpack.jpg",
    description:
      "Durable and stylish backpack for your laptop and essentials.",
  },
  {
    id: "4",
    name: "Bluetooth Speaker",
    price: 18000,
    image: "/images/speaker.jpg",
    description:
      "Portable Bluetooth speaker with long battery life and strong bass.",
  },
];
