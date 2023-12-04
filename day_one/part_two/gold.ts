const fs = require("fs");
const data: string = fs.readFileSync("../data.txt", "utf8").toString();
const lines: string[] = data.split("\n");

const fixOverlaps = (line: string): string => {
  return line
    .replace(/oneight/g, "oneeight")
    .replace(/threeight/g, "threeeight")
    .replace(/fiveight/g, "fiveeight")
    .replace(/nineight/g, "nineeight")
    .replace(/twone/g, "twoone")
    .replace(/sevenine/g, "sevennine")
    .replace(/eightwo/g, "eighttwo");
};

const replaceTextWithNumbers = (line: string): string => {
  let fixedLine = fixOverlaps(line);
  let newLine = fixedLine;
  let replaced;
  do {
    replaced = false;
    newLine = newLine.replace(
      /(one|two|three|four|five|six|seven|eight|nine)/,
      (match) => {
        const numbers = {
          one: "1",
          two: "2",
          three: "3",
          four: "4",
          five: "5",
          six: "6",
          seven: "7",
          eight: "8",
          nine: "9",
        };
        if (match in numbers) {
          replaced = true;
          return numbers[match];
        }
        return match;
      }
    );
  } while (replaced);

  console.log(newLine);
  return newLine;
};

const concatenateDigits = (digits: RegExpMatchArray | null): number => {
  const firstDigit = digits[0];
  const lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;
  console.log(`${firstDigit}, ${lastDigit}`);

  return parseInt(firstDigit + lastDigit);
};

const sumOfNumbers: number = lines
  .map(replaceTextWithNumbers)
  .map((line) => line.match(/\d/g))
  .map(concatenateDigits)
  .reduce((sum, num) => sum + num, 0);

console.log(sumOfNumbers);
