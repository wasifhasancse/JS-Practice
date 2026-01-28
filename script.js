/* 
Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)
*/

// for (let i = 1; i <= 100; i++) {
//   let sqrt = Math.sqrt(i);
//   if (sqrt === Math.floor(sqrt)) {
//     break;
//   }
// }

// num1 > num2
//   ? ((result = num1 * num1), console.log("Multiplication is:", result))
//   : ((result = num1 + num2), console.log("Addition is:", result));

let i = 0;

// while(i<50){
//   i++;
//   if (i % 5 === 1) {
//     continue;
//   }
//   console.log(i);
// }



// Check if message "Hello" exists.
let messages = ["Hi", "Hello", "Hey"];

for (let i = 0; i < messages.length; i++) {
  if (messages[i] === "Hello") {
    console.log("Hello exists.");
  }
  else {
    continue;
  }
}


// Products with quantity 0 are out of stock.
let stock = [5, 0, 3, 0, 7];

for (let i = 0; i < stock.length; i++){
  if (stock[i] === 0) {
    console.log("Product out of stock");
  }
  else {
    console.log("Product in stock", stock[i]);
  }
} 

// task 1
// Write a JavaScript code to reverse the array colors without using the reverse method.

const color = ["red", "blue", "green", "yellow", "purple"];

let reversedColor = [];
for (let i = color.length - 1; i >= 0; i--) {
  reversedColor.push(color[i]);
}
console.log(reversedColor);

// task 2
// Write a JavaScript code to get the even numbers from an array using any looping technique.
const numbers = [10, 20, 33, 40, 50];
for (let i = 0; i < numbers.length; i++) {
  if(numbers[i] % 2 === 0){
    console.log(numbers[i], "is even");
  }
  else {
    console.log(numbers[i], "is odd");
  }
}

// task 3
// Use a for...of loop to concatenate all the elements of an array into a single string.
var names = ["Tom", "Tim", "Tin", "Tik"];
let concatenateName = "";
for (let name of names) {
  concatenateName += name;
}
// for (let i = 0; i< names.length; i++) {
//   concatenateName += names[i];
// }
console.log(concatenateName);

// task 4
// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output 
const statement = "I am a hard working person";
let words = statement.split(" ");
// statement.split(" "): This converts the string into an array of words by breaking it apart at every space character: ["I", "am", "a", "hard", "working", "person"].
let reversedStatement = "";
for (let i = words.length - 1; i >= 0; i--) {
  reversedStatement += words[i] + " ";
}
console.log(reversedStatement);
// console.log(reversedStatement.trim());
// .trim(): This removes the extra trailing space added during the final loop iteration.

// task 5
// Copy the given array into another array so that changing the copy does not affect the original.Change the first element of the copied array to 99.
let numArray = [1, 2, 3, 4, 5];
let copiedArray = [];
for (let i = 0; i < numArray.length; i++) {
  copiedArray[i] = numArray[i];
}
copiedArray[0] = 99;
console.log("Original Array:", numArray);
console.log("Copied Array:", copiedArray);

// task 6
// Given an array of student objects, print each student’s name and marks.
let students = [
  { name: "John", marks: 85 },
  { name: "Alice", marks: 90 },
];
for (let i = 0; i < students.length; i++) {
  console.log("Name:", students[i].name, ", Marks:", students[i].marks);
}

// task 7
// Given a 2D array, update the value at second row first item to 99 and print the updated array.
let matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];
matrix[1][0] = 99;
console.log(matrix);