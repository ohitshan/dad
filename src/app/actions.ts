"use server";

import fs from "fs";

export async function createUser(prevState: any, formData: FormData) {
  const data = fs.readFileSync("/Users/han/Desktop/data.json").toString();
  const jsonData = JSON.parse(data);
  fs.writeFileSync(
    "/Users/han/Desktop/data.json",
    JSON.stringify([...jsonData, { name: formData.get("name") }])
  );

  return {
    data: [...jsonData, { name: formData.get("name") }],
  };
}
