'use client';

import Link from "next/link";


export default function FooterNavBar() {
  return (
    <div className="bg-base-100 shadow-md">
      <div className="container mx-auto px-4">
        <ul className="menu menu-horizontal px-0 gap-4">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/wishlist">Wishlist</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
