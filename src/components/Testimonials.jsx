import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
import { testimonials } from "@/contants";

export default function Testimonials() {
  return (
    <div className="h-[30rem] rounded-md flex flex-col antialiased bg-white dark:bg-[#10002b] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="slow"
      />
    </div>
  );
}

