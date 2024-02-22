"use client";

import { useFormState } from "react-dom";
import { createUser } from "@/app/actions";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Button, Input } from "react-component-library-monkey";

import { useEffect } from "react";
const initialState = {
  data: [],
};

export default function Signup() {
  const [state, formAction] = useFormState(createUser, initialState);
  const { control, reset } = useForm({ defaultValues: { name: "" } });
  return (
    <>
      <div>
        {/* {state.data?.map((item, i) => (
          <div key={i}>{item.name}</div>
        ))} */}
      </div>
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
