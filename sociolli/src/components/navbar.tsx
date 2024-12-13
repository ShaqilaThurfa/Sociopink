"use client";

import Link from "next/link";
import SociollaTitle from "./sociolla";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Navbar() {
  const router = useRouter();
  const [menuOpen, setMenuOpen] = useState(false);

  const isLoggedIn = Cookies.get("Authorization");

  const handleLogout = () => {
    try {
      Cookies.remove("Authorization");
      localStorage.removeItem("wishlist");

      Swal.fire({
        title: "Success!",
        text: "Logout success",
        timer: 2000,
      });
      router.push("/");
    } catch (error) {
      console.log("Error:", error);
      if (error instanceof Error) {
        Swal.fire({
          title: "Error!",
          text: error.message,
          timer: 2000,
        });
      }
    }
  };

  return (
    <nav className="navbar fixed top-0 left-0 w-full px-4 py-2 bg-white shadow-md flex justify-between items-center">
    
      <div className="flex items-center">
        <SociollaTitle />
      </div>

      
      <button
        className="block md:hidden text-gray-600"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>

    
      <ul
        className={`${
          menuOpen ? "block" : "hidden"
        } absolute top-14 left-0 w-full bg-white shadow-md md:static md:flex md:w-auto md:gap-6 md:shadow-none`}
      >
        <li className="flex items-center py-2 px-4 border-b md:border-none ">
          <Link href="/products" className="hover:text-pink-500">
            Products
          </Link>
        </li>
        <li className="flex items-center py-2 px-4 border-b md:border-none ">
          <Link href="/wishlist" className="hover:text-pink-500">
            Wishlist
          </Link>
        </li>
        <li className="py-2 px-4">
          {isLoggedIn ? (
            <button
              className="btn btn-ghost text-lg"
              onClick={handleLogout}
            >
              Logout
            </button>
          ) : (
            <Link href="/login" className="btn btn-ghost text-lg">
              Login
            </Link>
          )}
        </li>
      </ul>

      
    </nav>
  );
}
