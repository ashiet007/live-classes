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

const ClassCard = ({ classData }) => {
  const router = useRouter();
  return (
    <Card color="transparent" shadow={false} placeholder={"Card"}>
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder={"CardHeader"}
      >
        <Image
          src={classData.image}
          alt={classData.name}
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
            {classData.name}
          </Typography>
        </a>
        <Typography
          className="mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          {classData.description.slice(0, 200)}...
        </Typography>
        <Button
          color="gray"
          size="sm"
          placeholder={"Button"}
          onClick={() =>
            router.push({
              pathname: "/tutors",
              query: { classId: classData.id },
            })
          }
        >
          Explore Now
        </Button>
      </CardBody>
    </Card>
  );
};

export default ClassCard;
