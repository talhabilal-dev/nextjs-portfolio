import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { ColourfulText } from "./ui/colourful-text";
import { HoverBorderGradient } from "./ui/hover-border-gradient";

const Hero = () => {
  return (
    <div className="pb-20 pt-36 dark:bg-[#10002b] bg-white">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="white" />
      </div>

      <div
        className="h-screen w-full dark:bg-[#10002b] bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-evenly"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center dark:bg-[#10002b]
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">
          <p className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80">
            Innovative Solutions, Powered by Code.
          </p>
          <TextGenerateEffect
            words="Turning Backend Brilliance into Seamless Experiences."
            className="text-center mt-4"
          />

          <p className="text-center mt-5 lg:mt-7 md:tracking-wider mb-4 text-sm md:text-md lg:text-md text-white">
            Hi! I&apos;m{" "}
            <span className="font-bold text-xl">
              <ColourfulText text="Talha Bilal " />
            </span>{" "}
            a backend specialist excelling in Node.js, MongoDB, SQL, and
            crafting dynamic full-stack applications with Next.js.
          </p>
          <a
            href="/pdf/cv.pdf"
            className="mt-12"
            download="talhabilal_resume.pdf"
          >
            <HoverBorderGradient
              containerClassName="rounded-full"
              as="button"
              className="dark:bg-transparent text-black dark:text-white flex items-center space-x-2 w-[200px] h-12 justify-center p-2.5"
              duration={1}
              clockwise
            >
              <span>Download my Resume</span>
            </HoverBorderGradient>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
