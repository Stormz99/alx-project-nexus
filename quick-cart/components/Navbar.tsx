"use client";
import Link from "next/link";
import { navLinks } from "@/constants/page";
import { usePathname } from "next/navigation";
import SearchBar from "@/components/SearchBar";
import Button from "@/components/Button";
import ShoppingCartIcon from "@/components/ShoppingCartIcon";



const Navbar = () => {

    const pathname = usePathname();


    return (
        <header className="w-full py-4">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <div>
                    <Link href="/" className="text-xl">
                        Quick <span>Cart</span>
                    </Link>
                </div>

                <nav className="">
                    <ul className="flex gap-4">
                       {
                            navLinks.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.path}
                                        className={`px-3 py-2 rounded-md transition ${
                                            pathname === link.path
                                            ? "bg-blue-500 text-white"
                                            : "hover:bg-gray-100"
                                        }`}
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))
                       }
                    </ul>
                </nav>

                <div className="flex items-center gap-4">
                    <div className="flex gap-2 items-center">
                        <SearchBar />
                        <Button
                            label="Search"
                    
                            className="hidden sm:flex items-center gap-2 rounded-md ring-1 ring-gray-200 px-2 py-1 shadow-md cursor-pointer"
                        />
                    </div>
                    
                   <div>
                       <ShoppingCartIcon />
                   </div>
                </div>
            </div>
            
            
           
        </header>
    )
}

export default Navbar;