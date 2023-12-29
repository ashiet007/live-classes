/* eslint-disable @next/next/no-img-element */
"use client";

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image, { StaticImageData } from "next/image";
import React from "react";

type componentProps = {
  image: StaticImageData;
  title: string;
  action: () => void;
};

const SignUpOption = ({ image, title, action }: componentProps) => {
  return (
    <Card color="transparent" className="mt-6 w-96" placeholder="card">
      <CardHeader
        color="blue-gray"
        className="relative h-56"
        placeholder="card-header"
      >
        <Image src={image} alt="teacher" objectFit="contain" />
      </CardHeader>
      <CardBody placeholder="CardBody">
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2"
          placeholder="typography"
        >
          {title}
        </Typography>
      </CardBody>
      <CardFooter className="pt-0" placeholder="CardFooter">
        <Button placeholder="readmore" onClick={action}>
          Sign up
        </Button>
      </CardFooter>
    </Card>
  );
};

export default SignUpOption;
