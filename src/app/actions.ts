"use server";

import fs from "fs";
import data from "../../data.json";

export async function createUser(prevState: any, formData: FormData) {
  fs.writeFileSync(
    "data.json",
    JSON.stringify([...data, { name: formData.get("name") }])
  );

  return {
    message: "Please enter a valid email",
  };
}
