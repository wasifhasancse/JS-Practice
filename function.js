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

// Write a function to convert temperature from Celsius to Fahrenheit.
function celsiousToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}
console.log("Celsius to Fahrenheit:", celsiousToFahrenheit(25));

// Write a function to find the maximum number in an array of numbers.
function findNumber(num, find) {
  let count = 0;
  for (let i of num) {
    if (i === find) {
      count++;
    }
  }
  // return count;
  return `The number ${find} is found ${count}`;
}
console.log(findNumber([1, 2, 3, 4, 5, 1, 2, 3], 4));

// Write a function to count the number of vowels in a given string.
function countVowel(str) {
  let count = 0;
  let vowels = "aeiou";
  for (let i of str.toLowerCase()) {
    if (vowels.includes(i)) {
      count++;
    }
  }
  return count;
}
console.log("Number of vowels:", countVowel("Hello World"));

// Write a function to find the longest word in a given string.
function longestWord(str) {
  let wordArray = str.split(" ");
  let longestWord = wordArray[0];
  for (let i of wordArray) {
    if (i.length > longestWord.length) {
      longestWord = i;
    }
  }
  return longestWord;
}
console.log(
  "Longest word is:",
  longestWord("Web development is awesomeeeeeeee"),
);

// Generate a random number between 10 to 20.
function randomNumber() {
  return Math.round(Math.random() * 10) + 10;
}
console.log("Random Number:", randomNumber());

// Find the lowest number in the array below.
function findLowestNumber(numArray) {
  let lowestNumber = numArray[0];
  for (let i of numArray) {
    if (i < lowestNumber) {
      lowestNumber = i;
    }
  }
  return lowestNumber;
}
console.log("Lowest Number:", findLowestNumber([5, 2, 9, 1, 5, 6]));

// Write a function to find the smallest word in a given string.
function findSmallestWord(str) {
  let wordArray = str.split(" ");
  let smallestWord = wordArray[0];
  for (let i of wordArray) {
    if (i.length < smallestWord.length) {
      smallestWord = i;
    }
  }
  return smallestWord;
}
console.log(
  "Smallest word is:",
  findSmallestWord("Web development is awesomeeeeeeee"),
);

// Your task is to calculate the total budget required to buy electronics
//     laptop = 35000 tk
//     tablet = 15000 tk
//     mobile = 20000 tk
// Write a JavaScript function named calculateElectronicsBudget that takes in the number of laptop, tablets, and mobile and returns the total money required.
function calculateElectronicsBudget(laptop, tablet, mobile) {
  let laptopPrice = 35000;
  let tabletPrice = 15000;
  let mobilePrice = 20000;
  return laptop * laptopPrice + tablet * tabletPrice + mobile * mobilePrice;
}
console.log("Total Budget:", calculateElectronicsBudget(2, 3, 4) + " tk");

// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.
function findAveragePhonePrice(phoneArray) {
  let totalPrice = 0;
  let totalPhones = phoneArray.length;
  for (let i of phoneArray) {
    totalPrice += i.price;
  }
  return (totalPrice / totalPhones).toFixed(2);
}
console.log(
  "Average Phone Price:",
  findAveragePhonePrice([
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
  ]),
  "tk",
);

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
function calculateEmployeeSalary(employees) {
  let incrementedSalary = 0;
  let totalSalary = 0;
  for (let i of employees) {
    incrementedSalary = i.starting + i.experience * i.increment;
    totalSalary += incrementedSalary;
  }
  return totalSalary;
}
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
console.log(
  "Total salary has to be provided by the company in a month:",
  calculateEmployeeSalary(employees),
);

// Word Frequency Counter Statement: Count how many times each word appears in a sentence and return the result as an object.

function wordFrequency(sentence) {
  let word = {};
  for (let i of sentence.toLowerCase().split(" ")) {
    if (word.hasOwnProperty(i)) {
      word[i]++;
    } else {
      word[i] = 1;
    }
  }
  return word;
}
console.log(wordFrequency("I love JS and I love coding and Js is fun"));

// Function name: checkPassword(password)
// Rules:
// Length must be at least 8
// Must contain at least 1 number
// Must contain at least 1 uppercase letter
// Must not contain spaces
// Test case 1
// Input:  "helloWorld"
// Output:
// { valid: false, reasons: ["missing number"] }

// Test case 2
// Input:  "Hello123"
// Output: { valid: true, reasons: [] }
function checkPassword(password) {
  let reasons = [];

  // Check length
  if (password.length < 8) {
    reasons.push("Length must be at least 8");
  }

  // Check for number
  let hasNumber = false;
  for (let char of password) {
    if (char >= "0" && char <= "9") {
      hasNumber = true;
      break;
    }
  }
  if (!hasNumber) {
    reasons.push("Must contain at least 1 number");
  }

  // Check for uppercase0
  let hasUppercase = false;
  for (let char of password) {
    if (char >= "A" && char <= "Z") {
      hasUppercase = true;
      break;
    }
  }
  if (!hasUppercase) {
    reasons.push("Must contain at least 1 uppercase letter");
  }

  // Check for spaces
  if (password.includes(" ")) {
    reasons.push("Must not contain spaces");
  }

  return {
    valid: reasons.length === 0,
    reasons: reasons,
  };
}
console.log(checkPassword("helloWorld"));
console.log(checkPassword("Hello123"));
