# AdventOfCode
The 2023 Advent Of Code challenges

## Day 1: Trebuchet?!
### Challenge - https://adventofcode.com/2023/day/1
### My understanding and approach to this challenge

Based on my understanding, the challenge is to parse each line in a list of strings, find the first and last numbers, and concatenate those two numbers. Once a list of concatenated numbers has been made, find the sum of all those values e.g 

| String Value  | First Number | Last Number | Combined Number |
|---------------|--------------|-------------|-----------------|
| 1abc2         | 1            | 2           | 12              |
| pqr3stu8vwx   | 3            | 8           | 38              |
| a1b2c3d4e5f   | 1            | 5           | 15              |
| treb7uchet    | 7            | 7           | 77              |

The total of the combined numbers above is `142`

### Solution
