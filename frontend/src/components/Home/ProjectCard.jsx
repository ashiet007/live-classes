import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

export function ProjectCard({ img, title, price }) {
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
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          <Rating
            value={4}
            placeholder={"Rating"}
            readonly
            suppressHydrationWarning={true}
          />{" "}
          <div>(380 reviews)</div>
        </Typography>
        <Typography
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          <CalendarDaysIcon width={18} height={18} className="mr-1" />
          <div className="text-sm font-light">Tue, 26 Dec at 08:10pm IST</div>
        </Typography>
        <Typography
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          &#8377; &nbsp;{" "}
          <div className="text-sm font-light">{price || "2000"}</div>
        </Typography>
        <Typography
          className="flex mb-6 divide-x divide-green-600 row font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          <div className="font-normal text-sm mr-2 text-green-600">
            Class
            <br /> starts in
          </div>
          <div className="flex justify-around">
            <div className="flex flex-col ml-2 mr-2">
              <p className="font-normal text-sm">01</p>
              <p className="font-normal text-xs text-green-600">Days</p>
            </div>
            <div className="flex flex-col mr-2">
              <p className="font-normal text-sm">01</p>
              <p className="font-normal text-xs text-green-600">Hour</p>
            </div>
            <div className="flex flex-col mr-2">
              <p className="font-normal text-sm">44</p>
              <p className="font-normal text-xs text-green-600">Min</p>
            </div>
            <div className="flex flex-col mr-2">
              <p className="font-normal text-sm">11</p>
              <p className="font-normal text-xs text-green-600">Sec</p>
            </div>
          </div>
        </Typography>
        <Button color="gray" size="sm" placeholder={"Button"}>
          Register Now
        </Button>
      </CardBody>
    </Card>
  );
}

export default ProjectCard;
