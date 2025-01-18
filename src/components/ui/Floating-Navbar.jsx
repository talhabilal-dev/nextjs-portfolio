"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({ navItems, className }) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let previous = scrollYProgress.getPrevious();
      let direction = previous !== undefined ? current - previous : 0;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(true);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex max-w-fit md:min-w-[70vw] lg:min-w-fit fixed z-[5000] top-10 inset-x-0 mx-auto px-10 py-3 rounded-xl border border-black/.1 items-center justify-center space-x-4 bg-[#9d4edd]/[0.1] backdrop-blur-3xl backdrop-saturate-200 dark:bg-[#9d4edd]/[0.1] dark:backdrop-blur-3xl dark:backdrop-saturate-200",
          className
        )}
        style={{
            backdropFilter: "blur(16px) saturate(180%)",
            backgroundColor: "#240046",
            borderRadius: "12px",
            border: "1px solid rgba(255, 255, 255, 0.125)",
          }}

      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.href}
            className={cn(
              "relative dark:text-neutral-100 items-center  flex space-x-1 text-neutral-600 dark:hover:text-neutral-500 hover:text-neutral-500 "
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>

            <span className=" text-sm !cursor-pointer">{navItem.name}</span>
          </Link>
        ))}
      </motion.div>
    </AnimatePresence>
  );
};
