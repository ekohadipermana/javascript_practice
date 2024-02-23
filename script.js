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