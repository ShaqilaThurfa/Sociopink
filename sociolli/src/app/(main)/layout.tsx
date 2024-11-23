
import Footer from "@/components/footer";
import Navbar from "@/components/navbar"




export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="mx-auto sticky top-0 z-20 bg-white shadow my-5 flex flex-wrap">
        <Navbar />
      </div>
      <main>
        {children}
      </main>
      <Footer/>
    </div>

  );
}
