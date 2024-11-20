
import Navbar from "@/components/navbar"
import FooterNavBar from "@/components/navbar2"


export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative">
      <div className="sticky top-0 z-50 bg-white shadow">
        <Navbar />
        <FooterNavBar />
      </div>
      <main>
        {children}
      </main>
    </div>

  );
}
