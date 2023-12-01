var fs = require("fs");
var data = fs.readFileSync("data.txt", "utf8").toString();
var lines = data.split("\n");
var sumOfNumbers;
lines.forEach(function (line) {
    var numbers = Array.from(line.matchAll(/\d+/g));
    console.log(numbers);
});
