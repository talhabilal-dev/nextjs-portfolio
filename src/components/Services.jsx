import { HoverEffect } from "./ui/card-hover-effect";
import { skills } from "@/data";

export default function services() {
  return (
    
    <section className=" sm:mt-24" id="services">
      <header className="text-center mb-8 z-50">
        <h1 className=" text-3xl md:text-5xl lg:text-6xl font-bold mt-4 bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200">
          What I Offer
        </h1>
        <p className="text-gray-900 dark:text-gray-200 text-base sm:text-lg">
          Explore my technical skills and expertise.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-xl">
        <HoverEffect
          items={skills}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        />
      </div>
    </section>
  );
}

