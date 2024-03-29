// basic about number, got it
// basic about variable
let myLuckyNumber = 37;
let octopusLimbs = 8;

// basic about constant
const boilingPointC = 100;
const boilingPointF = 212;

console.log(myLuckyNumber, octopusLimbs, boilingPointC, boilingPointF);

// about string
let bestColor = 'purple';
let quote = 'You had me at "Hello"';

console.log(bestColor, quote);

// about string method
const message = "    TASTE THE RAINBOW!  "; 
let whisper = message.trim().toLowerCase();
console.log(whisper);

// more about string method
const word = "skateboard";
let facialHair = word.slice(5).replace('o', 'e');
console.log(facialHair);

// string literal
const die1 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
const die2 = Math.floor(Math.random() * 6) + 1; //random number from 1-6
let roll = `You rolled a ${die1} and a ${die2}. They sum to ${die1 + die2}`;
alert(roll);

/* Let's get some practice with conditional statements!  In order to make your 
code repeatable and testable, I'm asking you to write your code inside a pre-defined 
function (something we have not yet covered in the course).   
Write your code between the two comments in index.js
You will automatically have access to a variable called num.  Please do not try and 
define num or change num in any way! I will be setting the value of num when I test 
your code, so that I can test different outcomes
If num is an even number, print out "even".  Don't do anything if num is an odd number.*/

function isEven(num) {
    if (num % 2 === 0) {
        console.log('Even')
        alert('Even')
    }
}

isEven(8);

function getColor(phrase) {
    if (phrase === 'stop') {
        console.log('red');
    }
    else if (phrase === 'slow') {
        console.log('yellow');
    }
    else if (phrase === 'go') {
        console.log('green');
    }
    else {
        console.log('purple');
    }
}

getColor('kjkjk');

/*
It's time to practice creating your own object literal.  Please define a new variable called product.  
It should be an object literal with the following properties:
name - set to the string "Gummy Bears"
inStock - set to the boolean true
price  - set to the number 1.99
flavors - set to an array of at least three strings like ["grape", "apple", "cherry"]
*/

let product = {
    name: 'Gummy Bears',
    inStock: true,
    price: 1.99,
    flavors: ['grape', 'apple', 'cherry']
}

console.log(product);
console.log(product['name']);
console.log(product.flavors);


/*
In index.js, you'll find a restaurant object that contains a name, 
address, city, state, and zipcode. 
Your task to is to create a variable named fullAddress that points 
to a string using the information from restaurant. 
fullAddress should point to a string that includes the address, 
city, state, and zipcode from the restaurant object. Make sure to 
add any necessary commas or spaces between the values as seen in 
the exact expected output format shown below.
To make it harder to "cheat" by copy and pasting, I've randomly 
generated the address portion.    For example, if address was
 "64 Johnson Ave", the fullAddress variable would look like this:
"64 Johnson Ave, Brooklyn, NY 11206" // this is the expected output
 format of the fullAddress string (keep an eye on the commas and/or
  spaces between the values and match that too!)
*/

for (let i = 0; i <= 6; i++) {
    console.log('abc');
}

for (let i = 25; i >= 0; i -= 5) {
    console.log(i);
}

const people = ["Scooby", "Velma", "Daphne", "Shaggy", "Fred"];
for (i = 0; i < people.length; i++) {
    console.log(people[i].toUpperCase());
}

const numbers = [1,2,3,4,5,6,7,8,9];
for (const element of numbers) {
    console.log(element ** 2);
}


/* 
In some dice games like Craps, a roll of two 1's is called "Snake Eyes".
  It's generally not a good roll.  Please write a function called 
  isSnakeEyes, which accepts two numbers as inputs, representing two dice. 
   If the two numbers are both 1's, please print "Snake Eyes!" otherwise 
   print "Not Snake Eyes!"

isSnakeEyes(1,1) //Snake Eyes!
isSnakeEyes(1,5) //Not Snake Eyes!
isSnakeEyes(4,5) //Not Snake Eyes!
Hint: Normally a function will return a value, but for the sake of having 
this work with the Udemy interpreter we will be using console.log() instead 
of return, to print the output.
*/

function isSnakeEyes (num1, num2) {
    if (num1 === 1 && num2 === 1) {
        console.log('Snake eyes');
    }
    else {
        console.log('Not snake eyes');
    }
}

isSnakeEyes(1, 5);


// defining an object attribute and method

function grenadier (name, rank, grenadeCount) {
    this.name = name;
    this.rank = rank;
    this.grenadeCount = grenadeCount;
    this.throwGrenade  = function () {
        console.log('throw');
    };
}

let ekoGrenadier = new grenadier('Eko', 'Sergeant', 10);
console.log(ekoGrenadier.name, ekoGrenadier.rank);

// about keyword this
const person = {
    first: 'Robert',
    last: 'Herjavac',
    fullName() {
        return `${this.first} ${this.last}`
    }
}

console.log(person.fullName());
person.last;

const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function (n) {
    console.log(n);
})

const names = ['eko', 'hadi', 'permana'];

names.forEach(function (name) {
    console.log(name.toUpperCase());
})

let evenNums = [];
nums.forEach(function (n) {
    if (n % 2 === 0) {
        console.log(n);
        evenNums.push(n);
    }
})

console.log(evenNums);

// map function
const texts = ['a', 'b', 'c', 'd'];
const caps = texts.map(function (t) {
    return t.toUpperCase();
})

// arrow function
let greet = (name) => {
    return `Hey ${name}!`;
}

// declaring an object
function Squad (name, age, rank, role) {
    this.name = name;
    this.age = age;
    this.rank = rank;
    this.role = role;
    this.check = function () {
        console.log (rank, name);
    }
}

let eko = new Squad ('Eko', 45, 'Sergeant', 'Grenadier');
console.log(eko.age, eko.name, eko.rank);



