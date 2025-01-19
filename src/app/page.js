import { FloatingNav } from "@/components/ui/Floating-Navbar";
import { navItems } from "@/contants";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Skills from "@/components/Skills";
import Testimonials from "@/components/Testimonials";
import  Grid  from "@/components/Grid";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
export default function Home() {
  return (
    <main className="relative flex justify-center dark:bg-[#10002b] bg-white items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full bg-transparent">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Skills />
        <Experience />
        <Testimonials />   
        <Approach /> 
        <Footer />
      </div>
    </main>
  );
}
