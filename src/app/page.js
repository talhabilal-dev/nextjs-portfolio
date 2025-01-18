import { FloatingNav } from "@/components/ui/Floating-Navbar";
import { navItems } from "@/contants";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <main className="relative flex justify-center bg-[#10002b] items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full bg-transparent">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
