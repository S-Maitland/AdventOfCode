import fs from "fs";

const data: string = fs.readFileSync("data.txt", "utf8").toString();

const lines: string[] = data.split("\n");
