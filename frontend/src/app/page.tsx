// components
import { Navbar, Footer } from "@/components";
import dynamic from "next/dynamic";
// sections
import Hero from "./hero";
import Skills from "./skills";
const Projects = dynamic(() => import("./projects"), { ssr: false });
import Resume from "./resume";
import Testimonial from "./testimonial";
import ContactForm from "./contact-form";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <ContactForm />
      <Footer />
    </>
  );
}
