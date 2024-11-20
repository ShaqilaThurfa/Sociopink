
import Navbar from "@/components/navbar"
import FooterNavBar from "@/components/navbar2"


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <FooterNavBar />
      {children}
    </>
  );
}
