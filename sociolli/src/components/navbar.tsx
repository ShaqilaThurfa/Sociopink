// 'use client';

import Link from "next/link";
import SociollaTitle from "./sociolla";

export default function Navbar() {
  return (
    <nav className="navbar bg-base-100 px-20 justify-between">
      <div className="flex-1 flex items-center gap-60">
        <SociollaTitle />

        <div className="container">
        <ul className="menu menu-horizontal px-8 gap-6">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>

      </div>

      <div className="flex gap-4 items-center">
        <Link href="/login" className="btn btn-ghost text-xl h-10">
          Login
        </Link>
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="badge badge-sm indicator-item">8</span>
        </div>
      </div>
    </nav>
  );
}
