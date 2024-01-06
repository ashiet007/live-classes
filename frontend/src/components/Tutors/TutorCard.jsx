import Image from "next/image";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
  Rating,
} from "@material-tailwind/react";
import {
  BriefcaseIcon,
  CheckBadgeIcon,
  CurrencyRupeeIcon,
  MapPinIcon,
  PhoneIcon,
} from "@heroicons/react/24/solid";
import { useRouter } from "next/router";

export function TutorCard({ tutorData }) {
  const router = useRouter();
  return (
    <Card color="transparent" shadow={false} placeholder={"Card"}>
      <CardHeader
        floated={false}
        className="mx-0 mt-0 mb-6 h-48"
        placeholder={"CardHeader"}
      >
        <Image
          src="/image/avatar1.jpg"
          alt={tutorData.title}
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
            {"Ramesh Kumar"}
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
          <MapPinIcon width={18} height={18} className="mr-1" />
          <div className="text-sm font-light">
            Sector 53 DLF Phase 5, Gurgaon
          </div>
        </Typography>
        <Typography
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          <CheckBadgeIcon width={18} height={18} className="mr-1" />
          <div className="text-sm font-light">Verified</div>
        </Typography>
        <Typography
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          <BriefcaseIcon width={18} height={18} className="mr-1" />
          <div className="text-sm font-light">3 years of Exp.</div>
        </Typography>
        <Typography
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          <CurrencyRupeeIcon width={18} height={18} className="mr-1" />
          <div className="text-sm font-light">
            {tutorData.price || "2000"} per hour
          </div>
        </Typography>
        <Typography
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          <PhoneIcon width={18} height={18} className="mr-1" />
          <div className="text-sm font-light">9867789867</div>
        </Typography>
        <Typography
          className="flex mb-1 font-normal !text-gray-500 items-center"
          placeholder={"Description"}
        >
          {" "}
          I am a Post Graduate Psychology Teacher, teaching class XI and XII for
          last more than 12 years now. I have Masters degree in Psychology and
          have...
        </Typography>
        <Button
          color="gray"
          size="sm"
          placeholder={"Button"}
          onClick={() => router.push("/tutors")}
        >
          Book a free demo
        </Button>
      </CardBody>
    </Card>
  );
}

export default TutorCard;
