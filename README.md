# AdventOfCode

The 2023 Advent Of Code challenges

## Day 1: Trebuchet?!

### Challenge - https://adventofcode.com/2023/day/1

### My understanding and approach to this challenge

Based on my understanding, the challenge is to parse each line in a list of strings, find the first and last numbers, and concatenate those two numbers. Once a list of concatenated numbers has been made, find the sum of all those values e.g

| String Value | First Number | Last Number | Combined Number |
| ------------ | ------------ | ----------- | --------------- |
| 1abc2        | 1            | 2           | 12              |
| pqr3stu8vwx  | 3            | 8           | 38              |
| a1b2c3d4e5f  | 1            | 5           | 15              |
| treb7uchet   | 7            | 7           | 77              |

The total of the combined numbers above is `142`

### Part One Solution

I have put the data that the challenge gives us ( a list of strings) into a `data.txt` file that I can call on to parse line by line, and push the concatenated numbers into an array to be summed at the end.

### Part Two Solution

Before running the code, we need to take care of any ambiguity on things like "eightwo", this should be taken to mean "read this as '82'", whereas initially i took it to mean, during my replacements for text to numbers, "eightwo" becomes "8wo" in the string, which is incorrect!

I solved by adding a function that looks for the possible combinations of text overlaps and then replaced them with what they need to be in order to not hinder the performance of replacing text rep of numbers with actual numbers.
