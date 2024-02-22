"use server";

import fs from "fs";

export async function createUser(prevState: any, formData: FormData) {
  fs.writeFile("/Users/han/sample2.json", "file", (err) => {
    console.log(err);
  });
  // const directory = fs.existsSync("/Users/han/Desktop/data.json");
  // let jsonData = [];
  // if (!directory) {
  //   const data = fs.readFileSync("/Users/han/Desktop/data.json").toString();
  //   jsonData = JSON.parse(data);
  // } else {
  //   fs.writeFileSync("/Users/han/Desktop/data.json", "[]");
  // }
  // fs.writeFileSync(
  //   "/Users/han/Desktop/data.json",
  //   JSON.stringify([...jsonData, { name: formData.get("name") }])
  // );

  return {
    // data: [...jsonData, { name: formData.get("name") }],
  };
}
