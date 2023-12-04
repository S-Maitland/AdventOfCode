const fs = require("fs");
const data: string = fs.readFileSync("../data.txt", "utf8").toString();
const lines: string[] = data.split("\n");

const concatenateDigits = (digits: RegExpMatchArray | null): number => {
  if (!digits) return 0;
  const firstDigit = digits[0];
  const lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;
  return parseInt(firstDigit + lastDigit);
};

const sumOfNumbers: number = lines
  .map((line) => line.match(/\d/g))
  .map(concatenateDigits)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfNumbers);
