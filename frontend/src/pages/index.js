import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import Resume from "@/components/Home/Resume";
import Testimonial from "@/components/Home/Testimonial";
import ContactForm from "@/components/Home/ContactForm";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <ContactForm />
    </>
  );
}

