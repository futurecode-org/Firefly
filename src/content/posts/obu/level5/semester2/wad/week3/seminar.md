---
title: "Web Application Development Practical3: JavaScript"
published: 2026-03-25
# updated: 
description: JavaScript (JS) is a lightweight interpreted (or just-in-time compiled) programming language with first-class functions.
image: ./142758712_p0.png
tags: [Web, JS]
category: Web Application Development
draft: false
pinned: false
# slug: 
lang: en
author: 🐦‍🔥不死鸟Anka
comment: true
# licenseName: 
# licenseUrl: 
# sourceLink: 
---

# Practical Session 3: JavaScript

1. Copy and paste the page and script below into a file with the extension `.html` , and open it in Chrome.
```html
<html>
    <head>
        <title>JavaScript Example</title>
        <script>
            "use strict"; function start() {
                let ino = window.prompt("What is your name?");
                window.alert("Hello " + ino);
            }
        </script>
    </head>
    <body onLoad="start()">
        <p>Javascript Test Page</p>
    </body>
</html>
```
This program shows a simple way of doing input and output in JavaScript, using `window.prompt` and `window.alert`. Although this method is not acceptable on most real web pages, for the moment you should use it while learning. We will learn to accept input “properly” next week.

You can do the remaining exercises by adding extra code to the `start()` function. You may define your own functions and/or classes as well.

2. Modify the program to ask the user to enter a string, then display that string, then repeat doing this over and over until the user enters “end” when asked for a string.
```js
function start2() {
    let info;
    do {
        info = window.prompt("Enter a string (type 'end' to stop):");
        if (info !== "end") {
            window.alert("You entered: " + info);
        }
    } while (info !== "end");
}
```
3. Use a `for` loop to output the numbers from 1 to 10 in order.
```js
function start_loop() {
	for (let i = 1; i <= 10; i++) {
		window.alert("Number " + i);
	}
}
```
4. Modify the program so that, instead of always counting to 10, it asks the user how high it should count.
```js
function start_loop_ask() {
	let num = parseInt(window.prompt("Enter the highest number to count to:"));
	if (isNaN(num)) {
		window.alert("That's not a valid number!");
	} else {
		for (let i = 1; i <= num; i++) {
			window.alert("Number " + i);
		}
	}
}
```
As in Python, `window.prompt` always returns a string. The JavaScript function to convert a string to a number is `parseInt()` . If the string is not a valid number, it returns a special value `NaN` (“not a number”). To test if a variable contains `NaN`, use the `isNaN()` function (remember that function names are case sensitive). Do not allow your code to attempt to count to `NaN`.

