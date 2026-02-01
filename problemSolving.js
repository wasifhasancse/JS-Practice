// Problem - 1 Find the smallest integer in the array
function findSmallestInt(arr) {
  //your code here
  let small = arr[0];
  for (let i of arr) {
    if (i < small) {
      small = i;
    }
  }
  return small;
}
console.log(findSmallestInt([34, -15, 88, 2]));

// Problem - 2 Your goal is to write a function that removes the first and last characters of a string. You're given one parameter, the original string.
// Important: Your function should handle strings of any length ≥ 2 characters. For strings with exactly 2 characters, return an empty string.
function removeChar(str) {
  if (str.length <= 2) {
    return "''";
  }
  return str.slice(1, -1);
}
let originalString = "Javascript";
if (originalString.length >= 2) {
  console.log(
    "Original String:",
    originalString,
    "|",
    "Modified String:",
    removeChar(originalString),
  );
} else {
  console.log("String length is less than 2 characters.");
}

// Problem - 3 Given an array of integers, return a new array with each value doubled. For example: [1, 2, 3] --> [2, 4, 6]
function maps(x) {
  let n;
  let newArray = [];
  for (let i of x) {
    n = i * 2;
    newArray.push(n);
  }
  return newArray;
}
let threeArray = [1, 2, 3, 4, 5];
console.log(
  "Original Array:",
  threeArray,
  "|",
  "Modified Array:",
  maps(threeArray),
);

// Problem - 4 Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.
function getGrade(s1, s2, s3) {
  // Code here
  let score = s1 + s2 + s3;
  let avg = score / 3;
  if (avg >= 90 && avg <= 100) {
    return "A";
  } else if (avg >= 80 && avg < 90) {
    return "B";
  } else if (avg >= 70 && avg < 80) {
    return "C";
  } else if (avg >= 60 && avg < 70) {
    return "D";
  }
  return "F";
}
console.log("Grade is:", getGrade(85, 90, 92));

// --------------------------------------------------------------------------------
// Problem - 5
// Our football team has finished the championship.
// Our team's match results are recorded in a collection of strings. Each match is represented by a string in the format "x:y", where x is our team's score and y is our opponents score.
// For example: ["3:1", "2:2", "0:1", ...]
// Points are awarded for each match as follows:
// if x > y: 3 points (win)
// if x < y: 0 points (loss)
// if x = y: 1 point (tie)
// We need to write a function that takes this collection and returns the number of points our team (x) got in the championship by the rules given above.
// Notes:
// our team always plays 10 matches in the championship
// 0 <= x <= 4
// 0 <= y <= 4
// -----------------------------------------------------------------------------------------------
function points(games) {
  let scoreCheck;
  let points = 0;
  for (let i of games) {
    scoreCheck = i.split(":");
    if (scoreCheck[0] > scoreCheck[1]) {
      points += 3;
    } else if (scoreCheck[0] == scoreCheck[1]) {
      points += 1;
    } else {
      points += 0;
    }
  }
  return points;
}
let games = [
  "0:1",
  "0:2",
  "0:3",
  "0:4",
  "1:2",
  "1:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4",
];
console.log("Total Points:", points(games));

function showMessage(name) {
  return `Hello, ${name}. How are you?`;
}
console.log(showMessage("Wasif"));

// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
// [1, 2, 3, 4, 5] --> [-1, -2, -3, -4, -5]
// [1, -2, 3, -4, 5] --> [-1, 2, -3, 4, -5]
//   []-- > []
// -------------------------------------------------------------------------------
function invert(array) {
  let newArray = [];
  for (let i of array) {
    newArray.push(i * -1);
  }
  return newArray;
}
let setOfNumbers = [1, -2, 3, -4, 5];
console.log(
  "Original Array:",
  setOfNumbers,
  "|",
  "Inverted Array:",
  invert(setOfNumbers),
);

// let inputText = prompt('Enter the message: ');
// alert(`${inputText.slice(0, 30)} ... Total length: ${inputText.length}`);


// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
// -- ---------------------------------------------------------------
// function solution(str, ending) {
//   let check = str.slice(-ending.length);
//   if (ending == check) {
//     return true;
//   }
//   else if( ending === "" && str !== ""){
//     return true;
//   }
//   return false;
// }
function solution(str, ending) {
  return str.endsWith(ending);
}
console.log(solution("abcde", "cde")); 
console.log(solution("abcde", "abc"));
console.log(solution("empty ending", ""));
console.log(solution("", "empty string"));
console.log(solution("", ""));