// ---------------js-function-practice-tasks----------------
// Task -1: Take four parameters. Multiply the four numbers and then return the result
function multiplication(num1, num2, num3, num4) {
  return num1 * num2 * num3 * num4;
}
console.log("Multiplication of 4 numbers:", multiplication(15, 25, 2, 42));

// Task -2: Take a number as parameter. If the number is odd, multiply by 2. If the number is even, divide by 2. Return the result.
function taskTwo(num) {
  if (num % 2 !== 0) {
    return num * 2;
  }
  return num / 2;
}
let number = 7;
let number2 = 8;
console.log("Number is:", number, "Result:", taskTwo(number)); // Odd number
console.log("Number is:", number2, "Result:", taskTwo(number2)); // Even number

// Task -3: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
function make_avg(gvnArray, arraySize) {
  let sum = 0;
  for (let i = 0; i < gvnArray.length; i++) {
    sum += gvnArray[i];
  }
  return sum / arraySize;
}
let gvnArray = [1, 2, 3, 4, 5];
let arraySize = gvnArray.length;
console.log("Average is:", make_avg(gvnArray, arraySize));
// Alternative way to solve Task-3
function taskThree(taskArray) {
  let arraySize = taskArray.length;
  let sum = 0;
  for (let i of taskArray) {
    sum += i;
  }
  return sum / arraySize;
}
let taskArray = [5, 10, 15, 20, 25];
console.log("Array:", taskArray, "Average is:", taskThree(taskArray));

// Task -4: Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
function taskFour(binaryString) {
  let countZero = 0;
  let countOne = 0;
  let count = [];
  for (let i of binaryString) {
    if (i === "0") {
      countZero++;
    } else {
      countOne++;
    }
  }
  return (count = [countZero, countOne]);
}
let binaryString = "10010010100010";
let count = taskFour(binaryString);
console.log(
  "Binary String:",
  binaryString,
  "Number of zeros:",
  count[0],
  "Number of ones:",
  count[1],
);

// Task -5: Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd.
function evenOdd(taskFiveNumber) {
  if (taskFiveNumber % 2 === 0) {
    return "Even";
  }
  return "Odd";
}
let taskFiveNumber = 29;
console.log("The number", taskFiveNumber, "is", evenOdd(taskFiveNumber));
