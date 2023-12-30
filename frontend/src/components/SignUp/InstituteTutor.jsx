import { Input, Option, Select } from "@material-tailwind/react";
import React from "react";
import countryCode from "@/data/countryCode.json";

const genders = [
  {
    id: 1,
    name: "Male",
    value: "male",
  },
  {
    id: 2,
    name: "Female",
    value: "female",
  },
];
const InstituteTutor = () => {
  return (
    <>
      <div className="flex w-full px-2 py-2 flex-col gap-6">
        <Input
          variant="outlined"
          label="Enter your institute name"
          crossOrigin=""
        />
      </div>
      <div className="flex w-full px-2 py-2 flex-col gap-6">
        <Input
          variant="outlined"
          label="Enter owner name or contact person's name"
          crossOrigin=""
        />
      </div>
      <div className="flex w-full px-2 py-2 flex-col gap-6">
        <Input variant="outlined" label="Enter email of owner" crossOrigin="" />
      </div>
      <div className="flex w-full px-2 py-2 gap-6">
        <div className="w-2/5">
          <Select label="Select" placeholder="">
            {countryCode.map((country) => {
              return (
                <Option
                  key={country.code}
                  value={country.dial_code}
                >{`${country.name}(${country.dial_code})`}</Option>
              );
            })}
          </Select>
        </div>
        <div className="w-3/5">
          <Input variant="outlined" label="Enter your number" crossOrigin="" />
        </div>
      </div>
      <div className="flex w-full px-2 py-2 flex-col gap-6">
        <Select label="Select gender" placeholder="">
          {genders.map((gender) => {
            return (
              <Option key={gender.id} value={gender.value}>
                {gender.name}
              </Option>
            );
          })}
        </Select>
      </div>
      <div className="flex w-full px-2 py-2 flex-col gap-6">
        <Input
          variant="outlined"
          label="Enter the main category you want to teach"
          crossOrigin=""
        />
      </div>
      <div className="flex w-full px-2 py-2 flex-col gap-6">
        <Input variant="outlined" label="Enter your location" crossOrigin="" />
      </div>
    </>
  );
};

export default InstituteTutor;
