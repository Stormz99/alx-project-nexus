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
  const { cart } = useCart();

  const handleCartClick = () => router.push("/main/cart");

  const handleSignOut = () => router.push("/main/signout");

  return (
    <nav className="bg-white shadow-md py-4 px-6 flex items-center justify-between">
      <div className="flex items-center space-x-8">
        <Link href="/main/home" className="text-2xl font-bold text-blue-600">GoCart</Link>
        <ul className="flex space-x-6 items-center">
          {navLinks.map(link => (
            <li key={link.name}>
              <Link
                href={link.path}
                className={`hover:text-blue-600 transition ${
                  pathname === link.path ? "text-blue-600 font-semibold" : "text-gray-700"
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
          {localStorage.getItem("access_token") && (
            <li>
              <button
                onClick={handleSignOut}
                className="text-red-600 hover:text-red-700 font-semibold transition"
              >
                Sign Out
              </button>
            </li>
          )}
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
