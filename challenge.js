let vowelString = "I am learinng Weub Development";
let vowel = "aeiou";
let characterCheck = "";
for (character of vowel) {
  console.log(character);
  if (vowelString.toLowerCase().includes(character)) {
    characterCheck += character;
    console.log(characterCheck);
  }
}
console.log(characterCheck);
if (characterCheck !== vowel) {
  console.log("Not all vowels are present");
} else {
  console.log("All vowels are present");
}
