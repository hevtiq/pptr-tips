// 0001. JSON.parse() does not allow trailing commas
// JSON.parse('[1, 2, 3, 4, ]');
// JSON.parse('{"foo" : 1, }');

const { isTruthy } = require("./tips");

// 0002. JSON.parse() does not allow single quotes
// JSON.parse("{'foo': 1}");

// 0003. Using JSON.parse()

const testData = {
    '0001': ['[1, 2, 3, 4, ]', '{"foo" : 1, }'],
    '0002': ["{'foo': 1}"],
    '0003': ['{}', 'true', '"foo"', '[1, 5, "false"]', 'null'],
};


const ieError = {

};

; (1).toFixed() + (0.01).toFixed();
// Expect: 1
// Error: "10"

; (1).toFixed() + (0.01).toFixed(1);
// Expect: 1.0
// Error: "10.0"
; (1).toFixed() + (0.01).toFixed(2);
// Expect: 1.01
// Error: "10.01"


/*
    Objects (including Arrays and Functions) be converted to Primitive value by ToPrimitive
    toPrimitive convert the Object to non-Object(string, number or boolean)
    ToPrimitive be converted to a number by ToNumber, string by ToString, boolean by ToBoolean
*/
// ToNumber
Number(undefined);  // NaN => undefined is not value, it not reference
Number(null);  // 0 => null is a empty value. NULL is value so often use in DB
Number(true);  // 1 => true is a value
Number(false);  // 0 => false is a value
Number('1');  // 1
Number("1e17"); // 100000000000000000
Number('');  // 0 => '' => false => 0
Number('x');  // NaN => can't reference because can't store as Number

// ToString
String(undefined); // "undefined"
String(null);  // "null"
String(true);  // "true"
String(false);  // "false"
String(NaN);  // "NaN"
String(Infinity);  // “Infinity”
String(0);  // "0"
String(-0);  // "0"
String(-1);  // "-1"
String(1, 000, 000, 000, 000, 000, 000, 000); "1"
String(1000000000000000000000); "1e+21"
String(1.000); "1"

// ToBoolean (“falsy values” and “truthy values”)
Boolean(undefined);  // false
Boolean(null);  // false
Boolean(+0);  // false
Boolean(-0);  // false
Boolean('');  // false  => '' => falsy => false
Boolean(false);  // false
Boolean('false');  // true => 'false' => truthy => true
Boolean('0');  // true => '0' => truthy
Boolean('""');  // true => '""' => truthy => true

// Can understand 1 to true, 0 to false, but they are not the same
// JS has actual keywords for true and false value.

const testTruthy = [
    true,
    {},
    [],
    42,
    "0",
    "false",
    new Date(),
    -42,
    12n,
    3.14,
    -3.14,
    Infinity,
    -Infinity
];


const testFalsy = [
    false,  // Boolean
    [0, 0.0, 0x0],  // Number zero
    [-0, -0.0, -0x0],  // Number negative zero
    [0n, 0x0n],  // BigInt zero
    ["", '', ``],  // Empty string
    null,  // no value
    undefined,  // the primitive value
    NaN,  // not a number
];

// The logical AND operator, &&
false && "dog"
// ↪ false
true && "dog"
// ↪ true

0 && "dog"
// ↪ 0

null && "dog"
// ↪ null

undefined && "dog"
// ↪ undefined

NaN && "dog"
// ↪ NaN


vnpace && "dog";
// ↪ vnpace is not defined

let vnpace;
vnpace && "dog";
// ↪ undefined

let vnpace = null;
vnpace && "dog";
// ↪ null

let vnpace = NaN;
vnpace && "dog";
// ↪ NaN

/*
    NULL (Full support Browser compatibility)

    - The value null is written with a literal: NULL.
    - NULL is not an identifier for a property of the global object, like undefined can be.
    - Instead, NULL expresses a lack of identification, indicating that a variable points to no object.
    - In APIs, NULL is often retrieved in a place where an object can be expected but no object is relevant.
*/
function getVowels(str) {
    const m = str.match(/[aeiou]/gi);
    if (m === null) {
        return 0;
    }
    return m.length;
}

console.log(getVowels('sky'));
// expected output: 0

// foo does not exist. It is not defined and has never been initialized:
foo; //ReferenceError: foo is not defined
// FIX
var foo; // create a variable but assign it no value
foo; // undefined

// foo is known to exist now but it has NO type or value:
var foo = null;
foo; // null
typeof foo;  // "object" => foo has NO value (null). null is NOT value, it's a VAR that points to no object.


// Difference between null and undefined
typeof null          // "object" (not "null" for legacy reasons)
typeof undefined     // "undefined"
null === undefined   // false
null == undefined   // true
null === null        // true
null == null         // true
!null                // true  (is exist, has point to an object )
isNaN(1 + null)      // false
isNaN(1 + undefined) // true


// convert value to string
const string = "hello";
const number = 123;
const boolean = true;
const array = [1, "2", 3];
const object = {one: 1 };
const symbolValue = Symbol('123');
const undefinedValue = undefined;
const nullValue = null;

// #Concat Empty String
string + ''; // 'hello'
number + ''; // '123'
boolean + ''; // 'true'
array + ''; // '1,2,3'
object + ''; // '[object Object]'
undefinedValue + ''; // 'undefined'
nullValue + ''; // 'null'

// ⚠️
symbolValue + ''; // ❌ TypeError


// #Template String
`${string}`; // 'hello'
`${number}`; // '123'
`${boolean}`; // 'true'
`${array}`; // '1,2,3'
`${object}`; // '[object Object]'
`${undefinedValue}`; // 'undefined'
`${nullValue}`; // 'null'

// ⚠️
`${symbolValue}`; // ❌ TypeError

// TypeError: Cannot convert a Symbol value to a string


// #JSON.stringify()
// ⚠️
JSON.stringify(string); // '"hello"'
JSON.stringify(number); // '123'
JSON.stringify(boolean); // 'true'
JSON.stringify(array); // '[1,"2",3]'
JSON.stringify(object); // '{"one":1}'
JSON.stringify(nullValue); // 'null'
JSON.stringify(symbolValue); // undefined
JSON.stringify(undefinedValue); // undefined


// #toString()
string.toString(); // 'hello'
number.toString(); // '123'
boolean.toString(); // 'true'
array.toString(); // '1,2,3'
object.toString(); // '[object Object]'
symbolValue.toString(); // 'Symbol(123)'

// ⚠️
undefinedValue.toString(); // ❌ TypeError
nullValue.toString(); // ❌ TypeError


// #String()
String(string); // 'hello'
String(number); // '123'
String(boolean); // 'true'
String(array); // '1,2,3'
String(object); // '[object Object]'
String(symbolValue); // 'Symbol(123)'
String(undefinedValue); // 'undefined'
String(nullValue); // 'null'





