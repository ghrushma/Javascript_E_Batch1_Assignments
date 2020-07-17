//Question3--Write a program to take marks as input from the user and grade him accordingly")

let marks = Number(prompt("Enter your marks between 0-100"));

// using ladder if/else 
console.log("if, else ladder");
if (marks < 50) {
  console.log(`Marks are '${marks}' and grade is 'F'`);
} else if (marks >= 50 && marks <= 59) {
  console.log(`Marks are '${marks}' and grade is 'E'`);
} else if (marks >= 60 && marks <= 69) {
  console.log(`Marks are '${marks}' and grade is 'D'`);
} else if (marks >= 70 && marks <= 79) {
  console.log(`Marks are '${marks}' and grade is 'C'`);
} else if (marks >= 80 && marks <= 89) {
  console.log(`Marks are '${marks}' and grade is 'B'`);
} else if (marks >= 90 && marks <= 100) {
  console.log(`Marks are '${marks}' and grade is 'A'`);
} else {
  console.log(`Marks are '${marks}' and pls type between 0-100`);
}



// using ternary operators

console.log("Ternary Operator Output");
let result =
  marks < 50
    ? `Marks are '${marks}' and grade is 'F'`
    : marks >= 50 && marks <= 59
    ? `Marks are '${marks}' and grade is 'E'`
    : marks >= 60 && marks <= 69
    ? `Marks are '${marks}' and grade is 'D'`
    : marks >= 70 && marks <= 79
    ? `Marks are '${marks}' and grade is 'C'`
    : marks >= 80 && marks <= 89
    ? `Marks are '${marks}' and grade is 'B'`
    : marks >= 90 && marks <= 100
    ? `Marks are '${marks}' and grade is 'A'`
    : `Marks are '${marks}' and pls type between 0-100`;
console.log(result);



// switch case


console.log("Switch case");

switch (true) {
  case (marks < 50):
    console.log(`Marks are '${marks}' and grade is 'F'`);
    break;
  case (marks >= 50 && marks <= 59):
    console.log(`Marks are '${marks}' and grade is 'E'`);
    break;
  case (marks >= 60 && marks <= 69):
    console.log(`Marks are '${marks}' and grade is 'D'`);
    break;
  case (marks >= 70 && marks <= 79):
    console.log(`Marks are '${marks}' and grade is 'C'`);
    break;
  case (marks >= 80 && marks <= 89):
    console.log(`Marks are '${marks}' and grade is 'B'`);
    break;
  case (marks >= 90 && marks <= 100):
    console.log(`Marks are '${marks}' and grade is 'A'`);
    break;
  default:
    console.log(`Marks are '${marks}' and pls type between 0-100`);
    break;
}