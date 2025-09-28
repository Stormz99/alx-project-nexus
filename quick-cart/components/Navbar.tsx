"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { navLinks } from "@/constants/page";
import SearchBar from "./SearchBar";
import Button from "./Button";
import ShoppingCartIcon from "./ShoppingCartIcon";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { cart } = useCart(); // get cart state from context

  const handleCartClick = () => {
    router.push("/cart"); // navigate to the cart page
  };

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          GoCart
        </Link>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`hover:text-blue-600 transition ${
                  pathname === link.path
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center space-x-4">
        <SearchBar />
        <Button onClick={handleCartClick}>
          <ShoppingCartIcon count={cart.length} />
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
