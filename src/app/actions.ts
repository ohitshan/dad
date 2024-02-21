"use server";

import fs from "fs";
import data from "/Users/han/Desktop/data.json";

export async function createUser(prevState: any, formData: FormData) {
  fs.writeFileSync(
    "/Users/han/Desktop/data.json",
    JSON.stringify([...data, { name: formData.get("name") }])
  );

  return {
    message: "Please enter a valid email",
  };
}
