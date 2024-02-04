import {
  Button,
  Card,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import React, { useState } from "react";
import {
  Controller,
  set,
  useController,
  useForm,
  useFormState,
} from "react-hook-form";
import { CollegeData } from "../../consts";

function ContactUs() {
  const {control,handleSubmit,formState: { errors },watch,} = useForm({});
  const onSubmit = (data) => console.log(data);
  const selectedCollege = watch("SelectCollege");
  console.log("Real-time values:", selectedCollege);

  return (
    <div className="h-screen grid place-items-center bg-gray-50">
      <Card color="transparent" shadow={false} className="p-7 bg-white">
        <Typography variant="h4" color="blue-gray" className="text-center">
          CONTACT US
        </Typography>
        <Typography
          color="gray"
          className="mt-1 font-normal text-center"
          
        >
          Nice to meet you! Enter your details to get connected.
        </Typography>
        <br />
        <form className="mb-4 w-[500px]" onSubmit={handleSubmit(onSubmit)}>
          <div className="my-3">
            <Controller
              name="name"
              rules={{
                required: "Name is required",
                minLength: {
                  value: 2,
                  message: "Name must be at least 2 characters long",
                },
              }}
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  label="Name"
                  {...field}
                  error={Boolean(errors?.name?.message)}
                />
              )}
            />
            {errors?.name?.message && (
              <p className="text-red-500 text-xs my-1">
                {errors?.name?.message}
              </p>
            )}
          </div>
          <Controller
            name="LastName"
            rules={{
              required: "Last Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters long",
              },
            }}
            control={control}
            render={({ field }) => (
              <Input
                size="lg"
                label="Last Name"
                {...field}
                error={Boolean(errors?.LastName?.message)}
              />
            )}
          />
          {console.log(errors)}
          {errors?.name?.message && (
            <p className="text-red-500 text-xs my-1">
              {errors?.LastName?.message}
            </p>
          )}
          <div className="my-3"></div>
          <div className="flex my-3 gap-2">
            <Controller
              name="Email"
              control={control}
              render={({ field }) => (
                <Input
                  size="lg"
                  label="Email"
                  {...field}
                  type="email"
                  error={false}
                />
              )}
            />
            <Controller
              name="mobile"
              control={control}
              render={({ field }) => (
                <Input size="lg" label="Mobile No." {...field} error={false} />
              )}
            />
          </div>
          <div className="my-3">
            <Controller
              name="SelectCollege"
              control={control}
              render={({ field }) => (
                <Select label="Select College" {...field} error={false}>
                  {CollegeData.map((item, index) => (
                    <Option key={index} value={index} className="my-2">
                      {item.CollegeName}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </div>
          <div className="my-3">
            <Controller
              name="Select Course"
              control={control}
              render={({ field }) => (
                <Select label="Select Course" {...field} error={false}>
                  {CollegeData[selectedCollege ? selectedCollege : 0]?.details?.map((item, index) => (
                    <Option
                      key={index}
                      value={item.CourseName}
                      className="my-2"
                    >
                      {item.CourseName}
                    </Option>
                  ))}
                </Select>
              )}
            />
          </div>
          <Button fullWidth loading={false} color="blue" type="submit">
            block level button
          </Button>
          ;
        </form>
      </Card>
    </div>
  );
}

export default ContactUs;
