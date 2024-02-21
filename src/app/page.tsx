"use client";

import { useFormState } from "react-dom";
import { createUser } from "@/app/actions";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "react-component-library-monkey";
import data from "/Users/han/Desktop/data.json";
import { useEffect } from "react";
const initialState = {
  message: "",
};

export default function Signup() {
  const [state, formAction] = useFormState(createUser, initialState);
  const { control, reset } = useForm({ defaultValues: { name: "" } });

  useEffect(() => {
    reset();
  }, [data.length]);
  return (
    <>
      {data?.map((item, i) => (
        <div key={i}>{item?.name}</div>
      ))}
      <form action={formAction}>
        <Controller
          name={"name"}
          render={({ field }) => {
            return <Input {...field} />;
          }}
          control={control}
        />
        <Button>Sign up</Button>
      </form>
    </>
  );
}
