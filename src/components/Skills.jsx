import { HoverEffect } from "./ui/card-hover-effect";
import { FaNode, FaRegLightbulb, FaHandshake } from "react-icons/fa";
import { TbBrandNextjs, TbDatabaseExport } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";
import { GiStack } from "react-icons/gi";

export default function Skills() {
  return (
    <section className="py-8 md:py-16" id="about">
      <header className="text-center mb-8 z-50">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-20 font-sans bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600">
          What I Offer
        </h2>
        <p className="text-gray-900 dark:text-gray-300 text-base sm:text-lg">
          Explore my technical skills and expertise.
        </p>
      </header>

      <div className="max-w-5xl mx-auto px-4 sm:px-2 lg:px-8">
        <HoverEffect
          items={items}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
        />
      </div>
    </section>
  );
}

const items = [
  {
    title: "Advanced Node.js APIs",
    description:
      "Explore my experience building RESTful and GraphQL APIs with Node.js and Express.",
    icon: (
      <FaNode className="h-auto w-11 text-neutral-900 dark:text-neutral-100" />
    ),
  },
  {
    title: "Next.js Mastery",
    description:
      "Developing dynamic, server-rendered, and SEO-friendly web applications with the power of Next.js.",
    icon: (
      <TbBrandNextjs className="h-auto w-11 text-neutral-900 dark:text-neutral-100" />
    ),
  },
  {
    title: "Full-Stack Development",
    description:
      "Showcasing complete applications with Next.js, TailwindCSS, and backend integrations.",
    icon: (
      <GiStack className="h-auto w-11 text-neutral-900 dark:text-neutral-100" />
    ),
  },
  {
    title: "Database Expertise (SQL & NoSQL)",
    description:
      "Designing efficient relational (SQL) and non-relational (MongoDB) databases to meet diverse data handling needs.",
    icon: (
      <TbDatabaseExport className="h-auto w-11 text-neutral-900 dark:text-neutral-100" />
    ),
  },
  {
    title: "Cloud and Deployment",
    description:
      "Deploying and managing applications with cloud platforms like Vercel, AWS, and Heroku.",
    icon: (
      <IoCloudUploadOutline className="h-auto w-11 text-neutral-900 dark:text-neutral-100" />
    ),
  },
  {
    title: "Team Collaboration",
    description:
      "Building products with a focus on teamwork and effective communication.",
    icon: (
      <FaHandshake className="h-auto w-11 text-neutral-900 dark:text-neutral-100" />
    ),
  },
];
