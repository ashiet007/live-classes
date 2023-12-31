import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Error from "../Ui/Error";

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

const SignInForm = ({ signIn }) => {
  const [error, setError] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { isSubmitting, errors },
  } = useForm();

  const onSubmit = async (data) => {
    const res = await signIn("credentials", {
      redirect: true,
      email: data.email,
      password: data.password,
      callbackUrl: `${window.location.origin}`,
    });
    if (res?.error) {
      setError(true);
    } else {
      setError(false);
    }
  };
  return (
    <Card className="mt-6 w-2/5" placeholder={"heading"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody placeholder={"card-body"}>
          <Alert
            variant="gradient"
            open={error}
            icon={<Icon />}
            action={
              <Button
                variant="text"
                color="white"
                size="sm"
                className="!absolute top-3 right-3"
                onClick={() => setError(true)}
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
              error={errors.password ? true : false}
            />
          </div>
          {errors.password && <Error />}
        </CardBody>
        <CardFooter className="pt-0 px-8 items-center" placeholder={"footer"}>
          <Button type="submit" placeholder={"signin"} disabled={isSubmitting}>
            Signin
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export default SignInForm;
