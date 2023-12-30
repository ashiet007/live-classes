import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import React from "react";
import { useForm } from "react-hook-form";
import Error from "../Ui/Error";

const SignInForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  return (
    <Card className="mt-6 w-2/5" placeholder={"heading"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody placeholder={"card-body"}>
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
          <div className="flex w-full px-2 py-2 flex-col gap-6">
            <Input
              variant="outlined"
              {...register("password", { required: true })}
              label="Enter your password"
              crossOrigin=""
              type="password"
              error={errors.email ? true : false}
            />
          </div>
          {errors.email && <Error />}
        </CardBody>
        <CardFooter className="pt-0 px-8 items-center" placeholder={"footer"}>
          <Button type="submit" placeholder={"signin"}>
            Signin
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignInForm;
