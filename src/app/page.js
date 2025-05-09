import { FloatingNav } from "@/components/ui/Floating-Navbar";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import RecentProjects from "@/components/Projects";
// import {FloatingDockDemo} from "@/components/Dock";
export default function Home() {
  return (
    <main className="relative flex justify-center dark:bg-[#10002b] bg-white items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full bg-transparent">
        <FloatingNav navItems={navItems} />
        {/* <FloatingDockDemo /> */}
        <Hero />
        <Services />
        <RecentProjects />
        <Experience />
        <Testimonials />   
        <Approach /> 
        <Footer />
      </div>
    </main>
  );
}
