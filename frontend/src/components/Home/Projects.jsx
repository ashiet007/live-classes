import { Typography } from "@material-tailwind/react";
import dynamic from "next/dynamic";
const ProjectCard = dynamic(() => import("./ProjectCard"), { ssr: false });

const PROJECTS = [
  {
    img: "/image/blog-1.svg",
    title: "Class 12 Tuition - Physics by Venkata Vijaya Kumar Veluri",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
  {
    img: "/image/blog-1.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog2.svg",
    title: "Landing Page Development",
    desc: "Promotional landing page for a  fitness website Summer Campaign. Form development included.",
  },
  {
    img: "/image/blog3.svg",
    title: "Mobile App Development",
    desc: "Mobile app designed to help users discover and explore local restaurants and cuisines.",
  },
  {
    img: "/image/blog4.svg",
    title: "E-commerce development",
    desc: "Ecommerce website offering  access to the latest and greatest gadgets and accessories.",
  },
];

export function Projects() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h2"
          color="blue-gray"
          className="mb-4"
          placeholder={"MyProjects"}
        >
          Experience our live classes
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-6/12"
          placeholder={"Description"}
        >
          Live Classes provides engaging instructor led content for people
          everywhere and of all ages, without having to leave the house.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-20 md:grid-cols-2 xl:grid-cols-4">
        {PROJECTS.map((props, idx) => (
          <ProjectCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
