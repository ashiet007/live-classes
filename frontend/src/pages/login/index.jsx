import Meta from "@/components/Meta";
import SignInForm from "@/components/Signin";
import { Typography } from "@material-tailwind/react";
import { signIn } from "next-auth/react";

const metaData = {
  title: "Live Classes: Login",
  description: "Login to Live Classes",
};
const Tutor = () => {
  return (
    <>
      <Meta title={metaData.title} description={metaData.description} />
      <section className="py-28 px-8">
        <div className="container mx-auto mb-10 text-center">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4"
            placeholder={"WhatIDo"}
          >
            Login to your account
          </Typography>
        </div>
        <div className="grid min-h-[140px] w-full place-items-center overflow-x-scroll rounded-lg p-6 lg:overflow-visible">
          <SignInForm signIn={signIn} />
        </div>
      </section>
    </>
  );
};

export default Tutor;
