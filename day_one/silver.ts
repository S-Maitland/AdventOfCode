const fs = require("fs");

const data: string = fs.readFileSync("data.txt", "utf8").toString();

const lines: string[] = data.split("\n");

let sumOfNumbers: number;

lines.forEach((line) => {
  const numbers: RegExpMatchArray[] = Array.from(line.matchAll(/\d+/g));

  console.log(numbers);
});
