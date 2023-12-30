/* eslint-disable @next/next/no-img-element */
import SignUpOption from "@/components/Signup/SignUpOption";
import { Typography } from "@material-tailwind/react";
import React from "react";

//Images
import avatar1 from "../../../public/image/avatar1.jpg";
import avatar3 from "../../../public/image/avatar3.jpg";
import { useRouter } from "next/router";

const SignUp = () => {
  const router = useRouter();
  return (
    <section className="py-28 px-8">
      <div className="container mx-auto mb-20 text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4"
          placeholder={"WhatIDo"}
        >
          What are you looking for
        </Typography>
      </div>
      <div className="container mx-auto flex flex-wrap flex-auto gap-4 justify-around border-r-slate-500 p-8 relative">
        <SignUpOption
          image={avatar3}
          title="I am looking to Teach"
          action={() => router.push("/signup/tutor")}
        />
        <SignUpOption
          image={avatar1}
          title="I am looking to Learn"
          action={() => router.push("/signup/tutor")}
        />
      </div>
    </section>
  );
};

export default SignUp;
