// Q1)Rewrite the following function as an arrow function:
/******************************
	function greet(name) {
	  return `Hello, ${name}!`;
	}*/

const greet = (name) => `Hello ${name}`;
console.log(greet("Ahmed"));
// Q2) Write a simple arrow function that takes two parameters and returns their sum.
const sum = (param1, param2) => param1 + param2;
console.log(sum(5, 2));
// Q3) Write a simple arrow function that squares a number.
const squareFun = (num) => num * num;
console.log(squareFun(8));
// Q4) [🌶️🌶️] Create an arrow function that takes an array of numbers and returns a new array with each number squared.
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const returnSquar = (squarArray) => {
  let newSquarArray = [];
  for (let index = 0; index <= squarArray.length - 1; index++) {
    newSquarArray.push(squarArray[index] * squarArray[index]);
  }
  console.log(newSquarArray);
};
returnSquar(numArray);
