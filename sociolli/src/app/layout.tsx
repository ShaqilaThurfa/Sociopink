import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import Link from "next/link";
// import Navbar from "../components/navbar";
// import FooterNavBar from "../components/navbar2";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "SocioPink",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">
        
        <main className="my-2">{children}</main>
      </body>
    </html>
  );
}
