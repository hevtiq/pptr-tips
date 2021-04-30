/*
    Includes Method can check the Falsy Value as Nan, undefined. In contrast,
    indexOf is not, so we should use Includes instead indexOf, to reduce
    Bug for ourselves.
*/
const characters = [
    'ironman',
    'black_widow',
    'hulk',
    'captain_america',
    'hulk',
    'thor',
];

// NOT GOOD
console.log(characters.indexOf('hulk'));  // 2
console.log(characters.indexOf('batman')); // -1

// GOOD
console.log(characters.includes('hulk'));  // true
console.log(characters.includes('batman'));  // false


// It's good for testing and unit testing
const array = [NaN, undefined];
if (array.indexOf(NaN) === -1) {
    console.log("NaN not found in the array");
    //NaN not found in the array
};

if (!array.indexOf(undefined) === -1) {
    console.log("true. array elements are undefined");
} else {
    console.log("Sorry can't find undefined");
    // Sorry can't find undefined
};

if (array.includes(NaN)) {
    console.log("NaN was found in the array");
    //NaN not found in the array
};

if (array.includes(undefined)) {
    console.log("undefined was found in the array");
    //NaN not found in the array
};


// String method
// bad
const name = "anonystick.com"

// good
const name = 'anonystick.com'

function sayHi(name) {
    return 'How are you, ' + name + '?'
}

// good
function sayHi(name) {
    return `How are you, ${name}?`
}

// charAt javascript
var str = "hello world"
var str1 = str.charAt(4)
var str2 = str.charAt(10)
console.log(str1) //o
console.log(str2)


// charCodeAt javascript
var str = "hello world"
var str1 = str.charCode(1)
var str2 = str.charCodeAt(-2); //NaN
console.log(str1) //101


// concat javascript
var str1 = "a";
var str2 = "b";
var str3 = "c";
console.log(str1.concat(str2, str3))  // "abc"



// slice javascript
var str = 'abcdefghij';
console.log('(1, 2): ' + str.slice(1, 2));   // '(1, 2): b'
console.log('(-3, 2): ' + str.slice(-3, 2));  // '(-3, 2): '
console.log('(-3, 9): ' + str.slice(-3, 9));  // '(-3, 9): hi'
console.log('(-3): ' + str.slice(-3));     // '(-3): hij'
console.log('(-3，-1): ' + str.slice(-3, -1));     // '(-3，-1): hi'
console.log('(0，-1): ' + str.slice(0, -1));     // '(0，-1): abcdefghi'
console.log('(1): ' + str.slice(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.slice(-20, 2)); // '(-20, 2): ab'
console.log('(20): ' + str.slice(20));  // '(20): '
console.log('(20, 2): ' + str.slice(20, 2));  // '(20, 2): '


// substr javascript
var str = 'abcdefghij';
console.log('(1, 2): ' + str.substr(1, 2));   // '(1, 2): bc'
console.log('(-3, 2): ' + str.substr(-3, 2));  // '(-3, 2): hi'
console.log('(-3): ' + str.substr(-3));     // '(-3): hij'
console.log('(1): ' + str.substr(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substr(-20, 2)); // '(-20, 2): ab'
console.log('(20, 2): ' + str.substr(20, 2));  // '(20, 2): '


// substring javascript
var str = 'abcdefghij';
console.log('(1, 3): ' + str.substring(1, 3));   // '(1, 2): b'
console.log('(1, 1): ' + str.substring(1, 1));   // '(1, 1): '
console.log('(-3, 2): ' + str.substring(-3, 2));  // '(-3, 2): ab'
console.log('(-3): ' + str.substring(-3));     // '(-3): abcdefghij'
console.log('(1): ' + str.substring(1));      // '(1): bcdefghij'
console.log('(-20, 2): ' + str.substring(-20, 2)); // '(-20, 2): ab'
console.log('(2, 20): ' + str.substring(2, 20));  // '(2, 20): cdefghij'
console.log('(20, 2): ' + str.substring(20, 2));  // '(20, 2): cdefghij'


// indexOf javascript
"ABC".indexOf("A")    // 0   tìm thấy A 

"ABC".indexOf("e")    // -1  không tìm thấy e

"ABC".indexOf("AB")   // 0 thấy luôn


// lastIndexOf javascript
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';

const searchTerm = 'dog';

console.log(`The index of the first "${searchTerm}" from the end is ${paragraph.lastIndexOf(searchTerm)}`);
// expected output: "The index of the first "dog" from the end is 52"



// Hoisting javascript
var salary = "1000$";

(function () {
    console.log("Original salary was " + salary);

    var salary = "5000$";

    console.log("My New Salary " + salary);
})();

// =>
var salary = "1000$";

(function () {
    var salary = undefined;
    console.log("Original salary was " + salary);

    salary = "5000$";

    console.log("My New Salary " + salary);
})();


// This was hoisted, so it works
// returns 6
add(3, 3);
function add(num1, num2) {
    return num1 + num2;
};

// =>
function add(num1, num2) {
    return num1 + num2;
};
add(3, 3);



// This was not, so it doesn't
// returns Uncaught TypeError: subtract is not a function
subtract(7, 4);
var subtract = function (num1, num2) {
    return num1 - num2;
};

// =>
var subtract = undefined;
subtract(7, 4);
subtract = function (num1, num2) {
    return num1 - num2;
};


// Function declaration
function add(num1, num2) {
	return num1 + num2;
};

// Function expression
var add = function (num1, num2) {
	return num1 + num2;
};


// https://developer.mozilla.org/vi/docs/Web/JavaScript/Reference/Global_Objects
// https://developer.mozilla.org/vi/search?q=error

// JSON.parse() does not allow trailing commas
// both will throw a SyntaxError
JSON.parse('[1, 2, 3, 4, ]');
JSON.parse('{"foo" : 1, }');

// JSON.parse() does not allow single quotes
// will throw a SyntaxError
JSON.parse("{'foo': 1}");