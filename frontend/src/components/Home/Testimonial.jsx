import React from "react";
import Image from "next/image";
import { Typography, Card, CardBody, Avatar } from "@material-tailwind/react";

export function Testimonial() {
  const [active, setActive] = React.useState(3);

  return (
    <section className="py-12 px-8 lg:py-24">
      <div className="container max-w-screen-lg mx-auto">
        <div className="container mx-auto mb-20 text-center">
          <Typography
            variant="h2"
            color="blue-gray"
            className="mb-4"
            placeholder={"WhatClientsSay"}
          >
            Recent Reviews from Students
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto w-full px-4 font-normal !text-gray-500 lg:w-8/12"
            placeholder={"Description"}
          >
            Discover what students have to say about their experiences working
            with me. Our student&apos;s satisfaction is our greatest
            achievement!
          </Typography>
        </div>
        <Card
          color="transparent"
          shadow={false}
          className="py-8 lg:flex-row"
          placeholder={"Card"}
        >
          <CardBody
            className="w-full lg:gap-10 h-full lg:!flex justify-between"
            placeholder={"CardBody"}
          >
            <div className="w-full mb-10 lg:mb-0">
              <Typography
                variant="h3"
                color="blue-gray"
                className="mb-4 font-bold lg:max-w-xs"
                placeholder={"MobileAppDevelopment"}
              >
                Microsoft Excel Training
              </Typography>
              <Typography
                className="mb-3 w-full lg:w-8/12 font-normal !text-gray-500"
                placeholder={"Description"}
              >
                Great institute to learn many computer courses required to be
                competitive in current market at a very affordable prices. I
                completed Advanced Excel course here and was very satisfied with
                the effort and energy put by the tutor in making sure that all
                my doubts are cleared.
              </Typography>
              <Typography
                variant="h6"
                color="blue-gray"
                className="mb-0.5"
                placeholder={"TechnicalManage"}
              >
                Michael - Technical Manager
              </Typography>
              <Typography
                variant="small"
                className="font-normal mb-5 !text-gray-500"
                placeholder={"Logo"}
              >
                Reviewed by Naveen
              </Typography>
              <div className="flex items-center gap-4">
                <Avatar
                  variant="rounded"
                  src="/image/avatar1.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 1 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(1)}
                  placeholder={"Avatar"}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100 "></div>
                <Avatar
                  variant="rounded"
                  src="/image/avatar2.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 2 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(2)}
                  placeholder={"Avatar"}
                />
                <div className="w-[1px] h-[36px] bg-blue-gray-100" />
                <Avatar
                  variant="rounded"
                  src="/image/avatar3.jpg"
                  alt="spotify"
                  size="sm"
                  className={`cursor-pointer ${
                    active === 3 ? "opacity-100" : "opacity-50"
                  }`}
                  onClick={() => setActive(3)}
                  placeholder={"Avatar"}
                />
              </div>
            </div>
            <div className="h-[21rem] rounded-lg w-full sm:w-[18rem] shrink-0">
              <Image
                width={768}
                height={768}
                alt="testimonial image"
                src={`/image/avatar${active}.jpg`}
                className="h-full rounded-lg w-full object-cover"
              />
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default Testimonial;
