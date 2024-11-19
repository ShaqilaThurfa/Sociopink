'use client';

import Link from "next/link"
import { usePathname } from "next/navigation";

export default function FooterNavBar() {
  const pathname = usePathname();

  if (pathname === "/login" || pathname === "/register") {
    return null;
  }

  return (
    <div className="bg-base-100 py-2 shadow-inner">
      <div className="container mx-auto">
        <ul className="menu menu-horizontal px-4 gap-4">
          <li>
            <Link href="/products">Products</Link>
          </li>
          <li>
            <Link href="/category2">Brand</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}