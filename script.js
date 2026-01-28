// Reverse a Word Input: "hello" Output: "olleh"
let a = "Hello";
console.log(a.split("").reverse().join(""));

// First and Last Character of a String Input: "JavaScript" Output: "J T"
a = "JavaScript";
let b = a[0];
let c = a[a.length - 1];
let d = b + " " + c;
console.log(d);

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
a = '10';
b = 5;
console.log(a + b); 
c = parseInt(a) + b;
console.log(c);

