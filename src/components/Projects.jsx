"use client";

import { FaLocationArrow } from "react-icons/fa6";

import { projects } from "@/data";
import { PinContainer } from "./ui/3d-pin";

const RecentProjects = () => {
  return (
    <div className="py-20  max-w-8xl mx-auto rounded-2xl " id="projects">
      <h1 className="heading text-3xl md:lg:text-4xl  font-bold text-black text-center dark:bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200">
        Recent Projects (Coming Soon)
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-12 mt-10">
        {projects.map((item) => (
          <div
            className="lg:min-h-[32.5rem] h-[25rem] flex items-center  justify-center sm:w-96 w-[80vw] "
            key={item.id}
          >
            <PinContainer
              title="/ui.aceternity.com"
              href="https://ui.aceternity.com"
            >
              <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[40vh] mb-10 ">

                <img
                  src={item.img}
                  alt="cover"
                  className="z-10 absolute bottom-0 object-cover w-full h-full"
                />
              </div>

              <h1 className="font-bold lg:text-2xl md:text-xl text-black dark:text-slate-100 text-base line-clamp-1">
                {item.title}
              </h1>

              <p
                className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-zinc-700 dark:text-slate-400"
                style={{
                  margin: "1vh 0",
                }}
              >
                {item.des}
              </p>

              <div className="flex items-center justify-between mt-7 mb-3">
                <div className="flex items-center">
                  {item.iconLists.map((icon, index) => (
                    <div
                      key={index}
                      className="border border-white/[.2] rounded-full bg-[#13162D] lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                      style={{
                        transform: `translateX(-${5 * index + 2}px)`,
                      }}
                    >
                      <img src={icon} alt="icon5" className="p-2" />
                    </div>
                  ))}
                </div>

                <div className="flex justify-center items-center">
                  <p className="flex lg:text-xl md:text-xs text-sm text-black dark:text-slate-100">
                    Check Live Site
                  </p>
                  <FaLocationArrow className="ms-3" color="#CBACF9" />
                </div>
              </div>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
