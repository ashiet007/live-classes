import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Radio,
} from "@material-tailwind/react";
import React, { useState } from "react";
import IndividualTutor from "./IndividualTutor";
import InstituteTutor from "./InstituteTutor";
import { useForm, Controller } from "react-hook-form";

const TutorType = {
  Individual: "individual",
  Institute: "institute",
};

const TutorSignUpForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm();
  const [tutorType, setTutorType] = useState(TutorType.Individual);

  const onSubmit = (data) => console.log(data);
  return (
    <Card className="mt-6 w-2/5" placeholder={"heading"}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <CardBody placeholder={"card-body"}>
          <div className="flex justify-between w-full py-2">
            <Radio
              name="type"
              label="I am an Individual"
              ripple={true}
              crossOrigin=""
              className="flex-initial"
              onClick={() => setTutorType(TutorType.Individual)}
              defaultChecked={tutorType === TutorType.Individual ? true : false}
            />
            <Radio
              name="type"
              label="I ran an Institute"
              ripple={false}
              crossOrigin=""
              className="flex-initial"
              onClick={() => setTutorType(TutorType.Institute)}
              defaultChecked={tutorType === TutorType.Institute ? true : false}
            />
          </div>
          {tutorType === TutorType.Individual ? (
            <IndividualTutor
              register={register}
              errors={errors}
              Controller={Controller}
              control={control}
            />
          ) : (
            <InstituteTutor register={register} errors={errors} />
          )}
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

export default TutorSignUpForm;