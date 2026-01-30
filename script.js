// Reverse a Word Input: "hello" Output: "olleh"
let a = "Hello";
console.log(a.split("").reverse().join(""));

// First and Last Character of a String Input: "JavaScript" Output: "J T"
a = "JavaScript";
let b = a[0];
let c = a[a.length - 1];
let d = b + " " + c;
console.log(d);
console.log(a.charAt(0), a.charAt(a.length - 1));

// Replace a Substring Input: "JavaScript" Output: "JScript"
b = a.replace("Java", "J");
console.log(b);

// Extract Username from Email Input: "
a = "wasif@gmail.com";
b = a.slice(0, a.indexOf("@"));
// b = a.split('@'); console.log(b[0]);
console.log(b);

// Check if "JavaScript" starts with "Java"
b = a.startsWith("wasif");
console.log(b);

// Count Vowels Input: "developer" Output: 4
a = "developer";
let count = 0;
for (let i = 0; i < a.length; i++) {
  let char = a[i].toLowerCase();
  if (
    char === "a" ||
    char === "e" ||
    char === "i" ||
    char === "o" ||
    char === "u"
  ) {
    count++;
  }
}
console.log(count);
// let count = a.match(/[aeiou]/gi).length; console.log(count);

// Calculate Percentage Input: 50 out of 200 Output: 25%
let obtained = 20;
let total = 10;
let percentage = (obtained * total) / 100;
console.log(percentage + "%");

// Swap Two Numbers Input: a = 5, b = 10 Output: a = 10, b = 5
let x = 5568;
let y = 10254;
let temp = x;
x = y;
y = temp;
console.log("x = " + x + ", y = " + y);
// [x, y] = [y, x]; console.log('a = ' + x + ', b = ' + y);

// Find the Last Digit of a Number Input: 12345 Output: 5
a = x.toString();
console.log(a[a.length - 1]);

// Convert String to Number and Add Input: a = "10", b = 5 Output: 15
a = "10";
b = 5;
console.log(a + b);
c = parseInt(a) + b;
console.log(c);

a = [1, 2, 3, 4, 5];
b = [];
for (let num of a) {
  if (num % 2 === 0) {
    console.log(num + " is even");
    b.push(num);
  }
}
console.log(b);
//use of includes() method
a = ["banana", "apple", "orange", "mango"];
b = a.includes("apple");
console.log(b);

// Object Manipulation
const colors = {
  red: "#ff0000",
  green: "#00ff00",
  blue: "#0000ff",
  "golden rod": "#daa520",
};
// Adding a new property to the colors object
colors["passenger capacity"] = 5;
console.log(colors);
// Adding a nested object as a property
colors["car type"] = {
  sedan: true,
  suv: false,
  coupe: true,
};
console.log(colors);

// Find the lowest number in the array below. Input: [12, 45, 78, 34, 23, 89, 90] Output: 12
a = [12, 45, 78, 34, 23, 89, 90];
let min = a[0];
for (let i = 0; i < a.length; i++) {
  if (a[i] < min) {
    min = a[i];
  }
}
console.log(min);

// Find the friend with the smallest name.
const heights2 = ["rahim", "robin", "rafi", "ron", "rashed", "jon"];
let minLength = heights2[0].length;
let smallestNames = [];
for (let i = 1; i < heights2.length; i++) {
  if (heights2[i].length < minLength) {
    minLength = heights2[i].length;
    smallestNames = [heights2[i]];
  } else if (heights2[i].length === minLength) {
    smallestNames.push(heights2[i]);
  }
}
console.log(smallestNames);

// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.
const employees = [
  { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
  { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
  { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
  { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
console.log(employees);
let yearlyIncrement;
let incrementSalary;
let totalSalary = 0;
for (let em of employees) {
  yearlyIncrement = em["experience"] * em["increment"];
  incrementSalary = em["starting"] + yearlyIncrement;
  totalSalary += incrementSalary;
  em["starting"] = incrementSalary;
}
console.log(employees);
console.log("Total Salary Provided by the company in a month: ", totalSalary);

// Accessing Nested Object Properties physics marks as output.
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
console.log(student["physics"]["marks"]);
// Count the number of properties or Keys.
console.log(Object.keys(student).length);
console.log(Object.values(student));
// Adding a new nasted object in a object
student["physics"]["chemistry"] = {
  subject: "HSC Chemistry",
  author: "Firoz Mahmud",
  marks: 35,
};
console.log(student);

// Iterate through Object Properties and log key, value and type of value.
let enEmployee = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
for (let key in enEmployee) {
  console.log(
    "key:",
    key,
    "|",
    "value:",
    enEmployee[key],
    "|",
    "type:",
    typeof enEmployee[key],
  );
}

// Reverse each word in an array of words.
a = ["apple", "banana", "orange", "mango", "grape"];
c = [];
for (let i of a) {
  b = i.split("").reverse().join("");
  c.push(b);
}
console.log(a);
console.log(c);

// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
for (let i = 1; i <= 100; i++) {
  let root = Math.floor(Math.sqrt(i));
  console.log("Square root of", i, "is", root);

  if (root * root === i && i !== 1) {
    console.log("Square number found:", i);
    break;
  } else {
    console.log(i);
  }
}
// another way:
for (let i = 1; i < 100; i++) {
  if (Number.isInteger(Math.sqrt(i)) && i !== 1) {
    break;
  } else {
    console.log(i);
  }
}