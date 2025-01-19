import { FloatingNav } from "@/components/ui/Floating-Navbar";
import { navItems } from "@/contants";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main className="relative flex justify-center bg-[#10002b] items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full bg-transparent">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Skills />
        <Footer />
      </div>
    </main>
  );
}
