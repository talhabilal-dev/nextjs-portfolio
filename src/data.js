import { FaNode, FaHandshake } from "react-icons/fa";
import { TbBrandNextjs, TbDatabaseExport } from "react-icons/tb";
import { IoCloudUploadOutline } from "react-icons/io5";
import { GiStack } from "react-icons/gi";

export const navItems = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Contact",
    href: "#contact",
  },
];

export const skills = [
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

export const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

export const approachSteps = [
  {
    id: 1,
    title: "Laying the foundation for successful development",
    desc: "Identifying goals and breaking down the problem into clear requirements.",
    className: "md:col-span-2",
    thumbnail: "/svg/exp1.svg",
  },
  {
    id: 2,
    title: "Crafting a roadmap for efficient execution",
    desc: "Designing a roadmap, architecture, and selecting the right tech stack.",
    className: "md:col-span-2",
    thumbnail: "/svg/exp4.svg",
  },
  {
    id: 3,
    title: "Bringing ideas to life with precision",
    desc: "Building features with clean code and ensuring quality through rigorous testing.",
    className: "md:col-span-2",
    thumbnail: "/svg/exp3.svg",
  },
  {
    id: 4,
    title: "Delivering lasting results and support",
    desc: "Deploying the solution smoothly and providing long-term support.",
    className: "md:col-span-2",
    thumbnail: "/svg/exp2.svg",
  },

];

export const projects = [
  {
    id: 1,
    title: "Test Project-1",
    des: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/images/img-1.jpg",
    iconLists: ["/svg/node.svg", "/svg/tailwind.svg", "/svg/typescript.svg", "/svg/three.svg", "/svg/framer.svg"],
    link: "/",
  },
  {
    id: 2,
    title: "Test Project-2",
    des: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/images/img-2.jpg",
    iconLists: ["/svg/nextjs.svg", "/svg/tailwind.svg", "/svg/typescript.svg", "/svg/framer.svg", "/svg/mongodb.svg"],
    link: "/",
  },
  {
    id: 3,
    title: "Test Project-3",
    des: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    img: "/images/img-3.png",
    iconLists: ["/svg/node.svg", "/svg/tailwind.svg", "/svg/typescript.svg", "/svg/three.svg", "/svg/mongodb.svg"],
    link: "/",
  },
];
