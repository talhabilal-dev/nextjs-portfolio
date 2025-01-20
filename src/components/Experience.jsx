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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/svg-1.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Web Development Basics
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
                Learned foundational web development technologies (HTML, CSS,
                JavaScript).
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/svg-2.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Web Development Competition
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
                Secured 8th position in a web development competition.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/C++.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Data Structures and Algorithms
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
                Mastered DSA concepts in C++ to enhance problem-solving skills.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/python.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Python Basics
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
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
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/java.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Management System in Java
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
                Created a basic management system to gain hands-on experience with
                object-oriented programming principles.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/node.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Node.js and SQL
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
                Learned backend development with Node.js and SQL for scalable
                applications.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/backened.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Backend Developer Role
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
                Worked as a backend developer at a tech startup, gaining
                real-world experience.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/management.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
                Laboratory Management System
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
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
          Specializing in backend and full-stack development.
          </p>
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/youtube.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
              YouTube Backend Project
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
              Built a robust backend system with Node.js and MongoDB to specialize in backend skills.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/mongodb.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
              MongoDB Integration
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
              Gained expertise in NoSQL databases through practical projects.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/nextjs.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
              Next.js Full-Stack Development
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
              Mastered Next.js to create dynamic and scalable full-stack applications.
              </p>
            </div>
            <div className="rounded-lg min-h-[200px] w-full shadow-md items-center flex justify-around flex-col text-black dark:text-slate-100 bg-[#240046] p-4">
              <div>
                <Image src="/svg/learning.svg" width={80} height={80} alt="image" />
              </div>
              <h3 className="Heading font-bold text-base md:text-lg p-2">
              Continuous Learning
              </h3>
              <p className="text-xs md:text-base p-2 text-black dark:text-slate-400">
              Continuously improving and expanding my skills for backend and full-stack development.
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
