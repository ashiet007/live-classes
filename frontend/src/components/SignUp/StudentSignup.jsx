import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import React from "react";
import { useForm, Controller } from "react-hook-form";
import Error from "../Ui/Error";
import Select from "react-select";
import countryCode from "@/data/countryCode.json";

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

const StudentSignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Card className="mt-6 w-2/5" placeholder={"heading"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody placeholder={"card-body"}>
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
        </CardBody>
        <CardFooter className="pt-0 px-8 items-center" placeholder={"footer"}>
          <Button type="submit" placeholder={"signup"}>
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default StudentSignUp;
