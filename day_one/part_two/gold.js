var fs = require("fs");
var data = fs.readFileSync("../data.txt", "utf8").toString();
var lines = data.split("\n");
var fixOverlaps = function (line) {
    return line
        .replace(/oneight/g, "oneeight")
        .replace(/threeight/g, "threeeight")
        .replace(/fiveight/g, "fiveeight")
        .replace(/nineight/g, "nineeight")
        .replace(/twone/g, "twoone")
        .replace(/sevenine/g, "sevennine")
        .replace(/eightwo/g, "eighttwo");
};
var replaceTextWithNumbers = function (line) {
    var fixedLine = fixOverlaps(line);
    var newLine = fixedLine;
    var replaced;
    do {
        replaced = false;
        newLine = newLine.replace(/(one|two|three|four|five|six|seven|eight|nine)/, function (match) {
            var numbers = {
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
        });
    } while (replaced);
    console.log(newLine);
    return newLine;
};
var concatenateDigits = function (digits) {
    var firstDigit = digits[0];
    var lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;
    console.log("".concat(firstDigit, ", ").concat(lastDigit));
    return parseInt(firstDigit + lastDigit);
};
var sumOfNumbers = lines
    .map(replaceTextWithNumbers)
    .map(function (line) { return line.match(/\d/g); })
    .map(concatenateDigits)
    .reduce(function (sum, num) { return sum + num; }, 0);
console.log(sumOfNumbers);
