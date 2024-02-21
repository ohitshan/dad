"use client";

import { useFormState } from "react-dom";
import { createUser } from "@/app/actions";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "react-component-library-monkey";
import data from "../../data.json";
import { useEffect } from "react";
const initialState = {
  message: "",
};

export default function Signup() {
  const [state, formAction] = useFormState(createUser, initialState);
  const { control, reset } = useForm({ defaultValues: { name: "" } });
  const dataWithType = data as Array<{ name: string }>;
  useEffect(() => {
    reset();
  }, [data.length]);
  return (
    <>
      {dataWithType?.map((item, i) => (
        <div key={i}>{item.name}</div>
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
