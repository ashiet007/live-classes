import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ClassCard = ({ img, title }) => {
  const router = useRouter();
  return (
    <Card color="transparent" shadow={false} placeholder={"Card"}>
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder={"CardHeader"}
      >
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody className="p-0" placeholder={"CardBody"}>
        <a
          href="#"
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <Typography variant="h5" className="mb-2" placeholder={"Title"}>
            {title}
          </Typography>
        </a>
        <Typography
          className="mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam a augue
          nisi. Mauris hendrerit interdum mauris, ac semper eros fringilla sed.
        </Typography>
        <Button
          color="gray"
          size="sm"
          placeholder={"Button"}
          onClick={() => router.push("/tutors")}
        >
          Explore Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default ClassCard;
