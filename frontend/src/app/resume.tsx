"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ArrowRightIcon,
  UserGroupIcon,
  CalendarDaysIcon,
  CreditCardIcon,
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: UserGroupIcon,
    children: "Book a Free Demo Class with a Tutor.",
  },
  {
    icon: CalendarDaysIcon,
    children: "Attend the Demo class as scheduled.",
  },
  {
    icon: CreditCardIcon,
    children: "Use Live Classes SecurePay to pay and start your Classes.n",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray" placeholder={"MyResume"}>
            How Live Classes Works?
          </Typography>
          <Typography
            className="mb-4 mt-3 w-9/12 font-normal !text-gray-500"
            placeholder={"Description"}
          >
            Join Live Classes and connect with more than 55 Lakh students on the
            platform. Create a strong profile and grow your network.
          </Typography>
          <Button
            variant="text"
            color="gray"
            className="flex items-center gap-2"
            placeholder={"View More"}
          >
            view more
            <ArrowRightIcon
              strokeWidth={3}
              className="h-3.5 w-3.5 text-gray-900"
            />
          </Button>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
