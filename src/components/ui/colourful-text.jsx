"use client";
import React from "react";
import { motion } from "motion/react";

export function ColourfulText({
  text
}) {
  const colors = [
    "rgb(173, 216, 230)", 
    "rgb(144, 238, 144)",
    "rgb(255, 182, 193)", 
    "rgb(240, 230, 140)", 
    "rgb(221, 160, 221)", 
    "rgb(135, 206, 250)", 
    "rgb(250, 128, 114)", 
    "rgb(255, 160, 122)", 
    "rgb(238, 130, 238)", 
    "rgb(255, 215, 0)",   
];


  const [currentColors, setCurrentColors] = React.useState(colors);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...colors].sort(() => Math.random() - 0.5);
      setCurrentColors(shuffled);
      setCount((prev) => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return text.split("").map((char, index) => (
    <motion.span
      key={`${char}-${count}-${index}`}
      initial={{
        y: 0,
      }}
      animate={{
        color: currentColors[index % currentColors.length],
        y: [0, -3, 0],
        scale: [1, 1.01, 1],
        filter: ["blur(0px)", `blur(5px)`, "blur(0px)"],
        opacity: [1, 0.8, 1],
      }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
      }}
      className="inline-block font-sans tracking-tight">
      {char}
    </motion.span>
  ));
}
