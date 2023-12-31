import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Radio,
} from "@material-tailwind/react";
import React, { useState } from "react";
import IndividualTutor from "./IndividualTutor";
import InstituteTutor from "./InstituteTutor";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/router";
import Error from "../Ui/Error";
import { TutorType, UserType } from "@/config/contants";
import toast from "react-hot-toast";

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

const TutorSignUpForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    control,
  } = useForm();
  const [tutorType, setTutorType] = useState(TutorType.individual);
  const [open, setOpen] = useState(false);

  const onSubmit = async (data) => {
    setOpen(false);
    try {
      let response;
      let url = `/api/signup`;
      response = await axios.post(url, {
        user_type: UserType.tutor,
        tutor_type: tutorType,
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
          <div className="flex justify-between w-full py-2">
            <Radio
              name="type"
              label="I am an Individual"
              ripple={true}
              crossOrigin=""
              className="flex-initial"
              onClick={() => setTutorType(TutorType.individual)}
              defaultChecked={tutorType === TutorType.individual ? true : false}
            />
            <Radio
              name="type"
              label="I ran an Institute"
              ripple={false}
              crossOrigin=""
              className="flex-initial"
              onClick={() => setTutorType(TutorType.institute)}
              defaultChecked={tutorType === TutorType.institute ? true : false}
            />
          </div>
          {tutorType === TutorType.individual ? (
            <IndividualTutor
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
            />
          ) : (
            <InstituteTutor
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
            />
          )}
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

export default TutorSignUpForm;
