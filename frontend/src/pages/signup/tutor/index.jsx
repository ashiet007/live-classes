import TutorSignUpForm from "@/components/SignUp/TutorSignupForm";
import { Typography } from "@material-tailwind/react";

const Tutor = () => {
  return (
    <>
      <section className="py-10 px-8">
        <div className="container mx-auto mb-10 text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder={"WhatIDo"}
          >
            Signup as a Tutor
          </Typography>
        </div>
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <TutorSignUpForm />
        </div>
      </section>
    </>
  );
};

export default Tutor;
