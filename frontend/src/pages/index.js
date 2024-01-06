import { Inter } from "next/font/google";
import Hero from "@/components/Home/Hero";
import Skills from "@/components/Home/Skills";
import Projects from "@/components/Home/Projects";
import Resume from "@/components/Home/Resume";
import Testimonial from "@/components/Home/Testimonial";
import ContactForm from "@/components/Home/ContactForm";
import Meta from "@/components/Meta";

const inter = Inter({ subsets: ["latin"] });

const metaData = {
  title: "Live Classes",
  description: "Live Classes",
};
export default function Home() {
  return (
    <>
      <Meta title={metaData.title} description={metaData.description} />
      <Hero />
      <Skills />
      <Projects />
      <Resume />
      <Testimonial />
      <ContactForm />
    </>
  );
}
