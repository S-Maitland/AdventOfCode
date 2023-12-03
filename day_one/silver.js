var fs = require("fs");
var data = fs.readFileSync("data.txt", "utf8").toString();
var lines = data.split("\n");
var concatenateDigits = function (digits) {
    if (!digits)
        return 0;
    var firstDigit = digits[0];
    var lastDigit = digits.length > 1 ? digits[digits.length - 1] : firstDigit;
    return parseInt(firstDigit + lastDigit);
};
var sumOfNumbers = lines
    .map(function (line) { return line.match(/\d/g); })
    .map(concatenateDigits)
    .reduce(function (sum, num) { return sum + num; }, 0);
console.log(sumOfNumbers);
