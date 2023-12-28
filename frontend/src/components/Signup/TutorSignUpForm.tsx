import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Input,
  Typography,
} from "@material-tailwind/react";
import React from "react";

const TutorSignUpForm = () => {
  return (
    <Card className="mt-6 w-96" placeholder={"heading"}>
      <CardBody placeholder={"card-body"}>
        <div className="flex w-72 flex-col gap-6">
          <Input variant="outlined" label="Outlined" placeholder="Outlined" />
        </div>
      </CardBody>
      <CardFooter className="pt-0" placeholder={"footer"}>
        <Button placeholder={"signup"}>Read More</Button>
      </CardFooter>
    </Card>
  );
};

export default TutorSignUpForm;
