import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Timeline";

export default function Experience() {
  const data = [
    {
      title: "The Beginning (2023)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-bold mb-8">
            My journey into development began, laying the foundation with
            essential skills and small projects.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Web Development Basics
              </h3>
              <p className="text-xs md:text-sm p-2">
                Learned foundational web development technologies (HTML, CSS,
                JavaScript).
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Web Development Competition
              </h3>
              <p className="text-xs md:text-sm p-2">
                Secured 8th position in a web development competition.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Data Structures and Algorithms
              </h3>
              <p className="text-xs md:text-sm p-2">
                Mastered DSA concepts in C++ to enhance problem-solving skills.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Python Basics
              </h3>
              <p className="text-xs md:text-sm p-2">
                Explored Python programming for scripting and basic automation.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Building Career Skills (Early 2024)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-bold mb-8">
            Laid the groundwork for my professional career with diverse projects.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Management System in Java
              </h3>
              <p className="text-xs md:text-sm p-2">
                Built a basic management system to strengthen my object-oriented
                programming skills.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Node.js and SQL
              </h3>
              <p className="text-xs md:text-sm p-2">
                Learned backend development with Node.js and SQL for scalable
                applications.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Backend Developer Role
              </h3>
              <p className="text-xs md:text-sm p-2">
                Worked as a backend developer at a tech startup, gaining
                real-world experience.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Laboratory Management System
              </h3>
              <p className="text-xs md:text-sm p-2">
                Developed a comprehensive system in Node.js for efficient
                laboratory workflows.
              </p>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Building Career Skills (Early 2024)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-bold mb-8">
            Laid the groundwork for my professional career with diverse projects.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2  gap-4">
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Management System in Java
              </h3>
              <p className="text-xs md:text-sm p-2">
                Built a basic management system to strengthen my object-oriented
                programming skills.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Node.js and SQL
              </h3>
              <p className="text-xs md:text-sm p-2">
                Learned backend development with Node.js and SQL for scalable
                applications.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Backend Developer Role
              </h3>
              <p className="text-xs md:text-sm p-2">
                Worked as a backend developer at a tech startup, gaining
                real-world experience.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/images/exp1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg">
                Laboratory Management System
              </h3>
              <p className="text-xs md:text-sm p-2">
                Developed a comprehensive system in Node.js for efficient
                laboratory workflows.
              </p>
            </div>
          </div>
        </div>
      ),
    },
  ];
  
  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}
