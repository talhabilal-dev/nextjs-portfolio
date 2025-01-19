import Image from "next/image";
import React from "react";
import { Timeline } from "./ui/Timeline";
import { timelineData } from "@/contants";

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
          <div className="grid grid-cols-2 gap-3">
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
            <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
            <h3 className="Heading font-bold">Web Development Basics</h3>

            <p className="text-sm p-2">Learned foundational web development technologies (HTML, CSS, JavaScript).</p>


          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
            <h3 className="Heading font-bold">Web Development Competition</h3>
            <p className="text-sm p-2">Secured 8th position in a web development competition.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Data Structures and Algorithms</h3>
          <p className="text-sm p-2">Mastered DSA concepts in C++ to enhance problem-solving skills.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Python Basics</h3>
          <p className="text-sm p-2">Explored Python programming for scripting and basic automation.</p>
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

          <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Management System in Java</h3>
          <p className="text-sm p-2">Built a basic management system to strengthen my object-oriented programming skills.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Node.js and SQL</h3>
          <p className="text-sm p-2">Learned backend development with Node.js and SQL for scalable applications.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Backend Developer Role</h3>
          <p className="text-sm p-2">Worked as a backend developer at a tech startup, gaining real-world experience.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Laboratory Management System</h3>
          <p className="text-sm p-2">Developed a comprehensive system in Node.js for efficient laboratory workflows.</p>
          </div>
          </div>
        </div>
      ),
    },
    {
      title: "Advancing Expertise (Mid 2024 - 2025)",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-xl font-bold mb-8">
          Specializing in backend and full-stack development.
          </p>
          <div className="grid grid-cols-2 gap-4">
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">YouTube Backend Project</h3>
          <p className="text-sm p-2">Built a robust backend system with Node.js and MongoDB to specialize in backend skills.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">MongoDB Integration</h3>
          <p className="text-sm p-2">Gained expertise in NoSQL databases through practical projects.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Next.js Full-Stack Development</h3>
          <p className="text-sm p-2">Mastered Next.js to create dynamic and scalable full-stack applications.</p>
          </div>
          <div className="rounded-lg h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] items-center flex  justify-around flex-col text-black dark:text-slate-100 bg-[#240046]">
          <div>
              <Image src="/images/exp1.svg" width={100} height={100} alt="image"></Image>
            </div>
          <h3 className="Heading font-bold">Continuous Learning</h3>
          <p className="text-sm p-2">Continuously improving and expanding my skills for backend and full-stack development.</p>
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
