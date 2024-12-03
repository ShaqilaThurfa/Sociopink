"use client";

import Link from "next/link";
import SociollaTitle from "./sociolla";
import Cookies from "js-cookie";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";


export default function Navbar() {
  const router = useRouter();

  const isLoggedIn = Cookies.get("Authorization");

  const handleLogout = () => {
    try {
      Cookies.remove("Authorization"); 
      localStorage.removeItem("wishlist");
      
      Swal.fire({
        title: "Success!",
        text: "Logout success",
        timer: 2000,
      })
      router.push("/")
    } catch (error) {
      console.log("Error:", error);
      if(error instanceof Error){
        Swal.fire({
          title: "Error!",
          text: error.message,
          timer: 2000,
        })
      }
    }
  };

  return (
    <nav className="navbar px-20 justify-between flex flex-grow">
      <div className="flex flex-growp">
        <div>
        <SociollaTitle />
        </div>
        <ul className="menu menu-horizontal flex item-center flex-grow mx-auto px-8 gap-6">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>

      <div className="flex gap-4 items-center">
        {isLoggedIn? (
          <button className="btn btn-ghost text-xl h-10" onClick={handleLogout}>
          Logout
        </button>
        ) : (
          <Link href="/login" className="btn btn-ghost text-xl h-10">
          Login
        </Link>
        )}
         
      </div>
    </nav>
  );
}
