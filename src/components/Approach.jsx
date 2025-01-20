import React from "react";
import { approachSteps } from "@/data";
import { Button } from "./ui/moving-border";

const Experience = () => {
  return (
    <div className="py-10 w-full">
      <p className="font-bold text-4xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-600 to-neutral-200 text-center">
      From Idea to Execution
      </p>

      <div className="w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10">
        {approachSteps.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000) + 10000}
            borderRadius="1.75rem"
            style={{
              background: "bg-gradient-to-l from-[#10002b] to-[#240046]",
              backgroundColor:
                "linear-gradient(0deg, rgba(16, 0, 43, 1) 0%, rgba(0, 0, 0, 1) 100%)",

              borderRadius: `calc(1.75rem* 0.96)`,
            }}

            className="flex-1 text-black dark:text-white border-neutral-200 dark:border-slate-800"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img
                src={card.thumbnail}
                alt={card.thumbnail}
                height={100}
                width={100}
                className="lg:w-32 md:w-20 w-16 "
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
