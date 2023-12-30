import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
            placeholder={"Portofolio"}
          >
            Join Live and <br /> Interactive Online Classes with the best Tutors
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
            placeholder={"PortfolioDescription"}
          >
            India&apos;s largest network of most trusted tutors and institutes.
            Over 55 lakh students rely on Live Classes, to fulfill their
            learning requirements across 1,000+ categories
          </Typography>
          <div className="grid">
            <Typography
              variant="small"
              className="mb-2 text-gray-900 font-medium"
              placeholder={"Email"}
            >
              Your email
            </Typography>
            <div className="mb-2 flex w-full flex-col gap-4 md:w-10/12 md:flex-row">
              {/* @ts-ignore */}
              <Input color="gray" label="Enter your email" size="lg" />
              <Button
                color="gray"
                className="w-full px-4 md:w-[12rem]"
                placeholder="Offer"
              >
                Book Demo
              </Button>
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal !text-gray-500"
            placeholder="TermsAndCondition"
          >
            Read my{" "}
            <a href="#" className="font-medium underline transition-colors">
              Terms and Conditions
            </a>
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="/image/image-7.svg"
          className="h-[36rem] w-full rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
