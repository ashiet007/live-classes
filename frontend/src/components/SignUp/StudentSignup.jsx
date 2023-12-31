import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import Error from "../Ui/Error";
import Select from "react-select";
import countryCode from "@/data/countryCode.json";
import toast from "react-hot-toast";
import { useRouter } from "next/router";
import { UserType } from "@/config/contants";

const genders = [
  {
    label: "Male",
    value: "male",
  },
  {
    label: "Female",
    value: "female",
  },
];

function Icon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-6 w-6"
    >
      <path
        fillRule="evenodd"
        d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const StudentSignUp = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm();
  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    setOpen(false);
    try {
      let response;
      let url = `/api/signup`;
      response = await axios.post(url, {
        user_type: UserType.student,
        name: data.name,
        email: data.email,
        phone: data.mobileNumber,
        gender: data.gender,
        category: data.category,
        pincode: data.location,
        password: data.password,
      });

      if (response.data && response.status === 200) {
        toast.success(
          "You have successfully signed up. Redirecting to the login page..."
        );
        setTimeout(() => {
          router.push("/login");
        }, 500);
      }
    } catch (error) {
      console.log(error);
      setOpen(true);
    }
  };

  return (
    <Card className="mt-6 w-2/5" placeholder={"heading"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody placeholder={"card-body"}>
          <Alert
            variant="gradient"
            open={open}
            icon={<Icon />}
            action={
              <Button
                variant="text"
                color="white"
                size="sm"
                className="!absolute top-3 right-3"
                onClick={() => setOpen(false)}
              >
                Close
              </Button>
            }
          >
            Sorry, something went wrong please try again.
          </Alert>
          <div className="flex w-full px-2 py-2 flex-col gap-6">
            <Input
              variant="outlined"
              {...register("name", { required: true })}
              label="Enter your full name"
              crossOrigin=""
              error={errors.name ? true : false}
            />
          </div>
          {errors.name && <Error />}
          <div className="flex w-full px-2 py-2 flex-col gap-6">
            <Input
              variant="outlined"
              {...register("email", { required: true })}
              label="Enter your email"
              crossOrigin=""
              error={errors.email ? true : false}
            />
          </div>
          {errors.email && <Error />}
          <div className="flex w-full px-2 py-2 gap-6">
            <div className="w-2/5">
              <Controller
                name="countryCode"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <Select
                    placeholder="Select code..."
                    options={countryCode}
                    value={countryCode.find((c) => c.value === value)}
                    onChange={(val) => onChange(val.value)}
                  />
                )}
                rules={{ required: false }}
              />
            </div>
            <div className="w-3/5">
              <Input
                variant="outlined"
                {...register("mobileNumber", { required: true })}
                label="Enter your number"
                crossOrigin=""
                error={errors.mobileNumber ? true : false}
              />
            </div>
          </div>
          {errors.mobileNumber && <Error />}
          <div className="flex w-full px-2 py-2 flex-col gap-6">
            <Controller
              name="gender"
              control={control}
              render={({ field: { onChange, value } }) => (
                <Select
                  placeholder="Select gender..."
                  options={genders}
                  value={genders.find((c) => c.value === value)}
                  onChange={(val) => onChange(val.value)}
                />
              )}
              rules={{ required: true }}
            />
          </div>
          {errors.gender && <Error />}
          <div className="flex w-full px-2 py-2 flex-col gap-6">
            <Input
              variant="outlined"
              label="Enter the main category you want to Learn"
              crossOrigin=""
              {...register("category", { required: true })}
              error={errors.category ? true : false}
            />
          </div>
          {errors.category && <Error />}
          <div className="flex w-full px-2 py-2 flex-col gap-6">
            <Input
              variant="outlined"
              label="Enter your location"
              crossOrigin=""
              {...register("location", { required: true })}
              error={errors.location ? true : false}
            />
          </div>
          {errors.location && <Error />}
          <div className="flex w-full px-2 py-2 flex-col gap-6">
            <Input
              variant="outlined"
              {...register("password", { required: true })}
              label="Enter your password"
              crossOrigin=""
              type="password"
              error={errors.password ? true : false}
            />
          </div>
          {errors.password && <Error />}
        </CardBody>
        <CardFooter className="pt-0 px-8 items-center" placeholder={"footer"}>
          <Button type="submit" placeholder={"signup"} disabled={isSubmitting}>
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default StudentSignUp;
