"use client";

import { Typography } from "@material-tailwind/react";
import {
  RectangleGroupIcon,
  FingerPrintIcon,
  SwatchIcon,
  HashtagIcon,
  EyeIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/solid";
import { SkillCard } from "@/components";

const SKILLS = [
  {
    icon: RectangleGroupIcon,
    title: "Online classes",
    children:
      "Our classes are generally conducted through a learning management system, in which students can view their course syllabus and academic progress, as well as communicate with fellow students and their course instructor.",
  },
  {
    icon: FingerPrintIcon,
    title: "Tuition",
    children:
      "Tuition classes can really help a child learn better with the sole attention of the teacher on their needs and learning difficulties. We all know that learning styles and learning paces differ from child to child. There are other things to consider, like the temperament of the student and the teacher.",
  },
  {
    icon: SwatchIcon,
    title: "Languages",
    children:
      "We offer tailor-made cultural language courses. These courses are aimed at students who regard studies of foreign languages as studies in culture and therefore wish to combine the interest in learning a foreign language with the joy of reading and discussing literature.",
  },
  {
    icon: HashtagIcon,
    title: "Hobby Classes",
    children:
      "Catering to the varied interests of the young minds, a wide range of hobbies like  MUN/ Youth Parliament, Embroidery, Ramp walk, and Adventure Obstacle has been offered on the platter",
  },
  {
    icon: EyeIcon,
    title: "IT Courses",
    children:
      "Whether you're just starting out or already have some experience, we offer various IT courses designed to fit your needs. Curated from top educational institutions and industry leaders, our selection of IT courses aims to provide quality training for everyone—from individual learners seeking personal growth to corporate teams looking to upskill.",
  },
  {
    icon: DocumentTextIcon,
    title: "Exam Coaching",
    children:
      "Coaching are the most important part of any student's preparation for every type of Competitive or entrance exam. We will provide students with the essential guidance and support they need. This is mainly to increase their performance levels and focus on their goals by achieving them.",
  },
];

export function Skills() {
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder={"WhatIDo"}
        >
          Explore Categories
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full !text-gray-500 lg:w-10/12"
          placeholder={"Description"}
        >
          Explore our beautifully designed categories for all your needs
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
        {SKILLS.map((props, idx) => (
          <SkillCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default Skills;