5. find out how to generate random numbers in JavaScript. This information is available in books and online.<br>Random Integer between 0 and 10.
```js
function random_number() {
	let num = Math.floor(Math.random() * 100) + 1;
	window.alert("Random number between 1 and 100: " + num);
}
```
6. Write a program which generates two random numbers, displays them as an addition sum and asks the user to enter the sum. The program should tell the user if the addition was right or wrong.
```js
function random_numbers_sum() {
	let num1 = Math.floor(Math.random() * 100) + 1;
	let num2 = Math.floor(Math.random() * 100) + 1;
	let sum = num1 + num2;
	let userAnswer = window.prompt("What is the sum of " + num1 + " and " + num2 + "?");
	if (parseInt(userAnswer,10) === sum) {
		// parseInt 的参数 10 是为了确保用户输入的数字被正确解析为十进制数，避免出现八进制或十六进制的误解。
		window.alert("Correct! The sum is indeed " + sum + ".");
	} else {
		window.alert("Incorrect. The sum is: " + sum);
	}
}
```
7. Modify the program from Question 6 to ask 10 such addition questions and then tell the user how many they got right.
```js
function random_add_quiz() {
	let correctAnswers = 0;
	let totalQuestions = 10;
	for (let i = 0; i < totalQuestions; i++) {
		let num1 = Math.floor(Math.random() * 100) + 1;
		let num2 = Math.floor(Math.random() * 100) + 1;
		let sum = num1 + num2;
		let userAnswer = window.prompt("What is the sum of " + num1 + " and " + num2 + "?");
		if (parseInt(userAnswer, 10) === sum) {
			window.alert("Correct! The sum is indeed " + sum + ".");
			correctAnswers++;
		} else {
			window.alert("Incorrect. The sum is: " + sum);
		}
	}
	window.alert("You got " + correctAnswers + " out of " + totalQuestions + " correct!");
}
```
8. Write a number guessing game. The program should pick a random number between 1 and 20, and gives the user 5 chances to guess it. Whenever the user guesses wrongly, the program should tell them if their guess was higher or lower than the correct number.
```js
function guess_number() {
	let randomNum = Math.floor(Math.random() * 20) + 1;
	let attempts = 0;
	let maxAttempts = 5;
	let guess;
	for (attempts = 0; attempts < maxAttempts; attempts++) {
		guess = parseInt(window.prompt("Guess a number between 1 and 20 (Attempt " + (attempts + 1) + " of " + maxAttempts + "):"), 10);
		if (isNaN(guess)) {
			window.alert("Please enter a valid number.");
			attempts--; // Don't count invalid input as an attempt
		} else if (guess < randomNum) {
			window.alert("Too low! Try again.");
		} else if (guess > randomNum) {
			window.alert("Too high! Try again.");
		} else {
			window.alert("Congratulations! You guessed the number!");
			return; // Exit the function if guessed correctly
		}
	}
	window.alert("Sorry, you've used all attempts! The number was: " + randomNum);
}
```
9. Write a program which inputs five names from the user and then displays them, separated by commas, as a single output. (You can add a new element at the beginning of an array in JavaScript by using the `push` method on the array.)
```js
function names_list() {
	let names = [];
	let arraySize = 5;
	for (let i = 0; i < arraySize; i++) {
		let name = window.prompt("Enter name " + (i + 1) + " of " + arraySize + ":");
		if (name.trim() !== "") {
			names.push(name.trim());
		} else {
			window.alert("Name cannot be empty. Please try again.");
			i--; // Decrement i to repeat this iteration
		}
	}
	window.alert("You entered the following names:\n" + names.join(", "));
}
```
10. Write a program which uses an array to calculate the first ten fibonacci numbers and display them. (The first two fibonacci numbers are 1 and 2; after that, each fibonacci number is equal to the sum of the previous two.)
```js
function fibonacci(n) {
	let fibonacciSequence = [0, 1];
	for (let i = 2; i < n; i++) {
		fibonacciSequence[i] = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
	}
	return fibonacciSequence.slice(0, n);
}

function displayFibonacci() {
	// let n = parseInt(window.prompt("How many Fibonacci numbers to display?"), 10);
	let n = 10;
	if (isNaN(n) || n <= 0) {
		window.alert("Please enter a valid positive integer.");
	} else {
		let fibSequence = fibonacci(n);
		window.alert("The first " + n + " Fibonacci numbers are:\n" + fibSequence.join(", "));
	}
}
```
11. Create a `Car` class which stores the brand and model of a car, and initialize one using some sample data.
```js
class Car {
	constructor(make, model, year) {
		this.make = make;
		this.brand = make; // brand 是 make 的别名
		this.model = model;
		this.year = year;
	}
	displayInfo() {
		return `${this.year} ${this.brand} ${this.model}`;
	}
}
function testCar() {
	let car1 = new Car("Toyota", "Corolla", 2020);
	let car2 = new Car("Honda", "Civic", 2019);
	window.alert("Car 1: " + car1.displayInfo() + "\nCar 2: " + car2.displayInfo());
}
```
11. Create a `Person` object which stores a person’s name, age, and the car they drive, which should be a `Car` object. Initialize one using some sample data.
```js
let Person = {
	name: "Alice",
	age: 30,
	car: new Car("Ford", "Mustang", 2021),
	greet: function() {
		return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
	}
};
function testPerson() {
	window.alert(Person.greet() + "\nI drive a " + Person.car.displayInfo());
}
```
You can loop through an array in JavaScript using a `for` loop based on index (you can get the length of the array with the `length` property as in Java), or with a Python-style ranged for loop using the syntax `for (let item of array) {...`.

13. Create an array of `Person` objects, all with different names and `Car` s. Write a program that finds all car brands (not models) that anyone in the array drives, and displays a list of the names of the people who drive each brand of car, sorted by brand.
```js
let people = [
	{
		name: "Alice",
		age: 28,
		car: new Car("Toyota", "Camry", 2018),
		greet: function() { return `Hello, my name is ${this.name}.`; }
	},
	{
		name: "Bob",
		age: 35,
		car: new Car("Honda", "Accord", 2020),
		greet: function() { return `Hello, my name is ${this.name}.`; }
	},
	{
		name: "Charlie",
		age: 22,
		car: new Car("Ford", "Focus", 2017),
		greet: function() { return `Hello, my name is ${this.name}.`; }
	},
	{
		name: "Diana",
		age: 31,
		car: new Car("Toyota", "Corolla", 2021),
		greet: function() { return `Hello, my name is ${this.name}.`; }
	},
	{
		name: "Ethan",
		age: 27,
		car: new Car("Honda", "Civic", 2019),
		greet: function() { return `Hello, my name is ${this.name}.`; }
	}
];

// Find all brands and group people by brand
function displayPeopleByCarBrand() {
	let brandMap = {};
	for (let person of people) {
		let brand = person.car.brand;
		if (!brandMap[brand]) {
			brandMap[brand] = [];
		}
		brandMap[brand].push(person.name);
	}
	let brands = Object.keys(brandMap).sort();
	let result = "People by car brand:\n";
	for (let brand of brands) {
		result += brand + ": " + brandMap[brand].join(", ") + "\n";
	}
	window.alert(result);
}
```
13. Write a program which inputs two numbers from the user, then asks them to enter `add` , `sub` , `mul` or `div` , performs the appropriate actions on the numbers and displays the result on the page - **without using any IF tests!**
```js
function calculate() {
	let num1 = parseFloat(window.prompt("Enter the first number:"));
	let num2 = parseFloat(window.prompt("Enter the second number:"));
	let operation = window.prompt("Enter operation: add, sub, mul, or div").toLowerCase();

	const operations = {
		add: (a, b) => a + b,
		sub: (a, b) => a - b,
		mul: (a, b) => a * b,
		div: (a, b) => a / b
	};

	let result = operations[operation]?.(num1, num2);

	document.body.innerHTML += `<p>Result: ${result !== undefined ? result : "Invalid operation"}</p>`;
}
```
