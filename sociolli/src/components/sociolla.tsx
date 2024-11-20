import Link from "next/link";
import React from "react";


export default function SociollaTitle() {
  return (
    <div>
      <Link href="/"
        className="text-[40px] font-bold italic text-black tracking-wider custom-font"
      >
        Sociolli
      </Link>
      <style jsx>{`
        .custom-font {
          font-family: "Cursive", "Serif";
          letter-spacing: 0.15em;
          text-decoration: none;
        }
        .custom-font:hover {
          color: #f59e0b;
          transition: color 0.3s ease-in-out;
        }
      `}</style>
    </div>
  );
}
