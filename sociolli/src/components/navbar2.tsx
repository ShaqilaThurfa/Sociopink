'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function FooterNavBar() {
  const pathname = usePathname();

  // if (pathname === "/login" || pathname === "/register") {
  //   return null;
  // }

  return (
    <div className="bg-base-100 shadow-md">
      <div className="container mx-auto">
        <ul className="menu menu-horizontal px-4 gap-4">
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
