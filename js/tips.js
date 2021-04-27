// https://javascript.info/destructuring-assignment

// Chaining
array.map(mapFunc).filter(filterFunc).sort(sortFunc);



// forEach - it isn't going to return anything
// but it does allow us to do something with each of the items in an array.

const names = ["John", "Paul", "Ringo", "George"];
names.forEach(name => console.log(name));
// "John"
// "Paul"
// "Ringo"
// "George"

// Real World Use Case
const recipes = [
    {
        recipe: "Fish & Chips",
        cuisine: "British"
    },
    {
        recipe: "Spaghetti Carbonara",
        cuisine: "Italian"
    },
    {
        recipe: "Pie & Mash",
        cuisine: "British"
    },
    {
        recipe: "Moussaka",
        cuisine: "Greek"
    },
    {
        recipe: "Duck l'orange",
        cuisine: "French"
    }
];

recipes.forEach(
    recipe =>
    (recipe.imagePath = `img/recipes/${recipe.cuisine}/${recipe.recipe.replace(
        /[^a-z]/gi,
        ""
    )}.jpg`.toLowerCase())
);
console.log(recipes);

// [{ "recipe": "Fish & Chips", "cuisine": "British", "imagePath": "img/recipes/british/fishchips.jpg" }, { "recipe": "Spaghetti Carbonara", "cuisine": "Italian", "imagePath": "img/recipes/italian/spaghetticarbonara.jpg" }, { "recipe": "Pie & Mash", "cuisine": "British", "imagePath": "img/recipes/british/piemash.jpg" }, { "recipe": "Moussaka", "cuisine": "Greek", "imagePath": "img/recipes/greek/moussaka.jpg" }, { "recipe": "Duck l'orange", "cuisine": "French", "imagePath": "img/recipes/french/ducklorange.jpg" }]


// Sort with ternary operator
// Array.from(originalArray).sort(...);
// If a is greater than b, we return 1, otherwise we return -1
//  If the return value is less than 0, a will be first, otherwise b will be first

const names = [
    "Leonardo",
    "Rafael",
    "Donatello",
    "Michelangelo",
    "April",
    "Splinter"
];
names.sort((a, b) => a > b ? 1 : -1);
console.log(names);

// ["April","Donatello","Leonardo","Michelangelo","Rafael","Splinter"]


// findIndex - return the index of the first item
const fruits = ["Apple", "Orange", "Banana", "Kiwi", "Orange"];
const orangeIndex = fruits.findIndex(fruit => fruit === "Orange");
console.log(orangeIndex); // 1

const recipes = [
    {
        recipe: "Fish & Chips",
        cuisine: "British"
    },
    {
        recipe: "Spaghetti Carbonara",
        cuisine: "Italian"
    },
    {
        recipe: "Pie & Mash",
        cuisine: "British"
    },
    {
        recipe: "Moussaka",
        cuisine: "Greek"
    },
    {
        recipe: "Duck l'orange",
        cuisine: "French"
    }
];

const oneRecipePerCuisine = recipes.filter((item, index, array) => {
    return index === array.findIndex(recipe => recipe.cuisine === item.cuisine);
});
console.log(oneRecipePerCuisine);

// [{ "recipe": "Fish & Chips", "cuisine": "British" }, { "recipe": "Spaghetti Carbonara", "cuisine": "Italian" }, { "recipe": "Moussaka", "cuisine": "Greek" }, { "recipe": "Duck l'orange", "cuisine": "French" }]


// Find - return the first item
const fruits = ["Apple", "Orange", "Banana", "Kiwi", "Orange"];
const findOrange = fruits.find(fruit => fruit === "Orange");
console.log(findOrange); // 'Orange


// Every - return true if every item in the array must satisfy the condition specified
const numbers = [4, 8, 12, 99, 41];
const allNumbersOver50 = numbers.every(number => number > 50);
console.log(allNumbersOver50); // false


// Some - return true if any items in the array satisfy your condition
const numbers = [4, 8, 12, 99, 41];
const hasNumbersOver50 = numbers.some(number => number > 50);
console.log(hasNumbersOver50); // true



// Reduce - the most flexible of the array methods
// could use reduce in place of map or filter
// Reduce can be used to create a string, number, Object or even another array.
// let accumulator
// forEach currentValue do...
const numbers = [1, 5, 10, 15, 20];
const sum = numbers.reduce(
    (accumulator, currentValue) => (accumulator += currentValue),
    0
);
console.log(sum); // 51


// Real World Example
const recipes = [
    {
        recipe: "Fish & Chips",
        cuisine: "British"
    },
    {
        recipe: "Spaghetti Carbonara",
        cuisine: "Italian"
    },
    {
        recipe: "Pie & Mash",
        cuisine: "British"
    },
    {
        recipe: "Moussaka",
        cuisine: "Greek"
    },
    {
        recipe: "Duck l'orange",
        cuisine: "French"
    }
];

// start with an empty object is recipe are passed to reduce method
// constructing on abject and iterate/loop through recipes
// let object;
// forEach recipe do...
const groupedByCuisine = recipes.reduce((object, recipe) => {
    // grab the cuisine value from the current iteration
    const cuisine = recipe.cuisine;

    // check if key exits? : key : [] for cuisine
    if (!object[cuisine]) object[cuisine] = [];

    // push the current recipe into array
    object[cuisine].push(recipe);

    // return the object
    return object;
}, {});

console.log(groupedByCuisine);

// { "British": [{ "recipe": "Fish & Chips", "cuisine": "British" }, { "recipe": "Pie & Mash", "cuisine": "British" }], "Italian": [{ "recipe": "Spaghetti Carbonara", "cuisine": "Italian" }], "Greek": [{ "recipe": "Moussaka", "cuisine": "Greek" }], "French": [{ "recipe": "Duck l'orange", "cuisine": "French" }] }

// 1. We are starting with an empty object. That's the second argument we are passing to the reduce method.

// 2. We are constructing on object and iterating through recipes, so I've named the two parameters for our reducer function accordingly.

// 3. We are assigning the cuisine value from our current iteration to a new variable, 'cuisine'.

// 4. We are checking to see if a key exists for the cuisine in the object we are building. If it isn't there, we'll set it to equal an empty array.

// 5. We push the current recipe into the array we have created.

// 6. Finally, we return the object. This is necessary for our reducer to keep track of what we are building.



// Filter - can be used to filter out unwanted items from an array
const names = ["Derek", "Norman", "Arnold", "Horace", "Archibald"];
const filtered = names.filter(name => name.startsWith("A"));
// filtered ['Arnold', 'Archibald']

// Real World Use Case
const recipes = [
    {
        name: "Spaghetti Bolognese",
        cuisine: "Italian",
        vegetarian: false
    },
    {
        name: "Pie & Mash",
        cuisine: "British",
        vegetarian: false
    },
    {
        name: "Souvlaki",
        cuisine: "Greek",
        vegetarian: false
    },
    {
        name: "Margherita Pizza",
        cuisine: "Italian",
        vegetarian: true
    }
];

const italianVegetarianRecipes = recipes.filter(
    recipe => recipe.cuisine === "Italian" && recipe.vegetarian
);

console.log(italianVegetarianRecipes);
// [{"name":"Margherita Pizza","cuisine":"Italian","vegetarian":true}]



// Map
// take your original array
// run each element in the array through callback function
// returning a new array of the same size.
const numbers = [1, 2, 3, 4, 5];
const numbersTimesTen = numbers.map(number => number * 10);
// numbers [1, 2, 3, 4, 5];
// numbersTimesTen [10, 20, 30, 40, 50]

// Real World Use Case
const nutrition = {
    "1": {
        name: "Olive Oil",
        calsPer100g: 884,
        carbsPer100g: 0,
        protPer100g: 0,
        fatPer100g: 100
    },
    "2": {
        name: "Onion",
        calsPer100g: 40,
        carbsPer100g: 9,
        protPer100g: 1.1,
        fatPer100g: 0.1
    }
};

const ingredients = [
    {
        id: "1",
        grams: 5
    },
    {
        id: "2",
        grams: 100
    }
];

// using the ingredient id to fetch the relevant nutritional data
// and use it in conjunction with the weight in grams to calculate the number of calories for the amount we are planning to use.
const calories = ingredients.map(
    ingredient => nutrition[ingredient.id].calsPer100g * (ingredient.grams / 100)
);

console.log(calories);
// [44.2,40]



//================================
// Destructuring objects (need babel for old browser)
//================================
const person = {
    firstname: "John",
    surname: "Doe",
    dob: "1989-05-01",
    gender: "male"
};

// NOT
const dob = person.dob;

// DO
const { dob } = person;

// NOT
const firstname = person.firstname;
const surname = person.surname;
const dob = person.dob;
const gender = person.gender;

// DO
const { firstname, surname, dob, gender } = person;


//================================
// Nested destructuring (need babel for old browser)
//================================
const person = {
    firstname: "John",
    surname: "Doe",
    dob: "1989-05-01",
    gender: "male",
    address: {
        number: 1,
        street: "Example St.",
        town: "Exampleton",
        postcode: "EX4 9LE"
    }
};

// DO
const {
    firstname,
    surname,
    address: { postcode }
} = person;

// OR DO
const { firstname, surname, address } = person;
const { postcode } = address;


//================================
// Destructuring Arrays (need babel for old browser)
//================================
const people = [
    {
        name: "John Doe",
        title: "Mr"
    },
    {
        name: "Jane Doe",
        title: "Mrs"
    }
];

// DO
const [john, jane] = people;


// Grab an element of the array
// NOT
const jane = people[1];

// DO
const { 1: jane } = people;


//================================
// Destructuring Strings (need babel for old browser)
//================================
const [first, ...rest] = "england";
const england = first.toUpperCase() + rest.join("").toLowerCase();


// destructive assignments, the " rest pattern" or "spreading"
const [a, ...b] = [1, 2, 3];
console.log(a);  // 1
console.log(b);  // [2, 3]

// bypass any indexes we want by putting a , without any variable declaration.
const [, , c] = [5, 4, 6, 9, 7];
console.log(c);  // 6

// destructed the property data of the axios.get('/api/users/7')
// assigned data to a proper variable's name, users
// used the array's destructing assignment to define the variable users as the first index of the data property.
const { data: [user] } = await axios.get('/api/user/7');
console.log(user);  // { username: 'aho' }

// fetch from the route /api/users/:userid
const { data, status } = await axios.get('/api/user/7');
console.log(data);  // [{ username: 'aho' }]
console.log(status);  // 200

const { data, status = 200 } = await axios.get('/api/user/7');
const { data: users } = await axios.get('/api/user/7');
console.log(users);  // [{ username: 'aho' }]


const [a] = [1, 2, 3];
console.log(a);  // 1


const months = ['January', 'February', 'March', 'April'];
const [first_day, second_day, third_day, fourth_day] = months;
console.log(first_day, second_day, third_day, fourth_day);

[first_day = 'jan', second_day = 'feb', third_day = 'march', fourth_day = 'april'] = ['January'];
console.log(first_day, second_day, third_day, fourth_day);


//  Remove duplicate elements in the array
// Set is the data structure that elements in Set are always unique
// by converting the original array to set we will remove all overlaps
// only apply to arrays of primitive data types (Number, String, Null, Undefined, Symbol)
const arr = [1, 1, 1, 2, 2, 2, 3, 5, 3, 2];
const newArr = [...new Set(arr)];
console.log(newArr); // [ 1, 2, 3, 5 ]


// Remove the Falsy Values in an array.
const arr = [
    0,
    false,
    NaN,
    undefined,
    "",
    null,
    1,
    true,
    "Hello World",
    { name: "value" },
];
const filteredArr = arr.filter(Boolean);
console.log(filteredArr); // [ 1, true, 'Hello World', { name: 'value' } ]


// shorthand
const a = 1;
const b = 2;

// && will return the first FALSY value first found in the list
// if all operands are true, will return the last operand.
console.log(a && b); // 2
console.log(0 && 1); // 0

// || Will return the first TRUTHY value found in the list
// if all operands are false, then return the last operand
console.log(a || b); // 1
console.log(0 || 1); // 1

// Real Example
const data = await fetch([api]);

// LONG
if (data) {
    console.log(data.length);
} else {
    console.log(0);
}

// SHORT
// ff the data.length is Truthy value, it will take the value of data.length, otherwise it will take the value 0.
console.log((data && data.length) || 0);


// check response from json/api
// whenever one of the operators in the front mark || returns Falsy value, data will be assigned = []
// make sure not errors occurs if data returns incorrectly or cannot get data.
const response = {
    message: "",
    success: true,
    result: {
        name: "response-list",
        list: [1, 2, 3, 4],
    },
};

// get the value of result
const result = (response && response.result) || "Default result";

// OR Optional change
const result = response?.result ?? "Default result";



// get the value of an attribute that does not exist in the object does not use ||
const unknownProperty = response && response.result && response.result.unknownProperty;

// OR Optional change
const unknownProperty = response?.result?.unknownProperty;



// get the value of a non-existent attribute in the object used ||
const unknownPropertyWithDefaultValue = (response && response.result && response.result.unknownProperty) || "Default Value";

// OR Optional change
const unknownPropertyWithDefaultValue = response?.result?.unknownProperty ?? "Default Value";

console.log(result); // { name: 'response-list', list: [ 1, 2, 3, 4 ] }
console.log(unknownProperty); // undefined
console.log(unknownPropertyWithDefaultValue); // "Default Value"


// About ?? and //
// - || returns the first truthy value
// - ?? returns the first defined value
let height = 0;

alert(height || 100); // 100
alert(height ?? 100); // 0


// Convert string to number
const strInt = "10";
const number = +strInt;
console.log("number", number); // 10
console.log("typeof number", typeof number); // number

// Convert boolean to number
console.log(+true);  // Return: 1
console.log(+false); // Return: 0​

// Convert string to number with ~ (bitwise NOT operator)
// ~n = - n - 1    =>   ~15 = -16
// ~~n = -(-n-1)-1 = n    =>    ~~10 = 10
// ~true = -2
// ~false = -1
const strInt = "10";
const number = ~~strInt;
console.log("number", number); // 10
console.log("typeof number", typeof number); // number

// real example
const strArr = ["10", "Str", (x = 23), "false", "10.6"];

strArr.forEach((item) => console.log(+item)); // 10, NaN, 23, NaN,10.6
strArr.forEach((item) => console.log(~~item)); // 10, 0, 23, 0,10

const tf = (strArr.map(item => (+item))).map(item => isNaN(item));
// [false, true, false, true, false]

// method to find index of all item occurrences of element in array
function getAllIndexes(arr, val) {
    let ret = [], idx;
    for (idx = 0; idx < arr.length; idx++);
    if (arr[idx] === val);
    ret.push(idx);
    return ret;
}

const idxNaN = getAllIndexes(tf, true);
const idxNumber = getAllIndexes(tf, false);
console.log(idxNaN);  // [1, 3]
console.log(idxNumber);  // [0, 2, 4]

let newArr = (strArr.map(item => (+item)));
console.log(newArr);  // [10, NaN, 23, NaN, 10.6]

idxNaN.map(item => newArr[item] = 0);
console.log(newArr);  // [10, 0, 23, 0, 10.6]


// Random in array
const initialArr = [1, 2, 3, 4, 5];
const shuffledArr = initialArr.sort(() => 0.5 - Math.random());
console.log(shuffledArr); //  [ 1, 5, 2, 3, 4 ]


// use variables as objects of Object
const propertyName = "prop";

const object = {
    [propertyName]: "Value",
};

console.log("object", object); // object { prop: 'Value' }


// convert Array to Object
const arr = [1, 2, 3, 4, 5, 6];

// Solution1
const obj = { ...arr };

// Solution2
const obj = Object.assign({}, arr);

// Solution3
const obj = {};
for (let i = 0; i < arr.length; i++) {
    obj[i] = arr[i];
}

// Solution4
// create a prototype method
Array.prototype.toObject = function () {
    const obj = {};

    // copy array elements to th object
    for (let i = 0; i < this.length; i++) {
        obj[i] = this[i];
    }

    return obj;
};

// convert array to object
const newObj = arr.toObject();

console.log(obj); // { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5, '5': 6 }


// convert Object to Array
const numbers = {
    one: 1,
    two: 2,
};

// Solution1 - ES5
let keys = [];
for (let number in numbers) {
    if (numbers.hasOwnProperty(number)) {
        keys.push(number);
    }
}
keys; // [ 'one', 'two' ]

// Solution2 - ES6
// Initialize an object
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);
const values = Object.values(employees);
const entries = Object.entries(employees);

console.log(keys, values, entries);
// ["boss", "secretary", "sales", "accountant"]
// ["Michael", "Pam", "Jim", "Oscar"]
// [Array(2), Array(2), Array(2), Array(2)]


// search an object from an array
function findObjectFromArray(key, arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].name === key) {
            return arr[i];
        }
    }
}

const arr = [
    { name: "string 1", value: "this", other: "that" },
    { name: "string 2", value: "this", other: "that" }
];

const ret = findObjectFromArray("string 1", arr);


// merge two arrays as key value pairs javascript
const columns = ["Date", "blog", "name", "Location", "rank"];
const rows = ["2019", "javascript", "anonystick", "Vietnam", "150000"];
const result = rows.reduce(function (ret, arr, idx) {
    ret[columns[idx]] = arr;
    return ret;
}, {})
console.log(result);
// {
//     Date: "2019",
//     blog: "javascript",
//     name: "anonystick",
//     Location: "Vietnam",
//     rank: "150000"
// }

// merge array object javascript
const arr1 = [{ name: "lang", value: "English" }, { name: "age", value: "18" }];
const arr2 = [{ name: "child", value: '5' }, { name: "lang", value: "German" }];
// merge arr2 to arr1
Array.prototype.push.apply(arr1, arr2);
// [{"name":"lang","value":"English"},
// {"name":"age","value":"18"},
// {"name":"child","value":"5"},
// {"name":"lang","value":"German"}]


// merge array javascript es6
const array1 = [1, 2];
const array2 = [3, 4, 5];
const array3 = [6, 7, 8]
const arr = [...array1, ...array2, ...array3]
// [1, 2, 3, 4, 5, 6, 7, 8]


// load 100,000 items
{/* <ul id="root"></ul> */ }
function createOneHundredThousandData() {
    let arr = [];
    for (let i = 0; i < 100000; i++) {
        arr.push({
            imgUrl: 'https://cf.shopee.vn/file/2c1e846120cefebd49e8ba45acd2d100',
            key: i
        });
    }
    return arr;
}
var beginTime = performance.now();
console.log('Begin', beginTime);
/ * console.time ('start testing test') * /

let h = [];
let data = createOneHundredThousandData()
// Get the first 100 items
let firstScreenData = data.splice(0, 100); // Use splice
for (let i = 0; i < 100; i++) {
    let li = document.createElement('li');
    let img = document.createElement('img');
    img.src = firstScreenData[i].imgUrl;
    li.appendChild(img);
    let text = document.createTextNode(firstScreenData[i].key);
    li.appendChild(text);
    document.getElementById('root').appendChild(li);
}

// setTimeout callback will be executed
setTimeout(() => {
    function renderHundred(n) {
        // console.log('n=',n);
        // Every time I display 100 items
        let partialData = data.splice(0, 100);
        for (let i = 0; i < 100 && partialData.length > 0; i++) {
            let li = document.createElement('li');
            let img = document.createElement('img');
            img.src = partialData[i].imgUrl;
            li.appendChild(img);
            let text = document.createTextNode(partialData[i].key);
            // console.log('partialData[i].key',partialData[i].key);
            li.appendChild(text);
            document.getElementById('root').appendChild(li);
        }
        if (n) {
            setTimeout(() => {
                renderHundred(n - 1);
            }, 50);
        }
    }
    renderHundred(999);  // running 1000 new loop each loop is 100 items understand no
}, 1000);


//document.getElementById('root').innerHTML = h.join('');
document.addEventListener('DOMContentLoaded', function () {
    var endTime = performance.now();
    console.log('DOMContentLoaded endTime', endTime);
    var total = ((endTime - beginTime) / 1000).toFixed(5);
    console.log('DOMContentLoaded Render 100000 Items takes off ' + total + ' second');
    / * console.timeEnd ('start testing test') * /
});
window.onload = function () {
    var endTime = performance.now();
    console.log('window.onload endTime', endTime);
    var total = ((endTime - beginTime) / 1000).toFixed(5);
    console.log('Window.onload Render 100000 Items taken out ' + total + ' second');
}


// Do not use negative conditions.
const isEmailVerified = (email) => {
    // implementation
}

if (isEmailVerified(email)) {
    // do something...
}

if (isVerified) {
    // do something...
}


// For Multiple Conditions, use Array.includes
// NOT
const checkCarModel = (model) => {
    if (model === 'vinfast fadil' || model === 'Hyundai Accent') {
        console.log('model valid');
    }
}

checkCarModel('vinfast fadil'); // outputs 'model valid'

// DO
const checkCarModel = (model) => {
    const models = ['vinfast fadil', 'Hyundai Accent'];

    if (models.includes(model)) {
        console.log('model valid');
    }
}

checkCarModel('vinfast fadil'); // outputs 'model valid'


// No need to check long line when using if ... else
const checkModel = (car) => {
    let result; // First define a returned result.

    // check if car exists
    if (car) {

        // check if car model exists
        if (car.model) {

            // check if car year exists
            if (car.year) {
                result = `Car model: ${car.model}; Manufacturing year: ${car.year};`;
            } else {
                result = 'No car year';
            }

        } else {
            result = 'No car model'
        }

    } else {
        result = 'No car';
    }

    return result; // our single return statement
}

console.log(checkModel()); // outputs 'No car'
console.log(checkModel({ year: 1988 })); // outputs 'No car model'
console.log(checkModel({ model: 'ford' })); // outputs 'No car year'
console.log(checkModel({ model: 'ford', year: 1988 })); // outputs 'Car model: ford; Manufacturing year: 1988;'


// DO
const checkModel = ({ model, year } = {}) => {
    if (!model && !year) return 'No car';
    if (!model) return 'No car model';
    if (!year) return 'No car year';

    // here we are free to do whatever we want with the model or year
    // we made sure that they exist
    // no more checks required

    // doSomething(model);
    // doSomethingElse(year);

    return `Car model: ${model}; Manufacturing year: ${year};`;
}

console.log(checkModel()); // outputs 'No car'
console.log(checkModel({ year: 1988 })); // outputs 'No car model'
console.log(checkModel({ model: 'ford' })); // outputs 'No car year'
console.log(checkModel({ model: 'ford', year: 1988 })); // outputs 'Car model: ford; Manufacturing year: 1988;'


// Use Indexing or Maps Instead of switch Statement
// NOT
const getCarsByState = (state) => {
    switch (state) {
        case 'usa':
            return ['Ford', 'Dodge'];
        case 'france':
            return ['Renault', 'Peugeot'];
        case 'italy':
            return ['Fiat'];
        default:
            return [];
    }
}

console.log(getCarsByState()); // outputs []
console.log(getCarsByState('usa')); // outputs ['Ford', 'Dodge']
console.log(getCarsByState('italy')); // outputs ['Fiat']

// ĐO
const carState = {
    usa: ['Ford', 'Dodge'],
    france: ['Renault', 'Peugeot'],
    italy: ['Fiat']
};

const getCarsByState = (state) => {
    return carState[state] || [];
}

console.log(getCarsByState()); // outputs []
console.log(getCarsByState('usa')); // outputs ['Ford', 'Dodge']
console.log(getCarsByState('france')); // outputs ['Renault', 'Peugeot']


// Memoization - Boost your Code Performance
// https://devinduct.com/blogpost/60/memoization-boost-your-code-performance
const fibonnaci = (n) => {
    if (n < 2) return 1;
    return fibonnaci(n - 1) + fibonnaci(n - 2);
}

console.time("First run");
fibonnaci(42);
console.timeEnd("First run");

console.time("Second run");
fibonnaci(42);
console.timeEnd("Second run");

// First run: 2853.337890625ms
// Second run: 2854.5107421875ms

/**
 * memoize() method to cache/memoize function
 * @param {*} func function need to memoize
 * @returns wrapper function handling the cache logic
 */
const memoize = (func) => {
    // defines a local cache (Map object);
    const cache = new Map();

    // returns wrapper function
    return (...args) => {
        const key = args.join('-');

        // If cache no value with that key
        if (!cache.has(key)) {
            // stores the value to cache
            cache.set(key, func(args));
        }

        // returns the value from the cache
        return cache.get(key);
    }
}


const fibonnaciMemo = memoize(fibonnaci);

console.time("First run");
fibonnaciMemo(42);
console.timeEnd("First run");

console.time("Second run");
fibonnaciMemo(42);
console.timeEnd("Second run");

console.time("Third run");
fibonnaciMemo(42);
console.timeEnd("Third run");

// First run: 2858.337158203125ms
// Second run: 0.005859375ms
// Third run: 0.003173828125ms


// Try-Catch-Finally
// invoke method to open file
openFile();

try {
    // try to write file
    writeFile(Data);
} catch (e) {
    // handle if catch any error occurs
    handleError(e);
} finally {
    // close file if no error occurs
    closeFile();
}


// Higher-order function
const persons = [
    { name: 'Peter', age: 16 },
    { name: 'Mark', age: 18 },
    { name: 'John', age: 27 },
    { name: 'Jane', age: 14 },
    { name: 'Tony', age: 24 },
];
// NOT
const fullAge = [];
for (let i = 0; i < persons.length; i++) {
    if (persons[i].age >= 18) {
        fullAge.push(persons[i]);
    }
}
// DO
const fullAge = persons.filter(person => person.age >= 18);
console.log(fullAge);



const birthYear = [1975, 1997, 2002, 1995, 1985];
// NOT
const ages = [];
for (let i = 0; i < birthYear.length; i++) {
    let age = 2018 - birthYear[i];
    ages.push(age);
}
// DO
const ages = birthYear.map(year => 2018 - year);
// prints [ 43, 21, 16, 23, 33 ]
console.log(ages);


const arr1 = [1, 2, 3];
// NOT
const arr2 = [];
for (let i = 0; i < arr1.length; i++) {
    arr2.push(arr1[i] * 2);
}
// DO
const arr2 = arr1.map(function (item) {
    return item * 2;
});
// prints [ 2, 4, 6 ]
console.log(arr2);



const arr = [5, 7, 1, 8, 4];
// NOT
let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
}
// DO
const sum = arr.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
}, 10);
// prints 25
console.log(sum);


// Creating Our own Higher-Order Function
const strArray = ['JavaScript', 'Python', 'PHP', 'Java', 'C'];
function mapForEach(arr, fn) {
    const newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(
            fn(arr[i]),
        );
    }
    return newArray;
}
const lenArray = mapForEach(strArray, function (item) {
    return item.length;
});
// prints [ 10, 6, 3, 4, 1 ]
console.log(lenArray);



// https://www.freecodecamp.org/news/a-quick-intro-to-higher-order-functions-in-javascript-1a014f89c6b/
users = [
    {
        name: 'Yazeed',
        age: 25
    },
    {
        name: 'Sam',
        age: 30
    },
    {
        name: 'Bill',
        age: 20
    }
];

getName = (user) => user.name;

// NOT
usernames = [];
for (let i = 0; i < users.length; i++) {
    const name = getName(users[i]);
    usernames.push(name);
}
// DO
usernames = users.map(getName);

console.log(usernames);
// ["Yazeed", "Sam", "Bill"]


startsWithB = (string) => string.toLowerCase().startsWith('b');

// NOT
namesStartingWithB = [];
for (let i = 0; i < users.length; i++) {
    if (startsWithB(users[i].name)) {
        namesStartingWithB.push(users[i]);
    }
}
// DO
namesStartingWithB = users.filter((user) => startsWithB(user.name));

console.log(namesStartingWithB);
// [{ "name": "Bill", "age": 20 }]


// NOT
total = 0;
for (let i = 0; i < users.length; i++) {
    total += users[i].age;
}
// DO
totalAge = users.reduce((total, user) => user.age + total, 0);

console.log(total);
// 75


// Functions Operate on Data Strings Are Data
sayHi = (name) => `Hi, ${name}!`;
result = sayHi('User');

console.log(result); // 'Hi, User!'

// Numbers Are Data
double = (x) => x * 2;
result = double(4);

console.log(result); // 8

// Booleans Are Data
getClearance = (allowed) => (allowed ? 'Access granted' : 'Access denied');

result1 = getClearance(true);
result2 = getClearance(false);

console.log(result1); // 'Access granted'
console.log(result2); // 'Access denied'


// Objects Are Data
getFirstName = (obj) => obj.firstName;

result = getFirstName({
    firstName: 'Yazeed'
});

console.log(result); // 'Yazeed'


// Arrays Are Data
len = (array) => array.length;
result = len([1, 2, 3]);

console.log(result); // 3


// Functions as Arguments
isEven = (num) => num % 2 === 0;
result = [1, 2, 3, 4].filter(isEven);

console.log(result); // [2, 4]

// Returning Functions
add = (x) => (y) => x + y;
result = add(10)(20);
// OR
add10 = add(10);
result = add10(20);
console.log(result); // 30


// create filter function
function filtering(arr, test) {
    const passed = [];
    for (let element of arr) {
        if (test(element)) {
            passed.push(element);
        };
    };
    return passed;
};
function isSuperNumber(num) {
    return num >= 10;
};
filtering([1, 5, 11, 3, 22], isSuperNumber);  // [11, 22]


// create map function
function mapping(arr, transform) {
    const mapped = [];
    for (let element of arr) {
        mapped.push(transform(element));
    };
    return mapped;
}
function addTwo(num) {
    return num + 2;
};
mapping([1, 2, 3], addTwo);  // [3, 4, 5]


// create reduce function
function reducing(reducer, initial, arr) {
    let acc = initial;
    for (element of arr) {
        acc = reducer(acc, element);
    };
    return acc;
};
function accum(acc, curr) {
    return acc + curr;
};
reducing(accum, 0, [1, 2, 3]);  // 6


function prefixWordWithUnderscore(word) {
    return `_${word}`
}

const words = ['coffee', 'apple', 'orange', 'phone', 'starbucks']
const prefixedWords = words.map(prefixWordWithUnderscore)

// result: ["_coffee", "_apple", "_orange", "_phone", "_starbucks"]


function utilizePrefixer(prefix) {
    return function (word) {
        return `${prefix}${word}`
    }
}

const withMoneySign = utilizePrefixer('$')
const withCompanyName = utilizePrefixer('Fandango')
const tenDollars = withMoneySign('9.99')
const formHeader = withCompanyName(
    ' is the company you will be applying for today',
)

console.log(tenDollars)
console.log(formHeader)


// Higher Order Function
// https://anonystick.com/blog-developer/higher-order-functions-in-javascript-201905107183914
var grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Ethan', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Donald', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

// A1 - Find the average ranking of the whole class
let averageClass = grades.reduce(function (acc, curr) {
    return acc + curr.grade;
}, 0) / grades.length;
console.log(averageClass);  // 10.2


// A2 - Find the average ranking of the male in the class
// find male item in Object
let findNam = grades.filter(function (student) {
    return student.sex === 'M';
})
// then run this function

let averageNam = findNam.reduce(function (acc, curr) {
    return acc + curr.grade;
}, 0) / findNam.length;
console.log(averageNam);  // 7


// A3 - Find the highest ranking of men in the class
let gradeMaxNam = Math.max.apply(Math, findNam.map(function (o) { return o.grade }));
console.log(gradeMaxNam);


// A4 - Find the lowest ranking of the whole class
let gradeMinClass = Math.min.apply(Math, grades.map(function (o) { return o.grade }));
console.log(gradeMinClass);


// DO
let isBoy = student => student.sex === 'M'

let isGirl = student => student.sex === 'F'

let getBoys = grades => (
    grades.filter(isBoy)
)

let getGirls = grades => (
    grades.filter(isGirl)
)

let average = grades => (
    grades.reduce((acc, curr) => (
        acc + curr.grade
    ), 0) / grades.length
)

let maxGrade = grades => (
    Math.max(...grades.map(student => student.grade))
)

let minGrade = grades => (
    Math.min(...grades.map(student => student.grade))
)

let classroomAverage = average(grades) // 10.2
let boysAverage = average(getBoys(grades)) // 7
let girlsAverage = average(getGirls(grades)) // 13.4
let highestGrade = maxGrade(grades) // 18
let lowestGrade = minGrade(grades) // 2
let highestBoysGrade = maxGrade(getBoys(grades)) // 16
let lowestBoysGrade = minGrade(getBoys(grades)) // 2
let highestGirlsGrade = maxGrade(getGirls(grades)) // 18
let lowestGirlsGrade = minGrade(getGirls(grades)) // 9



// 1 - GET HTTP calls
// fetch need two promises to take data
fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))

// axios only one promise to take data
axios.get("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => console.log("response", response.data))

// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }



// 2 - POST HTTP calls
// fetch nên convert data to JSON.stringify() (object to string)
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify({
        title: "Title of post",
        body: "Post Body"
    })
})
    .then(res => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data => console.log(data))
    .catch(error => console.log(error));

// axios
axios
    .post("https://jsonplaceholder.typicode.com/posts", {
        title: "Title of post",
        body: "Body of post"
    })
    .then(response => console.log(response.data))
    .catch(error => console.log(error));


// 3 - Error handling
// fetch need check response.ok
fetch("https://jsonplaceholder.typicode.com/todos/100000")
    .then(response => {
        if (!response.ok) throw Error(response.statusText);
        return response.json();
    })
    .then(data => console.log("data", data))
    .catch(error => {
        console.log("error", error);
    });
// error Error: Not Found


axios
    .get("https://jsonplaceholder.typicode.com/todos/100000")
    .then(response => {
        console.log("response", response);
    })
    .catch(error => {
        console.log("error", error);
    });
// error Error: Not Found


// 4 - Simultaneous requests (performance code)
// fetch
Promise.all([
    fetch('https://api.github.com/users/anonystick'),
    fetch('https://api.github.com/users/anonystick')
])
    .then(async ([res1, res2]) => {
        const a = await res1.json();
        const b = await res2.json();
        console.log(a.login + ' has ' + a.public_repos + ' public repos on GitHub');
        console.log(b.login + ' has ' + b.public_repos + ' public repos on GitHub');
    })
    .catch(error => {
        console.log(error);
    });

axios.all([
    axios.get('https://api.github.com/users/anonystick'),
    axios.get('https://api.github.com/users/anonystick')
])
    .then(axios.spread((obj1, obj2) => {
        // Both requests are now complete
        console.log(obj1.data.login + ' has ' + obj1.data.public_repos + ' public repos on GitHub');
        console.log(obj2.data.login + ' has ' + obj2.data.public_repos + ' public repos on GitHub');
    }));


// 5 - Upload
const config = {
    onUploadProgress: event => console.log(event.loaded)
};
axios.put("/api", data, config);



// Adapter pattern
// new interface

function AdvancedShipping() {
    this.login = function (credentials) { /* ... */ };
    this.setStart = function (start) { /* ... */ };
    this.setDestination = function (destination) { /* ... */ };
    this.calculate = function (weight) { return "$39.50"; };
}

// adapter interface

function ShippingAdapter(credentials) {
    var shipping = new AdvancedShipping();

    shipping.login(credentials);

    return {
        request: function (zipStart, zipEnd, weight) {
            shipping.setStart(zipStart);
            shipping.setDestination(zipEnd);
            return shipping.calculate(weight);
        }
    };
}

// log helper

var log = (function () {
    var log = "";

    return {
        add: function (msg) { log += msg + "\n"; },
        show: function () { alert(log); log = ""; }
    }
})();


// use adapter pattern
function run() {
    var shipping = new Shipping();
    var credentials = { token: "30a8-6ee1" };
    var adapter = new ShippingAdapter(credentials);

    // original shipping object and interface

    var cost = shipping.request("78701", "10010", "2 lbs");
    log.add("Old cost: " + cost);

    // new shipping object with adapted interface

    cost = adapter.request("78701", "10010", "2 lbs");

    log.add("New cost: " + cost);
    log.show();
}




// Prototype Pattern
var myCat = {
    name: "Ford Escort",
    brake: function () {
        console.log("Stop! I am applying brakes");
    },
    panic: function () {
        console.log("wait. how do you stop that thing?");
    }
};

// use object create to instance a new car
var yourCar = object.create(myCar);

//You can now see that one is a prototype of the other
console.log(yourCar.name);



// Module Design Pattern
function AnimalContainer() {

    const container = [];

    function addAnimal(name) {
        container.push(name);
    }

    function getAllAnimals() {
        return container;
    }

    function removeAnimal(name) {
        const index = container.indexOf(name);
        if (index < 1) {
            throw new Error('Animal not found in container');
        }
        container.splice(index, 1);
    }

    return {
        add: addAnimal,
        get: getAllAnimals,
        remove: removeAnimal
    }
}

const container = AnimalContainer();
container.add('Hen');
container.add('Goat');
container.add('Sheep');

console.log(container.get()) //Array(3) ["Hen", "Goat", "Sheep"]
container.remove('Sheep')
console.log(container.get()); //Array(2) ["Hen", "Goat"]



// Singleton Pattern
function DatabaseConnection() {

    let databaseInstance = null;

    // tracks the number of instances created at a certain time
    let count = 0;

    function init() {
        console.log(`Opening database #${count + 1}`);
        //now perform operation
    }
    function createInstance() {
        if (databaseInstance == null) {
            databaseInstance = init();
        }
        return databaseInstance;
    }
    function closeInstance() {
        console.log('closing database');
        databaseInstance = null;
    }
    return {
        open: createInstance,
        close: closeInstance
    }
}

const database = DatabaseConnection();
database.open(); //Open database #1
database.open(); //Open database #1
database.open(); //Open database #1
database.close(); //close database



// Factory Pattern.
// Dealer A

DealerA = {};

DealerA.title = function title() {
    return "Dealer A";
};

DealerA.pay = function pay(amount) {
    console.log(
        `set up configuration using username: ${this.username} and password: ${this.password
        }`
    );
    return `Payment for service ${amount} is successful using ${this.title()}`;
};

//Dealer B

DealerB = {};
DealerB.title = function title() {
    return "Dealer B";
};

DealerB.pay = function pay(amount) {
    console.log(
        `set up configuration using username: ${this.username}
and password: ${this.password}`
    );
    return `Payment for service ${amount} is successful using ${this.title()}`;
};

//@param {*} DealerOption
//@param {*} config

function DealerFactory(DealerOption, config = {}) {
    const dealer = Object.create(dealerOption);
    Object.assign(dealer, config);
    return dealer;
}

const dealerFactory = DealerFactory(DealerA, {
    username: "user",
    password: "pass"
});
console.log(dealerFactory.title());
console.log(dealerFactory.pay(12));

const dealerFactory2 = DealerFactory(DealerB, {
    username: "user2",
    password: "pass2"
});
console.log(dealerFactory2.title());
console.log(dealerFactory2.pay(50));



// RULES JS
// BAD
if (val == 2);
// GOOD
if (val === 2);

// BAD
var myVar = 10;
// GOOD
let myVar = 10;

// BAD
let VAT_PERCENT = 20;
// GOOD
const VAT_PERCENT = 20;

// BAD
const VAT_PERCENT = 20;
let amount = 10
return addVat(amount, VAT_PERCENT)
// GOOD
const VAT_PERCENT = 20;
let amount = 10;
return addVat(amount, VAT_PERCENT);

// BAD
let fullName = firstName + " " + lastName;
// GOOD
let fullName = `${firstName} ${lastName}`;

// BAD
var multiply = function (a, b) {
    return a * b;
};
// GOOD
const multiply = (a, b) => { return a * b };

// BAD
if (valid);
doSomething();
if (amount > 100)
    doSomething();
else if (amount > 200);
doSomethingElse();
// GOOD
if (valid) {
    doSomething();
}
if (amount > 100) {
    doSomething();
}
else if (amount > 200) {
    doSomethingElse();
}


// BAD
if (myNumber > 0) {
    if (myNumber > 100) {
        if (!hasDiscountAlready) {
            return addDiscountPercent(0);
        } else {
            return addDiscountPercent(10);
        }
    } else if (myNumber > 50) {
        if (hasDiscountAlready) {
            return addDiscountPercent(5);
        }
    } else {
        if (!hasDiscountAlready) {
            return addDiscountPercent(0);
        } else {
            return addDiscountPercent(1);
        }
    }
} else {
    error();
}
// GOOD
if (myNumber <= 0) {
    return error;
}
if (!hasDiscountAlready) {
    return addDiscountPercent(0);
}
if (myNumber > 100) {
    return addDiscountPercent(10);
}
if (myNumber > 50) {
    return addDiscountPercent(5);
}
return addDiscountPercent(1);


// BAD
const myFnc = (a, b) => {
    return a + b;
}

// GOOD
const myFnc = (a = 0, b = 0) => {
    return a + b;
}


// Async map JavaScript
function main() {
    return Promise.all([1, 2, 3, 4].map((value) => asyncThing(value)));
}

main()
    .then(values => values.map((value) => value * 2))
    .then(v => console.log(v))
    .catch(err => console.error(err));

// Async filter JavaScript
function asyncThing(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 100);
    });
}
async function main() {

    const arrTem = await Promise.all(await asyncThing([1, 2, 3, 4]));

    return arrTem.filter((value) => {
        return value % 2 === 0;
    });
}
main()
    .then(v => console.log(v))
    .catch(err => console.error(err));


// Async Reduce JavaScript
function asyncThing(value) {
    return new Promise((resolve) => {
        setTimeout(() => resolve(value), 100);
    });
}

async function main() {
    return [1, 2, 3, 4].reduce(async (acc, value) => {
        return await acc + await asyncThing(value);
    }, Promise.resolve(0));
}

main()
    .then(v => console.log(v))
    .catch(err => console.error(err));




// Connect node js with Oracle
// $ npm install oracledb

const oracledb = require('oracledb')
const config = {
    user: '',
    password: '',
    connectString: 'localhost:1521/orcl'
}

async function getEmployee(empId) {
    let conn

    try {
        conn = await oracledb.getConnection(config)

        const result = await conn.execute(
            'select * from employees where employee_id = :id',
            [empId]
        )

        console.log(result.rows[0]);
    } catch (err) {
        console.log('Ouch!', err);
    } finally {
        if (conn) { // conn assignment worked, need to close
            await conn.close();
        }
    }
}

getEmployee(101)



// Connect Mongodb nodejs
// $ npm install mongodb
var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, db) {
    if (err) throw err

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result);
    })
})

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
    if (err) throw err

    var db = client.db('animals')

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result);
    })
})


// Connect Mysql nodejs
// $ npm install mysql
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'dbuser',
    password: 's3kreee7',
    database: 'my_db'
})

connection.connect()

connection.query('SELECT 1 + 1 AS solution', function (err, rows, fields) {
    if (err) throw err

    console.log('The solution is: ', rows[0].solution)
})

connection.end()


// Connect Elasticsearch Nodejs
// $ npm install elasticsearch
var elasticsearch = require('elasticsearch')
var client = elasticsearch.Client({
    host: 'localhost:9200'
})

client.search({
    index: 'books',
    type: 'book',
    body: {
        query: {
            multi_match: {
                query: 'express js',
                fields: ['title', 'description']
            }
        }
    }
}).then(function (response) {
    var hits = response.hits.hits
}, function (error) {
    console.trace(error.message)
})


// Connect SQLite Nodejs
// $ npm install sqlite3
var sqlite3 = require('sqlite3').verbose()
var db = new sqlite3.Database(':memory:')

db.serialize(function () {
    db.run('CREATE TABLE lorem (info TEXT)');
    var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

    for (var i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i);
    }

    stmt.finalize()

    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info);
    })
})

db.close()


// Connect SQL Server Nodejs
// $ npm install tedious
var Connection = require('tedious').Connection
var Request = require('tedious').Request

var config = {
    server: 'localhost',
    authentication: {
        type: 'default',
        options: {
            userName: 'your_username', // update me
            password: 'your_password' // update me
        }
    }
}

var connection = new Connection(config)

connection.on('connect', function (err) {
    if (err) {
        console.log(err);
    } else {
        executeStatement();
    }
})

function executeStatement() {
    request = new Request("select 123, 'hello world'", function (err, rowCount) {
        if (err) {
            console.log(err);
        } else {
            console.log(rowCount + ' rows');
        }
        connection.close();
    })

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value === null) {
                console.log('NULL');
            } else {
                console.log(column.value);
            }
        });
    })

    connection.execSql(request)
}


// Connect Redis Nodejs
// $ npm install redis
var redis = require('redis')
var client = redis.createClient()

client.on('error', function (err) {
    console.log('Error ' + err)
})

client.set('string key', 'string val', redis.print)
client.hset('hash key', 'hashtest 1', 'some value', redis.print)
client.hset(['hash key', 'hashtest 2', 'some other value'], redis.print)

client.hkeys('hash key', function (err, replies) {
    console.log(replies.length + ' replies:')

    replies.forEach(function (reply, i) {
        console.log('    ' + i + ': ' + reply);
    })

    client.quit()
})


// Connect PostgreSQL Nodejs
// $ npm install pg-promise
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://username:password@host:port/database')

db.one('SELECT $1 AS value', 123)
    .then(function (data) {
        console.log('DATA:', data.value);
    })
    .catch(function (error) {
        console.log('ERROR:', error);
    })

// Connect Neo4j Nodejs
// $ npm install apoc
var apoc = require('apoc')

apoc.query('match (n) return n').exec().then(
    function (response) {
        console.log(response);
    },
    function (fail) {
        console.log(fail);
    }
)


// Connect LevelDB Nodejs
var levelup = require('levelup')
var db = levelup('./mydb')

db.put('name', 'LevelUP', function (err) {
    if (err) return console.log('Ooops!', err)

    db.get('name', function (err, value) {
        if (err) return console.log('Ooops!', err)

        console.log('name=' + value);
    })
})


// Connect CouchDB
// $ npm install nano
var nano = require('nano')('http://localhost:5984')
nano.db.create('books')
var books = nano.db.use('books')

// Insert a book document in the books database
books.insert({ name: 'The Art of war' }, null, function (err, body) {
    if (err) {
        console.log(err);
    } else {
        console.log(body);
    }
})

// Get a list of all books
books.list(function (err, body) {
    if (err) {
        console.log(err);
    } else {
        console.log(body.rows);
    }
})


// Connect Couchbase
var couchbase = require('couchbase')
var bucket = (new couchbase.Cluster('http://localhost:8091')).openBucket('bucketName')

// add a document to a bucket
bucket.insert('document-key', { name: 'Matt', shoeSize: 13 }, function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})

// get all documents with shoe size 13
var n1ql = 'SELECT d.* FROM `bucketName` d WHERE shoeSize = $1'
var query = N1qlQuery.fromString(n1ql)
bucket.query(query, [13], function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(result);
    }
})

// Connect Cassandra
// $ npm install cassandra-driver
var cassandra = require('cassandra-driver')
var client = new cassandra.Client({ contactPoints: ['localhost'] })

client.execute('select key from system.local', function (err, result) {
    if (err) throw err
    console.log(result.rows[0])
})


// set timeout
setTimeout(function () {
    console.log('facebook.com');
}, 0);
console.log('anonystick.com');

//output 
// anonystick.com
// facebook.com

// clear all set timeout javascript
var timeouts = [];
timeouts.push(setTimeout(function () { alert(1); }, 200));
timeouts.push(setTimeout(function () { alert(2); }, 300));
timeouts.push(setTimeout(function () { alert(3); }, 400));

for (var i = 0; i < timeouts.length; i++) {
    clearTimeout(timeouts[i]);
}


var x = 'anonystick.com';
var obj = {
    x: 'facebook.com',
    y: function () {
        console.log(this.x);
    }
};
setTimeout(obj.y, 1000);
// anonystick.com

function Blog(login) {
    this.login = login;
    this.sayHi = function () {
        console.log(this.login);
    }
}
var site = new Blog('anonystick.com');
setTimeout(site.sayHi, 1000);
// undefined



// 10 method array

// 1. forEach javascript (repeat the item on the array)
const arr = [1, 2, 3, 4, 5, 6];
arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
});


// 2. includes javascript (check any item existence in the array)
const arr = ['Nam', 2, 3, 4, 5, 6];

arr.includes('Nam'); // output: true
arr.includes(7); // output: false


// 3. filter javascript (create a new array with conditions)
const arr = [1, 2, 3, 4, 5, 6];

// greater than 2 can do
const filtered = arr.filter(num => num > 2);
console.log(filtered); // output: [3, 4, 5, 6]


// 4. map javascript cCreate a new Array base on the item of the old Array)
const arr = [1, 2, 3, 4, 5, 6];

// bonus cho mỗi em một kẹo mút
const oneAdded = arr.map(num => num + 1);
console.log(oneAdded); // output [2, 3, 4, 5, 6, 7]

console.log(arr); // output: [1, 2, 3, 4, 5, 6]


// 5. reduce javascript
// + Count the instances of values in an object
// + Flatten array
// + Group objects according to attributes
// + Link arrays contained in an array of objects using Spread and InitialValue operators

// reduce() instead of map()
const arr = [{ name: 'Amy' }, { name: 'Bob' }];
arr.map(it => it.name); // map
arr.reduce((c, n) => [...c, n.name], []); // reduce

// reduce() instead of filter()
const arr = [{ name: 'Amy', age: 18 }, { name: 'Bob', age: 20 }];
arr.filter(it => it.age > 18); // filter
arr.reduce((c, n) => n.age > 18 ? [...c, n] : c, []); // reduce

// reduce() instead of map() + filter()
const arr = [{ name: 'Amy', age: 18 }, { name: 'Bob', age: 20 }];
arr.filter(it => it.age > 18).map(it => it.name);
arr.reduce((c, n) => n.age > 18 ? [...c, n.name] : c, []); // reduce   Bob

// reduce() instead of some() or every()
const arr = [{ name: 'Amy', age: 18 }, { name: 'Bob', age: 20 }];
arr.reduce((c, n) => c || n.age > 18, false); // some
arr.reduce((c, n) => c && n.age > 18, true); // every

const scores = [
    { score: 45, subject: "chinese" },
    { score: 90, subject: "math" },
    { score: 60, subject: "english" }
];

const isAtLeastOneQualified = scores.reduce((t, v) => t || v.score >= 60, false); // some. true

const isAllQualified = scores.reduce((t, v) => t && v.score >= 60, true); // every. false

console.log(isAllQualified);



// reduce() [1,2,3,4] => [[1,2], [3,4]]
console.log([1, 2, 3, 4].reduce((c, n) => { c[c.length - 1].length >= 2 ? c.push([n]) : c[c.length - 1].push(n); return c }, [[]]))


// chunk array
function Chunk(arr = [], size = 1) {
    return arr.length ? arr.reduce((t, v) => (t[t.length - 1].length === size ? t.push([v]) : t[t.length - 1].push(v), t), [[]]) : [];
}

const arr = [1, 2, 3, 4, 5];
Chunk(arr, 2); // [[1, 2], [3, 4], [5]]


// Reduce finds different elements between two Arrays
function Difference(arr = [], oarr = []) {
    return arr.reduce((t, v) => (!oarr.includes(v) && t.push(v), t), []);
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 6]
Difference(arr1, arr2); // [1, 4, 5]

// Insert the word section into an array given
function Fill(arr = [], val = "", start = 0, end = arr.length) {
    if (start < 0 || start >= end || end > arr.length) return arr;
    return [
        ...arr.slice(0, start),
        ...arr.slice(start, end).reduce((t, v) => (t.push(val || v), t), []),
        ...arr.slice(end, arr.length),
    ];
}
const arr = [0, 1, 2, 3, 4, 5, 6];
Fill(arr, "aaa", 2, 5); // [0, 1, "aaa", "aaa", "aaa", 5, 6]

// Flatten a Array
function Flat(arr = []) {
    return arr.reduce((t, v) => t.concat(Array.isArray(v) ? Flat(v) : v), [])
}
const arr = [0, 1, [2, 3], [4, 5, [6, 7]], [8, [9, 10, [11, 12]]]];
Flat(arr); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]


// Unique Array
function Uniq(arr = []) {
    return arr.reduce((t, v) => t.includes(v) ? t : [...t, v], []);
}
const arr = [2, 1, 0, 3, 2, 1, 2];
Uniq(arr); // [2, 1, 0, 3]


// Find max() và min()
function Max(arr = []) {
    return arr.reduce((t, v) => t > v ? t : v);
}

function Min(arr = []) {
    return arr.reduce((t, v) => t < v ? t : v);
}
const arr = [12, 45, 21, 65, 38, 76, 108, 43];
Max(arr); // 108
Min(arr); // 12

function Unzip(arr = []) {
    return arr.reduce(
        (t, v) => (v.forEach((w, i) => t[i].push(w)), t),
        Array.from({ length: Math.max(...arr.map(v => v.length)) }).map(v => [])
    );
}
const arr = [["a", 1, true], ["b", 2, false]];
Unzip(arr); // [["a", "b"], [1, 2], [true, false]]



// Count the same value in an Array
function Count(arr = []) {
    return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {});
}
const arr = [0, 1, 1, 2, 2, 2];
Count(arr); // { 0: 1, 1: 2, 2: 3 }


// group by use reduce
function Group(arr = [], key) {
    return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}
const arr = [
    { area: "GZ", name: "YZW", age: 27 },
    { area: "GZ", name: "TYJ", age: 25 },
    { area: "SZ", name: "AAA", age: 23 },
    { area: "FS", name: "BBB", age: 21 },
    { area: "SZ", name: "CCC", age: 19 }
];
Group(arr, "area"); // { GZ: Array(2), SZ: Array(2), FS: Array(1) }


// statistics View keywords in Array
function Keyword(arr = [], keys = []) {
    return keys.reduce((t, v) => (arr.some(w => w.includes(v)) && t.push(v), t), []);
}
const text = [
    "blog javascript by anonystick.com",
    "anonystick.com",
    "tiki and lazada is better",
];
const keyword = ["javascript", "anonystick", 'words', "lazada", 'tips javascript']
console.log(Keyword(text, keyword)); //["javascript","anonystick","lazada"]

// Decimal
function ThousandNum(num = 0) {
    const str = (+num).toString().split(".");
    const int = nums => nums.split("").reverse().reduceRight((t, v, i) => t + (i % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
    const dec = nums => nums.split("").reduce((t, v, i) => t + ((i + 1) % 3 ? v : `${v},`), "").replace(/^,|,$/g, "");
    return str.length > 1 ? `${int(str[0])}.${dec(str[1])}` : int(str[0]);
}
ThousandNum(1234); // "1,234"
ThousandNum(1234.00); // "1,234"
ThousandNum(0.1234); // "0.123,4"
ThousandNum(1234.5678); // "1,234.567,8"



// parse url use reduce
function ParseUrlSearch() {
    return location.search.replace(/(^\?)|(&$)/g, "").split("&").reduce((t, v) => {
        const [key, val] = v.split("=");
        t[key] = decodeURIComponent(val);
        return t;
    }, {});
}
//https://anonystick.com?age=55&name=anonystick

ParseUrlSearch(); // { age: "55", name: "anonystick" }


// Analyze an Object to the URL params
function StringifyUrlSearch(search = {}) {
    return Object.entries(search).reduce(
        (t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`,
        Object.keys(search).length ? "?" : ""
    ).replace(/&$/, "");
}

StringifyUrlSearch({ age: 55, name: "anonystick" }); // "?age=55&name=anonystick"


// Get Value of the key of a given object
function GetKeys(obj = {}, keys = []) {
    return Object.keys(obj).reduce((t, v) => (keys.includes(v) && (t[v] = obj[v]), t), {});
}
const target = { a: 1, b: 2, c: 3, d: 4 };
const keyword = ["a", "d"];
GetKeys(target, keyword); // { a: 1, d: 4 }


// Convert an Array Object to Object
const people = [
    { area: "GZ", name: "YZW", age: 27 },
    { area: "SZ", name: "TYJ", age: 25 }
];
const map = people.reduce((t, v) => {
    const { name, ...rest } = v;
    t[name] = rest;
    return t;
}, {}); // { YZW: {…}, TYJ: {…} }


// Test performance when use loop
const list = [...new Array(100000).keys()];

// for
console.time("for");
let result1 = 0;
for (let i = 0; i < list.length; i++) {
    result1 += i + 1;
}
console.log(result1);
console.timeEnd("for");

// forEach
console.time("forEach");
let result2 = 0;
list.forEach(v => (result2 += v + 1));
console.log(result2);
console.timeEnd("forEach");

// map
console.time("map");
let result3 = 0;
list.map(v => (result3 += v + 1, v));
console.log(result3);
console.timeEnd("map");

// reduce
console.time("reduce");
const result4 = list.reduce((t, v) => t + v + 1, 0);
console.log(result4);
console.timeEnd("reduce");


// NOT
let arr = [1, 2, 3, 4, 5];
let sum = 0;
for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum);

// DO
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((x, y) => x + y);
console.log(sum);


// calculate the sum of values in a JavaScript Reduce Object
let initialValue = 0;
let objArray = [
    { x: 1 },
    { x: 2 },
    { x: 3 },
    { x: 4 },
    { x: 5 },
]
let sum = objArray.reduce(function (total, currentValue) {
    return total + currentValue.x;
}, initialValue);

console.log(sum); //15


// Convert Multiple Array to a Array Filter Reduce JavaScript
let flattened = [[1, 2], [3, 4], [5, 6]]
    .reduce((total, currentValue) => total.concat(currentValue), []);

console.log(flattened); //[1, 2, 3, 4, 5, 6]


// Group by using reduce
let team = [
    { name: 'cong phuong', country: 'Viet Nam' },
    { name: 'Ronaldo', country: 'Portugal' },
    { name: 'Quang Hai', country: 'Viet Nam' },
    { name: 'Messi', country: 'Argentina' },
    { name: 'Nani', country: 'Portugal' },
]

Array.prototype.groupBy = function (prop) {
    return this.reduce(function (groups, item) {
        const val = item[prop]
        groups[val] = groups[val] || []
        groups[val].push(item);
        return groups
    }, {})
}

team.groupBy('country');


// calculating Array's sum and integration using Reduce JavaScript
function Accumulation(...vals) {
    return vals.reduce((t, v) => t + v, 0);
}

function Multiplication(...vals) {
    return vals.reduce((t, v) => t * v, 1);
}

Accumulation(1, 2, 3, 4, 5); // 15
Multiplication(1, 2, 3, 4, 5); // 120


// REDUCE Replacement Reverse ()
function Reverse(arr = []) {
    return arr.reduceRight((t, v) => (t.push(v), t), []);
}
Reverse([1, 2, 3, 4, 5]); // [5, 4, 3, 2, 1]


// reduce to replace Map() or Filter()
const arr = [0, 1, 2, 3];

// map: [0, 2, 4, 6]
const a = arr.map(v => v * 2);
const b = arr.reduce((t, v) => [...t, v * 2], []);  // []: initial value

// filter: [2, 3]
const c = arr.filter(v => v > 1);
const d = arr.reduce((t, v) => v > 1 ? [...t, v] : t, []);

// reduce chấp cả hai map + filter
const e = arr.map(v => v * 2).filter(v => v > 2);
const f = arr.reduce((t, v) => v * 2 > 2 ? [...t, v * 2] : t, []);


// sum all the values of an array
let sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue
}, 0);   // 0: initial value
// sum is 6

// sum of values in an object array
let initialValue = 0
let sum = [{ x: 1 }, { x: 2 }, { x: 3 }].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    , initialValue
)

console.log(sum) // logs 6


// process with condition
const numbers = [-5, 6, 2, 0,];

const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
        const doubled = currentValue * 2;
        accumulator.push(doubled);
    }
    return accumulator;
}, []);

console.log(doubledPositiveNumbers); // [12, 4]


// remove duplicate items in an array
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
    if (accumulator.indexOf(currentValue) === -1) {
        accumulator.push(currentValue);
    }
    return accumulator;
}, []);

console.log(myOrderedArray);


// bonding arrays contained in an array of objects
// friends - an array of objects
// where object field "books" is a list of favorite books
let friends = [{
    name: 'Anna',
    books: ['Bible', 'Harry Potter'],
    age: 21
}, {
    name: 'Bob',
    books: ['War and peace', 'Romeo and Juliet'],
    age: 26
}, {
    name: 'Alice',
    books: ['The Lord of the Rings', 'The Shining'],
    age: 18
}];

// allBooks - list which will contain all friends' books +
// additional list contained in initialValue
let allBooks = friends.reduce(function (accumulator, currentValue) {
    return [...accumulator, ...currentValue.books]
}, ['Alphabet']);

// allBooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]


// Grouping objects by a property
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
    return objectArray.reduce(function (acc, obj) {
        let key = obj[property];
        if (!acc[key]) {
            acc[key] = [];
        };
        acc[key].push(obj);
        return acc;
    }, {});
};

let groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }


// counting instances of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++;
    }
    else {
        allNames[name] = 1;
    }
    return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


// flatten an array of arrays
let flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    (accumulator, currentValue) => accumulator.concat(currentValue),
    []
);


// Running Promises in Sequence
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
    return arr.reduce(
        (promiseChain, currentFunction) => promiseChain.then(currentFunction),
        Promise.resolve(input)
    )
}

// promise function 1
function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5);
    })
}

// promise function 2
function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2);
    })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
    return a * 3
}

// promise function 4
function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4);
    })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10)
    .then(console.log)   // 1200


// Function composition enabling piping
// Building-blocks to use for composition
const double = x => x + x
const triple = x => 3 * x
const quadruple = x => 4 * x

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
)

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple)
const multiply9 = pipe(triple, triple)
const multiply16 = pipe(quadruple, quadruple)
const multiply24 = pipe(double, triple, quadruple)

// Usage
multiply6(6)   // 36
multiply9(9)   // 81
multiply16(16) // 256
multiply24(10) // 240


// Method use with array
const numbers = [1, 2, 3, 4, 5]

// Array.slice
const copy = numbers.slice();

// Array.map
const copy = numbers.map(num => num);

// Array.from
const copy = Array.from(new Set(numbers));

// Spread Operator
const copy = [...numbers];

// Array.of
const copy = Array.of(...numbers);

// new Array and Spread Operator
const copy = new Array(...numbers);

// Destructuring
const [...copy] = numbers;

// Array.concat
const copy = numbers.concat();

// Array.push vs Spread Operator
let copy = [].push(...numbers);

// Array.unshift vs Spread Operator
let copy = [].unshift(...numbers);

// Array.forEach
let copy = [];
numbers.forEach((value) => copy.push(value));

// for
let copy = [];
for (let i = 0; i < numbers.length; i++) {
    copy.push(numbers[i]);
};

// Array.reduce
const copy = numbers.reduce((acc, x) => { acc.push(x); return acc; }, []);

// apply
let copy = [];
Array.prototype.push.apply(copy, numbers);

// add item
copy.push(6);

console.log(copy);  // [1, 2, 3, 4, 5, 6]
console.log(numbers);  // [1, 2, 3, 4, 5]



// Grab Youtube thumbnail
// http://img.youtube.com/vi/[video-id]/[thumbnail-number].jpg
var Youtube = (function () {
    'use strict';

    var video, results;

    var getThumb = function (url, size) {
        if (url === null) {
            return '';
        }
        size = (size === null) ? 'big' : size;
        results = url.match('[\\?&]v=([^&#]*)');
        video = (results === null) ? url : results[1];

        if (size === 'small') {
            return 'http://img.youtube.com/vi/' + video + '/2.jpg';
        }
        return 'http://img.youtube.com/vi/' + video + '/0.jpg';
    };

    return {
        thumb: getThumb
    };
}());

//Example of usage:

var thumb = Youtube.thumb('https://www.youtube.com/watch?v=j4Jj29mUYS8');

console.log(thumb);


// YouTube thumbnail from a YouTube iframe
var iframe = $('iframe:first');
var iframe_src = iframe.attr('src');
var youtube_video_id = iframe_src.match(/you tube\.com.*(\?v=|\/embed\/)(.{11})/).pop();

if (youtube_video_id.length == 11) {
    var video_thumbnail = $('img src="//img.youtube.com/vi/' + youtube_video_id + '/0.jpg"');
    $(body).append(video_thumbnail);
};



// DOM Selecting elements
document.querySelector('.foo')            // class selector
document.querySelector('#foo')            // id selector
document.querySelector('div')             // tag selector
document.querySelector('[name="foo"]')    // attribute selector
document.querySelector('div + p > span')

const $ = document.querySelector.bind(document);
$('#container');
const $$ = document.querySelectorAll.bind(document);
$$('p');


// Adding elements HTML
// <a href="/home" class="active">Home</a>
// BAD
const link = document.createElement('a');
link.setAttribute('href', '/home');
link.className = 'active';
link.textContent = 'Home';
document.body.appendChild(link);

// GOOD
document.body.insertAdjacentHTML('beforeend', '<a href="/home" class="active">Home</a>');

// insertAdjacentHTML: method allow insert an element into
// < !--beforebegin -->
// <p>
//   <!-- afterbegin -->
//   foo
//   <!-- beforeend -->
// </p>
// <!--afterend -->


// Move DOM with insertAdjacentHTML
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
h1.insertAdjacentElement('afterend', h2);

// <div class="first">
//     <h1>Title</h1>
// </div>
// <div class="second">
//     <h2>Subtitle</h2>
// </div>


// <div class="first">
//     <h1>Title</h1>
//     <h2>Subtitle</h2>
// </div>
// <div class="second">
//
// </div>


// Replace DOM
const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');
h1.replaceWith(h2);


// <div class="first">
//    <h1>Title</h1>
// </div>
// <div class="second">
//    <h2>Subtitle</h2>
// </div>


// result:
// <div class="first">
//    <h2>Subtitle</h2>
// </div>
// <div class="second">
//
// </div>


// Remove DOM
const container = document.querySelector('#container');
container.remove();


// Array
let newArray = array.filter(callback(element, index, array));

// OR

let newArray = array.filter((element, index, array) => {
    //filter 'em elements
})

const deciduous = [
    { name: "birch", count: 4 },
    { name: "maple", count: 5 },
    { name: "oak", count: 2 }
];

let newArray = deciduous.filter((element, index, array) => {
    console.log(element, index, array)
});

/*
    newArray: array will be returned
    array: original array filtered
    callback: callback to use elements in array matched
    element: current element in processing
    index: current index
    array: original array
*/


// FIND (first matched) vs FILTER (all matched)
const jsonArr = [
    {
        id: 1,
        name: "joe"
    },
    {
        id: -19,
        name: "john"
    },
    {
        id: 20,
        name: "james"
    },
    {
        id: 25,
        name: "jack"
    },
    {
        id: -10,
        name: "joseph"
    },
    {
        id: "not a number",
        name: "jimmy"
    },
    {
        id: null,
        name: "jeff"
    },
]
const resultFilter = jsonArr.filter(el => el.id > 0);
// [ {id: 1, name: "joe"}, {id: 20, name: "james"},{id: 25, name: "jack"}]

const resultFind = jsonArr.find(el => el.id > 0);
// {id: 1, name: "joe"}



// COOKIE - SET/GET and protect
// npm i cookie-parser --save
var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();

// set key HMAC to protect cookie from edit
app.use(cookieParser('78hy7717qeq9'));

// localhost:3000/setCookies
app.get('/setCookie', (req, res) => {
    // set cookie
    res.cookie('sitesSecurity', 'anonystick.com', { signed: true });

    // response status success
    res.json({ ok: 1 })
})

// localhost:3000/getCookies
app.get('/getCookie', (req, res) => {
    // log to trace cookie
    console.log('[ANONY] getCookie::::', req.cookies);
    console.log('[ANONY] getCookie::::signedCookies::::', req.signedCookies.sitesSecurity);

    // response cookies
    res.json({ ok: req.cookies })
})

app.listen(3000);


// async await without try/catch
const router = require('express').Router();
router.get('/check', check);
module.exports = router;

async function check(req, res) {
    const a = await fn1().catch((error) => { res.send("some error") });
    const b = await fn2().catch((error) => { res.send(("some error ", error)) });

    // check return value to make sure cover only success
    if (a && b) res.status(200).json({ a: a, b: b });
}

fn1 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve("something");
        }, 10);
    })

}

fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("from b");
        });
    })
}


// 1. Avoid write all into a function
// BAD
function addEventDom() {
    $.ajax.get('/getData').then((res) => {
        const ul = document.getElementById('ul');
        ul.innerHTML = res.list.map(text => `<li class="li">${text}</li>`).join('\n');
        const list = document.getElementsByClassName('li');
        for (let i = 0; i < list.length; i++) {
            list[i].addEventListener('focus', () => {
                // do something
            });
        }
    });
};

// GOOD - Split code
/**
 * getData() method to grab data by ajax
 * @returns data list
 */
const getData = () => {
    return $.ajax.get('/getData').then((res) => res.data.list);
};

/**
 * showList() method to add DOM to show data list
 * @param {*} list - data list grabbed
 */
const showList = (list) => {
    const ul = document.getElementById('ul');
    ul.innerHTML = list.map(text => `<li class="li">${text}</li>`).join('\n');
};

/**
 * addEvent() method to add event to DOM
 */
const addEvent = () => {
    const list = document.getElementsByClassName('li');
    for (let i = 0; i < list.length; i++) {
        list[i].addEventListener('focus', () => {
            // do something
        });
    }
}

/**
 * addEventDom() method to handle all of add event dom process
 */
const addEventDom = async () => {
    const list = await getData(); // grab data
    showList(list); // show data in DOM
    addEvent(); // add data to DOM
}

// 2 - split if into functions
// BAD
function getPrice(price) {
    var date = new Date();
    if (date.getMonth() >= 6 && date.getMonth() <= 9) { // sale time
        return price * 0.8;
    }
    return price;
};


// GOOD
/**
 * isSales() method to check sale time
 * @returns sale time
 */
function isSales() {
    var date = new Date();
    return date.getMonth() >= 6 && date.getMonth() <= 9;
};

/**
 * getPrice() method to get sale price
 * @param {*} price - sale price
 * @returns sale price
 */
function getPrice(price) {
    return isSales() ? price * 0.8 : price;
};


// 3 - Return a function if not match to condition
function del(obj) {
    var ret;
    if (!obj.isReadOnly) {
        if (obj.isFolder) {
            ret = deleteFolder(obj);
        } else if (obj.isFile) {
            ret = deleteFile(obj);
        }
    }
    return ret;
};


function del(obj) {
    if (obj.isReadOnly) {
        return;
    };
    if (obj.isFolder) {
        return deleteFolder(obj);
    };
    if (obj.isFile) {
        return deleteFile(obj);
    };
};

// GOOD
function getBrowser() {
    const str = navigator.userAgent;
    const list = [
        { key: 'QQBrowser', browser: 'qq' },
        { key: 'Chrome', browser: 'chrome' },
        { key: 'Safari', browser: 'safari' },
        { key: 'Firefox', browser: 'firefox' },
        { key: 'Opera', browser: 'opera' },
        { key: 'msie', browser: 'ie' },
    ];
    for (let i = 0; i < list.length; i++) {
        const item = list[i];
        if (str.includes(item.key)) { return item.browser };
    }
    return 'other';
}


// 4 - use loops reasonable
// BAD
function getBrowser() {
    const str = navigator.userAgent;
    if (str.includes('QQBrowser')) {
        return 'qq';
    } else if (str.includes('Chrome')) {
        return 'chrome';
    } else if (str.includes('Safari')) {
        return 'safri';
    } else if (str.includes('Firefox')) {
        return 'firefox';
    } else if (explorer.indexOf('Opera') >= 0) {
        return 'opera';
    } else if (str.includes('msie')) {
        return 'ie';
    } else {
        return 'other';
    }
}

// Async Functions With Promise
const fetchUsers = async (endpoint) => {
    const res = await fetch(endpoint);
    let data = await res.json();

    data = data.map(user => user.username);

    console.log(data);
}

fetchUsers('https://jsonplaceholder.typicode.com/users');


// Promise and Async/Await
const userIds = [1, 2, 3, 4]

// use promise
Promise.all(usersIds.map(api.getUser)).then(function (arrayOfResults) {
    const [user1, user2, user3, user4] = arrayOfResults;
});

// use async/await
async () => {
    const userIds = [1, 2, 3, 4];
    const [user1, user2, user3, user4] = await Promise.all(usersIds.map(api.getUser));
};


// Simple promise
function who() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('🤡');
        }, 200);
    });
}

function what() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('lurks');
        }, 300);
    });
}

function where() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('in the shadows');
        }, 500);
    });
}

async function msg() {
    const a = await who();
    const b = await what();
    const c = await where();

    console.log(`${a} ${b} ${c}`);
}

msg(); // 🤡 lurks in the shadows <-- after 1 second


// Error Handling
function yayOrNay() {
    return new Promise((resolve, reject) => {
        const val = Math.round(Math.random() * 1); // 0 or 1, at random

        val ? resolve('Lucky!!') : reject('Nope 😠');
    });
}

async function msg() {
    try {
        const msg = await yayOrNay();
        console.log(msg);
    } catch (err) {
        console.log(err);
    }
}


// get a JSON resource and parse with promises
const getFirstUserData = () => {
    return fetch('/users.json') // get users list
        .then(response => response.json()) // parse JSON
        .then(users => users[0]) // pick first user
        .then(user => fetch(`/users/${user.name}`)) // get user data
        .then(userResponse => userResponse.json()) // parse JSON
};

getFirstUserData();


// get a JSON resource and parse with await/async
const getFirstUserData = async () => {
    const response = await fetch('/users.json') // get users list
    const users = await response.json() // parse JSON
    const user = users[0] // pick first user
    const userResponse = await fetch(`/users/${user.name}`) // get user data
    const userData = await userResponse.json() // parse JSON
    return userData
}

getFirstUserData();


// Multiple async functions in series
const promiseToDoSomething = () => {
    return new Promise(resolve => {
        setTimeout(() => resolve('I did something'), 10000);
    })
}

const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething();
    return something + '\nand I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething();
    return something + '\nand I watched as well'
}

watchOverSomeoneWatchingSomeoneDoingSomething().then(res => {
    console.log(res)
})



// Works with Objects
// ==============================================================
// Object.create() method to create a new Object and extend for an object
// Initialize an object with properties and methods
const job = {
    position: 'cashier',
    type: 'hourly',
    isAvailable: true,
    showDetails() {
        const accepting = this.isAvailable ? 'is accepting applications' : "is not currently accepting applications";

        console.log(`The ${this.position} position is ${this.type} and ${accepting}.`);
    }
};

// Use Object.create to pass properties
const barista = Object.create(job);

// change new value in new object
barista.position = "barista";
barista.showDetails();
// The barista position is hourly and is accepting applications.


// ==============================================================
// Object.keys() method to create a new array with all object keys
// Initialize an object
const employees = {
    boss: 'Michael',
    secretary: 'Pam',
    sales: 'Jim',
    accountant: 'Oscar'
};

// Get the keys of the object
const keys = Object.keys(employees);

console.log(keys);
// ["boss", "secretary", "sales", "accountant"]

// continue iterate with array method
// Iterate through the keys
Object.keys(employees).forEach(key => {
    let value = employees[key];

    console.log(`${key}: ${value}`);
});

/*
    boss: Michael
    secretary: Pam
    sales: Jim
    accountant: Oscar
*/


// ==============================================================
// Object.values() method create a new array with object values
// Initialize an object
const session = {
    id: 1,
    time: `26-July-2018`,
    device: 'mobile',
    browser: 'Chrome'
};

// Get all values of the object
const values = Object.values(session);

console.log(values);
// [1, "26-July-2018", "mobile", "Chrome"]


// ==============================================================
// Object.entries() method to create a nested array with object key/value
// Initialize an object
const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
};

// Get the object key/value pairs
const entries = Object.entries(operatingSystem);

console.log(entries);
/*
    [
        ["name", "Ubuntu"]
        ["version", 18.04]
        ["license", "Open Source"]
    ]
*/


// ==============================================================
// Object.assign() method to copy values from an object to other object
// Initialize an object
const name = {
    firstName: 'Philip',
    lastName: 'Fry'
};

// Initialize another object
const details = {
    job: 'Delivery Boy',
    employer: 'Planet Express'
};

// Merge the objects
const character = Object.assign(name, details);

// OR: Merge the object with the spread operator
const character = { ...name, ...details }

console.log(character);
// {firstName: "Philip", lastName: "Fry", job: "Delivery Boy", employer: "Planet Express"}


// ==============================================================
// Object.freeze()method to disable behavior change object value
// Initialize an object
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// Freeze the object
const newUser = Object.freeze(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
// {username: "AzureDiamond", password: "hunter2"}


// ==============================================================
// Object.seal() block adding a new properties but allow modification existing properties
// Initialize an object
const user = {
    username: 'AzureDiamond',
    password: 'hunter2'
};

// Seal the object
const newUser = Object.seal(user);

newUser.password = '*******';
newUser.active = true;

console.log(newUser);
// {username: "AzureDiamond", password: "*******"}


// ==============================================================
// copy the values from another object
const obj1 = {
    name: 'Anony Stick'
}
const obj2 = {
    age: 25,
    car: 'Vinfast',
    school: 'VinSchool'
}
Object.assign(obj1, obj2);
console.log(obj1);
// {name: "Anony Stick", age: 25, car: "Vinfast", school: "VinSchool"}


// ==============================================================
// clone an object to a new object
const obj3 = {
    age: 25,
    car: 'Vinfast',
    school: 'VinSchool'
}
const obj4 = Object.assign({}, obj3);
console.log(obj4);
//{age: 25, car: "Vinfast", school: "VinSchool"}


// merge duplicate properties with Object.assign()
const obj5 = {
    name: 'Pham Nhat Vuong',
    age: 55,
    car: 'Vinfast',
    school: 'VinSchool'
}
const obj6 = {
    name: 'Pham Nhat Phong',
    age: 25,
    moto: 'VinBike',
    spot: 'Bong da'
}
const obj7 = Object.assign({}, obj5, obj6);
console.log(obj7);
// {name: "Pham Nhat Phong", age: 25, car: "Vinfast", school: "VinSchool", moto: "VinBike", …}


// JavaScript Snippet
'use strict';

// Merge an object
let first = { name: 'Tony' };
let last = { lastName: 'Stark' };
let person = Object.assign(first, last);
ChromeSamples.log(person);
// {name: 'Tony', lastName: 'Stark'}
ChromeSamples.log(first);
// first = {name: 'Tony', lastName: 'Stark'} as the target also changed

// Merge multiple sources
let a = Object.assign({ foo: 0 }, { bar: 1 }, { baz: 2 });
ChromeSamples.log(a);
// {foo: 0, bar: 1, baz: 2}

// Merge and overwrite equal keys
let b = Object.assign({ foo: 0 }, { foo: 1 }, { foo: 2 });
ChromeSamples.log(b);
// {foo: 2}

// Clone an object
let obj = { person: 'Thor Odinson' };
let clone = Object.assign({}, obj);
ChromeSamples.log(clone);
// {person: 'Thor Odinson'}


// Promise.all
// ================================================================
// Situation 1: Many results must be processed simultaneously
// get detail of page
function getDetailPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('detail page taken');
        }, 300);
    });
};

// get data from info page
function getInfoPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('info page taken');
        }, 400);
    });
};

// get latest post of the page
function getArticlesPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('latest posts taken');
        }, 500);
    });
};

function initLoad() {
    // loading.show(); // show loading icon
    Promise.all([getDetailPage(), getInfoPage(), getArticlesPage()]).then(res => {
        console.log(res);
        // loading.hide(); // hide res, and show data
    }).catch(err => {
        console.log(err);
        // loading.hide(); // Lỗi cũng hide nó đi
    });
};

//init load
initLoad();


// Case 2: Verify validation required
function verify1(content) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true);
        }, 200);
    });
};

function verify2(content) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true);
        }, 700);
    });
};

function verify3(content) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true);
        }, 300);
    });
};

Promise.all([verify1('verify1'), verify2('verify2'), verify3('verify3')]).then(result => {
    console.log(result);  // [true, true, true]

    let verifyResult = result.every(item => item);
}).catch(err => {
    console.log(err)
});


// Situation 3:  error handling
// get data from detail page
function getDetailPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('detail page taken');
        }, 300);
    });
};

// get data from info page
function getInfoPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('info page taken');
        }, 400);
    });
};

// get the latest posts
function getArticlesPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('latest posts taken');
        }, 500);
    });
};

function initLoad() {
    // loading.show();
    Promise.all([
        getDetailPage().catch(err => err),
        getInfoPage().catch(err => err),
        getArticlesPage().catch(err => err)
    ]).then(res => {
        console.log(res);

        if (res[0] === 'page detail') {
            // get data success
        } else {
            // error handling here...
        };
        /*
            same with res[1] and res[2] ...
        */
        // loading.hide();
    });
};

//init load
initLoad();


// LOGIN
// 4 Login ways
// ================================================================

// 1. Login with Cookie and Session
// Processing
// Before login
// 1. user visit example.com/pageA and hit password to login
// 2. server will authen if password right will create SessionId and store it.
// 3. server responsive with SessionId and write it into Cookie (Session Cookie) with Set-Cookie (in header).
// After login
// 1. user visit example.com/pageB
// browser check if cookie exist, and send cookie to server
// server will compare SessionId in cookie with SessionId stored in server
// if true then grant access

// Disadvantages of logging in with cookies + sessions
// Because the server needs to connect to a large number of clients, it also needs to store a large number of SessionsId, which will cause the most overwhelming server pressure to be using PHP.
// If the server we are deploying the cluster (cluster), to synchronize the login status, the sessionID needs to be synchronized for each machine, this invalidation increases server maintenance costs.
// The biggest disadvantage when using SessionID login is stored in cookies is unable to avoid CSRF attacks


// 2. Login with Token
// https://res.cloudinary.com/anonystick/image/upload/v1588220610/javascript/access_20token_2C_20refresh_20token_hmo0n9.png
// https://anonystick.com/blog-developer/authorization-framework-access-token-refresh-token-cung-giong-viec-sinh-vien-thue-nha-tro-2019061161976500
// 1. Client (FE) vist example.com/pageA and hit password to login
// 2. Server (BE) will confirm it right and create a token
// 3. Server response token to Client, and Client save it anywhere.
// 4. Client vist example.com/pageB
// 5. Server will confirm token from request header and grant access

// Advantages and disadvantages of Token
// The server does not need to store token so it will not put pressure on the server, whether the server cluster does not need to increase maintenance costs.
// Token can be stored anywhere on the client interface and does not need to be stored in cookies, which helps improve the security of the page.
// After the token is released, it will still be valid as long as it is valid, if the server wants to withdraw the Token powers, not easy ????

// 3. login with SSO (Single SignOn)
// can log in to a system in a multi-system application group (google, youtube, console...)
// If the user has logged in to Domain X then they will automatically log in to Domain Y


// Spread Operator
// "Spread Operator allows converting a string into multiple arguments (in case of calling with functions) or into multiple elements (for array). In addition, it also allows the destructure task.

// Copying an array
let arr = [1, 2, 3, 4]
let copy = [...arr]
// copy is [ 1, 2, 3, 4 ]

// Concatenate arrays
let arr1 = [1, 2, 3, 4]
let arr2 = [5, 6, 7, 8]
let concat = [...arr1, ...arr2]
// concat is [ 1, 2, 3, 4, 5, 6, 7, 8 ]

// Copy an object
let obj = { a: 1, b: 2, c: 3 }
let copy = { ...obj }
// copy is {a: 1, b: 2, c: 3}

// Merge object
let obj1 = { a: 1, b: 2, c: 3 }
let obj2 = { d: 4, e: 5, f: 6 }

let merge = { ...obj1, ...obj2 }
// merge is {a: 1, b: 2, c: 3, d: 4, e: 5, f: 6}


// Array and Array Objects
// 1.Return about an Array containing the general elements of two Arrays in JavaScript
// Array
const arr1 = [1, 2, 3, 4, 5, 8, 9], arr2 = [5, 6, 7, 8, 9];

const intersection = arr1.filter(function (val) { return arr2.indexOf(val) > -1 });
console.log(intersection);  //[5, 8, 9]

// Array Objects
const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name5', id: 5 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];

const result = arr2.filter(function (v) {
    return arr1.some(n => JSON.stringify(n) === JSON.stringify(v));
});

console.log(result);
// [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name5', id: 5 }]


// 2. Return about an Array containing all elements of two arrays without duplication
// Array
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const result = arr1.concat(arr2.filter(v => !arr1.includes(v)));
console.log(result);
//[1, 2, 3, 4, 5, 8, 9]

// Array Object
const arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
const arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr3 = arr1.concat(arr2);
let result = [];
let obj = [];
result = arr3.reduce(function (prev, cur, index, arr) {
    obj[cur.id] ? '' : obj[cur.id] = true && prev.push(cur);
    return prev;
}, []);
console.log(result); //[{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]


// 3. Return about an Array containing all the first Elements of Array does not coincide with the second array
// Array
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const diff = arr1.filter(item => !new Set(arr2).has(item));
console.log(diff);
//[ 1, 2, 3, 4 ]

// Array Object
let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let result = arr1.filter(function (v) {
    return arr2.every(n => JSON.stringify(n) !== JSON.stringify(v))
})
console.log(result);
// [ { name: 'name2', id: 2 }, { name: 'name3', id: 3 } ]


// 4. Return about an Array containing all elements does not overlap between two Arrays
// Array
const arr1 = [1, 2, 3, 4, 5, 8, 9]
const arr2 = [5, 6, 7, 8, 9];
const difference = Array.from(new Set(arr1.concat(arr2).filter(v => !new Set(arr1).has(v) || !new Set(arr2).has(v))));
console.log(difference);
//  [ 1, 2, 3, 4, 6, 7 ]

// Array Object
let arr1 = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }];
let arr2 = [{ name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
let arr3 = arr1.concat(arr2);
let result = arr3.filter(function (v) {
    return arr1.every(n => JSON.stringify(n) !== JSON.stringify(v)) || arr2.every(n => JSON.stringify(n) !== JSON.stringify(v));
});
console.log(result);
// [{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]


// 5. Copy Array
// Array
console.log(Array.from(new Set([1, 2, 3, 3, 4, 4])));
//  [1,2,3,4]
console.log([...new Set([1, 2, 3, 3, 4, 4])]);
//  [1,2,3,4]

// Array Object
const arr = [{ name: 'name1', id: 1 }, { name: 'name2', id: 2 }, { name: 'name3', id: 3 }, { name: 'name1', id: 1 }, { name: 'name4', id: 4 }, { name: 'name5', id: 5 }];
const result = [];
arr.forEach(item => {
    !result.some(v => JSON.stringify(v) === JSON.stringify(item)) && result.push(item);
});
console.log(result);
//  [{ name: 'name1', id: 1 },{ name: 'name2', id: 2 },{ name: 'name3', id: 3 },{ name: 'name4', id: 4 },{ name: 'name5', id: 5 }]


// 6. Sort array and sort array object
// Array
console.log([1, 2, 3, 4].sort((a, b) => a - b)); // [1, 2,3,4]
console.log([1, 2, 3, 4].sort((a, b) => b - a)); // [4,3,2,1]

// Array Object
const arr1 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return a.age - b.age });
const arr2 = [{ name: "Rom", age: 12 }, { name: "Bob", age: 22 }].sort((a, b) => { return -a.age + b.age });
console.log(arr2);
// [{ name: 'Bob', age:22 }, { name: 'Rom', age: 12 }]
console.log(arr1);
// [ { name: 'Rom', age: 12 }, { name: 'Bob', age: 22 } ]


// 7. Find Max Element in Array and Array Object
// Array
Math.max(...[1, 2, 3, 4]) //4
Math.max.apply(this, [1, 2, 3, 4]) //4
[1, 2, 3, 4].reduce((prev, cur, curIndex, arr) => {
    return Math.max(prev, cur);
}, 0) //4

// Array Object
const arr = [{ id: 1, name: 'jack' }, { id: 2, name: 'may' }, { id: 3, name: 'shawn' }, { id: 4, name: 'tony' }]
const arr1 = Math.max.apply(Math, arr.map(item => { return item.id }))
const arr2 = arr.sort((a, b) => { return b.id - a.id })[0].id
console.log(arr1) // 4
console.log(arr2) // 4


// 8. Find Sum in Array and Array Object
// Array
[1, 2, 3, 4].reduce(function (prev, cur) {
    return prev + cur;
}, 0) //10

// Array Object
const sum = [{ age: 1 }, { age: 2 }].reduce(function (prev, cur) {
    return prev + cur.age;
}, 0) //3
console.log(sum);


// 9. Check the appropriate conditions of Array
// Array
console.log([1, 2, 3].includes(4)) //false
console.log([1, 2, 3].indexOf(4)) //-1
console.log([1, 2, 3].find((item) => item === 3)) //3
console.log([1, 2, 3].findIndex((item) => item === 3)) //2

// Array Object
const flag = [{ age: 1 }, { age: 2 }].some(v => JSON.stringify(v) === JSON.stringify({ age: 2 }))
console.log(flag);


// 10. Find Elements in an Array and Array Object
// Array
[1, 2, 3].every(item => { return item > 2 });

// Array Object
const arr = [{ age: 3 }, { age: 4 }, { age: 5 }]
arr.every(item => { return item.age > 2 }) // true



// Check Empty Object JavaScript
// #1 ES5
const a = {};

function isEmptyObject(obj) {
    return JSON.stringify(obj) === '{}';
};
console.log(isEmptyObject(a)); //true;

// #2
const a = {}

function isEmpty(obj) {
    for (var key in obj) {
        if (obj.hasOwnProperty(key));
        return false;
    }
    return true;
};
console.log(isEmpty(a)) //true;

// #3
const a = {}
console.log(Object.getOwnPropertyNames(a).length === 0); // true;

// #4
const a = {}
console.log(Object.keys(a).length === 0);// true

// #5
const a = {}
console.log(Object.values(a).length === 0); //true

// #6
const a = {}
console.log(Object.entries(a).length === 0); //true;


// Prototype
var bangai = {
    name: 'dao thi mo',
    pay: function () {
        thangdaigai.pay();
    }
};
var thangdaigai = {
    name: 'thang dai gai',
    pay: function () {
        console.log('Da mua boi tien cua bo me');
    }
};
bangai.pay(); // Da mua boi tien cua bo me


// # Destructuring Objects
const { id, website, date } = note;

// # Destructuring Arrays
const [year, month, day] = date;

// # Spread with Arrays
const tools = ['hammer', 'screwdriver']
const otherTools = ['wrench', 'saw']
const allTools = [...tools, ...otherTools]

// # Spread with Objects
const originalObject = { enabled: true, darkMode: false }
const secondObject = { ...originalObject }

// # Spread with Function Calls
function multiply(a, b, c) {
    return a * b * c
};
const numbers = [1, 2, 3]
multiply(...numbers); // 6


// Array.findAndRemove()
const items = [1, 2, 3, 4, 5];
const valueToRemove = 4;
const filteredItems = items.filter(item => item !== valueToRemove);
//  [1, 2, 3, 5]

Array.prototype.findAndRemove = function (value, key = null) {
    const index = this.findIndex(obj => (!!obj[key]) ? obj[key] === value : obj === value);
    return index >= 0 ? [
        ...this.slice(0, index),
        ...this.slice(index + 1)
    ] : this;
};

const list = [
    { id: 1, "name": "anonystick.com" },
    { id: 2, "name": "medium.com" },
    { id: 3, "name": "facebook.com" }
]
console.log(list.findAndRemove(2, "id"));
// [{id: 1, name: "anonystick.com"}, {id: 3, name: "facebook.com"}]

const list = [1, 2, 3, 4, 5]
console.log(list.findAndRemove(2));
// [1, 3, 4, 5]


// Array.getIndexes()
Array.prototype.getIndexes = function (test) {
    if (typeof (test) === "function") {
        return this.reduce((indices, element, index) => {
            if (test(element)) indices.push(index);
            return indices
        }, []);
    } else {
        return this.reduce((indices, element, index) => {
            if (element === test) indices.push(index);
            return indices
        }, []);
    }
};

const findIndex = [1, 2, 3, 4, 3, 6, 8, 3]
console.log(findIndex.getIndexes(3))
// [2, 4, 7]

const list = [{ name: "anonystick" }, { name: "facebook" }, { name: "anonystick" }]
console.log(list.getIndexes(obj => obj.name === 'anonystick'))
// [0, 2]


// Array.distinct()
Array.prototype.distinct = function (selector) {
    if (selector === 'undefined') {
        return [...new Set(this)];
    }

    if (typeof (selector) !== 'function') {
        throw new Error(`Expecting selector to be a function, but received ${typeof (selector)} instead.`);
    }

    let found = new Set();
    return this.filter(element => {
        if (found.has(selector(element))) {
            return false
        } else {
            found.add(selector(element));
            return true
        }
    })
};

const array = [1, 1, 1, 3, 3, 2, 2]
console.log(array.distinct())
// Output: [1, 3, 2]

const arr = [
    { id: 1, name: "king" },
    { id: 2, name: "master" },
    { id: 3, name: "lisa" },
    { id: 4, name: "ion" },
    { id: 5, name: "jim" },
    { id: 6, name: "gowtham" },
    { id: 1, name: "jam" },
    { id: 1, name: "lol" },
    { id: 2, name: "kwick" },
    { id: 3, name: "april" },
    { id: 7, name: "sss" },
    { id: 8, name: "brace" },
    { id: 8, name: "peiter" },
    { id: 5, name: "hey" },
    { id: 6, name: "mkl" },
    { id: 9, name: "melast" },
    { id: 9, name: "imlast" },
    { id: 10, name: "glow" }
]
console.log(arr.distinct(obj => obj.id));


// Array.limit() và Array.skip()
function limit(c) {
    return this.filter((x, i) => {
        if (i <= (c - 1)) { return true }
    })
}

Array.prototype.limit = limit;

function skip(c) {
    return this.filter((x, i) => {
        if (i > (c - 1)) { return true }
    })
}

Array.prototype.skip = skip;

const arr = [
    { id: 1, name: "king" },
    { id: 2, name: "master" },
    { id: 3, name: "lisa" },
    { id: 4, name: "ion" },
    { id: 5, name: "jim" },
    { id: 6, name: "gowtham" },
    { id: 1, name: "jam" },
    { id: 1, name: "lol" },
    { id: 2, name: "kwick" },
    { id: 3, name: "april" },
    { id: 7, name: "sss" },
    { id: 8, name: "brace" },
    { id: 8, name: "peiter" },
    { id: 5, name: "hey" },
    { id: 6, name: "mkl" },
    { id: 9, name: "melast" },
    { id: 9, name: "imlast" },
    { id: 10, name: "glow" }
];

// Limit()
console.log(JSON.stringify(arr.limit(2)));
// [
//     {"id":1,"name":"king"},
//     {"id":2,"name":"master"}
// ]

// Skip()
console.log(JSON.stringify(arr.skip(2)));
// [
//     {"id":3,"name":"lisa"},
//     {"id":4,"name":"ion"},
//     {"id":5,"name":"jim"},
//     {"id":6,"name":"gowtham"},
//     {"id":1,"name":"jam"},
//     {"id":1,"name":"lol"},
//     {"id":2,"name":"kwick"},
//     {"id":3,"name":"april"},
//     {"id":7,"name":"sss"},
//     {"id":8,"name":"brace"},
//     {"id":8,"name":"peiter"},
//     {"id":5,"name":"hey"},
//     {"id":6,"name":"mkl"},
//     {"id":9,"name":"melast"},
//     {"id":9,"name":"imlast"},
//     {"id":10,"name":"glow"}
// ]

// Skip() và limit()
console.log(JSON.stringify(arr.skip(2).limit(2)));
// [
//     {"id":3,"name":"lisa"},
//     {"id":4,"name":"ion"}
// ]

// Javascript performance - remove Duplicates from an Array

//  #1 Set
const array = [1, 1, 1, 3, 3, 2, 2];
const unique = [...new Set(array)];

// #2 Reduce
const array = [1, 1, 1, 3, 3, 2, 2];
const unique = array.reduce((result, element) => {
    return result.includes(element) ? result : [...result, element];
}, []);

// #3 filter
const array = [1, 1, 1, 3, 3, 2, 2];
const unique = array.filter((element, index) => {
    return array.indexOf(element) === index;
});
console.log(unique); //return [1, 3, 2]

// #4 indexOf
// Defining function to get unique values from an array
function getUnique(array) {
    var uniqueArray = [];

    // Loop through array values
    for (i = 0; i < array.length; i++) {
        if (uniqueArray.indexOf(array[i]) === -1) {
            uniqueArray.push(array[i]);
        }
    }
    return uniqueArray;
}

var uniqueNames = getUnique(array);
console.log(uniqueNames); //return [1, 3, 2]

// #5 forEach
const array = [1, 1, 1, 3, 3, 2, 2];
function removeDups(names) {
    let unique = {};
    names.forEach(function (i) {
        if (!unique[i]) {
            unique[i] = true;
        }
    });
    return Object.keys(unique);
}

console.log(removeDups(array));


// Async/Await
async function fetchOwners(catIDs) {
    const ownerPromises = catIDs.map(async id => {
        const cat = await fetchCat(id);
        const owner = await fetchOwner(cat.ownerID);
        return owner;
    });
    const owners = await Promise.all(ownerPromises);
    return owners;
};

async function getBooksAndAuthor(authorId) {
    const bookPromise = bookModel.fetchAll();
    const authorPromise = authorModel.fetch(authorId);
    const book = await bookPromise;
    const author = await authorPromise;
    return {
        author,
        books: books.filter(book => book.authorId === authorId),
    };
};


// Get Query String Parameters
// URL "?post=1234&amp;action=edit"

var urlParams = new URLSearchParams(window.location.search);

console.log(urlParams.has('post')); // true
console.log(urlParams.get('action')); // "edit"
console.log(urlParams.getAll('action')); // ["edit"]
console.log(urlParams.toString()); // "?post=1234&amp;action=edit"
console.log(urlParams.append('active', '1')); // "?post=1234&amp;action=edit&amp;active=1"


// Image optimization
// 1 - lazy load image

// <img data-src="https://avatars0.githubusercontent.com/xxxxxxxx">
const img = document.querySelector('img')
img.src = img.dataset.src

// responsive image
// <picture>
// 	<source srcset="banner_w1000.jpg" media="(min-width: 801px)">
// 	<source srcset="banner_w800.jpg" media="(max-width: 800px)">
// 	<img src="banner_w800.jpg" alt="">
// </picture>
//
// @media (min-width: 769px) {
// 	.bg {
// 		background-image: url(bg1080.jpg);
// 	}
// }
// @media (max-width: 768px) {
// 	.bg {
// 		background-image: url(bg768.jpg);
// 	}
// }

// 3 - change size of the image
// image1: thumb image, image2: original image

// 4 - reduce image quatility by pts or webpack
// image-webpack-loader
// npm i -D image-webpack-loader
// {
//     test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
//         use: [
//             {
//                 loader: 'url-loader',
//                 options: {
//                     limit: 10000, /* If less than 10000 bytes automatically switch back to base64 */
//                     name: utils.assetsPath('img/[name].[hash:7].[ext]')
//                 }
//             },
//             /* Auto compression images */
//             {
//                 loader: 'image-webpack-loader',
//                 options: {
//                     bypassOnDebug: true,
//                 }
//             }
//         ]
// }

// 5 - Use Webp
// https://caniuse.com/webp
// https://css-tricks.com/using-webp-images/
// <picture>
//     <source srcset="
//         /uploads/img_small.webp 1x,
//         /uploads/img_big.webp 2x" type="image/webp">
//     <source srcset="
//         /uploads/img_small.jpg 1x, 
//         /uploads/img_big.jpg 2x" type="image/jpeg">
//     <img src="/uploads/img_small.jpg">
// </picture>

// Use polyfill to support IE or Babeljs

const contacts = ['Brooke', 'Becca', 'Nathan', 'Adam', 'Michael']
if (contacts.includes('Rachel')) {
    console.log('You have a Rachel!')
};

// Output IE: Uncaught TypeError: contacts.includes is not a function
if (!Array.prototype.includes) {
    Array.prototype.includes = function includes(searchElement) {
        return this.indexOf(searchElement) !== -1
    }
};


// Promise all javascript
function sleep(second) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('request done! ' + Math.random());
        }, second);
    })
};

async function correctDemo() {
    let p1 = sleep(1000); // gọi món
    let p2 = sleep(1000); // nhậu
    let p3 = sleep(1000); // Tính tiền
    await Promise.all([p1, p2, p3]);
    console.log('Nhậu anh em ơi....');
};

correctDemo();

// serial Promise
function wait(waitTime) {
    return new Promise(resolve => setTimeout(() => {
        console.log(`waited ${waitTime} ms`);
        resolve();
    }, waitTime));
}

async function serial() {
    console.time('serial promise');
    await wait(1000);
    await wait(1000);
    await wait(1000);
    console.timeEnd('serial promise');
}

// Parallel Promise
function wait(waitTime) {
    return new Promise(resolve => setTimeout(() => {
        console.log(`waited ${waitTime} ms`);
        resolve();
    }, waitTime));
}

async function parallel() {
    console.time('parallel promise');
    await Promise.all([
        wait(1000),
        wait(1000),
        wait(1000),
    ]);
    console.timeEnd('parallel promise');
}

async function test() {
    await serial();  // 3s
    await parallel();  // 1s
}

test();


// Check Adblock
let adBlockEnabled = false;
const ad = document.createElement('div');
ad.innerHTML = ' ';
ad.className = 'adsbox';
document.body.appendChild(ad);
window.setTimeout(function () {
    if (ad.offsetHeight === 0) {
        adblockEnabled = true;
    };
    ad.remove();
    console.log('Blocking ads? ', adblockEnabled);
}, 100);

if (adblockEnabled) {
    // insert yourself ad
};


/*
    Promise.all
    - help Async Operations on levelup because it helps us controls a group
    promises.
    - helps us improve Performance as Send Mail series.
    - Fulfilled – promise resolved successfully.
    - Rejected – promise failed.
    - Pending – promise is waiting to return Fulfilled or Rejected.
    - Settled – next status
*/
Promise.all([Promise1, Promise2, Promise3])
    .then((result) => {
        console.log(result);
    })
    .catch(error => console.log(`Error in promises ${error}`))


// Promise.all and map()
// promise will resolves duration t milisecond
const timeOut = (t) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Completed in ${t}`);
        }, t);
    })
}

// with duration t
const durations = [1000, 2000, 3000]

// array to populate all promises
const promises = [];

durations.map((duration) => {
    // two events here
    // 1. invoke async function (timeout());
    // 2. push promises timeout() to an array for promise.all resolve
    promises.push(timeOut(duration))
})

console.log(promises);
// [ Promise { "pending" }, Promise { "pending" } ...]

// Promise.all will wait for all promises resolved
Promise.all(promises)
    .then(response => console.log(response))
//["Completed in 1000", "Completed in 2000", "Completed in 3000"]


// Real Case: promise.all to send 50000 email marketing
// NOT => overload
for (let i = 0; i < 50000; i += 1) {
    sendMailForUser(user[i]); // Async operation to send a email
};

// GOOD
/*
    - taken 100 email everytime
    - send email and wait for all HTTP closing
    - continue 100 next email
*/
const sendMailForUsers = async (users) => {
    const usersLength = users.length;

    for (let i = 0; i < usersLength; i += 100) {
        const requests = users.slice(i, i + 100).map((user) => {
            // send 100 emails
            return triggerMailForUser(user)
                // Async function to send the mail.
                .catch(e => console.log(`Error in sending email for ${user} - ${e}`));
        });

        // requests is less than 100 for waiting promises
        // Promise.all will wait for all promises complete to send 100 next email
        await Promise.all(requests)
            .catch(e => console.log(`Error in sending email for the batch ${i} - ${e}`));
        // Catch the error.
    };
};

sendMailForUsers(userLists);


// Real Case: promise.all get API
// Good when taken info from more api resources

// Function to fetch Github info of a user.
const fetchGithubInfo = async (url) => {
    console.log(`Fetching ${url}`);
    const githubInfo = await axios(url);
    // API call to get user info from Github.
    return {
        name: githubInfo.data.name,
        bio: githubInfo.data.bio,
        repos: githubInfo.data.public_repos
    }
}

// Iterates all users and returns their Github info.
const fetchUserInfo = async (names) => {
    const requests = names.map((name) => {
        const url = `https://api.github.com/users/${name}`
        return fetchGithubInfo(url)
            // Async function that fetches the user info.
            .then((a) => {
                return a // Returns the user info.
            });
    });
    return Promise.all(requests);
    // Waiting for all the requests to get resolved.
}


fetchUserInfo(['sindresorhus', 'yyx990803', 'gaearon'])
    .then(a => console.log(JSON.stringify(a)))

/*
Output:
[{
  "name": "Sindre Sorhus",
  "bio": "Full-Time Open-Sourcerer ·· Maker ··",
  "repos": 996
}, {
  "name": "Evan You",
  "bio": "Creator of @vuejs, previously @meteor & @google",
  "repos": 151
}, {
  "name": "Dan Abramov",
  "bio": "Working on @reactjs. Co-author of .",
  "repos": 232
}]
*/


// AJAX basic structure $.ajax() function
$.ajax({
    data: someData,
    dataType: 'json',
    url: '/path/to/script',
    success: function (data, textStatus, jqXHR) {
        // When AJAX call is successfuly
        console.log('AJAX call successful.');
        console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        // When AJAX call has failed
        console.log('AJAX call failed.');
        console.log(textStatus + ': ' + errorThrown);
    },
    complete: function () {
        // When AJAX call is complete, will fire upon success or when error is thrown
        console.log('AJAX call completed');
    }
});

// #Promises and deferred objects
// .done() <=== .success()
// .fail() <=== .error()
// .always() <=== .complete()
$.ajax({
    data: someData,
    dataType: 'json',
    url: '/path/to/script'
}).done(function (data) {
    // If successful
    console.log(data);
}).fail(function (jqXHR, textStatus, errorThrown) {
    // If fail
    console.log(textStatus + ': ' + errorThrown);
});

// OR split code
var ajaxCall = $.ajax({
    context: $(element),
    data: someData,
    dataType: 'json',
    url: '/path/to/script'
});

ajaxCall.done(function (data) {
    console.log(data);
});


// Multiple Ajax will run parallel
var a1 = $.ajax({ /*...*/ }),
    a2 = $.ajax({ /*...*/ });

$.when(a1, a2).done(function (r1, r2) {
    // Each returned resolve has the following structure:
    // [data, textStatus, jqXHR]
    // e.g. To access returned data, access the array at index 0
    console.log(r1[0]);
    console.log(r2[0]);
});

// Multiple Ajax with order (serial) (ajax2 depend on ajax1 to get ID)
var a1 = $.ajax({
    url: '/path/to/file',
    dataType: 'json'
}),
    a2 = a1.then(function (data) {
        // .then() returns a new promise
        return $.ajax({
            url: '/path/to/another/file',
            dataType: 'json',
            data: data.sessionID
        });
    });

a2.done(function (data) {
    console.log(data);
});


// getCookie vs cookieStore

/**
 * Get the value of a cookie
 * Source: https://gist.github.com/wpsmith/6cf23551dd140fb72ae7
 * @param  {String} name  The name of the cookie
 * @return {String}       The cookie value
 */
var getCookie = function (name) {
    var value = "; " + document.cookie;
    var parts = value.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
};

await cookieStore.get({ name: '_grid' });
await cookieStore.get('_grid');
await cookieStore.getAll({ domain: 'anonystick.com' });


// Set Cookie passing Name, value, days in expire
function cookie_set(name, value, expire_days) {
    var cookie_name = name;
    var expire_date = new Date();
    expire_date.setDate(expire_date.getDate() + expire_days);
    var cookie_value = escape(value) + ((expire_days === null) ? "" : "; expires=" + exdate.toUTCString() + "; path=/");
    document.cookie = cookie_name + "=" + cookie_value;
};

await cookieStore.set({ name: 'anonystick', value: 'https://anonystick.com', domain: 'anonystick.com' });
await cookieStore.get('anonystick');

await cookieStore.set('anonystick', 'https://anonystick.com');
await cookieStore.get('anonystick');

// deleteCookie (only delete after time expires, not delete name directively)
function clearCookie(name, domain, path) {
    var domain = domain || document.domain;
    var path = path || "/";
    document.cookie = name + "=; expires=" + +new Date + "; domain=" + domain + "; path=" + path;
};


await cookieStore.set('anonystick_1', 'Dont reup');
await cookieStore.get('anonystick_1');
await cookieStore.delete({ name: 'anonystick_1' });
await cookieStore.get('anonystick_1');  // null


// addeventlistener cookie with cookieStore
// OLD
var checkCookie = function () {
    var lastCookie = document.cookie; // 'static' memory between function calls
    return function () {
        var currentCookie = document.cookie;
        if (currentCookie != lastCookie) {
            // something useful like parse cookie, run a callback fn, etc.
            lastCookie = currentCookie; // store latest cookie
        }
    };
}();

window.setInterval(checkCookie, 100); // run every 100 ms

// NEW
cookieStore.addEventListener('change', event => {
    console.log(`Tracking events:::::`, event.changed, event.deleted);
});
await cookieStore.set('blog_name', 'anonystick.com');
await cookieStore.delete('blog_name');


// Upload single image Cloudinary With Multer
// Cloud name: xxx
// API Key:xxx
//  API Secret: xxx
// $npm i cloudinary --save
// ModelCloudinary.js
var cloudinary = require('cloudinary').v2;
//lấy trong https://cloudinary.com/console/welcome
cloudinary.config({
    cloud_name: 'xxxx',
    api_key: 'xxxx',
    api_secret: 'xxx'
});

var self = module.exports = {
    uploadSingle: (file) => {
        return new Promise(resolve => {
            cloudinary.uploader.upload(file, {
                folder: 'single'
            })
                .then(result => {
                    if (result) {
                        const fs = require('fs');
                        fs.unlinkSync(file);
                        resolve({
                            url: result.secure_url
                        });
                    }
                });
        });
    },
    uploadMultiple: (file) => {
        return new Promise(resolve => {
            cloudinary.uploader.upload(file, {
                folder: 'home'
            })
                .then(result => {
                    if (result) {
                        const fs = require('fs');
                        fs.unlinkSync(file);
                        resolve({
                            url: result.secure_url,
                            id: result.public_id,
                            thumb1: self.reSizeImage(result.public_id, 200, 200),
                            main: self.reSizeImage(result.public_id, 500, 500),
                            thumb2: self.reSizeImage(result.public_id, 300, 300),
                        });
                    }
                });
        });
    },
    reSizeImage: (id, h, w) => {
        return cloudinary.url(id, {
            height: h,
            width: w,
            crop: 'scale',
            format: 'jpg'
        });
    },
}


// Upload multiple images Cloudinary with Multer
// controllerUpload.js
'use strict';
const cloudinary = require('./models/ModelCloudinary')
var self = module.exports = {
    uploadSingleFile: async (req, res) => {
        //req.file.path chính là đường dẫn của file khi upload bằng multer
        cloudinary.uploadSingle(req.file.path).then((result) => {
            let imageDetails = {
                imageName: req.body.imageName || '',
                cloudImage: result.url,
                imageId: result.id
            }
        });

        res.json(req.file);
    },
    //up multiple files
    uploadMultipleFiles: async (req, res) => {
        //req.files chính là khi upload multiple images
        let res_promises = req.files.map(file => new Promise((resolve, reject) => {
            cloudinary.uploadMultiple(file.path).then((result) => {
                resolve(result);
            });
        }));

        // Promise.all get imgas
        Promise.all(res_promises)
            .then(async (arrImg) => {
                //arrImg chính là array mà chúng ta đã upload
                // các bạn có thể sử dụng arrImg để save vào database, hay hơn thì sử dụng mongodb
                res.json(req.files);
            })
            .catch((error) => {
                console.error('> Error>', error);
            });
    },
};

// Generating logs.
// Set up our application to report and generate logs files about the user’s
// requests. A middleware for generating request’s logs in the server.
// npm install morgan--save
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var app = express();

app.use(morgan("common"));
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/", function (req, res) {
    res.json({
        status: "My API is alive!"
    });
});

app.listen(3000, function () {
    console.log("My API is running...");
});

module.exports = app;



// middleware camelcase-keys
// FE: input name="first-name"
const camelcaseKeys = require('camelcase-keys');

const camelcase = () => {
    return function (req, res, next) {
        req.body = camelcaseKeys(req.body, { deep: true });
        req.params = camelcaseKeys(req.params);
        req.query = camelcaseKeys(req.query);
        next();
    };
};
app.use(camelcase());

// BE
app.post('/example-camelcase', (req, res) => {
    console.log(req.body);
    res.status(200).json({ elements: req.body.firstName });
});


// middleware omit-empty
const object = {
    null: null,
    undefined: undefined,
    emptyString: '',
    emptyArray: [],
    emptyObject: {},
    filled: 'yay'
};

console.log(omitEmpty(object));
// {
//   filled: 'yay' // nó chỉ lấy thằng này thôi
// }


fetch('/endpoint', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Zell',
        skills: ['coding', 'designing', 'writing']
    }),
});

if (skills.length) {
    //add database
};

// Cover: "Cannot read property 'length' of undefined "
fetch('/endpoint', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'Zell'
    }),
});


// middlewware omit-empty
const omitEmpty = require('omit-empty');

const removeEmptyProperties = () => {
    return function (req, res, next) {
        req.body = omitEmpty(req.body);
        req.params = omitEmpty(req.params);
        req.query = omitEmpty(req.query);
        next();
    };
};
app.use(removeEmptyProperties());

app.post('/example-omitempty', (req, res) => {
    const { skills } = req.body;

    if (skills) {
        // Add skills to database

        return res.json('add database');
    };
    return res.json('skills not avaibale');
});


// Enabling CORS in the API
// As we are developing an API that will serve data for any kind of client-side
// applications, we need to enable the CORS’s middleware for the endpoints
// become public. Meaning that some clients can make requests on our API.
// npm install cors--save
const express = require("express");
const cors = require("cors");
const app = express();

const allowlist = ['http://example1.com', 'http://example2.com'];
const corsOptionsDelegate = function (req, callback) {
    const corsOptions;
    if (allowlist.indexOf(req.header('Origin')) !== -1) {
        // reflect (enable) the requested origin in the CORS response
        corsOptions = { origin: true }
    } else {
        // disable CORS for this request
        corsOptions = { origin: false };
    };
    // callback expects two parameters: error and options
    callback(null, corsOptions);
};

/*
    Cross-Origin Resource Sharing (CORS)
    Now we have an API that will only allow client apps from the address:
    http://localhost:3001/. This client application can only request via GET or
    POST methods and use the headers: Content-Type and Authorization.
*/
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.get("/", function (req, res, next) {
    res.json({
        status: "My API is alive!",
        msg: 'This is CORS-enabled for all origins!'
    });
});

app.get('/products/:id', cors(corsOptionsDelegate), function (req, res, next) {
    res.json({ msg: 'This is CORS-enabled for an allowed domain.' })
})

app.listen(3000, function () {
    console.log("My API is running...");
    console.log('CORS-enabled web server listening on port 3000')
});

module.exports = app;


// Compacting requests using GZIP middleware.
// To make requests lighter and load faster, let’s enable another middleware
// which is going to be responsible for compacting the JSON responses and also
// the static files which your application will serve to GZIP format
// npm install compression--save
// index.js
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var compression = require("compression");
var app = express();

app.use(morgan("common"));
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(compression());

app.get("/", function (req, res) {
    res.json({
        status: "My API is alive!"
    });
});

app.listen(3000, function () {
    console.log("My API is running...");
});

module.exports = app;


// Installing SSL support to use HTTPS
// SSL (Secure Sockets Layer)
// To implement an HTTPS protocol connection, it is necessary to buy a digital
// certificate for production’s environment usage. Assuming you have one, put
// two files (one file uses .key extension and the other is a .cert file) in the
// project’s root. After that, let’s use the native https module to allow our
// server to start using HTTPS protocol and the fs module to open and read the
// certificate files: my-api.key and my-api.cert to be used as credential
// parameters to start our server in HTTPS mode. To do this, we are going to
// replace the function app.listen() to https.createServer(credentials,
// app).listen() function.
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var compression = require("compression");
var fs = require("fs");
var https = require("https");
var app = express();

app.use(morgan("common"));
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(compression());

app.get("/", function (req, res) {
    res.json({
        status: "My API is alive!"
    });
});

var credentials = {
    key: fs.readFileSync("my-api.key", "utf8"),
    cert: fs.readFileSync("my-api.cert", "utf8")
};
https
    .createServer(credentials, app)
    .listen(3000, function () {
        console.log("My API is running...");
    });

module.exports = app;


// Armoring the API with Helmet
// a security middleware that handles several kinds of attacks in the HTTP/HTTPS
// protocols
// Configures the Content Security Policy;
// Removes the header X-Powered-By that informs the name and the version of a server;
// Configures rules for HTTP Public Key Pinning;
// Configures rules for HTTP Strict Transport Security;
// Treats the header X-Download-Options for Internet Explorer 8+;
// Disables the client-side caching;
// Prevents sniffing attacks on the client Mime Type;
// Prevents ClickJacking attacks;
// Protects against XSS (Cross-Site Scripting) attacks.
// npm install helmet--save
var express = require("express");
var cors = require("cors");
var morgan = require("morgan");
var compression = require("compression");
var fs = require("fs");
var https = require("https");
var helmet = require("helmet");
var app = express();

app.use(morgan("common"));
app.use(helmet());
app.use(cors({
    origin: ["http://localhost:3001"],
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));
app.use(compression());

app.get("/", function (req, res) {
    res.json({
        status: "My API is alive!"
    });
});

var credentials = {
    key: fs.readFileSync("my-api.key", "utf8"),
    cert: fs.readFileSync("my-api.cert", "utf8")
};
https
    .createServer(credentials, app)
    .listen(3000, function () {
        console.log("My API is running...");
    });

module.exports = app;


// Rest parameter with Array
const myArray = ["anonystick", "medium", "reddit"]
const [firstName, ...restElements] = myArray;
console.log(firstName); // anonystick
console.log(restElements); // ["medium", "reddit"]


// Rest parameter with Objects
const blog = {
    blog1: "anonystick",
    blog2: "medium",
    blog3: "reddit"
}
const { blog1, ...restBlog } = blog;
console.log(blog1); // "anonystick"
console.log(restBlog); // { blog2: "medium", blog3: "reddit" }


// Rest parameter with function
function func(firstBlog, ...rest) {
    console.log(firstBlog); // 'anonystick'
    console.log(rest); //["medium", "reddit"]
}
func("anonystick", "medium", "reddit");


// Spread operator with Array
const withoutAnonystick = ["medium", "Reddit"];
const wholeBlog = ["Anonystick", ...withoutAnonystick]; //["Anonystick", "medium", "Reddit"]

// Spread operator with Object
const blog = {
    blog2: "medium",
    blog3: "reddit"
}

const extended = {
    ...blog,
    blog1: "anonystick",
};

console.log(extended);
// {
//   blog1: "anonystick",
//   blog2: "medium",
//   blog3: "reddit"
// }


// Spread operator with Object overwrite
const blog = {
    blog1: "web.dev",
    blog2: "medium",
    blog3: "reddit"
}

const extended = {
    ...blog,
    blog1: "anonystick",
};

console.log(extended);
// {
//     blog1: "anonystick",
//     blog2: "medium",
//     blog3: "reddit"
// }


// Convert value to string
// ===================================================================
// https://www.samanthaming.com/tidbits/62-5-ways-to-convert-value-to-string/
const value = 12345;

// Concat Empty String
value + '';

// Template Strings
`${value}`;

// JSON.stringify
JSON.stringify(value);

// toString()
value.toString();

// String() - best method can cover all cases
String(value);

// RESULT
// '12345

// Test data
const string = "hello";
const number = 123;
const boolean = true;
const array = [1, "2", 3];
const object = { one: 1 };
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


// 2 Ways to Merge Arrays in JavaScript
/*
    I like using the Spread operator.
    But if you need older browser support, you should use Concat.
*/

const cars = ['🚗', '🚙'];
const trucks = ['🚚', '🚛'];

// Method 1: Concat
const combined1 = [].concat(cars, trucks);

// Method 2: Spread
const combined2 = [...cars, ...trucks];

// Result
// [ '🚗', '🚙', '🚚', '🚛' ]


// Difference between Spread vs Concat
// [1, 2, 3, 'random'];

// A. Using Spread
function combineArray(array1, array2) {
    return [...array1, ...array2];
}

const isArray = [1, 2, 3];
const notArray = 'random';

combineArray(isArray, notArray);
// 😱 [ 1, 2, 3, 'r', 'a', 'n', 'd', 'o', 'm' ]
// If we spread our string, it will split the word into separate letters


// B. Using Concat
function combineArray(array1, array2) {
    return [].concat(array1, array2);
}

const isArray = [1, 2, 3];
const notArray = 'random';

combineArray(isArray, notArray);
// ✅  [ 1, 2, 3, 'random' ]


// Converting Object to an Array
const zoo = {
    lion: '🦁',
    panda: '🐼',
};

Object.keys(zoo);
// ['lion', 'panda']

Object.values(zoo);
// ['🦁', '🐼']

Object.entries(zoo);
// [ ['lion', '🦁'], ['panda', '🐼'] ]

// ES5
var numbers = {
    one: 1,
    two: 2,
};
var keys = [];
for (var number in numbers) {
    if (numbers.hasOwnProperty(number)) {
        keys.push(number);
    }
}
keys; // [ 'one', 'two' ]

// ES17
const numbers = {
    one: 1,
    two: 2,
};

Object.keys(numbers);  // [ 'one', 'two' ]
Object.values(numbers);  // [ 1, 2 ]
Object.entries(numbers);  // [ ['one', 1], ['two', 2] ]

// Object.entries + Destructuring
const objectArray = Object.entries(numbers);
objectArray.forEach(([key, value]) => {
    console.log(key); // 'one', 'two'
    console.log(value); // 1, 2
});

// Convert the array back to an object
const array = [
    ['one', 1],
    ['two', 2],
];

Object.fromEntries(array);  // { one: 1, two: 2 }


// ES6 Shorthand to Define Methods in Objects
const Rain = {
    // NOT:
    // bringUmbrella: function() {}

    // DO
    bringUmbrella() {
        return '☔️'
    }
}

// String with Template Literals
// Old way
const multiLine1 = '1️⃣first \n2️⃣second';

// ✅ ES6 way
const multiLine2 = `1️⃣first
2️⃣second`;

/* RESULT
1️⃣first
2️⃣second
*/

const HTMLmarkup = `
<article>
    <h1>Code Tidbits</h1>
</article>
`;

// HTML Markup using Handlebars.js
<script id="entry-template" type="text/x-handlebars-template">
    <article>
        <h1>Code Tidbits</h1>
    </article>
</script>


// For ... in
for (let prop in ['a', 'b', 'c']);
console.log(prop);            // 0, 1, 2 (array indexes)

for (let prop in 'str');
console.log(prop);            // 0, 1, 2 (string indexes)

for (let prop in { a: 1, b: 2, c: 3 });
console.log(prop);            // a, b, c (object property names)

for (let prop in new Set(['a', 'b', 'a', 'd']));
console.log(prop);            // undefined (no enumerable properties)


// For ... of
for (let val of ['a', 'b', 'c']);
console.log(val);            // a, b, c (array values)

for (let val of 'str');
console.log(val);            // s, t, r (string characters)

for (let val of { a: 1, b: 2, c: 3 });
console.log(prop);           // TypeError (not iterable)

for (let val of new Set(['a', 'b', 'a', 'd']));
console.log(val);            // a, b, d (Set values)

['a', 'b', 'c'].forEach(
    val => console.log(val)     // a, b, c (array values)
);

['a', 'b', 'c'].forEach(
    (val, i) => console.log(i)  // 0, 1, 2 (array indexes)
);

// Check user online hay offline
window.addEventListener('load', function () {
    var status = document.getElementById("status");
    var log = document.getElementById("log");

    function updateOnlineStatus(event) {
        var condition = navigator.onLine ? "online" : "offline";

        status.className = condition;
        status.innerHTML = condition.toUpperCase();

        log.insertAdjacentHTML("beforeend", "Event: " + event.type + "; Status: " + condition);
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
});

/*
#status {
  position: fixed;
  width: 100%;
  font: bold 1em sans-serif;
  color: #FFF;
  padding: 0.5em;
}

#log {
  padding: 2.5em 0.5em 0.5em;
  font: 1em sans-serif;
}

.online {
  background: green;
}

.offline {
  background: red;
}
*/


// Add to Favorites
// <a href="javascript:window.external.AddFavorite('http://www.yoursite.com', 'Your Site Name')">Add to Favorites</a>

// Break out of Frames
// <body onLoad="if (self != top) top.location = self.location"></body>

// Focus OnLoad
// https://www.htmlgoodies.com/beyond/javascript/article.php/3887346/Top-10-JavaScript-Snippets-for-Common-Tasks.htm
// <body OnLoad="document.nameform.user.focus();"></body>
// <form name="nameform">
// Name:  <input type=text name=user size=10>
// </form>


// settimer javascript
/*
    - khái niệm về luồng đơn(single thread) JS:
        làm một việc trong một khoảng thời gian (timeout: default: 0)
    - hàng đợi(queue) tác vụ:
        tác vụ đồng bộ (sync), tác vụ không đồng bộ (async)
    - vòng lặp sự kiện (event loop) là gì?
    - câu lệnh nào sẽ được đặt trong hàng đợi tác vụ không đồng bộ (async queue)?
    - khi nào câu lệnh được đặt trong hàng đợi tác vụ không đồng bộ (async queue)?
*/
// BAD
for (var i = 0; i < 5; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
};
// 4,4,4,4,4

// Closure vs setTimeout
// GOOD: use IIFE to resove Closure problems
for (let i = 0; i < 5; i++) {
    (function (arg) {
        setTimeout(function () {
            console.log(arg);
        }, 1000 * i)
    })(i);
};
// Output: 0 1 2 3 4

// Promise vs setTimeout
// GOOD: Can improve performance
// create a array to populate promises
const tasks = [];

// create a promise function
const output = (arg) => new Promise((resolve) => {
    setTimeout(() => {
        console.log(111, arg);
        resolve();
    }, 1000 * arg);
});

// create all Promises
for (var i = 0; i < 5; i++) {
    tasks.push(output(i));
};

Promise.all(tasks).then(() => {
    setTimeout(() => {
        console.log(222, i);
    }, 1000)
});
// Output: 0 1 2 3 4 5


// async await (ES7) vs setTimeout
// GOOD
const sleep = (timeoutMS) => new Promise((resolve) => {
    setTimeout(resolve, timeoutMS);
});

; (async () => {
    for (var i = 0; i < 5; i++) {
        await sleep(1000);
        console.log(111, i);  // 0 1 2 3 4
    }

    await sleep(1000);
    console.log(222, i);  // 5
})();


/*
    Performance JavaScript 3

    Loop 10.000 items
    For Loop, average loop time: ~10 microseconds
    For-Of, average loop time: ~110 microseconds
    ForEach, average loop time: ~77 microseconds
    While, average loop time: ~11 microseconds
    Reduce, average loop time: ~113 microseconds

    Reduce & foreach, every run will invoke callback => slow

    Copy 10.000 items
    https://anonystick.com/blog-developer/14-cach-copy-array-trong-javascript-2020060454458739
    Duplicate using Slice, average: ~367 microseconds
    Duplicate using Map, average: ~469 microseconds
    Duplicate using Spread, average: ~512 microseconds
    Duplicate using Conct, average: ~366 microseconds
    Duplicate using Array From, average: ~1,436 microseconds
    Duplicate manually, average: ~412 microseconds

    Iterating Objects 10.000 items
    Object iterate For-In, average: ~240 microseconds
    Object iterate Keys For Each, average: ~294 microseconds
    Object iterate Entries For-Of, average: ~535 microseconds

    ===> should use Higher order function will performance
*/


/*
    FETCH API

    GET Requests
    - Easy: Get JSON from a URL
    - Intermediate: Custom headers
    - Advanced: CORS example

    POST/PUT Requests
    - Easy: Posting JSON
    - Intermediate: Posting an HTML <form>
    - Intermediate: Form encoded data
    - Advanced: Uploading Files
    - Advanced: Uploading Multiple Files

    Bonus
    - Dependant Fetch Requests
    - Concurrent Downloads
*/

// Easy: Get JSON from a URL
fetch('https://api.github.com/orgs/nodejs')
    .then(response => response.json())
    .then(data => {
        console.log(data); // Prints result from `response.json()`
    })
    .catch(error => console.error(error));


// Intermediate: Custom headers
fetch('https://api.github.com/orgs/nodejs', {
    headers: new Headers({
        'User-agent': 'Mozilla/4.0 Custom User Agent'
    })
})
    .then(response => response.json())  // https://developer.mozilla.org/en-US/docs/Web/API/Body/json
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));


// Advanced: CORS example
// CORS is primarily checked at the server - so make sure your configuration is
// correct on the server-side.
fetch('https://api.github.com/orgs/nodejs', {
    credentials: 'include', // Useful for including session ID (and, IIRC, authorization headers)
})
    .then(response => response.json())
    .then(data => {
        console.log(data);
    })
    .catch(error => console.error(error));


// Easy: Posting JSON
postRequest('http://example.com/api/v1/users', { user: 'Dan' })
    .then(data => console.log(data)) // print result from `response.json()`
    .catch(error => console.error(error));  // catch error

function postRequest(url, data) {
    return fetch(url, {
        credentials: 'same-origin', // 'include', default: 'omit'
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: JSON.stringify(data), // Coordinate the body type with 'Content-Type'
        headers: new Headers({
            'Content-Type': 'application/json'
        }),
    })
        .then(response => response.json());
};


// Intermediate: Form encoded data
postFormData('http://example.com/api/v1/users', { user: 'Mary' })
    .then(data => console.log(data))
    .catch(error => console.error(error));

function postFormData(url, data) {
    return fetch(url, {
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: new URLSearchParams(data),
        headers: new Headers({
            'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
        })
    })
        .then(response => response.json())
};


// Advanced: Uploading files
postFile('http://example.com/api/v1/users', 'input[type="file"].avatar')
    .then(data => console.log(data))
    .catch(error => console.error(error));

function postFile(url, fileSelector) {
    const formData = new FormData()
    const fileField = document.querySelector(fileSelector)

    formData.append('username', 'abc123')
    formData.append('avatar', fileField.files[0])

    return fetch(url, {
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: formData  // Coordinate the body type with 'Content-Type'
    })
        .then(response => response.json());
};


// Advanced: Uploading multiple files
// <input type='file' multiple class='files' name='files' />
postFile('http://example.com/api/v1/users', 'input[type="file"].files')
    .then(data => console.log(data))
    .catch(error => console.error(error));

function postFile(url, fileSelector) {
    const formData = new FormData()
    const fileFields = document.querySelectorAll(fileSelector)

    // Add all files to formData
    Array.prototype.forEach.call(fileFields.files, f => formData.append('files', f))
    // Alternatively for PHP peeps, use `files[]` for the name to support arrays
    // Array.prototype.forEach.call(fileFields.files, f => formData.append('files[]', f))

    return fetch(url, {
        method: 'POST', // 'GET', 'PUT', 'DELETE', etc.
        body: formData  // Coordinate the body type with 'Content-Type'
    })
        .then(response => response.json())
};



// 150 packages and resource Node.js
// https://anonystick.com/blog-developer/tong-hop-150-packages-va-resource-nodejs-chat-luong-cao-cap-nhat-lien-tuc-2020102453282459


// create sitemap
// npm i sitemap --save
// create route in nodejs with syntax
sitemap: async (req, res) => {
    const sm = require('sitemap');
    var sitemap = sm.createSitemap({
        hostname: 'http://example.com',
        cacheTime: 600000,        // 600 sec - cache purge period
        urls: [
            { url: '/', changefreq: 'daily', priority: 0.3 },
            { url: '/contact', changefreq: 'daily', priority: 0.3 },
            { url: '/about', changefreq: 'daily', priority: 0.3 },
        ]
    })

    sitemap.toXML(function (err, xml) {
        if (err) {
            return res.status(500).end();
        }
        res.header('Content-Type', 'application/xml');
        res.send(xml);
    })
};

// RUN: http://http://127.0.0.1/sitemap.xml
/*
xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">
<url>
http://example.com/
<changefreq>daily</changefreq>
<priority>0.3</priority>
</url>
<url>
http://example.com/lien-he
<changefreq>daily</changefreq>
<priority>0.3</priority>
</url>
<url>
http://example.com/gioi-thieu
<changefreq>daily</changefreq>
<priority>0.3</priority>
</url>
</urlset>
*/


/*
    Javascript: IIFE (Immediately Invoked Function Expression)

    - variable inside of IIFE is private, can access or change from outside
    - shoud use 'use strict' to make sure not error type, scope
    - IIFE is usefull if want to set vars to private, even embeded to other website.
*/
; (function () {
    //code here
})();

; (function (window, name) {
    //code here
})(window, name);

for (var i = 0; i < 10; i++) {
    ; (function (i) {  // i here is private for IIFE
        setTimeout(function () {
            console.log(i);
        });
    })(i);  // i here is private for IIFE
};
// 0 1 2 3 4 5 6 7 8 9


// Load a javascript file dynamically
// Load a JavaScript file
//===========================================================
// Create new script element
const script = document.createElement('script');
script.src = '/path/to/js/file.js';

// code run when file script loaded
script.addEventListener('load', function () {
    // The script is loaded completely
    // Do something
});

// Append to the `head` element
document.head.appendChild(script);


// Load multiple JavaScript files in order
//===========================================================
// Load a script from given `url`
const loadScript = function (url) {
    return new Promise(function (resolve, reject) {
        const script = document.createElement('script');
        script.src = url;

        script.addEventListener('load', function () {
            // The script is loaded completely
            resolve(true);
        });

        document.head.appendChild(script);
    });
};

// Perform all promises in the order
const waterfall = function (promises) {
    return promises.reduce(
        function (p, c) {
            // Waiting for `p` completed
            return p.then(function () {
                // and then `c`
                return c().then(function (result) {
                    return true;
                });
            });
        },
        // The initial value passed to the reduce method
        Promise.resolve([])
    );
};

// Load an array of scripts in order
const loadScriptsInOrder = function (arrayOfJs) {
    const promises = arrayOfJs.map(function (url) {
        return loadScript(url);
    });
    return waterfall(promises);
}

// invoke scripts order
loadScriptsInOrder([
    '/path/to/file.js',
    '/path/to/another-file.js',
    '/yet/another/file.js',
]).then(function () {
    // All scripts are loaded completely
    // Do something
});



// OOP
//===========================================================
// OOP in before - OBJECT
const user1 = { name: 'messi', age: 31, email: 'messi@gmail.com' };
const user2 = { name: 'ronaldo', age: 32, email: 'ronaldo@gmail.com' };
const user3 = { name: 'nani', age: 31, email: 'nani@gmail.com' };

// OOP in ES5 - FUNCTION
function User(name, age, emmail) {
    this.name = name;
    this.age = age;
    this.email = email;
};

const user1 = new User('messi', 31, 'messi@gmail.com');
const user2 = new User('ronaldo', 32, 'ronaldo@gmail.com');
const user3 = new User('nani', 31, 'nani@gmail.com');

// OOP in ES6 - CLASS (blueprint, template)
class User {
    constructor(name, age, emmail) {  // auto invoke when class instanced
        this.name = name;
        this.age = age;
        this.email = email;
    }
}

const user1 = new User('messi', 31, 'messi@gmail.com');
const user2 = new User('ronaldo', 32, 'ronaldo@gmail.com');
const user3 = new User('nani', 31, 'nani@gmail.com');


// OOP in ES6 with static method
class User {
    constructor(name, age, email) {
        [name];
        [age];
        [email];
    }
    increaseAge() {  // can invoke from instance class
        this.age += 1;
    }
    static staticMethod() {  // can invoked from instance class
        return 'Im a static method '
    }
}

const user1 = new User('messi', 31, 'messi@gmail.com')
user1.increaseAge()
console.log(user1); // User {name: "messi", age: 32, email: "messi@gmail.com"}
console.log(User.staticMethod());  // Im a static method
console.log(user1.staticMethod());  // Uncaught TypeError: user1.staticMethod is not a function


/*
    Getter và Setter - tính đóng gói (encapsulation)

    -object properties should not allow access or change directly from outner
    - Với getter và setter, sẽ có nhiều quyền kiểm soát hơn đối với các object
        properties sau khi khởi tạo với constructor.
    - Các devjs có thể validation dữ liệu trong phương thức get và set trước khi
        setting or getting giá trị.
    - Chúng ta có thể thấy trong ví dụ trên có property name là _name nhưng
        chúng ta đang sử dụng nó làm metup.name và nó hoạt động tốt vì các method
        getter và setter.
*/
class Meetup {
    constructor(name) {
        this._name = name;
    };
    get name() {
        // Validation can happen on data
        return this._name;
    }
    set name(val) {
        // Validation can happen on data
        this._name = val;
    }
}
let meetup = new Meetup('JS');
console.log("meetup Name: " + meetup.name); // meetup Name: JS
meetup.name = 'Angular';
console.log("meetup Name: " + meetup.name); // meetup Name: Angular


// Inheritance trong ES6
class Meetup {
}
class techMeet extends Meetup {
}
class sportMeet extends Meetup {
}

let js = new techMeet();
console.log(js instanceof techMeet);  // true
console.log(js instanceof Meetup);    // true
console.log(js instanceof Object);    // true


// super() - I am parent
class Meetup {
    constructor() {
        console.log("inside Meetup constructor");
    }
}
class techMeet extends Meetup {
    constructor() {
        super();  // I'm parent of Meetup. Invoke parent constructor.
        console.log("inside techMeet constructor");
    }
}
let js = new techMeet();
// inside Meetup constructor
// inside techMeet constructor



// =========================================================
// check boolean (condition) and assign value
// BAD
if (a === 'a') {
    b = true
} else {
    b = false
}

// GOOD
b = a === 'a'

// check if array length is not 0
// BAD
if (arr.length !== 0) {
    // todo
}

// GOOD
if (arr.length) {
    // todo
}

// check if array length is 0
// BAD
if (arr.length === 0) {
    // todo
}

// GOOD
if (!arr.length) {
    // todo
}


// assgin base on condition
// BAD
if (a === 'a') {
    b = a
} else {
    b = c
}

// GOOD
b = a === 'a' ? a : c


// check condition with includes
// BAD
if (a === 1 || a === 2 || a === 3 || a === 4) {
    // todo
}

// GOOD
let arr = [1, 2, 3, 4]
if (arr.includes(a)) {
    // todo
}


// Check with function, avoid for loop
// BAD
let arr = [1, 3, 5, 7];
function isHasNum(n) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === n) {
            return true;
        };
    };
    return false;
};

// GOOD
let arr = [1, 3, 5, 7];
let isHasNum = n => arr.some(num => num === n);

// BEST
let arr = [1, 3, 5, 7];
let isHasNum = (n, arr) => arr.some(num => num === n);


// forEach to loop through array (not create new array)
// bad
for (let i = 0; i < arr.length; i++) {
    // BAD
    arr[i].key = balabala
}

// GOOD
arr.forEach(item => {
    // todo
    item.key = balabala
})


// filter() to filter data to new array
// BAD
let arr = [1, 3, 5, 7],
    newArr = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 4) {
        newArr.push(arr[i])
    }
}

// GOOD
let arr = [1, 3, 5, 7]
let newArr = arr.filter(n => n > 4) // [5, 7]


// map() to loop through items
// bad
let arr = [1, 3, 5, 7],
    newArr = []
for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] + 1)
}

// good
let arr = [1, 3, 5, 7]
let newArr = arr.map(n => n + 1) // [2, 4, 6, 8]


// Object.values to get value to new array
let obj = {
    a: 1,
    b: 2
};

// BAD
let values = []
for (key in obj) {
    values.push(obj[key])
}

// GOOD
let values = Object.values(obj) // [1, 2]


// Object.keys to get keys to new array
let obj = {
    a: 1,
    b: 2
}
// BAD
let keys = []
for (value in obj) {
    keys.push(value)
}

// GOOD
let keys = Object.keys(obj) // ['a', 'b']


// Swap variables
// BAD
let a = 1,
    b = 2
let temp = a
a = b
b = temp

// GOOD
let a = 1,
    b = 2
    [b, a] = [a, b];


// Destructuring objects
// BAD
function setForm(person) {
    this.name = person.name;
    this.age = person.age;
}

// GOOD
function setForm({ name, age }) {
    this.name = name;
    this.age = age;
}


// Change vars name to simple
// BAD
function setForm(data) {
    this.one = data.aaa_bbb_ccc_ddd
    this.two = data.eee_fff_ggg
}
// GOOD
function setForm({ aaa_bbb_ccc_ddd, eee_fff_ggg }) {
    this.one = aaa_bbb_ccc_ddd
    this.two = eee_fff_ggg
}

// BEST
function setForm({ aaa_bbb_ccc_ddd: one, eee_fff_ggg: two }) {
    this.one = one
    this.two = two
}


// Set default value in destructuring
// BAD
function setForm({ name, age }) {
    if (!age) age = 16;
    this.name = name;
    this.age = age;
};

// GOOD
function setForm({ name, age = 16 }) {
    this.name = name;
    this.age = age;
};


// Use || operater to check default values
let person = {
    name: 'anonystick',
    age: 38
};

let name = person.name || 'anonystick';


// Use && to check object exist
let person = {
    name: 'anonystick',
    age: 38,
    children: {
        name: 'anonystick'
    }
}

let childrenName = person.children && person.children.name;
// OR
let childrenName = person?.children?.name;  // chaining operator


// template literal
let person = {
    name: 'anonystick',
    age: 18
}
// BAD
function sayHi(obj) {
    console.log('Hello::::' + person.name + ' ' + person.age);
};

// GOOD
function sayHi(person) {
    console.log(`Hello::::${person.name} ${person.age}`)
};

// BEST
function sayHi({ name, age }) {
    console.log(`Hello::::${name} ${age}`)
};


// arrow function
let arr = [18, 19, 20, 21, 22];

// BAD
function findStudentByAge(arr, age) {
    return arr.filter(function (num) {
        return num === age
    })
}

// GOOD
let findStudentByAge = (arr, age) => arr.filter(num => num === age);


// Load a css file dynamically
// Create new link element
const link = document.createElement('link');
link.setAttribute('rel', 'stylesheet');
link.setAttribute('href', '/path/to/js/file.css');

// Append to the `head` element
document.head.appendChild(link);


// Loop over a nodelist
// NodeList
const elements = document.querySelectorAll('div');

// 1. Use the ES6 spread operator
[...elements].forEach(function (ele) {
    // do something
});

// 2. Use the Array methods
// `Array.from` is not supported on IE
Array.from(elements).forEach(function (ele) {
    // do something
});

// Or
[].forEach.call(elements, function (ele) {
    // do something
});

// Or
[].slice.call(elements, 0).forEach(function (ele) {
    // do something
});


// 3. Use the forEach method (problems with IE)
elements.forEach(function (ele) {
    // do something
});


/*
    Closure

    Closure là một chức năng có quyền truy cập vào phạm vi cha, ngay cả sau khi
    scope đã đóng.

    Scope chính là tuổi thọ của một biến trong javascript.
*/
function f1() {
    let N = 0; // N (outner - parent) always set init when f1 run, means that N = 0;
    console.log('f1', N);  // f1 0, run one time when result() invoke

    // function inner with closure
    function f2() {
        N += 1; // N (inner - children)
        console.log('f2', N);  // f2 run 3 times when result() invoke
    }

    return f2; // N parent => increase 1
}

const result = f1();  // result only reference to f1.

// f1.f2.n not exit then get f1.n
result();  // f1.n = 0, f1.f2.n = f1.f2.n (=>f1.n) + 1 = 1

// f1.f2.n exit then taken f1.f2.n
result(); // f1.n = 0, fi.f2.n = f1.f2.n + 1 = 1 + 1 = 2
result(); // f1.n = 0, fi.f2.n = f1.f2.n + 1 = 2 + 1 = 3


// More example closure
const words = 'hi';  // make sure global scope
function speak() {
    console.log(words);  // words not exist in local then reference to global scope
}
speak(); // invoke speak fn: 'hi'
console.log(words); // invoke log fn: 'hi'


function speak() {
    const words = 'hi';  // global scope

    // return other fn
    return function logIt() {
        console.log(words);  // print words in local scope => global scope
    }
};

const sayHello = speak();  // invoke and populate result returned
sayHello;  // speak.words deleted, but speak.logIt.words (speak.words) exist
//  function logIt() {
//    console.log(words);
//  }
sayHello();  // hi. speak.logIt.words = hi


/**
 * method to get name of a person
 * @param {*} name - person name
 * @returns callback
 */
function person(name = '{name?}') {
    /**
     * method to get behavior of a person
     * @param {*} animal - animal
     * @returns string
     */
    const behavior = function (animal = '{animal?}') {
        return `${name} likes ${animal}`;  // name.().name
    };

    return behavior;
};

const getJohn = person && person('John');
const getCindy = person && person('Cindy');

getJohn;
// function (animal = '{animal}') {
//     return `${name} likes ${animal}`;  // name.().name
// }

getJohn && getJohn('dogs');  // 'John likes dogs'
getCindy && getCindy('cats');  // 'Cindy likes cats'


// Closure to define private vars
// class Product {
//     constructor() {

//         var name;

//         this.setName = function (value) {
//             name = value;
//         };

//         this.getName = function () {
//             return name;
//         };
//     }
// }
function Product() {

    var name;

    this.setName = function (value) {
        name = value;
    };

    this.getName = function () {
        return name;
    };
}

var p = new Product();
p;  // Product {setName: ƒ, getName: ƒ}

p.setName("anonystick.com");
console.log(p.name); // undefined. p.name is private property, cant direct access
console.log(p.getName()); // anonystick.com


// Release memory in closure
function fn() {
    let a = "I'm a";
    return function () {
        console.log(a);  // memory problem
    };
};

// Solution
function fn(a) {
    console.log(a)
};

for (var k = 0; k < 10; k++) {
    fn(k);
};

fn = null



// Javascript access CAMERA (front, back), capture in mobile
// Check browser support API MediaStream or not?
// https://anonystick.com/labs/camera
if (
    !"mediaDevices" in navigator ||
    !"getUserMedia" in navigator.mediaDevices
) {
    document.write('Not support API camera');
    return;
};

// Access camery with mediaDevices
// ask user allow access camera or not. If reject will try/catch
const videoStream = await navigator.mediaDevices.getUserMedia({ video: true });

try {
    videoStream = await navigator.mediaDevices.getUserMedia(constraints);
    video.srcObject = videoStream;
} catch (error) {
    console.log(error);
};

// Access camera before and after in mobile
// by default, getUserMedia of devices will be invoke (front. faceingMode:"user")
// to access from camera back
const constraints = {
    video: {
        width: { /*...*/ },
        height: { /*...*/ },
        facingMode: "environment"
    },
};

// Take a picture by javascript
const canvas = document.querySelector("#canvas");
canvas.width = video.videoWidth;
canvas.height = video.videoHeight;
canvas.getContext("2d").drawImage(video, 0, 0);


(function () {
    Math.randomInt = function (min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    Math.randomDec = function (min, max, decimals) {
        return (Math.random() * (max - min) + min).toFixed(decimals || 2);
    };
    Math.randomList = function (list) {
        return list[Math.randomInt(0, list.length)];
    };
})();

Math.randomInt(0, 10);
Math.randomDec(0, 10, 2);
Math.randomList(['anonystick', 'JavaScript', 'es6']);

// Event Handlers vs AddEventListener on Object
// Event Handlers: invoke 2 times will run last event
const button = document.querySelector(".btn");
button.onclick = () => {
    console.log("Hello anonystick!");
};
button.onclick = () => {
    console.log("How are you?");
};
// "How are you?"

// AddEventListener: invoke 2 times will run both events (RECOMMENDED)
const button = document.querySelector(".btn");
button.addEventListener("click", event => {
    console.log("Hello anonystick!");
});
button.addEventListener("click", event => {
    console.log("How are you?");
});
// "Hello anonystick!"
// "How are you?"

// Fix: Cannot read property 'addEventListener' of null
var el = document.getElementById('btn');
if (el) {
    el.addEventListener('click', swapper, false);
};

// OR
document.addEventListener('DOMContentLoaded', function () {
    el.addEventListener('click', swapper, false);
});


/*
    Design DB access 1.000.000 users

    - current users: 100.000
    - active user: 5000 / day
    - insert record: 1000 / day
    - requests: 10 request / 1s
    - server: 32G/1600
    - database type: mysql(main), mongodb (logs, sendMail, RabbitMQ).

    NEXT
    - current users: 10.000.000
    - active user: 500.000 / day
    - insert record: 250.000 / day => 250.000 x 30 = 7.500.000 record / month / 1 table
    - requests: 10.000 request /1s => 20 servers + load balancing => 500 request/1s

    - Problems 1: System slow when more users connect Mysql
    - Problems 2: records over => access slow => voucher, deal hot event => server down.
    - Disk IO, network bandwidth, CPU and consumption of Memory of your database
    server will meet very high conditions.
    - The total load of the server where the database is very heavy, or even
    almost overloaded.
    - In the peak period, the amount of data in a very large table and SQL
    performance is not very good.

    SOLUTION
    - servers: 5, same data
    - database: 1 bd / 1 server x 5. db_01, db_02..., db_05
    - table: 1 table / 1 db / 1 server x 5. db_01_order...db_05_order

    Clients: (need software mycat, hay sharding-jdbc or Shading mongodb)
    - Server 01: db_01, db_01_order => 50.000 orders
    - Server 02: db_02, db_02_order => 50.000 orders
    - Server 03: db_03, db_03_order => 50.000 orders
    - Server 04: db_04, db_04_order => 50.000 orders
    - Server 05: db_05, db_05_order => 50.000 orders

    Case: 500.000 record / 1 day inserted / 5 server
    => 100.000 record / 1 table inserted / 1 server / 1 day

    Case: 10.000 requests / 1s / 5 server
    => 2.000 request / 1s / 1 server


    Case: System load
    - order + pay : 100ms
    - discount order: 100ms
    - add point when order success: 200ms (+/- point)
    - send email sucess order: 200ms
    ... ~10 steps => system slow
    => Solution: async with Message Queue
    (order -> pay success): 100ms -> Message Queue async (discount, point, send mail): 200ms

    Message Queue: Queue with Message as MailBox, FIFO
    - Message: Information sent (text, binary or JSON)
    - Message Queue: Where to contain these messages, allowing producer and
    consumer can be exchanged together
    - Producer: Service created information, put information on Message Queue
    - Consumer: Service Receive messages from Message Queue and handle a service
    that can be both producer, making consumer
    - Kafka, RabitMQ, Pulsar, ActiveMQ...
    https://lcdung.top/message-queue-la-gi/

    RabbitMQ: open-source, Erlang to emplement AMQP
*/

/*
    Axios interceptors + fresh token in jwt

    Interceptor can be understood as a grid wall blocking the Request, Response
    of the app to enable checks, adding headers or changing the param of the
    requests, response.It allows us to check the application token, Content-Type
    or add the headers to the request.This allows us to make the most of the
    header, body, param requests on the server to be the most reasonable, most
    secure.

    Code BE:
    https://anonystick.com/blog-developer/json-web-token-jwt-thuc-hanh-su-dung-refresh-token-khi-token-het-han-voi-nodejs-va-express-js-2020071649665528
*/
// ### create file script.js
const btn_get_data_with_auto = document.getElementById('get-data-with-auto');
const btn_get_data_without_auto = document.getElementById('get-data-without-auto');
const btn_get_token = document.getElementById('get-token');
const btn_results = document.getElementById('results');

//get token o localStorage
function getLocalToken() {
    const token = window.localStorage.getItem('token')
    console.log('token >>>', token);
    return token
}

//get token o refreshToken
function getLocalRefreshToken() {
    const token = window.localStorage.getItem('refreshToken')
    return token
}


//cau hinh axios
const instance = axios.create({
    baseURL: 'http://localhost:3000/',
    timeout: 300000,
    headers: {
        'Content-Type': 'application/json',
    }
})

instance.setToken = (token) => {
    instance.defaults.headers['x-access-token'] = token
    window.localStorage.setItem('token', token)
}

function getToken() {
    return instance.post('/login', {
        username: 'anonystick.com',
        password: 'anonystick.com',
    })
}

function refreshToken() {
    return instance.post('/token', {
        refreshToken: getLocalRefreshToken()
    })
}


function getDataWithAuto() {
    return instance.get('/users', {
        params: {
            auto: 'yes',
        },
        headers: {
            'x-access-token': getLocalToken() // headers token
        }

    })
}

function getDataWithOutAuto() {
    return instance.get('/users', {
        params: {
            auto: 'no'
        },
        headers: {
            'x-access-token': getLocalToken() // headers token
        }
    })
}

// getToken();

// response parse
instance.interceptors.response.use((response) => {

    const { code, auto } = response.data
    if (code === 401) {
        if (auto === 'yes') {

            console.log('get new token using refresh token', getLocalRefreshToken())
            return refreshToken().then(rs => {
                console.log('get token refreshToken>>', rs.data)
                const { token } = rs.data
                instance.setToken(token);
                const config = response.config
                config.headers['x-access-token'] = token
                config.baseURL = 'http://localhost:3000/'
                return instance(config)

            })
        }
    }
    return response
}, error => {
    console.warn('Error status', error.response.status)
    // return Promise.reject(error)
    if (error.response) {
        return parseError(error.response.data)
    } else {
        return Promise.reject(error)
    }
})


//click login de lay token va refreshtoken

btn_get_token.addEventListener('click', () => {
    console.log('click get data');
    getToken().then(res => {
        const { status, token, refreshToken } = res.data
        if (status === 'Logged in') {
            window.localStorage.setItem('token', token)
            window.localStorage.setItem('refreshToken', refreshToken)
            return btn_results.textContent = `Token is ${token} \n and refreshToken is ${refreshToken}`
            // console.log(res.data);
        }
    })


})

//click tu dong lay du lieu khi token het han
btn_get_data_with_auto.addEventListener('click', () => {
    console.log('click get data');
    getDataWithAuto().then(res => {
        const { code, message, elements } = res.data
        return btn_results.textContent = JSON.stringify(elements)
    })
})

//click lay du lieu nhung token het han thi thong bao
btn_get_data_without_auto.addEventListener('click', () => {

    getDataWithOutAuto().then(res => {
        console.log('click get data btn_get_data_without_auto>>>', res.data);
        const { code, message, elements } = res.data
        if (code === 403) {
            return btn_results.textContent = message
        }
        if (code === 401) {
            return btn_results.textContent = message
        }

        return btn_results.textContent = JSON.stringify(elements)
    })
})

// getToken();
export default instance

// index.html
// <!DOCTYPE html>
// <html>
//   <head>
//     <title>Get list Users</title>
//     <link rel='stylesheet' href='/stylesheets/style.css' />
//   </head>
//   <body>
//     <h1>Get list Users</h1>
//     <p>Welcome to Admin</p>
//     <button id="get-token">Get Token vs refreshToken</button>
//     <button id="get-data-without-auto">Get Data chưa tự động khi token hết hạn</button>
//     <button id="get-data-with-auto">Get Data tự động khi token hết hạn lấy lại token mới sử dụng refreshToken</button>
//     <h3>Status: </h3><p id="results"></p>
//     <script src="https://unpkg.com/axios/dist/axios.min.js"></script>
//     <script type="module" src="/javascripts/script.js"></script>
//   </body>
// </html>

// Response from BE
// {status: 'success', code: 401, auto: req.query.auto, "message": 'Unauthorized access.' }
// Show this request Success or Error Message: If Success or Error returns the
// right and wrong result?Code: 401, or 403 express access.As I'm here, the deal
// with the back-end when code === 401 and auto = 'yes' so I understand that the
// Token has expired to automatically refresh token.



// speech to text (only chrome support now)
// app.js
class SpeechRecognitionApi {
    constructor(options) {
        // create a Speechrecognition instance
        const SpeechToText = window.speechRecognition || window.webkitSpeechRecognition;
        this.speechApi = new SpeechToText();

        // set allow continue listen
        this.speechApi.continuous = true;

        // set disallow show temp result
        this.speechApi.interimResults = false;

        // set language
        this.speechApi.interimResults = false;
        recognition.lang = 'en-US';
        // recognition.lang = 'vi-VN';
        // recognition.lang = 'ja-JP';

        // make sure exist output dom object
        this.output = options.output ? options.output : document.createElement('div');
        console.log(this.output);

        // Handle results received after start or stop
        this.speechApi.onresult = (event) => {
            console.log(event);
            var resultIndex = event.resultIndex;
            var transcript = event.results[resultIndex][0].transcript;

            console.log('transcript>>', transcript);
            console.log(this.output);
            this.output.textContent = transcript;
        };
    };

    // method to start recognition
    init() {
        this.speechApi.start();
    };

    // method to stop recognition
    stop() {
        this.speechApi.stop();
    };
};

// apply function when window loaded
window.onload = function () {
    // create a new speechRecognitionApi instance for .output DOM
    var speech = new SpeechRecognitionApi({
        output: document.querySelector('.output')
    });

    // add event init to .output DOM
    document.querySelector('.btn-start').addEventListener('click', function () {
        speech.init()
    });

    // add event stop to .output DOM
    document.querySelector('.btn-stop').addEventListener('click', function () {
        speech.stop()
    });
};

// HTML
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta http-equiv="X-UA-Compatible" content="ie=edge">
//     <title>Anonystick - example speech to text javasctipt</title>
// </head>
// <body>
//     <button class="btn-start">Start</button>
//     <button class="btn-stop">Stop</button>
//     <textarea class="output" cols="30" rows="10"></textarea>
//     <script src="./app.js"></script>
// </body>
// </html>


// Async and Defer
// https://vi.rakko.tools/tools/124/
// https://www.w3.org/TR/navigation-timing-2/
// https://www.programmersought.com/article/33585819902/
// https://www.mdeditor.tw/pl/pLSL
// https://kaaes.github.io/timing/
// https://speakerdeck.com/wpgr/measuring-frontend-performance-takis-bouyouris?slide=33
// https://blog.logrocket.com/how-to-practically-use-performance-api-to-measure-performance/
// https://nsirap.com/posts/001-web-porformance-api/
// https://flaviocopes.com/javascript-async-defer/#no-defer-or-async-in-the-head
// both async and defer is boolean
// only active inside <head></head> tag.
// not active inside <body></body> tag.
// <script async src="script.js"></script>
// <script defer src="script.js"></script>  => BEST PERFORMANCE
// IE not support defer, async so should put it before </body>

// No defer or async, in the head
// 1. start parsing HTML
// 2. ...wait...
// 2.1 fetch script
// 2.2 excute script
// 3. resume parsing HTML
// ==> ready/finish parsing

// No defer or async, in the body
// 1. parse HTML
// ==> ready/finish parsing
// 2. fetch script
// 3. excute script

// With async, in the head
// 1. async start parsing HTML and fetch script
// 2. ...wait...
// 2.1 excute script
// 3. resume parsing HTML
// ==> ready/finish parsing

// With defer, in the head
// 1. async parse HTML and fetch script
// ==> ready/finish parsing
// 2 excute script


// Pipeline Operator
const reverseWords =
    str => str
        .split(' ')
        .reduce((revStr, word) => [word, ...revStr], [])
        .join(' ');

console.log(reverseWords('this is fun')); // Output: fun is this

// OR
const splitBySpace = str => str.split(' ');
const reverseArray = arr => arr.reduce((acc, cur) => [cur, ...acc], []);
const joinWithSpace = arr => arr.join(' ');

const reverseWords =
    str => joinWithSpace(
        reverseArray(
            splitBySpace(
                str
            )
        )
    );

// OR
const reverseWords = str => joinWithSpace(reverseArray(splitBySpace(str)));

console.log(reverseWords('this is fun')); // Output: fun is this

// Nullish coalescing Operator: || vs ??
let firstName = null;
let lastName = null;
let nickName = "anonystick.com";

// With ?? => return first value defined
console.log(firstName ?? lastName ?? nickName ?? "Anonymous"); // anonystick.com

//  With || => return an real value. Can not be distinguished false, 0, ", and null / undefined
console.log(firstName || lastName || nickName || "Anonymous"); // anonystick.com

let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0

// ?? Operator has a pretty low priority, should use with ()
let height = null;
let width = null;

let area = (height ?? 100) * (width ?? 50);  // 5000
let area = height ?? 100 * width ?? 50;  // 0


// ES6 to ES11 concepts
// ----------------------------------------------------------
// ES6 (ECMAScript 2015)
// 1. Arrow functions (=>)
const test = {
    name: 'test object',
    createAnonFunction: function () {
        // function return a function, closure.
        return function () {
            console.log(this.name);  // window.name => undefined
            console.log(arguments);  // ().arguments => {}
            console.log(this);  // window not global
        };
    },

    createArrowFunction: function () {
        // function return a function, closure.
        return () => {
            console.log(this.name);  // createArrowFunction.name??test.name => test object
            console.log(arguments);  // createAnonFunction.().arguments => "hello", "world"
            console.log(this);  // window or global => test (global)
        };
    }
};

const anon = test.createAnonFunction('hello', 'world');
// undefined
// {}

const arrow = test.createArrowFunction('hello', 'world');
// test object
// { '0': 'hello', '1': 'world' }


// 2. Classes
'use strict'
class Polygon {
    constructor(height, width) {
        this.h = height;
        this.w = width;
    };
    test() {
        console.log("The height of the polygon: ", this.h);
        console.log("The width of the polygon: ", this.w);
    };
};

// creating an instance
var polyObj = new Polygon(10, 20);
polyObj.test();


// 3. Let and Const
// Let - variable is available only in the block of code
function calculate(x) {
    var y = 0;
    if (x > 10) { // let y is only available in this block of code
        let y = 30;
        return y;
    }
    return y;
};


// 4. Template strings
const classes = `header ${isLargeScreen() ? '' :
    (item.isCollapsed ? 'icon-expander' : 'icon-collapser')}`;


// 5. Promises
function getMoneyBack(money) {
    return new Promise((resolve, reject) => {
        if (typeof money !== 'number') {
            reject(new Error('money is not a number'));
        } else {
            resolve(money);
        };
    });
};

getMoneyBack(1200).then((money) => {
    console.log(money);
});


// ES7 (ECMAScript 2016)
// ============================================================
// 1. Array.prototype.includes
// Before
const numbers = [4, 8, 15, 16, 23, 42];

if (numbers.indexOf(42) !== -1) {
    // ...
};

// After
const numbers = [4, 8, 15, 16, 23, 42];

if (numbers.includes(42)) {
    // ...
};


// 2. Exponentiation Operator
// Old way
const old = Math.pow(3, 7);
// 2187

// ✅ ES7 way
const es7 = 3 ** 7;
// 2187


// ES8 (ECMAScript 2017)
// ============================================================
// 1. Object.values() and Object.entries()
// Object.entries()
const obj = { 0: 'adam', 1: 'billy', 2: 'chris' };
console.log(Object.entries(obj)[1]);  // ["1", "billy"]

// Object.values()
var check = ['x', 'y', 'z'];
console.log(Object.values(check));  // ["x", "y", "z"]

// 2. String.prototype.padEnd() and String.prototype.padStart()
// String.prototype.padStart()
const str1 = '5';

console.log(str1.padStart(2, '0'));
// expected output: "05"

const fullNumber = '2034399002125581';
const last4Digits = fullNumber.slice(-4);
const maskedNumber = last4Digits.padStart(fullNumber.length, '*');

console.log(maskedNumber);
// expected output: "************5581"

// String.prototype.padEnd()
const str1 = 'Breaded Mushrooms';

console.log(str1.padEnd(25, '.'));
// expected output: "Breaded Mushrooms........"

const str2 = '123';

console.log(str2.padEnd(5));
// expected output: "123  "

console.log(str2.padEnd(5, '0'));
// expected output: "12300"


// 3. Async function (async/await)
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    var result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: 'resolved'
}

asyncCall();


// ES9 (ECMAScript 2018)
// ============================================================
// 1. Asynchronous iteration
for await (let book of books) {
    console.log(book);
};

// 2. Rest operator
const fruits = { orange: 1, apple: 10, banana: 4, }
const { orange, ...rest } = fruits;
console.log(rest); // { apple: 10, banana: 4 };

// in the function
function getFruits(apple, ...rest) {
    return rest.banana;
};

// 3. Promise.prototype.finally
let isLoading = true;

fetch(myRequest).then(function (response) {
    var contentType = response.headers.get("content-type");
    if (contentType && contentType.includes("application/json")) {
        return response.json();
    }
    throw new TypeError("Oops, we haven't got JSON!");
})
    .then(function (json) { /* process your JSON further */ })
    .catch(function (error) { console.log(error); })
    .finally(function () { isLoading = false; });


// ES10 (ECMAScript 2019)
// 1. Optional Catch Binding
// Before
try {
    doSomethingThatMightThrow();
} catch (exception) {
    //     ^^^^^^^^^
    // We must name the binding, even if we don’t use it!
    handleException();
};

// After - In ES2019, catch can now be used without a parameter.
try {
    doSomethingThatMightThrow();
} catch { // → No binding!
    handleException();
};


// 2. Object.fromEntries()
const entries = new Map([
    ['foo', 'bar'],
    ['baz', 42]
]);

const obj = Object.fromEntries(entries);

console.log(obj);
// expected output: Object { foo: "bar", baz: 42 }


// 3. Array.flat()
var arr1 = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2 = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

var arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
arr4.flat(Infinity);
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// 4. Array.flatMap()
let arr1 = ["it's Sunny in", "", "California"];

arr1.map(x => x.split(" "));
// [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap(x => x.split(" "));
// ["it's","Sunny","in", "", "California"]


// 5-6. String.trimStart() & String.trimEnd()
// String.trimStart()
var greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimStart());
// expected output: "Hello world!   ";


// String.trimEnd()
var greeting = '   Hello world!   ';

console.log(greeting);
// expected output: "   Hello world!   ";

console.log(greeting.trimEnd());
// expected output: "   Hello world!";


// 7. Dynamic Import. ./utils.js
// Default export
export default () => {
    console.log('Hi from the default export!');
};

// Named export `doStuff`
export const doStuff = () => {
    console.log('Doing stuff…');
};

// 8. globalThis Object
const global = Function('return this')();

const getGlobal = function () {
    if (typeof self !== 'undefined') { return self; }
    if (typeof window !== 'undefined') { return window; }
    if (typeof global !== 'undefined') { return global; }
    throw new Error('unable to locate global object');
}

const global = getGlobal(); // will return window object in the browser

// array usage example
const numbers = new global.Array(1, 2, 3);
console.log(numbers); // outputs [1, 2, 3];


// ES11 (ECMAScript 2019) - Stage 3
// 1 - Optional Chaining ?.
const player = {
    details: {
        name: {
            firstName: "Quang",
            lastName: "Hai",
            age: 20
        }
    },
    jobs: [
        "dev js",
        "dev php"
    ]
};

const playerFirstName = player?.details?.name?.firstName;

// 2 - Private fields #
class Foo {
    #b = 15;
    a = 10;
    get() {
        return this.#b;
    }

    increment() {
        ++this.#b;
    }
}
const obj = new Foo();

obj['#b']; // undefined
obj.a = 10;
obj.hasOwnProperty('#b'); // false


// 3 - undefined javascript - Nullish Coalescing ??
const player = input.player || 'Ronaldo Cr7';  // with input.player not falsy values
const player = input.player ?? 'Ronaldo Cr7';  // with input.player is falsy values


// Level Up Your Javascript Skills
// 1 - Value vs. Reference Variable
// primative type => every var is a address
let var1 = 'x1';
let var2 = 'x1';
let var3 = var1;
var3 = 'x2';
var1 === var2; // true
var3 === var1; // false

// reference type => every var not a real address
let var1 = { name: 'Jim' };
let var2 = { name: 'Jim' };
var1 === var2;  // false => reference type (not real address)
var1.name === var2.name;  // true => primative type (real address)
JSON.stringify(var1) === JSON.stringify(var2);  // true
// "{"name":"Jim"}" = "{"name":"Jim"}"

let var1 = ['K', 'M'];
let var2 = ['K', 'M'];
var1 === var2;  // false
var1[1] === var2[1];  // true
JSON.stringify(var1) === JSON.stringify(var2);  // true
// "["K","M"]" = "["K","M"]"


// 2 - Closures (can access to private variable)
function newCounter() {
    var count = 0;  // global private var. always = 0. primative type in reference type

    return function () {
        count += 1;  // local var. local??global??window value
        return count;
    }
};

var counter = newCounter();

console.log(counter());
// Output: 1. local= local??global(0) + 1, global=0, window = not defined

console.log(counter());
// Output: 2. local= local(1)??global(0) + 1 , global=0, window = not defined

console.log(counter());
// Output: 3. local= local(2)??global(0) + 1 , global=0, window = not defined


// 3. Destructuring
const obj = {
    name: 'Joe',
    food: 'cake'
}
const { name, food } = obj;
console.log(name, food);
// 'Joe' 'cake'

// OR
const obj = {
    name: 'Joe',
    food: 'cake'
};
const { name: myName, food: myFood } = obj;
console.log(myName, myFood);
// 'Joe' 'cake'

// OR
const person = {
    name: 'Eddie',
    age: 24
};
function introduce({ name, age }) {
    console.log(`I'm ${name} and I'm ${age} years old!`);
};
console.log(introduce(person));
// "I'm Eddie and I'm 24 years old!"


// 4. Spread Operator
const arr = [4, 6, -1, 3, 10, 4];
const max = Math.max(...arr);  // pass value in array to max
console.log(max);  // 10

// Getting the maximum element of an array
var max = arr.reduce(function (a, b) {
    return Math.max(a, b);
});

let parts = ['shoulders', 'knees'];
let lyrics = ['head', ...parts, 'and', 'toes'];
//  ["head", "shoulders", "knees", "and", "toes"]

function sum(x, y, z) {
    return x + y + z;
};
const numbers = [1, 2, 3];
console.log(sum(...numbers));  // 6

// Create new object
const object1 = {
    fullName: 'Anonystick',
    occupation: 'Software developer',
    age: 31,
    website: 'https://anonystick.com'
};

const object2 = {
    ...object1,
    fullName: 'Tom',
};
console.log(object1);
console.log(object2);
//{fullName: "Tom", occupation: "Software developer", age: 31, website: "https://anonystick.com"}

// Copying arrays
const arr = [1, 2, 3];
const arr2 = [...arr];  // any change in arr2 not effect arr

// Adding array elements to an existing array
const arr = ["Joy", "Wangari", "Warugu"];
const newArr = ["joykare", ...arr];
// [ 'joykare', 'Joy', 'Wangari', 'Warugu' ]

const myNames = [...arr, "joykare"];
// [ 'Joy', 'Wangari', 'Warugu', 'joykare' ]

// rest operator
function myFunc(...args) {
    console.log(args[0] + args[1]);
}
myFunc(1, 2, 3, 4);  // 3

function sum(...numbers) {
    return numbers.reduce((sum, val) => {
        return sum += val;
    });
};
sum(3, 5) // gives 8
sum(1, 2, 3, 5) //gives 11.


// 5. Array Methods - map, filter, reduce
// map()
const arr = [1, 2, 3, 4, 5, 6];
const mapped = arr.map(el => el + 20);
console.log(mapped);  // [21, 22, 23, 24, 25, 26]

// filter()
const arr = [1, 2, 3, 4, 5, 6];
const filtered = arr.filter(el => el === 2 || el === 4);
console.log(filtered); // [2, 4]

// reduce()
const arr = [1, 2, 3, 4, 5, 6];
const reduced = arr.reduce((total, current) => total + current);
console.log(reduced); // 21

// forEach
const arr = [1, 2, 3, 4, 5, 6];

arr.forEach(item => {
    console.log(item); // output: 1 2 3 4 5 6
});

// includes()
const arr = ['Nam', 2, 3, 4, 5, 6];
arr.includes('Nam'); // output: true
arr.includes(7); // output: false

// some()
const arr = [3, 9, 7, 6];
const idiot = arr.some(num => num < 5);
console.log(idiot); // output: true

// every()
const arr = [1, 2, 3, 4, 5, 6];
const greaterFour = arr.every(num => num > 4);
console.log(greaterFour); // output: false

const lessTen = arr.every(num => num < 10);
console.log(lessTen); // output: true

// sort()
const arr = [1, 2, 3, 4, 5, 6];
const alpha = ['e', 'a', 'c', 'u', 'y'];

descOrder = arr.sort((a, b) => a > b ? -1 : 1);
console.log(descOrder); // output: [6, 5, 4, 3, 2, 1]

ascOrder = alpha.sort((a, b) => a > b ? 1 : -1);
console.log(ascOrder); // output: ['a', 'c', 'e', 'u', 'y']

// Array.from()
const name = 'javascript';
const nameArray = Array.from(name);

console.log(name); // output: javascript
console.log(nameArray); // output: ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// Array.of()
const nums = Array.of(1, 2, 3, 4, 5, 6);
console.log(nums); // output: [1, 2, 3, 4, 5, 6]


// 7. Generators => should use async/await
//    Generator function is a function, capable of temporarily conducting
//    execution before the function ends, and can continue to run at another
//    time.syntax
/**
 * name() method name
 * @param {*} param0 - max 255 param
 * https://dev.to/micahriggan/streams-and-generators-36e1
 */
// function* name([param[, param[, ...param]]]) {
//     statements
// }
function* greeter() {
    yield 'Hi';
    yield 'How are you?';
    yield 'Bye';
}
const greet = greeter();
console.log(greet.next().value);
// 'Hi'
console.log(greet.next().value);
// 'How are you?'
console.log(greet.next().value);
// 'Bye'
console.log(greet.next().value);
// undefined


// 8. Identity Operator (===) vs. Equality Operator (==)
console.log(0 == '0');
// true
console.log(0 === '0');
// false


// 9. Object Comparison
const joe1 = { name: 'Joe' };
const joe2 = joe1;
console.log(joe1 === joe2);
// true

const joe1 = { name: 'Joe' };
const joe2 = { name: 'Joe' };
console.log(joe1 === joe2);
// false


// 10. Callback Hell
// callback
function myFunc(text, callback) {
    setTimeout(function () {
        callback(text);
    }, 2000);
}
myFunc('Hello world!', console.log);
// 'Hello world


// promise
const myPromise = new Promise(function (res, rej) {
    setTimeout(function () {
        if (Math.random() < 0.9) {
            return res('Hooray!');
        }
        return rej('Oh no!');
    }, 1000);
});
myPromise
    .then(function (data) {
        console.log('Success: ' + data);
    })
    .catch(function (err) {
        console.log('Error: ' + err);
    });

// If Math.random() returns less than 0.9 the following is logged:
// "Success: Hooray!"
// If Math.random() returns 0.9 or greater the following is logged:
// "Error: On no!"

// async/await
const greeter = new Promise((res, rej) => {
    setTimeout(() => res('Hello world!'), 2000);
})
async function myFunc() {
    const greeting = await greeter;
    console.log(greeting);
}
myFunc();
// 'Hello world!'

// Map vs Object
// https://anonystick.com/blog-developer/map-vs-object-trong-javascript-khi-nao-nen-su-dung-2020051824737870

// ====================================
// ARROW FUNCTION
// https://www.sitepoint.com/es6-arrow-functions-new-fat-concise-syntax-javascript/
// ====================================

// function declaration
function sayHiStranger() {
    return 'Hi, stranger!';
};

// function expression
const sayHiStranger = function () {
    return 'Hi, stranger!';
};

// arrow functions
const sayHiStranger = () => 'Hi, stranger';
// just one line of code
// no function keyword
// no return keyword
// no curly braces {}
// In JavaScript, functions are “first-class citizens”.
// can store functions in variables
// can pass functions to other functions as arguments
// can return functions from other functions as values.

// call the function
sayHiStranger();

// JavaScript async/await
const catIDs = [132, 345, 243, 121, 423]; // id array.
// BAD
async function fetchOwners(catIDs) {
    const owners = [];
    // Don't use await in for or forEach, should use .map() by performance
    for (const id of catIDs) {
        const cat = await fetchCat(id);// get detail object Cat
        const owner = await fetchOwner(cat.ownerID); // find owner via ownerID
        // .push in loop for is the matter
        owners.push(owner);
    }
    return owners;
};

// GOOD
// catIDs -> ownerPromises -> owners
async function fetchOwners(catIDs) {
    // transform array ID to array promise (cats' owners) with map()
    const ownerPromises = catIDs.map(async id => {
        const cat = await fetchCat(id);
        const owner = await fetchOwner(cat.ownerID);
        return owner;
    });

    // unpack with Promise.all
    const owners = await Promise.all(ownerPromises);
    return owners;
};


// BAD
async function getBooksAndAuthor(authorId) {
    const books = await bookModel.fetchAll(); // get object Boonk
    const author = await authorModel.fetch(authorId); // get author via authorId
    return {
        author,
        books: books.filter(book => book.authorId === authorId),
    };
};
// get all data with authorId.
// Problem: wait time to wait fetchAll() returns, then fetch(authorId) run
// but fetch(authorId) not depen on result of fetchAll()
// shoud invoke it by parallel in Promise()
// https://dev.to/micahriggan/serial-promises-vs-parallel-promises-1ejc
async function getBooksAndAuthor(authorId) {
    const bookPromise = bookModel.fetchAll();
    const authorPromise = authorModel.fetch(authorId);
    const book = await bookPromise;
    const author = await authorPromise;
    return {
        author,
        books: books.filter(book => book.authorId === authorId),
    };
}

// Serial Promises vs Parallel Promises
// Example 1: "Wait a second" x 3
function wait(waitTime) {
    return new Promise(resolve => setTimeout(() => {
        console.log(`waited ${waitTime} ms`)
        resolve()
    }, waitTime));
};

async function serial() {
    console.time('serial');
    await wait(1000);
    await wait(1000);
    await wait(1000);
    console.timeEnd('serial');
};

async function parallel() {
    console.time('parallel');
    await Promise.all([
        wait(1000),
        wait(1000),
        wait(1000)
    ])
    console.timeEnd('parallel');
};

async function test() {
    await serial();
    await parallel();
};

test();

// waited 1000 ms
// waited 1000 ms
// waited 1000 ms
// serial: 3016.319ms
// waited 1000 ms
// waited 1000 ms
// waited 1000 ms
// parallel: 1003.017ms

// Example 2: Add two async numbers
function randomNumber() {
    const rand = Math.random() * 100;
    return new Promise(resolve => setTimeout(() => {
        resolve(rand)
    }, 1000))
};

async function addExampleSerial() {
    console.time('add-serial');
    const number1 = await randomNumber();
    const number2 = await randomNumber();
    const result = number1 + number2;
    console.timeEnd('add-serial');
    console.log('serial result: ', result);
};

async function addExampleParallel() {
    console.time('add-parallel');
    const [number1, number2] = await Promise.all([randomNumber(), randomNumber()]);
    const result = number1 + number2;
    console.timeEnd('add-parallel');
    console.log('parallel result: ', result);
};

async function test() {
    await addExampleSerial();
    await addExampleParallel();
};

test();

// add-serial: 2005.019ms
// serial result: 59.0316729944722
// add-parallel: 1000.616ms
// parallel result: 48.7190841367634


// Example 3: Required Data Dependencies
function fetchData(data) {
    return new Promise(resolve => setTimeout(() => {
        resolve(data)
    }, 1000))
};

function getLoggedInUser() {
    return fetchData('user1');
};

async function getDataForUser(userName) {
    const profileData = await fetchData({
        user1: { name: 'Micah', points: 100 },
        user2: { name: 'someone else', point: 200 }
    });
    return profileData[userName];
}

async function getUserPosts(userName) {
    const posts = await fetchData({
        user1: ['Promises Post'],
        user2: ['Streams Post']
    });
    return posts[userName];
}

async function userDataSerial() {
    console.time('userData-serial');
    const userName = await getLoggedInUser();
    const userData = await getDataForUser(userName);
    const userPosts = await getUserPosts(userName);
    console.timeEnd('userData-serial');
}


async function userDataParallel() {
    console.time('userData-parallel');
    const userName = await getLoggedInUser();
    const [userData, userPosts] = await Promise.all([
        getDataForUser(userName),
        getUserPosts(userName)
    ])
    console.timeEnd('userData-parallel');
}

async function test() {
    await userDataSerial();
    await userDataParallel();
};

test();

// userData-serial: 3007.785ms
// userData-parallel: 2006.665ms


// Reduce javascript
// Find the total of Array
var numbers = [1, 2, 3, 4, 5];
var initialVal = 0;
let result = numbers.reduce((accu, val) => val + accu, initialVal);
console.log(result) // 15

// Create an Array from an Object
var names = ["ram", "raj"];
// let result = acc?? []
var result = names.reduce((acc, name) => {

    let obj = {
        name,
        len: name.length
    }
    acc.push(obj);

    return acc;
}, []);

result;

// [
//     {
//         "name": "ram",
//         "len": 3
//     },
//     {
//         "name": "raj",
//         "len": 3
//     }
// ]


// Map javascript
// Use Map () to make a function on each element of an array
var numbers = [1, 2, 3, 4, 5];
var doubled = numbers.map(n => n * 2);
doubled; // [2,4,6,8,10]
// When using Map (): If we want to perform the same operation / switch on each
// element of the array and get back a new Array with the same length with the
// converted value.


// Filter javascript
// Use Filter () when we want to delete items that do not meet the conditions
var numbers = [1, 2, 3, 4, 5];
var greaterThan2 = numbers.filter(n => n > 2);
greaterThan2; // [3,4,5]
// Each element of the array is transmitted to the callback function.On each
// iteration, if the callback returns true, that element will be added to the
// new array, otherwise it is not added to the new array.


/*
    How do you check if a variable is a String in Javascript

    A string is always a string so this one is easy. Except if called with new
    (new String) type of will instead return “object”. So to also include those
    strings instance of can be used.
*/
function isString(value) {
    return typeof value === 'string' || value instanceof String;
};


/*
    How do you check if a variable is a Number in Javascript

    From type-of more things than just an ordinary number will return “number”
    like NaN and Infinity. To know if a value really is a number the function
    isFinite is also required.
*/
function isNumber(value) {
    return typeof value === 'number' && isFinite(value);
};


/*
    How do you check if a variable is a Array in Javascript

    In JavaScript arrays are not true arrays In javascript arrays are not true
    arrays like in java and in other languages. They’re actually objects so
    typeof will return “object” for them. To know if something’s really an array
    its constructor can be compared to Array.
*/
function isArray(value) {
    return value && typeof value === 'object' && value.constructor === Array;
};
// ES5 actually has a method for this (ie9+)
Array.isArray(value);


/*
    How do you check if a variable is a Function in Javascript

    Functions are functions so here just typeof is enough.
*/
function isFunction(value) {
    return typeof value === 'function';
};


/*
    How do you check if a variable is an Object in Javascript

    Many things are objects in javascript. To know if a value is an object that
    can have properties and be looped through, its constructor can be compared
    to Object. It doesn’t work for objects created from classes, then the
    instance of the operator can be used instead.
*/
function isObject(value) {
    return value && typeof value === 'object' && value.constructor === Object;
};

/*
    How do you check if a variable is a Null & undefined in Javascript

    Most times you don’t need to check explicitly for null and undefined since
    they’re both falsy values. However to do it below functions does the trick.
*/
// Returns if a value is null
function isNull(value) {
    return value === null;
};
// Returns if a value is undefined
function isUndefined(value) {
    return typeof value === 'undefined';
};


/*
    How do you check if a variable is a Boolean in Javascript

    For booleans typeof is enough since it returns “boolean” for both true and
    false.
*/
// Returns if a value is a boolean
function isBoolean(value) {
    return typeof value === 'boolean';
};


/*
    How do you check if a variable is a RegExp in Javascript

    Regexps are objects so the only thing needed to check is if the constructor
    is Regexp.
*/
// Returns if a value is a regexp
function isRegExp(value) {
    return value && typeof value === 'object' && value.constructor === RegExp;
};


/*
    How do you check if a variable is an Error in Javascript

    Errors in javascript are the same as “exceptions” in many other programming
    languages. They come in a couple of different forms like for instance Error,
    TypeError, and RangeError. An instanceof statement is enough for them all,
    but just to be extra sure we also check for the “message” property that
    errors have.
*/
// Returns if value is an error object
function isError(value) {
    return value instanceof Error && typeof value.message !== 'undefined';
};

/*
    How do you check if a variable is a Date in Javascript

    Date isn’t really a data type in Javascript. But to know if something’s a
    Date object it can be checked with instanceof.
*/
// Returns if value is a date object
function isDate(value) {
    return value instanceof Date;
}

/*
    How do you check if a variable is a Symbol in Javascript

    In ES6 the new datatype Symbol was added. Nicely enough typeof returns
    “symbol” for it so no more logic is required.
*/
// Returns if value is an error object
// Returns if a Symbol
function isSymbol(value) {
    return typeof value === 'symbol';
};


/*
    Lazy load

    Browser support lazy-loading
    caniuse.com: Chrome 77+ , Edge 79+
*/
// Check browser support attribute
if ('loading' in HTMLImageElement.prototype) alert("yes"); else alert("no");

// Implementing lazy-loading
// <img data-fr-src="cat.jpg" loading="lazy" />
// The loading="lazy" attribute to signal the browser that image / iframe that
// it is slow load.

// <img src="cat.jpg" loading="eager" />
// the loading="eager" attribute means download immediately

// <img src="cat.jpg" />
// default: loading="auto"


// debounce vs throttle javascript
// debunce and throttle JavaScript are not the only two concepts in JavaScript
// to optimize users and improve the Performance of the application or website
// In programming with EVENTs such as Resize, Scroll, Keyup, Keydown or text
// search functions in the application both activate unlimited persecution.
// For example, for users to search for data, users will enter text and at which
// continuous search data under the database via Ajax Call.That reduces the
// search performance, increasing the working volume of Browser.This not only
// reduces the user's experience but also our server is heavier.So Debounce and
// Throttle come here to help us prevent those things.

// <div>
//     <input type="text" style="height:50px; width: 200px" id="debounce"/>
// </div>

// #without use Debounce
window.onload = () => {
    function ajax(data) {
        console.log(new Date().toLocaleTimeString() + ' - ' + data)
    }

    document.querySelector('#debounce').addEventListener('keyup', e => {
        ajax(e.target.value)
    })
};

// suggestion?q=3
// suggestion?q=33
// suggestion?q=333...

// #with debounce javascript
// Imagine you are going into the elevator, on average every elevator will wait
// 5s to close the door again.But suddenly a man who runs from and the elevator
// door opens and reactes back to the waiting time of 5s.And so on until no one
// comes, the elevator will close.That is the working mechanism of debounce in
// JavaScript.
window.onload = () => {
    function ajax(data) {
        console.log(new Date().toLocaleTimeString() + ' - ' + data)
    }

    function debounce(fn, delay) {
        return args => {
            clearTimeout(fn.id)

            fn.id = setTimeout(() => {
                fn.call(this, args)
            }, delay)
        }
    }

    const debounceAjax = debounce(ajax, 1000)

    document.querySelector('#debounce').addEventListener('keyup', e => {
        debounceAjax(e.target.value)
    });
};
// This helps the server to reduce the Query continuously when the user enters
// the search text, when the user stops input within 1s, the new search event
// activates itself.


// throttle javascript
// Throttle's effects are like debouce, but only different in that if we take
// the elevator as an example for Debounce, it's like a subway.It doesn't need
// to know how many people come, it only knows every 15 minutes of the train
// door will open and close it.That means how many events are activated, it's a
// time when it only does a event.And when it's done, it will recreate the same
// time for the next step.

// #with throttle javascript
window.onload = () => {
    function ajax(data) {
        console.log(new Date().toLocaleTimeString() + ' - ' + data);
    };

    function throttle(fn, delay) {
        return args => {
            if (fn.id) return;

            fn.id = setTimeout(() => {
                fn.call(this, args);
                clearTimeout(fn.id);
                fn.id = null;
            }, delay);
        };
    };

    const throttleAjax = throttle(ajax, 1000);

    document.querySelector('#debounce').addEventListener('keyup', e => {
        throttleAjax(e.target.value);
    });
};


// Debounce is when a function is constantly called, this function is not
// executed and it is only done once when all its functions stop calling in more
// than a certain time.
// Throttle is specified that a function can only be activated once in a time
// unit.If multiple functions are enabled in this time unit, only one function
// will take effect.


// Fetch API
// <h1 class="text-center">FETCH API</h1>
// <div class="container text-center">
// <button class="btn btn-primary" id="btn1">Covid 19 - Global</button>
// </div>
// </br>
// <div class="container text-center">
// <button class="btn btn-primary" id="btn1-vn">Covid 19 - Viet Nam</button>
// </div>
// <div class="container text-center" id="results"></div>

var btn1 = document.getElementById("btn1");
var btn1_vn = document.getElementById("btn1-vn");
btn1_vn.addEventListener('click', () => {

    // fetch request to api

    fetch('https://corona.lmao.ninja/v2/countries/vn')
        .then((response) => {
            return (response.json());
        })
        .then((data) => {
            results.innerHTML = `
                <ul class="list-group mb-4">
                <li class="list-group-item"><strong>Country: ${data.country}</strong></li>
                <li class="list-group-item"><strong>Cases: </strong> ${data.cases}</li>
                <li class="list-group-item"><strong>Deaths: </strong> ${data.deaths}</li>
                </ul>
            `;
        })
})
btn1.addEventListener('click', () => {

    // fetch request to api

    fetch('https://corona.lmao.ninja/v2/countries')
        .then((response) => {
            return (response.json());
        })
        .then((data) => {

            var results = document.getElementById('results');

            var template = `
                <h4 cass="mt-4">Covid Cases</h4>
            `
            data.forEach((element) => {
                template += `
                    <ul class="list-group mb-4">
                    <li class="list-group-item"><strong>Country: ${element.country}</strong></li>
                    <li class="list-group-item"><strong>Cases: </strong> ${element.cases}</li>
                    <li class="list-group-item"><strong>Deaths: </strong> ${element.deaths}</li>
                    </ul>
                `
            })

            results.innerHTML = template;
        })
});


// What is the module? - Import and Export in JavaScript
// In short and obviously ... a module is a file.Or "One Script is one
// module".These modules can load multiple functions by two special keywords
// that are import and export.And especially this module can call and use
// another module.

// Import: allows importing functionality from other modules.
// Export: Declare the Variables or Function allows other modules to access and
// use

// Exporting Modules JavaScript
// # Named Export => Should use
//-------util.js------
export function addTwoNumbers(x, y) {
    return x + y;
};
export let students = ['wisdom', 'bill', 'fred', 'grim'];
// Named Export is used to export many things from a module by adding keyword
// Export to their declaration.The export items will be distinguished by the
// name.Then Import the things we need to use by surrounding them pairs {  }

// # Default Export => should not use. 1 default in 1 file.
//----myFunction.js ----
export default function () {
    alert("Hello Default Export")
};


// Importing Modules JavaScript
// import with named export
//----main.js---
import { addTwoNumbers, students } from 'util';

// import with alias
import * as util from 'util';

console.log(util.addTwoNumbers(2, 13));
console.log(util.students);


// Example
// Named export
// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
}

function sayBye(user) {
    alert(`Bye, ${user}!`);
}

export { sayHi, sayBye }; // a list of exported variables

// Import as Alias
// 📁 main.js
import { sayHi as hi, sayBye as bye } from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!



// Arguments javascript
// In a function, you can use arguments instead of the parameters transmitted to
// the function.Arguments like a Array but not really a Array.
function add(num1, num2) {

    // logs [num1, num2] (with their values)
    console.log(arguments);[num1, num2]

    // get param1
    console.log(arguments[0]); // num1

    // get param2
    console.log(arguments[1]); // num2

    // ...

};


function add() {

    // Set total
    let total = 0;

    // Cumulative per Params
    Array.from(arguments).forEach(function (num) {
        total += num;
    });

    // Return to the total
    return total;

};

// returns 0
add();

// returns 4
add(4);

// returns 36
add(4, 2, 11, 19);


// Array-Like Objects
// Array-Like Objects is an Array
function testArgumentsKeyword() {
    console.log(arguments.length, arguments[0]);
};
testArgumentsKeyword('arg1', 'arg2', 'arg3', 'arg4', 'arg5');

// Array-Like Objects is not an Array
console.log(['arg1', 'arg2', 'arg3', 'arg4', 'arg5'].filter(el => el === 'arg2'));// ["arg2"]

function testArgumentsKeyword() {
    // "Uncaught TypeError: arguments.filter is not a function"
    console.log(arguments.filter(el => el === 'arg2'));
};
testArgumentsKeyword('arg1', 'arg2', 'arg3', 'arg4', 'arg5');

// Array.prototype
// concat
// every
// filter
// forEach
// indexOf
// join
// lastIndexOf
// map
// pop
// push
// reduce
// reduceRight
// reverse
// shift
// slice
// some
// sort
// splice
// toLocaleString
// toString
// unshift


// Builder Pattern
// A car with 3 parts
"use strict";
class Car {
    constructor(engine, chassis, body) {
        this.engine = engine;
        this.chassis = chassis;
        this.body = body;
    };

    toString() {
        return JSON.stringify(this);
    };
};

// parts of a Car
class CarBuilder {
    addChassis(chassis) {
        this.chassis = chassis;
        return this;
    };
    addEngine(engine) {
        this.engine = engine;
        return this;
    };
    addBody(body) {
        this.body = body;
        return this;
    };
    build() {
        return new Car(this.engine, this.chassis, this.body);
    };
};

// Build car
const car = new CarBuilder()
    .addEngine('v12')
    .addBody('KIA SOLUTO')
    .addChassis('LUXURY')
    .build();

const car1 = new CarBuilder().addEngine('v10')
    .addBody('KIA SOLUTO LUXURY').build();


console.log('kakaka Car', car.toString());
console.log('kakaka Car1', car1.toString());


// Factory pattern
"use strict";
class VIN {
}
class LUXA20 extends VIN {
    run() {
        console.log("LUXA20 Ô tô");
    }
}
class LUXSA20 extends VIN {
    run() {
        console.log("LUXSA20 Ô tô");
    }
}
class VINFactory {
    static produceVIN(model) {
        if (model === "A.20") {
            return new LUXA20();
        }
        else {
            return new LUXSA20();
        }
    }
}

const luxA20 = VINFactory.produceVIN("A.20");
const luxSA20 = VINFactory.produceVIN("SA.20");
luxA20.run();
luxSA20.run();

//Ouputs:
// [LOG]: "LUXA20 Ô tô"
// [LOG]: "LUXSA20 Ô tô"



// Factory Method Pattern (Polymorphic Factory)
class VIN {
}
class LUXA20 extends VIN {
    run() {
        console.log("LUXA20 Ô tô");
    }
}
class LUXSA20 extends VIN {
    run() {
        console.log("LUXSA20 Ô tô");
    }
}
class VINFactory {
}
class LUXA20Factory extends VINFactory {
    produceVIN() {
        return new LUXA20();
    }
}

const luxa20Factory = new LUXA20Factory();
const luxsa20Factory = new LUXA20Factory();
const luxa20 = luxa20Factory.produceVIN();
const luxsa20 = luxsa20Factory.produceVIN();
luxa20.run();
luxsa20.run();
class LUXSA20Factory extends VINFactory {
    produceVIN() {
        return new LUXSA20();
    }
}


// Fix javascript technique
// show all data in a table
console.table([
    { blogName: 'anonystick', type: 'javascript, mongodb, nodejs', age: 4 },
    { blogName: 'medium.com', type: 'javascript, reactjs...', age: 11 },
]);

// show data with column
console.table([
    { blogName: 'anonystick', type: 'javascript, mongodb, nodejs', age: 4 },
    { blogName: 'medium.com', type: 'javascript, reactjs...', age: 11 },
], ['blogName', 'type']);

// Copying data using console
const data = [2, 3, 4];
copy(data);


// Format currency in Javascript
function format1(n, currency) {
    return currency + n.toFixed(2).replace(/./g, function (c, i, a) {
        return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
    });
};

function format2(n, currency) {
    return currency + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
};


var numbers = [1, 12, 123, 1234, 12345, 123456, 1234567, 12345.67];

for (var i = 0; i < numbers.length; i++) {
    console.log(format1(numbers[i], '£ '));
};

for (var i = 0; i < numbers.length; i++) {
    console.log(format2(numbers[i], 'vnd '));
};


// Dynamic Imports
let module = await import('/modules/my-module.js');

el.onclick = () => {
    import('/modules/my-module.js')
        .then(module => {
            // Do something with the module.
        })
        .catch(err => {
            // load error;
        })
}


// TOP 30 Javascript Interview
// 1. Write a function the reverses a string.
//    Javascript does not have a build in String Builder class so you cannot
//    modify an existing string. What we can do is create a list that we push
//    each character from the original string starting from the end.
//    Then we use Array Join to combine the characters as the reversed string.
function reverseString(s) {
    // Create the result list
    const result = [];
    // Start from the end of the string and iterate towards the start
    for (let i = s.length - 1; i >= 0; i -= 1) {
        // Push the current char in the list
        result.push(s[i]);
    }
    // Combine the result in a string
    return result.join('');
};

// Examples
console.log(reverseString(""));
console.log(reverseString("abc"));
console.log(reverseString("aaabbbcccd"));


// 2. Write a function that filters out numbers from a list.
function filterNumbers(arr) {
    // Create the result list
    const result = arr.filter(function (value, i) {
        // Filter based on the rules for checking the input is number
        if (isNaN(value) || isBoolean(value) || isEmptyString(value)) {
            return false;
        }
        return true;
    });
    // Return numbers only list
    return result;
};

function isBoolean(value) {
    return typeof value === 'boolean';
};

function isEmptyString(value) {
    return typeof value === 'string' && value.trim().length === 0;
};
console.log(filterNumbers([1, "2", " ", NaN, Number.POSITIVE_INFINITY, 66, "ab1", false]));


// 3. Write a function that finds an element inside an unsorted list.
//    This is a typical linear search algorithm that takes Θ(n) time to
//    complete. We need to traverse the whole list and compare the search item
//    with the current item
function linearSearch(arr, x) {
    let lo = 0;
    let hi = arr.length - 1;
    // Iterate from start till end of list
    while (lo <= hi) {
        // If item was found then return index
        if (arr[lo] === x) {
            return lo;
        } else {
            lo += 1;
        };
    };
    // Return -1 to denote the item was not found
    return -1;
};

let arr = [1, 3, 5, 7, 9, 11, 14, 18, 22];
console.info("Item was found at index: " + linearSearch(arr, 22));


// 4. Write a function that showcases the usage of closures.
function multiplier(first) {
    let a = first;
    return function (b) {
        return a * b;
    };
}

let multiplyBy2 = multiplier(2);  // create an outner instance return function
console.info(multiplyBy2(4));  // invoke inner instance
console.info(multiplyBy2(5));  // invoke inner instance


function f1() {
    var N = 0; // N initial always 0, global var
    console.log(N);
    function f2() // f2 callback function
    {
        N += 1; // increase N, local var
        console.log('-->>', N);
    }

    return f2;  // return callback
}

var result = f1();  // create an outner instance return function

result(); // invoke inner instance
result(); // invoke inner instance
result(); // invoke inner instance


function name(n) {
    return function (a) {
        return `${n} likes ${a}`;
    };
}
var j = name('John');  // create an outner instance return function
var c = name('Cindy');  // create an outner instance return function

j('dogs');  // 'John likes dogs'
c('cats');  // 'Cindy likes cats'


// 5. What is a Promise? Write a function that returns a Promise.
const resultPromise = function (idea) {
    return new Promise(function (resolve, reject) {
        if (idea.isGood) {
            resolve(idea);
        } else {
            reject({
                idea: idea,
                reason: "Not Realistic"
            });
        }
    });
};

resultPromise({ idea: "Make Gold from Iron", isGood: false })
    .then(function () {
        console.info("I'm Rich!")
    }, function (err) {
        console.info("Rejected as: " + err.reason);
    });



// 6. Write a function that flattens a list of items.
// [1, [2,3, [4]]] => [1,2,3,4]
function flatten(arr = []) {
    // Create the result list;
    let result = [];
    for (let item of arr) {
        // If item is an array we concat the contents
        if (Array.isArray(item)) {
            result = result.concat(flatten(item));
        } else {
            result = result.concat(item);
        }
    }
    return result;
}
console.info(flatten([[1, 2, [3]], 4]));


// 7. Write a function that finds an element inside a sorted list.
function binarySearch(arr, x) {
    let lo = 0;
    let hi = arr.length - 1;
    while (lo <= hi) {
        // Find mid element
        let m = Math.floor((lo + hi) / 2);
        // Check if equal to target
        if (arr[m] === x) {
            return m;
            // Reduce array search space by half
        } else if (arr[m] < x) {
            lo = m + 1;
        } else {
            hi = m - 1;
        }
    }
    // Item not found
    return -1;
}

let arr = [1, 3, 5, 7, 9, 11, 14, 18, 22];
console.info(console.info("Item was found at index: " + binarySearch(arr, 22)));


// 8. Write a function that accepts two numbers a and b and returns both the division of a and b and their modulo of a and b.
function divMod(a, b) {
    // Be careful for division by zero
    if (b !== 0) {
        return [a / b, a % b];
    }
    return [0, 0];
}
console.info(divMod(16, 5));
console.info(divMod(20, 0));


// 9. Write a function that computes the fibonacci number of N.
function memo(func) {
    let cache = {};
    return function (x) {
        if (x in cache) return cache[x];
        return cache[x] = func(x);
    };
};

let fib = memo(function (n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
});
console.info(fib(20));

// 10. Write a function that accepts a string and returns a map with the strings character frequency.
function computeFrequency(s) {
    // Create the freq hashtable
    const freqTable = new Map();
    // for each char in the string
    for (ch of s) {
        // Check if we have seen it already
        if (!freqTable.has(ch)) {
            freqTable.set(ch, 1);
        } else {
            // Just increase the existing entry
            freqTable.set(ch, freqTable.get(ch) + 1);
        }
    }
    // Return result
    return freqTable;
}
console.info(computeFrequency("abrakatabra"));




// Memcached
//===========================================================
/**
 * memoize() method to memcached module/app
 * @param {*} func - func
 * @returns - func cached
 */
const memoize = (func) => {
    const cache = new Map();

    return (...args) => {
        const key = args.join('-');

        if (!cache.has(key)) {
            cache.set(key, func(args));
        };

        return cache.get(key);
    };
};

// Example
const fibonacci = (n) => {
    if (n < 2) return 1;
    return fibonacci(n - 1) + fibonacci(n - 2);
};
const fibonacciMemo = memoize(fibonacci);
console.time("First run");
fibonacciMemo(42);
console.timeEnd("First run");

console.time("Second run");
fibonacciMemo(42);
console.timeEnd("Second run");

console.time("Third run");
fibonacciMemo(42);
console.timeEnd("Third run");

// First run: 2858.337158203125ms
// Second run: 0.005859375ms
// Third run: 0.003173828125ms


// Memcached with NodeJS + Redis = Improved Performance
// npm install express body-parser mongoose redis --save
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const redis = require('redis');

const app = express();

app.use(bodyParser.json());

// connect tới redis, dùng port và address mặc định 

const client = redis.createClient('redis://127.0.0.1:6379');
client.on("error", (err) => {
    console.error(err);
});

//MongoDB connection
mongoose.connect('mongodb://localhost:27017/', {
    dbName: 'notes',
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => err ? console.log(err) : console.log('Connected to database'));

//Mongoose Model
const NoteSchema = new mongoose.Schema({
    title: String,
    note: String
});

const Note = mongoose.model('Note', NoteSchema);

// api post an entry
app.post('/api/notes', (req, res, next) => {

    const { title, note } = req.body;

    const _note = new Note({
        title: title,
        note: note
    });

    // save into mongodb
    _note.save((err, note) => {
        if (err) {
            return res.status(404).json(err);
        };

        // If save into mongodb success, we can add it into reddis
        client.setex(note.id, 60, JSON.stringify(note), (err, reply) => {
            if (err) {
                console.log(err);
            }
            console.log(reply);
        });

        return res.status(201).json({
            message: 'Note has been saved',
            note: note
        });
    })

});

const isCached = (req, res, next) => {

    const { id } = req.params;

    //First check in Redis
    client.get(id, (err, data) => {
        if (err) {
            console.log(err);
        }
        if (data) {
            const reponse = JSON.parse(data);
            return res.status(200).json(reponse);
        }
        next();
    });
};

// we will take it in the first Redis instead of accessing MongoDB to retrieve this data.
app.get('/api/notes/:id', isCached, (req, res, next) => {

    const { id } = req.params;

    Note.findById(id, (err, note) => {
        if (err) {
            return res.status(404).json(err);
        }
        return res.status(200).json({
            note: note
        });
    });
});

app.listen(3000, () => console.log('Server running at port 3000'));

// NOTES
/*
    id : Unique ID must be provided to store data. It must be a string.
    seconds : Expiry time in seconds (random to avoid cache avalanche)
    value : Actual data to store in Redis. It must be a string. So we are
    serializing object into string .
    callback : Callback takes two parameters err and reply .
*/
client.setex(note.id, 60, JSON.stringify(note), (err, reply) => {
    if (err) {
        console.log(err);
    }
    console.log(reply);
});

/*
    When taking a docments, it will go to iScached () to get it, if there is a
    problem like the end of the cache, you will continue to retrieve the data in
    MongoDB.
    https://www.npmjs.com/package/redis-semaphore
    https://viblo.asia/p/dockerize-project-nodejs-mongodb-redis-passport-4P856NXW5Y3
    https://viblo.asia/p/deploy-ung-dung-docker-nodejs-mongo-redis-1VgZvMzYKAw
*/
app.get('/api/notes/:id', isCached, (req, res, next) => {

    const { id } = req.params;

    Note.findById(id, (err, note) => {
        if (err) {
            return res.status(404).json(err);
        }
        return res.status(200).json({
            note: note
        });
    });
});


/*
    AJAX Polling

    Every 1s, client will request to server to get data
    Problems: spam server, can't response
*/
var polling = function (url, type, data) {
    var xhr = new XMLHttpRequest(),
        type = type || "GET",
        data = data || null;

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            receive(xhr.responseText);
            xhr.onreadystatechange = null;
        }
    };

    xhr.open(type, url, true);
    xhr.send(type == "GET" ? null : data);
};

var timer = setInterval(function () {
    polling();
}, 1000);


/*
    AJAX long-polling

    when xhr object close, will re-connect
    probkems: spam server
*/
var longPoll = function (type, url) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        //  re-connect
        if (xhr.readyState == 4) {
            receive(xhr.responseText);
            xhr.onreadystatechange = null;

            longPoll(type, url);
        }
    };

    xhr.open(type, url, true);
    xhr.send();
}


// JavaScript Reduce
// arr.reduce(callback, initialValue);

// Return JavaScript Reduce
// ! reduce method only return one value
// without reduce
const value = 0;
const numbers = [10, 20, 30];
for (let i = 0; i < numbers.length; i++) {
    value += numbers[i];
}

// with reduce - (acc - accumulator)
const numbers = [5, 10, 15];
const total = numbers.reduce((acc, item) => acc + item)
// Result total = 60

// Convert array to object javascript using reduce
const convertArrayToObject = (array, key) => {
    const initialValue = {};
    return array.reduce((obj, item) => {
        return {
            ...obj,
            [item[key]]: item,
        };
    }, initialValue);
};

const players = [
    { id: 11, name: 'Messi', age: 33 },
    { id: 12, name: 'Ronaldo', age: 34 },
    { id: 13, name: 'Young', age: 35 },
    { id: 14, name: 'Mane', age: 21 },
    { id: 15, name: 'Salah', age: 24 },
]

const playersModified = convertArrayToObject(players, 'id');

// playersModified = {
//     11: {id: 11, name: "Messi", age: 33}
//     12: {id: 12, name: "Ronaldo", age: 34}
//     13: {id: 13, name: "Young", age: 35}
//     14: {id: 14, name: "Mane", age: 21}
//     15: {id: 15, name: "Salah", age: 24}
// }


// SONP vs AJAX
// client send request to server and receive response from server
// AJAX: same origin, JSONP: CORS (only support GET, not secure XSS)

// Server
var express = require('express');
var app = express();

app.get('/jsonp', function (req, res) {
    const { callback, wd, from } = req.query;
    let data = {
        msg: 'Get data here',
        word: wd,
        referer: from,
        data: [1, 2, 3]
    };
    data = JSON.stringify(data);
    res.end(callback + '(' + data + ')');
});

app.listen(8080, function () {
    console.log('App listening on port http://localhost:8080/!')
});


// Client use https://jsfiddle.net/ to access link
// => (cors error case) with Ajax
fetch('http://localhost:8080/')
    .then(response => response.json())
    .then(data => console.log(data)).catch((error));

// Client use https://jsfiddle.net/ to access link
// => (cors success case) with JSONP
const jsonp = (opts = {}) => {
    opts.url = `${opts.url}?callback=${opts.callback}`;

    for (let key in opts.data) {
        if (opts.data.hasOwnProperty(key)) {
            opts.url += `&${key}=${opts.data[key]}`;
        }
    }

    const script = document.createElement('script');
    script.src = opts.url;

    script.onload = () => {
        document.body.removeChild(script);
    }

    document.body.appendChild(script);
};


jsonp({
    url: 'http://localhost:8080/',
    data: {
        wd: 'nba',
        from: 'home'
    },

    callback: 'getData'
});

function getData(data) {
    console.log(data);
}

//Output:
// { msg: "Get data here", word: "nba", referer: "home", data: Array(3) }


// Currying In JavaScript
// use to save time and effort for re-write other function
// Currying is a function assessment function with multiple arguments, into a
// unique string with single argument.In other words, when a function, instead
// of grab all arguments at the same time, take the first function and return
// the new function to get the second function and return the new function to
// get the third function, and continue until allThe argument has been
// completed.
// fakeFunction('param1', 'param2', 'param3');
// => fakeFunction('param1')('param2')('param3');
// ES5
var add = function (a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        };
    };
};
console.log(add(2)(3)(4)); //output 9
console.log(add(3)(4)(5)); //output 12

// ES6
const movies = [
    {
        "id": 1,
        "name": "Matrix"
    },
    {
        "id": 2,
        "name": "Star Wars"
    },
    {
        "id": 3,
        "name": "The wolf of Wall Street"
    }
]

const series = [
    {
        "id": 4,
        "name": "South Park"
    },
    {
        "id": 5,
        "name": "The Simpsons"
    },
    {
        "id": 6,
        "name": "The Big Bang Theory"
    }
]

// NOT GOOD
console.log(series.map((serie) => serie.id)) //should return [ 1, 2, 3 ])

console.log(movies.map((movie) => movie.id)) //should return [ 1, 2, 3 ])

// GOOD
const get = property => object => object[property];

const getId = get('id'); // if need get name then get('name')

console.log(movies.map(getId)); //should return [ 1, 2, 3 ]
console.log(series.map(getId)); //should return [ 4, 5, 6 ]


// Pagination javascript ES6
function pagination(c, m) {
    var current = c,
        last = m,
        delta = 2,
        left = current - delta,
        right = current + delta + 1,
        range = [],
        rangeWithDots = [],
        l;

    for (let i = 1; i <= last; i++) {
        if (i == 1 || i == last || i >= left && i < right) {
            range.push(i);
        }
    }

    for (let i of range) {
        if (l) {
            if (i - l === 2) {
                rangeWithDots.push(l + 1);
            } else if (i - l !== 1) {
                rangeWithDots.push('...');
            }
        }
        rangeWithDots.push(i);
        l = i;
    }

    return rangeWithDots;
}


// Test it:
for (let i = 1, l = 20; i <= l; i++) {
    console.log(`Selected page ${i}:`, pagination(i, l));
};

/*
Expected output:
Selected page 1: [1, 2, 3, "...", 20]
Selected page 2: [1, 2, 3, 4, "...", 20]
Selected page 3: [1, 2, 3, 4, 5, "...", 20]
Selected page 4: [1, 2, 3, 4, 5, 6, "...", 20]
Selected page 5: [1, 2, 3, 4, 5, 6, 7, "...", 20]
Selected page 6: [1, "...", 4, 5, 6, 7, 8, "...", 20]
Selected page 7: [1, "...", 5, 6, 7, 8, 9, "...", 20]
Selected page 8: [1, "...", 6, 7, 8, 9, 10, "...", 20]
Selected page 9: [1, "...", 7, 8, 9, 10, 11, "...", 20]
Selected page 10: [1, "...", 8, 9, 10, 11, 12, "...", 20]
Selected page 11: [1, "...", 9, 10, 11, 12, 13, "...", 20]
Selected page 12: [1, "...", 10, 11, 12, 13, 14, "...", 20]
Selected page 13: [1, "...", 11, 12, 13, 14, 15, "...", 20]
Selected page 14: [1, "...", 12, 13, 14, 15, 16, "...", 20]
Selected page 15: [1, "...", 13, 14, 15, 16, 17, "...", 20]
Selected page 16: [1, "...", 14, 15, 16, 17, 18, 19, 20]
Selected page 17: [1, "...", 15, 16, 17, 18, 19, 20]
Selected page 18: [1, "...", 16, 17, 18, 19, 20]
Selected page 19: [1, "...", 17, 18, 19, 20]
Selected page 20: [1, "...", 18, 19, 20]
*/


// Promise all in real example
// 1: Many results must be processed simultaneously
// render data in facebook page

// Get detail page
function getDetailPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('detail page');
        }, 300);
    });
};

// get info page
function getInfoPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('info page');
        }, 400);
    });
};

// get articles page
function getArticlesPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('articles page');
        }, 500);
    });
};

function initLoad() {
    // loading.show() // show load icon
    // https://codepen.io/niyazpoyilan/pen/PGQKZK
    // https://www.youtube.com/watch?v=-xU95CUTvHg
    // https://www.youtube.com/watch?v=xuA83OYTE7I
    // https://www.codingnepalweb.com/
    // https://www.youtube.com/watch?v=nJ81DFmgHdU
    // https://www.youtube.com/watch?v=d1VoThpQno4
    // https://www.youtube.com/watch?v=NZNhuzyeD-Y
    // https://dev.to/vaishnavme/displaying-loading-animation-on-fetch-api-calls-1e5m

    Promise.all([getDetailPage(), getInfoPage(), getArticlesPage()]).then(res => {
        console.log(res)
        // loading.hide() //Sau khi có data rồi thì hide nó và hiện thị lên thôi
    }).catch(err => {
        console.log(err)
        // loading.hide()// Lỗi cũng hide nó đi
    })
}

// invoke init load
initLoad();

// 2: Verify multiple results required to meet the conditions
// verify form
function verify1(content) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true)
        }, 200)
    })
}

function verify2(content) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true)
        }, 700)
    })
}

function verify3(content) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve(true)
        }, 300)
    })
}

Promise.all([verify1('verify1'), verify2('verify2'), verify3('verify3')]).then(result => {
    console.log(result);  // [true, true, true]

    let verifyResult = result.every(item => item);
}).catch(err => {
    console.log(err)
});


// 3: Combining results required and error handling
// Get detail page
function getDetailPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('detail page')
        }, 300);
    });
};

// get info page
function getInfoPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('info page')
        }, 400);
    });
};

// get articles page
function getArticlesPage() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('articles page')
        }, 500);
    });
};

function initLoad() {
    // loading.show()
    Promise.all([
        getDetailPage().catch(err => err),
        getInfoPage().catch(err => err),
        getArticlesPage().catch(err => err)
    ]).then(res => {
        console.log(res); // ["detail page", "info page", "articles page"]

        if (res[0] === 'detail page') {
            // Get data success
        } else {
            // error handle
        };
        /*
            same with res[1] and res[2] ...
        */
        // loading.hide()
    });
};

// init load
initLoad();


// Pluck javascript array
// task: filter to grab category
var goal = [
    {
        "category": "other",
        "title": "harry University",
        "value": 50000,
        "id": "1"
    },
    {
        "category": "traveling",
        "title": "tommy University",
        "value": 50000,
        "id": "2"
    },
    {
        "category": "education",
        "title": "jerry University",
        "value": 50000,
        "id": "3"
    },
    {
        "category": "business",
        "title": "Charlie University",
        "value": 50000,
        "id": "4"
    }
];

// #1 from and map
const pluck = key => array => Array.from(new Set(array.map(obj => obj[key])));
const getCategorys = pluck('category'); // return a next function
// const getTitles = pluck('title'); // return a next function
// const getIds = pluck('id'); // return a next function
// const getVersions = pluck('version'); // return a next function
console.log(getCategorys(goal));

// #2 map()
let result = goal.map(a => a.category);
// OR
let result = goal.map(({ category }) => category)
console.log(result);

// #3 for in
function pluck(objs, name) {
    var sol = [];
    for (var i in objs) {
        if (objs[i].hasOwnProperty(name)) {
            sol.push(objs[i][name]);
        };
    };
    return sol;
};
console.log(pluck(goal, 'category'));

// #4 reduce
const pluck = (key, array) =>
    array.reduce((values, current) => {
        values.push(current[key]);

        return values;
    }, []);
console.log(pluck('category', goal));

// #5 lodash
console.log(_.pluck(goal, 'category'));



// What is a Callback?
// #1
function foo(callback) {
    //do something
    callback();
};

// #2
function showAlert() {
    alert('Alerta');
}
button.addEventListener('click', showAlert);

// #3 anonymous function
button.addEventListener('click', function () {
    alert('Alerta');
});

// #4 callback with warn to do next something
function foo(callback) {
    console.log("hello")
    callback();
};
foo(function () { console.log("finished") });

// #5 Checking the asynchronous execution with callbacks
function foo(val, callback) {
    if (val == 1) return callback(true);
    return callback(false);
};


// pipeline operator in javascript
const reverseWords =
    str => str
        .split(' ')
        .reduce((revStr, word) => [word, ...revStr], [])
        .join(' ');

console.log(reverseWords('this is fun')); // Output: fun is this

// OR
const splitBySpace = str => str.split(' ');
const reverseArray = arr => arr.reduce((acc, cur) => [cur, ...acc], []);
const joinWithSpace = arr => arr.join(' ');

const reverseWords =
    str => joinWithSpace(
        reverseArray(
            splitBySpace(
                str
            )
        )
    );

console.log(reverseWords('this is fun')); // Output: fun is this

// OR
const reverseWords = str => joinWithSpace(reverseArray(splitBySpace(str)));


// Numerical separator
const longNum = 1_000_000_000_000;
// same as
const longNum = 1000000000000;



// Unit Test by example
// https://www.toptal.com/javascript/writing-testable-code-in-javascript
// https://www.youtube.com/watch?v=7r4xVDI2vho
// https://www.youtube.com/watch?v=FgnxcUQ5vho
// https://www.youtube.com/watch?v=4Fl5GH4eYZ8
// https://www.youtube.com/watch?v=r9HdJ8P6GQI
// https://www.youtube.com/watch?v=i4P4x7dIfCs
// code
const capitalize = (word) => {
    const rest = word.slice(1);
    const firstLtr = word.charAt(0);
    return firstLtr.toUpperCase() + rest.toLowerCase();
};
const titleCase = (phrase) => {
    if (!phrase) return phrase;
    [first, ...rest] = phrase.split(' ');
    return rest.reduce((res, a) => res + ' ' + capitalize(a),
        capitalize(first))
};

// testcases
let testCases = [
    { input: "I’m a little tea pot", expected: "I’m A Little Tea Pot" },
    { input: "sHoRt AnD sToUt", expected: "Short And Stout" },
    { input: "sHoRt AnD sToUt", expected: "Short And Stout" },
    { input: "tôi là một lập trình viên javascript", expected: "Tôi Là Một Lập Trình Viên Javascript" },
    { input: "HERE IS MY HANDLE HERE IS MY SPOUT", expected: "Here Is My Handle Here Is My Spout" },
    { input: "", expected: "" },
    { input: undefined, expected: undefined },
];

// code test
const assert = (func, input, expected) => {
    return func(input) === expected ?
        'passed' :
        `failed on input=${input}. expected ${expected}, but got ${func(input)}`;
};

let testResult = testCases.map(d => assert(titleCase, d.input, d.expected))

console.log(testResult);
// 0: "passed"
// 1: "passed"
// 2: "passed"
// 3: "passed"
// 4: "passed"
// 5: "passed"


// Flatten array
// #1 - flat() es6
const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arr4.flat(Infinity)); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


// #2 loop
let result = []
let flatten = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i]
        if (Array.isArray(arr[i])) {
            flatten(item)
        } else {
            result.push(item)
        };
    };
    return result;
};

let arr = [1, 2, [3, 4], [5, [6, 7]]];
console.log(flatten(arr));

// #3 reduce
function flatten(arr) {
    return arr.reduce((pre, cur) => {
        return pre.concat(Array.isArray(cur) ? flatten(cur) : cur)
    }, []);
};

let arr = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(arr));

// #4 operator spread
function flatten(arr) {
    while (arr.some((item) => Array.isArray(item))) {
        arr = [].concat(...arr)
    }
    return arr
}

let arr = [1, 2, [3, 4], [5, [6, 7]]]
console.log(flatten(arr))


// Prepare ReactJS in 3 months
// var/let/const
// var can re-assigned
var name = 'Jane Tracy 👩‍💻';
var name = 'Luke Wilsey 🎥';
console.log(name);
//output => Luke wilsey 🎥

//let can’t be re-assigned
let name = 'Jane Tracy 👩‍💻';
let name = 'Luke Wilsey 🎥 ';
console.log(name);
//output => Syntax error: the name has already been declared

// let can be updated
let name = 'Spencer 👩‍💻';
name = 'Tom🍄';
console.log(name);
//output => Tom🍄

//const can’t be re-assigned
const name = 'Jane Tracy 👩‍💻';
const name = 'Luke Wilsey 🎥 ';
console.log(name);
//output => Syntax error: the name has already been declared

//const object properties or array values can be changed
const friends = [
    {
        name: 'Bob 🥽',
        age: 22,
        hobby: 'golf🏌',
        music: 'rock 🎸'
    }
];

const result = friends.age = 23;
console.log(result);
// output => 23

// const object can't be re-assigned 
const friends = [
    {
        name: 'Bob 🥽',
        age: 22,
        hobby: 'golf🏌',
        music: 'rock 🎸'
    }
];

friends = [
    {
        name: 'Jane 🥽',
        age: 24,
        hobby: 'golf🏌',
        music: 'Pop 🎸'
    }
];

console.log(friends);
//output => Uncaught TypeError: Assignment to constant variable.


// Arrow functions
// # without parameter
/***** ES5 Regular Function  *****/
let prtLangReg = function () {
    console.log("JavaScript");
}
prtLangReg();

/***** ES6 Arrow Function  *****/
let prtLangArrow = _ => { console.log("JavaScript"); }
prtLangArrow();

// # with parameter
/***** ES5 Regular Function  *****/
let prtLangReg = function (language) {
    console.log(language);
}
prtLangReg("JavaScript");

/***** ES6 Arrow Function  *****/
let prtLangArrow = (language) => { console.log(language); }
prtLangArrow("JavaScript");

// # with parameters
/***** ES5 Regular Function  *****/
let prtLangReg = function (id, language) {
    console.log(id + ".) " + language);
}
prtLangReg(1, "JavaScript");

/***** ES6 Arrow Function  *****/
let prtLangArrow = (id, language) => { console.log(id + ".) " + language); }
prtLangArrow(1, "JavaScript");


// ES6 Classes
class User {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    increaseAge() {
        this.age += 1;
    }
}

const user1 = new User('messi', 31, 'messi@gmail.com')
console.log(user1); //User {name: "messi", age: 31, email: "messi@gmail.com"}
user1.increaseAge()
console.log(user1); // User {name: "messi", age: 32, email: "messi@gmail.com"}


// Imports và Exports
// # export
// 📁 say.js
function sayHi(user) {
    alert(`Hello, ${user}!`);
};

function sayBye(user) {
    alert(`Bye, ${user}!`);
};

export { sayHi, sayBye }; // a list of exported variables

// # import
// 📁 main.js
import { sayHi as hi, sayBye as bye } from './say.js';

hi('John'); // Hello, John!
bye('John'); // Bye, John!


// Spread and rest operator
// # (...) dots
//In arrays
const jobs = ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻"];

const currentJobs = [
    ...jobs,
    "actor 🎥",
    "social media influencer 📴",
    "musician 🎻",
];

console.log(currentJobs);
//output => ["teacher 👩‍🏫 ", "engineer 🧰", "developer 👩‍💻", "actor 🎥", "social media influencer 📴", "musician 🎻"]

//In objects
const currentJob = {
    name: "Jane",
    job: "developer 👩‍💻",
};

console.log(currentJob);

const funJob = {
    ...currentJob,
    name: "Tracy",
    PartTimejob: "musician 🎻",
};

console.log(funJob);
//output => {name: "Tracy", job: "developer 👩‍💻", PartTimejob: "musician 🎻"}


// # rest operator
const num = (...args) => {
    return args.map((arg) => arg / 2);
};
const result = num(40, 60, 80, 120, 200, 300);
console.log(result);

//output => [20, 30, 40, 60, 100, 150]

//example 2
const myFruits = (...fruits) => {
    return fruits.filter((fruit) => fruit !== "🍌");
};

const result = myFruits("🍎", "🥝", "🍌", "🍍", "🍉", "🍏");

console.log(result);
//output
["🍎", "🥝", "🍍", "🍉", "🍏"]


// Destructuring javascript
// # Array destructuring
const myFruits = ["🍎", "🥝", "🍌", "🍍", "🍉", "🍏"];
const [myFavorite, , , listFavorite] = myfruits;
console.log(myFavorite, listFavorite);
// 🍎 🍍

// # Objects destructuring
const { name, job } = { name: "Tracy", job: "musician 🎻" };
console.log(name, job);
// Tracy musician 🎻


// Capitalize the first letter of a string
const capitalize = str => `${str.charAt(0).toUpperCase()}${str.slice(1)}`;
capitalize("hello, you are a cool person!");
// Result: "Hello, you are a cool person!"



// Calendar Hacking - next seven days
// Create an array of the past seven days, inclusive
[...Array(7).keys()].map(days => new Date(Date.now() - 86400000 * days));


// Random ID generation
// Generate a random alphanumerical string of length 11
const a = Math.random().toString(36).substring(2);
console.log(a);


// Working clock
{/* <body onload="setInterval(()=>document.body.innerHTML=new Date().toGMTString().slice(17,25))"></body> */ }

// Shuffle an array
// Return a shuffled copy of an Array-like
let arr = ["A", "B", "C", "D", "E"];
(arr) => arr.slice().sort(() => Math.random() - 0.5)


// Checking whether all the elements in an array meets a certain condition
const hasEnoughSalary = (salary) => salary >= 30000;

const salarys = [70000, 19000, 12000, 30000, 15000, 50000];
result = salarys.every(hasEnoughSalary);
console.log(result); // false

const salarys = [70000, 190000, 120000, 30000, 150000, 50000];
result = salarys.every(hasEnoughSalary);
console.log(result); // true


// https://gist.github.com/tombigel/6473f36407352fc21f1774d48f4740c7
// https://davidwalsh.name/essential-javascript-functions
// https://gist.github.com/iSkore/dcfa6399f7dce509fd4a7b7c7592ec96
// https://gist.github.com/alsolovyev/eabb24d7ec9cb4040a1680b44baadfa4
// https://gist.github.com/sheideman/65cb81a1c9594a9eab9e114d4f9d4480
// https://gist.github.com/tstabla/428876c0f3f5936c82f5f8ea703ae3c6


// cookiehelpers.js
window.createCookie = function (name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
};

window.getCookie = function (name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
};


const range = (size, from = 0) => {
    return [...Array(size)].map((v, i) => i + from);
}

const randomLetter = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const randomWord = (minSize = 5, maxSize = 10) => {
    return ([...Array(Math.floor((Math.random() * (maxSize + 1 - minSize)) + minSize))].map(v => randomLetter())).join('');
}

const randomNumber = (from = 5, to = 20) => {
    return Math.floor(Math.random() * ((to + 1) - from) + from);
};

const getRandomDNI = () => {
    let num = (Math.random() * 100000000).toPrecision(8);
    return num + "TRWAGMYFPDXBNJZSQVHLCKET"[(num % 23)];
};



// js-debugging-helpers.js
// adapted from https://stackoverflow.com/questions/1248302/how-to-get-the-size-of-a-javascript-object

export function roughObjSizeLength(obj) {
    return JSON.stringify(obj).length;
}

export function roughSizeOfObjectInBytes(object) {
    var objectList = [];
    var stack = [object];
    var bytes = 0;

    while (stack.length) {
        var value = stack.pop();

        if (typeof value === 'boolean') {
            bytes += 4;
        } else if (typeof value === 'string') {
            bytes += value.length * 2;
        } else if (typeof value === 'number') {
            bytes += 8;
        } else if (typeof value === 'object' && objectList.indexOf(value) === -1) {
            objectList.push(value);

            for (var i in value) {
                stack.push(value[i]);
            }
        }
    }
    return bytes;
}


// vk-helpers.js
var queryAll = function (selector) {
    return [].slice.call(document.querySelectorAll(selector));
};

// 1. Open album.
// 2. Execute code in console.
// 3. Press → button until the end of the album
// 4. Then execute `printLinks();`, copy the output and pass it to wget.
var addAlbumPhotoLinks = function () {
    var links = [];
    var addLink = function () {
        var url = document.querySelector('.pvs_act:last-child').href;
        links.push(url);
    };
    var printLinks = function () {
        return links.join(' ');
    };

    document.addEventListener('keyup', function (event) {
        if (event.keyCode === 39) {
            addLink();
        }
    });
};

// 1. Open wall.
// 2. Scroll many pages to the end.
// 3. Execute the code in console.
var deleteWallPosts = function () {
    var posts = queryAll('.delete_post > div');
    var index = 0;
    var deletePost = function () {
        posts[index].onclick();
        index += 1;
    };
    setInterval(deletePost, 2500);
};

var lastEveryIndex = 0;
var every = function (interval, list, callback) {
    var interval = window.setInterval(function () {
        if (lastEveryIndex >= list.length) return window.clearInterval(interval);
        callback(list[lastEveryIndex++]);
    }, interval);
};

// Delete all dialogs at http://vk.com/im.
var deleteDialogs = function () {
    var dialogs = queryAll('.dialogs_del');

    var deleteDialog = function (index) {
        console.log('deleteDialog', index);
        var dialog = dialogs[index];

        if (dialog == null) throw new Error('No more dialogs');

        try {
            dialog.onclick();
        } catch (e) { }

        setTimeout(function () {
            document.querySelector('.button_blue > button').onclick();
            deleteWhenBalloonDisposed(index + 1);
        }, 500);
    };

    var balloonExists = function () {
        return document.querySelector('.popup_box_container') != null &&
            document.querySelector('.top_result_baloon_wrap') != null;
    };

    var deleteWhenBalloonDisposed = function (index) {
        setTimeout(function () {
            if (balloonExists()) {
                deleteWhenBalloonDisposed(index);
            } else {
                deleteDialog(index);
            }
        }, 200);
    };

    deleteDialog(0);
};

var removeWallLikes = function () {
    var likes = queryAll('.post_like.fl_r');
    var counter = 0;
    setInterval(function () { likes[counter++].onclick(); }, 1500);
};

// Dotjs script that will auto-add audio download buttons
// near to their “play” buttons.
var createDownloadButtons = function () {
    var css = '.rotated-button {\
      width: 16px; \
      height: 16px; \
      margin-top: 5px; \
      display: block; \
      -webkit-transform: rotate(90deg); }';

    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';
    style.appendChild(document.createTextNode(css));
    head.appendChild(style);

    var addDownloadButton = function (item) {
        item.classList.add('added-download-button');
        var url = item.nextSibling.nextSibling.value.split(',')[0];
        item.innerHTML += '<a class="play_new rotated-button" href="' + url + '" download="file"></a>';
    };

    var parsePage = function () {
        var selector = '.play_btn_wrap:not(.added-download-button)';
        queryAll(selector).forEach(addDownloadButton);
    };

    window.setTimeout(function () {
        parsePage();
        window.setInterval(parsePage, 2000);
    }, 100);
};


// GenerateUUID.js
export default function GenerateUUID() {
    let u = Date.now().toString(16) + Math.random().toString(16) + '0'.repeat(16);
    return [u.substr(0, 8), u.substr(8, 4), '4000-8' + u.substr(13, 3), u.substr(16, 12)].join('-');
}


// objectCopy.js
export function objectCopy(obj) {
    if (typeof obj === "object") {
        return JSON.parse(JSON.stringify(obj));
    } else {
        console.log(obj);
    }
}

// utils.js
const head = array => array[0];
const zip = (...arrays) => (
    head(arrays).map((value, index) => arrays.map(otherArray => otherArray[index]))
);
const map = (collection, mapFn) => (
    Object.keys(collection).map(key => mapFn(collection[key], key))
);
const reduce = (collection, reduceFn, seed) => (
    Object.keys(collection).reduce((acc, key) => {
        const value = collection[key];
        return reduceFn(acc, value, key);
    }, seed)
);
const mapKeys = (collection, mapFn) => (
    reduce(collection, (acc, value, key) => {
        acc[mapFn(value, key)] = value;
        return acc;
    }, {})
);
const contains = (array, itemToFind) => array.some(item => item === itemToFind);

const range = (start, end) => (
    Array.from({ length: end - start }, (x, i) => i + start)
);
// OR
const range = (start, end) => Array(end - start).fill().map((x, i) => i + start)

const flatten = (xs) => xs.reduce((acc, value) => acc.concat(value), [])


function replaceEntities(str) {
    return se('<textarea>' + ((str || '').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')) + '</textarea>').value;
}

function clean(str) {
    return str ? (str + '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;') : '';
}

function unclean(str) {
    return replaceEntities((str + '').replace(/\t/g, "\n"));
}

function rand(mi, ma) {
    return Math.random() * (ma - mi + 1) + mi;
}

function isUndefined(obj) {
    return typeof obj === 'undefined'
};

function isFunction(obj) {
    return Object.prototype.toString.call(obj) === '[object Function]';
}

function isString(obj) {
    return typeof obj === 'string';
}

function isArray(obj) {
    return Object.prototype.toString.call(obj) === '[object Array]';
}

function isObject(obj) {
    return Object.prototype.toString.call(obj) === '[object Object]' && !(browser.msie8 && obj && obj.item !== 'undefined' && obj.namedItem !== 'undefined');
}

function isEmpty(o) {
    if (Object.prototype.toString.call(o) !== '[object Object]') { return false; } for (var i in o) { if (o.hasOwnProperty(i)) { return false; } } return true;
}

function isNumeric(value) {
    return !isNaN(value);
}


var req = function (params) { var xhr = new XMLHttpRequest(); xhr.open(params.verb || 'GET', params.url); for (name in params.headers || []) { xhr.setRequestHeader(name, (params.headers || [])[name]) }; cb = console.log.bind(console); xhr.onerror = params.error || cb; xhr.onreadystatechange = params.cb || cb; return xhr };

var mkparams = function (params) { var param_str = ""; for (key in params) { var sep = param_str == "" ? "?" : "&"; param_str += sep + key + "=" + params[key] }; return param_str }

var q = function (sel) { return document.querySelector(sel) }
var qa = function (sel) { return document.querySelectorAll(sel) }

var range = function (from, to) { var ary = []; for (var i = 0; i < from + to; i++) { ary[from + i] = from + i; }; return ary }

var slug = function (str) { return str.replace(/[^\w\d\s]/g, "").trim().replace(/\s+/g, "-") }

var ary = function (indexable) { var ary = []; for (var i = 0; i < indexable.length; i++) { ary[i] = indexable[i]; }; return ary }


/**
 *
 * @param value
 * @returns {boolean}
 */
export const isUndefined = function (value) {
    return typeof value === 'undefined'
};

/**
 *
 * @param val
 * @returns {boolean}
 */
export const isEmpty = function (val) {

    let has = Object.prototype.hasOwnProperty;

    let toString = Object.prototype.toString;

    // Null and Undefined...
    if (val == null) return true;

    // Booleans...
    if ('boolean' == typeof val) return false;

    // Numbers...
    if ('number' == typeof val) return val === 0;

    // Strings...
    if ('string' == typeof val) return val.length === 0;

    // Functions...
    if ('function' == typeof val) return val.length === 0;

    // Arrays...
    if (Array.isArray(val)) return val.length === 0;

    // Errors...
    if (val instanceof Error) return val.message === '';

    // Objects...
    if (val.toString == toString) {
        switch (val.toString()) {

            // Maps, Sets, Files and Errors...
            case '[object File]':
            case '[object Map]':
            case '[object Set]': {
                return val.size === 0
            }

            // Plain objects...
            case '[object Object]': {
                for (let key in val) {
                    if (has.call(val, key)) return false
                }

                return true
            }
        }
    }

    // Anything else...
    return false;
};

/**
 *
 * @param value
 * @returns {boolean}
 */
export const isJSON = function (value) {

    let re = /^\{[\s\S]*\}$|^\[[\s\S]*\]$/;

    if (typeof value !== 'string') {
        return false;
    }
    if (!re.test(value)) {
        return false;
    }
    try {

        JSON.parse(value);

    } catch (err) {

        return false;

    }

    return true;
};

/**
 *
 * @param string
 * @returns {*}
 */
export const capitalizeFirstLetter = function (string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
};

/**
 *
 * @param array
 * @param value
 * @returns {boolean}
 */
export const isInArray = function (array, value) {
    array = array || [];
    let len = array.length;
    let i;
    for (i = 0; i < len; i++) {
        if (array[i] === value) {
            return true;
        }
    }
    return false;
};

/**
 * 
 * @returns {Promise<string>}
 */
export const getLeroLero = async function () {

    return await (await fetch("http://whatthecommit.com/index.txt", {
        method: 'GET',
        headers: ((new Headers()).append("Content-Type", "text/plain")),
        mode: 'cors',
        cache: 'default'
    })).text();

};

/**
 *
 * @param condition
 * @param fn
 */
export const isReady = function (condition, fn) {
    if (document.readyState == "complete" && eval('typeof ' + condition) !== 'undefined' && condition) {
        fn();
    } else {
        setTimeout(function () {
            isReady(condition, fn);
        }, 100);
    }
};

/**
 *
 * @param arrayOrObjectToSort
 * @param term
 * @returns {*}
 */
export const sortAlphabeticalyByTerm = function (arrayOrObjectToSort, term) {

    return arrayOrObjectToSort.sort(function (a, b) {
        if (a.term < b.term) return -1;
        if (a.term > b.term) return 1;
        return 0;
    });

};

/**
 *
 * @param cname
 * @returns {string}
 */
export const getCookie = function (cname) {

    let name = cname ? cname + "=" : '';
    let decodedCookie = decodeURIComponent(window.parent.document.cookie);
    let ca = decodedCookie.split(';');
    let all = {};
    let hasAll = false;

    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];

        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }

        if (name === '') {
            let indice = c.indexOf('=');
            all[c.substr(0, indice)] = c.substr((indice + 1));
            hasAll = true;
            continue;
        }

        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }

    return hasAll ? all : "";

};

/**
 *
 * @param cname
 * @param cvalue
 * @param exdays
 * @param cdomain
 * @returns {string}
 */
export const setCookie = function (cname, cvalue, exdays, cdomain) {

    if (typeof exdays === 'undefined') {

        exdays = new Date("Thu, 30 Sep 2027 00:00:01 GMT");

    } else if (typeof exdays === 'number') {

        let days = exdays, t = exdays = new Date();
        t.setMilliseconds(t.getMilliseconds() + (days * 864e+5));
    }

    return (document.cookie = [
        encodeURIComponent(cname), '=', String(cvalue),
        exdays ? '; expires=' + exdays.toUTCString() : '',
        '; path=/',
        '; domain=' + cdomain || '.madeiramadeira.com.br',
    ].join(''));

};

/**
 *
 * @param key
 * @param value
 */
export const setItemInSessionStorage = function (key, value) {

    return window.sessionStorage.setItem(key, value);

};

/**
 *
 * @param key
 * @returns {string}
 */
export const getItemFromSessionStorage = function (key) {

    return sessionStorage.getItem(key);

};

/**
 *
 * @param key
 */
export const removeItemFromSessionStorage = function (key) {

    return sessionStorage.removeItem(key);

};

/**
 *
 */
export const clearAllSessionStorage = function () {

    return sessionStorage.clear();

};

/**
 *
 * @param obj
 * @returns {*}
 */
export const memorySizeOf = function (obj) {
    let bytes = 0;

    function sizeOf(obj) {
        if (obj !== null && obj !== undefined) {
            switch (typeof obj) {
                case 'number':
                    bytes += 8;
                    break;
                case 'string':
                    bytes += obj.length * 2;
                    break;
                case 'boolean':
                    bytes += 4;
                    break;
                case 'object':
                    let objClass = Object.prototype.toString.call(obj).slice(8, -1);
                    if (objClass === 'Object' || objClass === 'Array') {
                        for (let key in obj) {
                            if (!obj.hasOwnProperty(key)) continue;
                            sizeOf(obj[key]);
                        }
                    } else bytes += obj.toString().length * 2;
                    break;
            }
        }
        return bytes;
    };

    function formatByteSize(bytes) {
        if (bytes < 1024) return bytes + " bytes";
        else if (bytes < 1048576) return (bytes / 1024).toFixed(3) + " KB";
        else if (bytes < 1073741824) return (bytes / 1048576).toFixed(3) + " MB";
        else return (bytes / 1073741824).toFixed(3) + " GB";
    };

    return formatByteSize(sizeOf(obj));
};

/**
 *
 * @returns {boolean}
 */
export const isMobile = function () {

    let isMobile = false;
    // device detection
    if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) ||
        /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))) isMobile = true;

    return isMobile;

};

/**
 *
 * @returns {*|boolean}
 */
export const isIPhone = function () {
    return /iphone|ipad/ig.test(navigator.userAgent);
};

/**
 *
 * @returns {boolean}
 */
export const isLocalStorageSupported = function () {
    let testKey = 'test', storage = window.sessionStorage;
    try {
        storage.setItem(testKey, '1');
        storage.removeItem(testKey);
        return true;
    } catch (error) {
        return false;
    }
};

/**
 *
 * @param el
 * @returns {boolean}
 */
export const isElementInViewport = function (el) {

    if (isEmpty(el)) return;

    try {
        //special bonus for those using jQuery
        if (typeof $ === "function" && el instanceof $) {
            el = el[0];
        }

        if (typeof el.getBoundingClientRect === 'function') {
            let rect = el.getBoundingClientRect();

            return (
                (rect.top >= 0 || (rect.top < 0 && rect.height - rect.top >= 0)) &&
                rect.left >= 0 &&
                // !(rect.top == 0 && rect.right == 0 && rect.bottom == 0 && rect.left == 0 && rect.width == 0) && // Avoid itens on no pointview
                rect.top <= (window.innerHeight || document.documentElement.clientHeight)
            );
        }

        return;

    } catch (e) {

        return;

    }

};

/**
 *
 * @param CPF
 * @returns {boolean}
 */
export const isValidCPF = function (CPF) {

    let sum = 0;
    let _module;

    if (CPF == "00000000000") return false;

    for (let i = 1; i <= 9; i++) sum = sum + parseInt(CPF.substring(i - 1, i)) * (11 - i);
    _module = (sum * 10) % 11;

    if ((_module == 10) || (_module == 11)) _module = 0;
    if (_module != parseInt(CPF.substring(9, 10))) return false;

    sum = 0;
    for (let i = 1; i <= 10; i++) sum = sum + parseInt(CPF.substring(i - 1, i)) * (12 - i);
    _module = (sum * 10) % 11;

    if ((_module == 10) || (_module == 11)) _module = 0;
    if (_module != parseInt(CPF.substring(10, 11))) return false;
    return true;
};

/**
 * @param email
 * @returns {boolean}
 */
export const validateEmail = function (email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
};

/**
 *
 * @returns {{user_navigator_version: number | *, user_navigator_vendor: string, user_navigator_app_version: string, user_navigator_platform: string, user_navigator_user_agent: string, user_os_name: *, user_navigator_name: *, user_os_version: number | *}}
 */
export const getOsAndBrowserData = function () {
    let module = {
        options: [],
        header: [navigator.platform, navigator.userAgent, navigator.appVersion, navigator.vendor, window.opera],
        dataos: [
            { name: 'Windows Phone', value: 'Windows Phone', version: 'OS' },
            { name: 'Windows', value: 'Win', version: 'NT' },
            { name: 'iPhone', value: 'iPhone', version: 'OS' },
            { name: 'iPad', value: 'iPad', version: 'OS' },
            { name: 'Kindle', value: 'Silk', version: 'Silk' },
            { name: 'Android', value: 'Android', version: 'Android' },
            { name: 'PlayBook', value: 'PlayBook', version: 'OS' },
            { name: 'BlackBerry', value: 'BlackBerry', version: '/' },
            { name: 'Macintosh', value: 'Mac', version: 'OS X' },
            { name: 'Linux', value: 'Linux', version: 'rv' },
            { name: 'Palm', value: 'Palm', version: 'PalmOS' }
        ],
        databrowser: [
            { name: 'Chrome', value: 'Chrome', version: 'Chrome' },
            { name: 'Firefox', value: 'Firefox', version: 'Firefox' },
            { name: 'Safari', value: 'Safari', version: 'Version' },
            { name: 'Internet Explorer', value: 'MSIE', version: 'MSIE' },
            { name: 'Opera', value: 'Opera', version: 'Opera' },
            { name: 'BlackBerry', value: 'CLDC', version: 'CLDC' },
            { name: 'Mozilla', value: 'Mozilla', version: 'Mozilla' }
        ],
        init: function () {
            let agent = this.header.join(' '),
                os = this.matchItem(agent, this.dataos),
                browser = this.matchItem(agent, this.databrowser);

            return { os: os, browser: browser };
        },
        matchItem: function (string, data) {
            let i = 0,
                j = 0,
                html = '',
                regex,
                regexv,
                match,
                matches,
                version;

            for (i = 0; i < data.length; i += 1) {
                regex = new RegExp(data[i].value, 'i');
                match = regex.test(string);
                if (match) {
                    regexv = new RegExp(data[i].version + '[- /:;]([\\d._]+)', 'i');
                    matches = string.match(regexv);
                    version = '';
                    if (matches) { if (matches[1]) { matches = matches[1]; } }
                    if (matches) {
                        matches = matches.split(/[._]+/);
                        for (j = 0; j < matches.length; j += 1) {
                            if (j === 0) {
                                version += matches[j] + '.';
                            } else {
                                version += matches[j];
                            }
                        }
                    } else {
                        version = '0';
                    }
                    return {
                        name: data[i].name,
                        version: parseFloat(version)
                    };
                }
            }
            return { name: 'unknown', version: 0 };
        }
    };

    let e = module.init();
    let obj = {
        "user_os_name": e.os.name
        , "user_os_version": e.os.version
        , "user_navigator_name": e.browser.name
        , "user_navigator_version": e.browser.version
        , "user_navigator_user_agent": navigator.userAgent
        , "user_navigator_app_version": navigator.appVersion
        , "user_navigator_platform": navigator.platform
        , "user_navigator_vendor": navigator.vendor
    };

    return obj;
};

/**
 *
 * @param selector
 * @returns {Element}
 */
export const queryBySelector = function (selector) {

    let element = document.querySelector(selector);

    if (!element) {
        throw Error('Function getBySelector: HTML ELEMENT WITH SELECTOR:' + selector + ' WAS NOT FOUND!');
    }

    return element;

};

export const queryAllBySelector = function (selector) {

    let elements = document.querySelectorAll(selector);

    //console.log('elements: ',typeof elements,elements.__proto__,elements );

    if (!elements) {
        throw Error('Function queryAllBySelector: HTML ELEMENTS WITH SELECTOR:' + selector + ' WERE NOT FOUND!');
    }

    return Array.prototype.slice.call(elements);

};

export const debounce = function (func, wait, immediate) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

export const isUrl = function (string) {

    if (typeof string !== 'string') return false;

    let match = string.match(/^(?:\w+:)?\/\/(\S+)$/);

    if (!match) return false;

    let everythingAfterProtocol = match[1];

    if (!everythingAfterProtocol) return false;

    if (/^localhost[\:?\d]*(?:[^\:?\d]\S*)?$/.test(everythingAfterProtocol) ||
        /^[^\s\.]+\.\S{2,}$/.test(everythingAfterProtocol)) {
        return true;
    }

    return false;
};

export const findAndReplaceUrls = function (text) {

    return (text || '').replace(
        /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)(:[0-9]*)?((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/gi,
        function (ocur) {
            let link = ocur;
            if (!/^(http:\/\/|https:\/\/)/.test(link.toLowerCase())) link = '//' + link;
            return '<a href="javascript:false;" onclick="window.open(\'' + link + '\')">' + ocur + '</a>';
        }
    );

};

// file-utils.js
/** 
  Method to remove directory and files recursively &
  check if user wants to delete the directory or just the files in it. 
**/
const fs = require('fs');
const path = require('path');
function rmDir(dir, rmSelf = true) {
    let files;
    try {
        files = fs.readdirSync(dir);
    } catch (e) {
        console.log('!Oops, directory not exist.');
        return;
    }
    if (files.length > 0) {
        files.forEach(function (file, index) {
            let newDir = path.join(dir, file);
            if (fs.statSync(newDir).isDirectory()) {
                rmDir(newDir);
            } else {
                fs.unlinkSync(newDir);
            }
        });
    }
    if (rmSelf) {
        // check if user want to delete the directory or just the files in this directory
        fs.rmdirSync(dir);
    }
};


// string-utils.js
/* 
  To UpperCamelCase(string) 
  input: toUpperCamelCase('action-button-material');
  returns 'ActionButtonMaterial'
*/
function toUpperCamelCase(str) {
    return str
        .replace(/[a-z]/, function (p) { return p[0].toUpperCase() })
        .replace(/-([a-z])/g, function (p) { return p[1].toUpperCase() });
}


/*
   extractFileName(string, boolean)
   1. input: extractFileName('/src/components/action-button/action-buton.js');
      returns 'action-buton'
   2. input: extractFileName('/src/components/action-button/action-buton.js', true);
      returns ['action-buton','js']
*/
function extractFileName(file, ext = false) {
    let fileParts = file.substr(file.lastIndexOf('/') + 1).split('.');
    return ext ? fileParts : fileParts.shift();
}

/*
  deep equality
*/
const deepEquality = (value1, value2) => {
    return value1 === value2
        ? true
        : value !== null &&
            value2 !== null &&
            (typeof value1 === 'object' && typeof value2 === 'object')
            ? deepEquality(
                Object.keys(value1)
                    .map(value => value1[value] === value2[value])
                    .reduce((acc, cur) => acc && cur),
                Object.keys(value2)
                    .map(value => value2[value] === value1[value])
                    .reduce((acc, cur) => acc && cur)
            )
            : false;
};
//console.log([1,2,3] === [1,2,3]); false
//console.log(deepEquality[1,2,3],[1,2,3])); true


//  utils.js
export default {
    // 判断是否为微信小程序
    isWxMini() {
        return window.__wxjs_environment === 'miniprogram'
    },

    // 判断是否为微信浏览器
    isWxBrowser() {
        let isMiniProgram = window.__wxjs_environment === 'miniprogram';
        return navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1 && window.__wxjs_environment !== 'miniprogram'
    },

    /**
     * 校验18位身份证号格式
     * @param code 身份证号
     * @return {tip, isValid} tip 提示信息, isValid true 合法 false 非法
     */
    validateIdCode(code) {
        let city = {
            11: '北京',
            12: '天津',
            13: '河北',
            14: '山西',
            15: '内蒙古',
            21: '辽宁',
            22: '吉林',
            23: '黑龙江 ',
            31: '上海',
            32: '江苏',
            33: '浙江',
            34: '安徽',
            35: '福建',
            36: '江西',
            37: '山东',
            41: '河南',
            42: '湖北 ',
            43: '湖南',
            44: '广东',
            45: '广西',
            46: '海南',
            50: '重庆',
            51: '四川',
            52: '贵州',
            53: '云南',
            54: '西藏 ',
            61: '陕西',
            62: '甘肃',
            63: '青海',
            64: '宁夏',
            65: '新疆',
            71: '台湾',
            81: '香港',
            82: '澳门',
            91: '国外'
        }
        let tip = ''
        let isValid = true

        if (!code || !/^[1-9][0-9]{5}(19[0-9]{2}|200[0-9]|2010)(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[0-9]{3}[0-9xX]$/i.test(code)) {
            tip = '身份证号格式错误'
            isValid = false
            return { tip, isValid }
        }
        if (!city[code.substr(0, 2)]) {
            tip = '身份证号错误'
            isValid = false
            return { tip, isValid }
        }
        // 此处不考虑15位的旧代身份证号
        if (code.length !== 18) {
            tip = '身份证号位数不足18位'
            isValid = false
            return { tip, isValid }
        }
        code = code.split('')
        //∑(ai×Wi)(mod 11)
        //加权因子
        let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
        //校验位
        let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
        let sum = 0
        let ai = 0
        let wi = 0
        for (let i = 0; i < 17; i++) {
            ai = code[i]
            wi = factor[i]
            sum += ai * wi
        }
        let result = parity[sum % 11]
        if (result === 'X') {
            if (String(result) !== String(code[17])) {
                tip = '身份证号校验位错误'
                isValid = false
            }
        } else {
            if (Number(result) !== Number(code[17])) {
                tip = '身份证号校验位错误'
                isValid = false
            }
        }
        return { tip, isValid }
    },

    uuid() {
        let s = [];
        let hexDigits = "0123456789abcdef";
        for (let i = 0; i < 36; i++) {
            s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
        }
        s[14] = "4";  // bits 12-15 of the time_hi_and_version field to 0010
        s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1);  // bits 6-7 of the clock_seq_hi_and_reserved to 01
        s[8] = s[13] = s[18] = s[23] = "-";

        return s.join("");
    },

    /**
     * 设置苹果 微信浏览器的页面title
     * @param title
     */
    setIPhoneWxTitle(title) {
        document.title = title
        let mobile = navigator.userAgent.toLowerCase()
        if (/iphone|ipad|ipod/.test(mobile)) {
            let iframe = document.createElement('iframe')
            iframe.style.display = 'none'
            // 替换成站标favicon路径或者任意存在的较小的图片即可
            // iframe.setAttribute('src', '/favicon.ico')
            let iframeCallback = function () {
                setTimeout(function () {
                    iframe.removeEventListener('load', iframeCallback)
                    document.body.removeChild(iframe)
                }, 0)
            }
            iframe.addEventListener('load', iframeCallback)
            document.body.appendChild(iframe)
        }
    },

    isNotEmpty(obj) {
        if (obj instanceof Array) {
            return obj && obj.length > 0
        }
        if (typeof obj === 'string') {
            return obj && obj.trim().length > 0
        }
        return !!obj // 如果obj为数值型且值为0, 返回false
    },
    isEmpty(obj) {
        return !this.isNotEmpty(obj)
    },
};

export function getPath(url) {
    return url
        .replace(/^(http[s]?:)?\/\/[^/#?]+/, '') // remove origin
        .replace(/[?#].*$/, ''); // remove querystring or hash
}
export function getUrlParams(url) {
    if (url.indexOf('?') !== -1) {
        return parseQueryString(url.split('?')[1]);
    }
    else {
        return {};
    }
}
export function parseQueryString(query) {
    let params = {};
    for (let v of query.split('&')) {
        let [key, val = ""] = v.split('=');
        params[decodeURIComponent(key)] = decodeURIComponent(val);
    }
    return params;
}


export const toCamel = (str) =>
    str.replace(/([-_][a-z])/gi, s =>
        s
            .toUpperCase()
            .replace('-', '')
            .replace('_', '')
    );

export const toUpperCamel = str => toCamel(str.charAt(0).toUpperCase() + str.slice(1))



// cookies.js
var docCookies = {
    getItem: function (sKey) {
        if (!sKey) { return null; }
        return decodeURIComponent(document.cookie.replace(new RegExp("(?:(?:^|.*;)\\s*" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=\\s*([^;]*).*$)|^.*$"), "$1")) || null;
    },
    setItem: function (sKey, sValue, vEnd, sPath, sDomain, bSecure) {
        if (!sKey || /^(?:expires|max\-age|path|domain|secure)$/i.test(sKey)) { return false; }
        var sExpires = "";
        if (vEnd) {
            switch (vEnd.constructor) {
                case Number:
                    sExpires = vEnd === Infinity ? "; expires=Fri, 31 Dec 9999 23:59:59 GMT" : "; max-age=" + vEnd;
                    break;
                case String:
                    sExpires = "; expires=" + vEnd;
                    break;
                case Date:
                    sExpires = "; expires=" + vEnd.toUTCString();
                    break;
            }
        }
        document.cookie = encodeURIComponent(sKey) + "=" + encodeURIComponent(sValue) + sExpires + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "") + (bSecure ? "; secure" : "");
        return true;
    },
    removeItem: function (sKey, sPath, sDomain) {
        if (!this.hasItem(sKey)) { return false; }
        document.cookie = encodeURIComponent(sKey) + "=; expires=Thu, 01 Jan 1970 00:00:00 GMT" + (sDomain ? "; domain=" + sDomain : "") + (sPath ? "; path=" + sPath : "");
        return true;
    },
    hasItem: function (sKey) {
        if (!sKey) { return false; }
        return (new RegExp("(?:^|;\\s*)" + encodeURIComponent(sKey).replace(/[\-\.\+\*]/g, "\\$&") + "\\s*\\=")).test(document.cookie);
    },
    listKeys: function () {
        var aKeys = document.cookie.replace(/((?:^|\s*;)[^\=]+)(?=;|$)|^\s*|\s*(?:\=[^;]*)?(?:\1|$)/g, "").split(/\s*(?:\=[^;]*)?;\s*/);
        for (var nLen = aKeys.length, nIdx = 0; nIdx < nLen; nIdx++) { aKeys[nIdx] = decodeURIComponent(aKeys[nIdx]); }
        return aKeys;
    },
    clearItems: function () {
        var cKies = this.listKeys(),
            cLen = cKies.length;
        for (var nId = 0; nId < cLen; nId++) {
            this.removeItem(cKies[nId]);
        }
        return true;
    }
};

// docCookies.setItem(name, value[, end[, path[, domain[, secure]]]]);
// docCookies.getItem(name);
// docCookies.removeItem(name[, path[, domain]]);
// docCookies.hasItem(name);
// docCookies.keys();


// cacheUtils.js
const Cache = {
    setCache(key, val) {
        if (!this.isIncognitoMode()) {
            if (val === null) {
                localStorage.removeItem(key)
            } else {
                localStorage.setItem(key, JSON.stringify(val))
            }
        } else {
            // 兼容隐身模式
            this.setCookie(key, JSON.stringify(val))
        }
    },

    getCache(key) {
        if (!this.isIncognitoMode()) {
            return JSON.parse(localStorage.getItem(key))
        } else {
            // 兼容隐身模式
            const result = this.getCookie(key)
            if (result) {
                if (result.indexOf('{') >= 0 && result.indexOf('}') >= 0) {
                    return JSON.parse(result)
                } else {
                    return result
                }
            }
        }
    },
    setCookie(name, value, options) {
        let arr = []
        let date
        options = Object.assign({}, options)
        // 配置过期时间
        if (value == null) {
            value = ''
            options.expires = -1
        }
        if (typeof options.expires === 'number') {
            date = new Date()
            date.setTime(date.getTime() + options.expires * 1000)
        } else if (options.expires instanceof Date) {
            date = options.expires
        }

        arr.push(`${name}=${encodeURIComponent(value)}`)
        date && arr.push(`expires=${date.toUpperCase()}`)
        options.path && arr.push(`path=${options.path}`)
        options.domain && arr.push(`domain=${options.domain}`)
        options.secure && arr.push('secure')

        document.cookie = arr.join('; ')
    },
    getCookie(name) {
        let ret
        let arr
        if (document.cookie) {
            arr = document.cookie.split('; ')
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].indexOf(name + '=') === 0) {
                    ret = decodeURIComponent(arr[i].substr(name.length + 1))
                    break
                }
            }
        }
        return ret
    },
    isIncognitoMode() {
        let isIncognito
        // noinspection JSUnresolvedVariable
        if (window.webkitRequestFileSystem) {
            window.webkitRequestFileSystem(window.TEMPORARY, 1, function () {
                isIncognito = false
            }, function (e) {
                // eslint-disable-next-line no-console
                console.log(e)
                isIncognito = true
            })
        } else if (window.indexedDB && /Firefox/.test(window.navigator.userAgent)) {
            try {
                window.indexedDB.open('test')
            } catch (e) {
                isIncognito = true
            }
        } else if (this.isIE10OrLater(window.navigator.userAgent)) {
            isIncognito = false
            try {
                if (!window.indexedDB) {
                    isIncognito = true
                }
            } catch (e) {
                isIncognito = true
            }
        } else if (window.localStorage && /Safari/.test(window.navigator.userAgent)) {
            try {
                window.localStorage.setItem('isIncognitoMode', 'true')
            } catch (e) {
                isIncognito = true
            }
            if (typeof isIncognito === 'undefined') {
                isIncognito = false
                window.localStorage.removeItem('isIncognitoMode')
            }
        }

        return isIncognito
    },

    isIE10OrLater(userAgent) {
        let ua = userAgent.toLowerCase()
        if (ua.indexOf('msie') === 0 && ua.indexOf('trident') === 0) {
            return false
        }
        let match = /(?:msie|rv:)\s?([\d.]+)/.exec(ua)
        return !!(match && parseInt(match[1], 10) >= 10)
    }
}

export default Cache


/**
 * 首字母大写转换
 * @param {string} word
 */
export const firstUpperCase = ([first, ...rest]) =>
    first.toUpperCase() + rest.join('')


// generateInstanceID.js
function generateInstanceID() {
    const a = "abcdefghijklmnopqrstuv";
    const l = a.length;
    const t = Date.now();
    const r = [0, 0, 0].map(d => a[Math.floor(Math.random() * l)]).join("");
    return `${r}${t}`;
};


// Set CSS pseudo-element styles via JavaScript
// reference: https://stackoverflow.com/questions/4481485/changing-css-pseudo-element-styles-via-javascript/12207551#answer-8051488

var addRule = (function (style) {
    var sheet = document.head.appendChild(style).sheet;
    return function (selector, css) {
        var propText = typeof css === "string" ? css : Object.keys(css).map(function (p) {
            return p + ":" + (p === "content" ? "'" + css[p] + "'" : css[p]);
        }).join(";");
        sheet.insertRule(selector + "{" + propText + "}", sheet.cssRules.length);
    };
})(document.createElement("style"));

addRule("p:before", {
    display: "block",
    width: "100px",
    height: "100px",
    background: "red",
    "border-radius": "50%",
    content: "''"
});

// copy.js
export const copyToClip = (text) => {
    const input = document.createElement('input')
    input.setAttribute('value', text)
    input.setAttribute('readonly', 'readonly')
    document.body.appendChild(input)
    input.select()
    try {
        document.execCommand('copy')
    } catch {
        console.log('无法复制，请手动复制！')
    }
    document.body.removeChild(input)
}

// measureTime.js
const measureTime = (cb, ...args) => {
    const t0 = performance.now()
    cb(...args)
    const t1 = performance.now()
    console.log(`Call to do something took ${t1 - t0} milliseconds.`)
}

measureTime(myFunction, params);


// location.js
// 跳转
window.location.replace('https://www.awesomes.cn') // 不将被跳转页面加入浏览器记录
window.location.assign('https://www.awesomes.cn')
window.location.href = 'https://www.awesomes.cn'
window.location = 'https://www.awesomes.cn'

// 返回上一页
window.history.back()
window.history.go(-1)

// 刷新当前页
window.location.reload()


/**
 * 获取表单数据对象
 *
 * @param {HTMLFormElement | string} form
 * @return {object}
 */
export const getFormData = form => {
    let data = {}
    const kvObjArray = $(form).serializeArray()

    for (let obj of kvObjArray) {
        if (data[obj.name]) {
            // 多選
            data[obj.name] = [data[obj.name], $.trim(obj.value)].join(',')
        } else {
            data[obj.name] = $.trim(obj.value)
        }
    }

    return data
}

/**
 * 將 queryString 解析为对象
 *
 * @param {string} search
 * @return {object}
 */
export const queryParse = (search = window.location.search) => {
    if (!search) return {}
    const queryString = search[0] === '?' ? search.substring(1) : search
    const query = {}
    queryString.split('&').forEach(queryStr => {
        const [key, value] = queryStr.split('=')
        /* istanbul ignore else */
        if (key) query[decodeURIComponent(key)] = decodeURIComponent(value)
    })

    return query
}

/**
 * 将对象转化为 queryString
 *
 * @param {object} query
 * @return {string}
 */
export const queryStringify = query => {
    const queryString = Object.keys(query)
        .map(key => `${key}=${encodeURIComponent(query[key] || '')}`)
        .join('&')
    return queryString
}

/**
 * 去除 url 中特定的 queryString
 *
 * @param {string} key
 * @param {string} href
 * @return {string}
 */
export const removeQueryString = (key, href = window.location.href) => {
    const [url, search] = href.split('?')

    if (!search) {
        return url
    }

    let queryString = search.split('&')
    let finalQuery = ''

    if (queryString.length) {
        queryString = queryString.filter(item => !item.startsWith(key + '='))
    }

    if (!queryString.length) {
        return url
    }

    finalQuery = queryString.length > 1 ? queryString.join('&') : queryString[0]
    return url + '?' + finalQuery
}

// 通用校验
export const Verify = {
    present(val) {
        val = $.trim(val)

        if (val === '') {
            return false
        }

        return true
    },
    isEmail(val) {
        const reg = /^([a-zA-Z0-9_-])+%40([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/
        return reg.test(val)
    }
}

// 防 XSS
export function escapeHtml(str) {
    if (str.length === 0) return ''
    let s
    s = str.replace(/&/g, '&amp;')
    s = s.replace(/</g, '&lt;')
    s = s.replace(/>/g, '&gt;')
    s = s.replace(/ /g, '&nbsp;')
    s = s.replace(/\'/g, '&#39;')
    s = s.replace(/\"/g, '&quot;')

    return s
};


// randomStr.js
/**
 * 生成指定位数的随机数
 * @param {number} x
 */
export const randomStr = (x) => {
    let s = "";
    while (s.length < x && x > 0) {
        let v = Math.random() < 0.5 ? 32 : 0;
        s += String.fromCharCode(Math.round(Math.random() * ((122 - v) - (97 - v)) + (97 - v)));
    }
    return s;
};

// currency.js
let num = 123456.1234

num.toLocaleString('zh-Hans-CN', { style: 'currency', currency: 'CNY' })
// ￥123,456.12

num.toLocaleString('en-US', { style: 'currency', currency: 'USD' })
// $123,456.12

num.toLocaleString('zh', { style: 'decimal', minimumFractionDigits: 2, maximumFractionDigits: 2 })
// 123,456.12


// Flexible layout with viewport unit
// viewport-units.scss
// $vu_base: 375 // iphone6

// @function vu($px) {
//   @return ($px / $vu_base) * 100vw
// }


// batch.js - 插入大量 DOM 的优化
const container = document.getElementById('js-list');
if (!container) {
    return
}

const total = 10000
const batchSize = 4 // 每次插入多少个结点，越大越卡
const batchCount = total / batchSize // 插入次数
let batchDone = 0 // 已经完成的批处理个数

function appendItems() {
    const fragment = document.createDocumentFragment()

    for (let i = 0; i < batchSize; i++) {
        const item = document.createElement('li')
        item.innerText = batchDone * batchSize + i + 1
        fragment.appendChild(item)
    }

    container.appendChild(fragment)

    batchDone += 1
    doBatchAppend()
}

function doBatchAppend() {
    if (batchDone < batchCount) {
        window.requestAnimationFrame(appendItems)
    }
}

// Kickoff
doBatchAppend()

// Event delegation
container.addEventListener('click', function (e) {
    const target = e.target
    if (target.tagName === 'LI') {
        alert(target.innerHTML)
    }
});


// safeStringify.js
// A utility function to safely escape JSON for embedding in a <script> tag
function safeStringify(obj) {
    return JSON.stringify(obj)
        .replace(/<\/(script)/ig, '<\\/$1')
        .replace(/<!--/g, '<\\!--')
        .replace(/\u2028/g, '\\u2028') // line ending
        .replace(/\u2029/g, '\\u2029') // paragraph ending
}


// example.js
// Get the color value of .element:before
var color = window.getComputedStyle(
    document.querySelector('.element'), ':before'
).getPropertyValue('color');

// Get the content value of .element:before
var content = window.getComputedStyle(
    document.querySelector('.element'), ':before'
).getPropertyValue('content');


// parseurl.js
// https://gist.github.com/roshanca/9775536
function parseURL(url) {
    var a = document.createElement('a');
    a.href = url;
    return {
        source: url,
        protocol: a.protocol.replace(':', ''),
        host: a.hostname,
        port: a.port,
        query: a.search,
        params: (function () {
            var ret = {},
                seg = a.search.replace(/^\?/, '').split('&'),
                len = seg.length, i = 0, s;
            for (; i < len; i++) {
                if (!seg[i]) { continue; }
                s = seg[i].split('=');
                ret[s[0]] = s[1];
            }
            return ret;
        })(),
        file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
        hash: a.hash.replace('#', ''),
        path: a.pathname.replace(/^([^\/])/, '/$1'),
        relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
        segments: a.pathname.replace(/^\//, '').split('/')
    };
};

var myURL = parseURL('http://abc.com:8080/dir/index.html?id=255&m=hello#top');

myURL.file;     // = 'index.html'
myURL.hash;     // = 'top'
myURL.host;     // = 'abc.com'
myURL.query;    // = '?id=255&m=hello'
myURL.params;   // = Object = { id: 255, m: hello }
myURL.path;     // = '/dir/index.html'
myURL.segments; // = Array = ['dir', 'index.html']
myURL.port;     // = '8080'
myURL.protocol; // = 'http'
myURL.source;   // = 'http://abc.com:8080/dir/index.html?id=255&m=hello#top'


// ping.js
function ping(ip) {
    var img = new Image();
    var start = new Date().getTime();
    img.src = 'http://' + ip + '?t=' + start;
    var flag = false;

    img.onload = function () {
        flag = true;
        console.log('ok');
    }

    img.onerror = function () {
        flag = true;
        console.log('ok');
    }

    var timer = setTimeout(function () {
        if (!flag) {
            flag = false;
            console.log('failed');
        }
    }, 1500);
}

ping('192.168.1.1');


// loadScript.js
// https://websemantics.uk/archived/useful-javascript-functions/
(function (d, s, f) {
    s = d.createElement('script');
    s.async = 'async';
    s.src = 'path/to/file.js';
    f = d.getElementsByTagName('script')[0];
    f ? f.parentNode.insertBefore(s, f) : d.body.appendChild(s);
})(document);


/**
 * 截取指定长度的中英文混合字符串
 * @param  {String} str 待截取的字符串
 * @param  {Number} n   截取长度（中文字符为英文的 double）
 * @return {String}     截取后的字符串
 */
function subString(str, n) {
    var r = /[^\x00-\xff]/g;
    var m;

    if (str.replace(r, '**').length > n) {
        m = Math.floor(n / 2);

        for (var i = m, l = str.length; i < l; i++) {
            if (str.substr(0, i).replace(r, '**').length >= n) {
                return str.substr(0, i);
            }
        }
    }

    return str;
}

// replace
let replace = (arr, add = [], del = []) => {
    return arr.concat(add).filter(item => !del.includes(item))
};
replace(['1', '2', 3], ['5,', 9, 'ahihi'], ['2', 'ahihi']);
// (4) ["1", 3, "5,", 9]


function trim(text) {
    return (text || '').replace(/^\s+|\s+$/g, '');
}

function stripHTML(text) {
    return text ? text.replace(/<(?:.|\s)*?>/g, '') : '';
}

function escapeRE(s) {
    return s ? s.replace(/([.*+?^${}()|[\]\/\\])/g, '\\$1') : '';
};


// cache.js
const crypto = require('crypto')

const toMD5 = object => crypto.createHash('md5').update(JSON.stringify(object)).digest('hex')

module.exports = ({
    timeout = (/* 1 h */ 1 * 60 * 60 * 1000),
    maxEntries = 100,
    name = 'cache',
    log = console.log,
} = {}) => {
    const cache = {}

    const purge = () => {
        // timeout
        const keysTimeout = Object
            .entries(cache)
            .map(([key, store]) => (store.date + timeout) > Date.now() ? undefined : key)
            .filter(Boolean)
        if (keysTimeout.length > 0) {
            log(`[cache](${name}) timeout keys: [${keysTimeout}]`)
            keysTimeout.forEach((key) => { delete cache[key] })
        }

        // max entries
        const entries = Object.entries(cache)
        if (entries.length <= maxEntries) return
        entries.sort((a, b) => a[1].date < b[1].date)
        const keysMaxEntries = entries
            .filter((val, index) => index >= maxEntries)
            .map(([key]) => key)
        if (keysMaxEntries.length > 0) {
            log(`[cache](${name}) max entries keys: [${keysMaxEntries}]`)
            keysMaxEntries.forEach((key) => { delete cache[key] })
        }
    }

    const add = (key, value) => {
        purge()

        cache[toMD5(key)] = {
            value,
            date: Date.now(),
        }

        return value
    }

    const get = (key) => {
        purge()

        const found = cache[toMD5(key)]
        if (!found) return undefined

        return found.value
    }

    return {
        get,
        add,
    }
};


// logger.js
// Located at app/lib/logger.js

const { log, error, warn } = console

class Log {
    constructor(message) {
        this.message = message
    }

    Write() {
        throw new Error('Not Implemented')
    }
}

class ErrorLog extends Log {
    Write() {
        const response = `Error: ${this.message}`

        error(response)

        return response
    }
}

class InfoLog extends Log {
    Write() {
        const response = `Info: ${this.message}`

        log(response)

        return response
    }
}

class WarningLog extends Log {
    Write() {
        const response = `Warning: ${this.message}`

        warn(response)

        return response
    }
}

const Write = (type, message) => {
    const writingLogType = {
        error: new ErrorLog(message),
        warning: new WarningLog(message),
        info: new InfoLog(message)
    }

    if (!writingLogType[type]) {
        throw new Error('Invalid log type!')
    }

    return writingLogType[type].Write()
}

module.exports = {
    WriteLog: Write
};


function test(a = [1, 2, 3, 4, 5, 6, 7, 8, 9], size = 3) {
    let index = 0
    let result = []
    let resultIndex = 0
    while (index < a.length) {
        result[resultIndex++] = a.slice(index, index + size)
        index += size
    }
    return result
};

function isArray(val) {
    return Object.prototype.toString.call(val) === '[object Array]'
}
const flattern = (arr) => arr.reduce((pre, current) => isArray(current) ? pre.concat(flattern(current)) : pre.concat(current), [])
console.log(flattern([1, 2, 3, [1, 2, 3, [3, 3, 3, { a: 1 }]]]))



const get = (p, o) => p.reduce((xs, x) => (xs && xs[x]) ? xs[x] : null, o)
const user = {
    comments: [
        {
            blog: {
                title: 'rhb is right'
            }
        }
    ]
}
console.log(get(['user', 'comments', 0, 'blog', 'title'], { user }))


// form表单结合XMLHttpRequest，post数据
// 序列化表单
function serialize(arr) {
    return arr.reduce((total, current, currentIndex) => {
        if (currentIndex === 0) {
            return `${current.name}=${encodeURIComponent(current.value)}`
        } else {
            return `${total}&${current.name}=${current.value}`
        }
    }, 0)
}
document.querySelector('[type=submit]').addEventListener('click', function (e) {
    e.preventDefault()
    var xhr = new XMLHttpRequest()
    xhr.open('POST', 'url', true)
    // 重点是设置x-www-from-urlencoded
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                alert('成功')
            } else {
                alert('失败')
            }
        }
    }
    var $form = document.querySelector('#myform')
    let params = serialize(Array.from($form).slice(0, -1)) // 切掉最后一个元素
    console.log(params)
    xhr.send()
})


function makeActiveInputVisible() {
    if ((/Android/gi).test(navigator.userAgent)) {
        window.addEventListener('resize', function () {
            if (document.activeElement.tagName == 'INPUT' ||
                document.activeElement.tagName == 'TEXTAREA') {
                document.activeElement.scrollIntoViewIfNeeded();
            }
        });
    }
}

// 解决输入法遮挡textarea输入框
var focusTextarea = function (e) {
    // 判断是否为ios机型，另做处理
    if ((/iPhone/).test(navigator.userAgent)) {
        // 使用定时器是为了让输入框上滑时更加自然
        var interval = setInterval(function () {
            document.body.scrollTop = document.body.scrollHeight;
        }, 50)
        setTimeout(function () {
            clearInterval(interval)
        }, 500)
    }
};

/* elementPosition */
function elementPosition(obj) {
    let curleft = 0, curtop = 0;
    if (obj.offsetParent) {
        curleft = obj.offsetLeft;
        curtop = obj.offsetTop;
        while (obj = obj.offsetParent) {
            curleft += obj.offsetLeft;
            curtop += obj.offsetTop;
        }
    }
    return { x: curleft, y: curtop };
}
/* end */

/* isEmpty */
function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) return true;

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;

    // If it isn't an object at this point
    // it is empty, but it can't be anything *but* empty
    // Is it empty?  Depends on your application.
    if (typeof obj !== "object") return true;
    if (typeof obj === 'number') return false

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
}
/* end */

/* deep clone */
function clone(obj) {
    if (obj === null || typeof (obj) !== 'object' || 'isActiveClone' in obj)
        return obj;

    if (obj instanceof Date)
        var temp = new obj.constructor(); //or new Date(obj);
    else
        var temp = obj.constructor();

    for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            obj['isActiveClone'] = null;
            temp[key] = clone(obj[key]);
            delete obj['isActiveClone'];
        }
    }

    return temp;
}
/* end */

/* JS防抖 */
function debounce(func, wait, immediate) {

    var timeout, result;

    var debounced = function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            // 如果已经执行过，不再执行
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait)
            if (callNow) result = func.apply(context, args)
        }
        else {
            timeout = setTimeout(function () {
                result = func.apply(context, args)
            }, wait);
        }
        return result;
    };

    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };

    return debounced;
}
/* end */
/* JS节流 */
// Returns a function, that, when invoked, will only be triggered at most once
// during a given window of time. Normally, the throttled function will run
// as much as it can, without ever going more than once per `wait` duration;
// but if you'd like to disable the execution on the leading edge, pass
// `{leading: false}`. To disable execution on the trailing edge, ditto.
function throttle(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function () {
        previous = options.leading === false ? 0 : Date.now();
        timeout = null;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
    };
    return function () {
        var now = Date.now();
        if (!previous && options.leading === false) previous = now;
        var remaining = wait - (now - previous);
        context = this;
        args = arguments;
        if (remaining <= 0 || remaining > wait) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            result = func.apply(context, args);
            if (!timeout) context = args = null;
        } else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(later, remaining);
        }
        return result;
    };
};
/* end */
/* cached fucntion */
function cached(fn) {
    const cache = Object.create(null)
    return function cachedFn(str) {
        const hit = cache[str]
        return hit || (cache[str] = fn(str))
    }
}
/* end */


// values.js
/**
 * Retrieve the values of an object's properties
 * @module 101/values
 */
'use strict';

module.exports = values;

/**
 * Borrowing from underscorejs
 * https://github.com/jashkenas/underscore
 * @param {Object} obj
 * @return {Array}
 */
function values(obj) {
    var keys = Object.keys(obj);
    var length = keys.length;
    var vals = new Array(length);
    for (var i = 0; i < length; i++) {
        vals[i] = obj[keys[i]];
    }
    return vals;
};

// curry.js
/**
 * @module 101/curry
 */

var slice = Array.prototype.slice;

/**
 * Returns a curried function
 * @function module:101/curry
 * @param {function} f - function to be curried
 * @param {integer} [n] - how many arguments to curry
 * @return {function} 
 */
module.exports = curry;

function curry(f, n) {
    var length = n || f.length;
    return _curry(f, length, []);
}

function _curry(f, n, args) {
    return function (/* args */) {
        var curryArgs = args.concat(slice.call(arguments));
        if (curryArgs.length >= n) {
            return f.apply(null, curryArgs.slice(0, n));
        } else {
            return _curry(f, n, curryArgs);
        }
    };
}

// converge.js
/**
 * @module 101/converge
 */

/**
 * Converges an array of functions into one
 * @function module:101/converge
 * @param {function} f
 * @param {Array} array of functions
 * @return {function}
 */
module.exports = converge;

function converge(f, funcs) {
    return function converged(/* args */) {
        var args = Array.prototype.slice.call(arguments);
        return f.apply(null, funcs.map(function (g) {
            return g.apply(null, args);
        }));
    };
}

// compose.js
/**
 * @module 101/compose
 */

/**
 * [compose description]
 * @function module:101/compose
 * @param {function} f
 * @param {function} g
 * @return {function} 
 */
module.exports = compose;

function compose(f, g) {
    return function composed(/* args */) {
        var args = Array.prototype.slice.call(arguments);
        return f(g.apply(null, args));
    }
};


// getSymbolPositions.js
function getSymbolPositions(text, value) {
    var positions = text.split(value),
        results = [];

    for (var i = 0, len = positions.length - 1; i < len; i++) {
        results.push(positions[i].length + (results[i - 1] + 1 || 0));
    }
    return results;
}
getSymbolPositions("1234561891abcdefghi1lmnop", "1"); // [0, 6, 9, 19]


// leadingZero.js
var leadingZero = function (v, n) {
    v = isNaN(v) ? 0 : v || 0;
    n = isNaN(n) ? 1 : n || 1;
    return v.toPrecision(n).split('.').reverse().join('');
};

leadingZero(1, 6);    // "000001"
leadingZero(12, 6);   // "000012"
leadingZero(123, 6);  // "000123"
leadingZero(1234, 6); // "001234"


// debouncedListener.js
/**
 * Debounces a listener so that it doesn't run as often.
 *
 * @param {Function} listener
 * @param {Number} delay
 * @return {Function}
 */
export default function debouncedListener(listener, delay = 300) {
    let timeout = null

    return function () {
        if (timeout !== null) {
            clearTimeout(timeout)
        }

        timeout = setTimeout(listener, delay)
    }
};

// ready.js
/**
 * Listens to the DOMContentLoaded event or checks if the DOM has already loaded.
 *
 * @param {Function} callback
 */
export function ready(callback) {
    if (['complete', 'interactive'].includes(document.readyState)) {
        // call on next available tick
        setTimeout(callback, 1)
        return
    }
    document.addEventListener('DOMContentLoaded', callback)
};

//================================================================
// regex-validator.js
export const is = {
    blank: /^\s*$/,
    string: /^[a-zA-Z]+$/,
    email: /^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$/,
    tel: /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/,
    specialNumeric: /^(?:[\d,\/().]*[a-zA-Z][a-zA-Z\d,\/().]*)?$/,
    streetAddress: /^\d+\s[A-z]+\s[A-z]+/,
    stateZip: /([A-Z]{2}) (\d{5})$/,
    number: /^\d+$/,
    alphaNumeric: /^[a-zA-Z0-9]+$/,
    image: /[\/.](gif|jpe?g|tiff|png|svg|pdf)$/,
    pdf: /[\/.]pdf$/,
    filepath: /(\\\\?([^\\/]*[\\/])*)([^\\/]+)$/,
    url: /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/,
};

export const validate = (validator, value, not) => is[validator].test(value);

export const isEmail = (str) => is.email.test(str);
export const isEmpty = (str) => !str || 0 === str.length;
export const isBlank = (str) => !str || /^\s*$/.test(str);
export const isString = (str) => {
    return typeof str === "string" && !isEmpty(str) && !isBlank(str);
};

export const patterns = {
    blank: "^s*$",
    string: "^[a-zA-Z]+$",
    email: "^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$",
    tel:
        "^(?:(?:+?1s*(?:[.-]s*)?)?(?:(s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])s*)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))s*(?:[.-]s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})s*(?:[.-]s*)?([0-9]{4})(?:s*(?:#|x.?|ext.?|extension)s*(d+))?$",
    specialNumeric: "^(?:[d,/().]*[a-zA-Z][a-zA-Zd,/().]*)?$",
    streetAddress: "^d+s[A-z]+s[A-z]+",
    stateZip: "([A-Z]{2}) (d{5})$",
    number: "^d+$",
    alphaNumeric: "^[a-zA-Z0-9]+$",
    image: "[/.](gif|jpe?g|tiff|png|svg|pdf)$",
    pdf: "[/.]pdf$",
    filepath: "(\\\\?([^\\/]*[\\/])*)([^\\/]+)$",
    url:
        "^(http://www.|https://www.|http://|https://)?[a-z0-9]+([-.]{1}[a-z0-9]+)*.[a-z]{2,5}(:[0-9]{1,5})?(/.*)?$",
};

export function isEmpty(s) {
    return !s.length;
}

export function isBlank(s) {
    return isEmpty(s.trim());
}

// validator.js
export const is = {
    string(str) {
        return typeof str === "string" || str instanceof String;
    },
    integer(num) {
        return num === parseInt(num, 10);
    },
    function(fn) {
        return typeof fn === "function";
    },
    object(obj) {
        return (obj && obj.constructor === Object) || obj === Object(obj);
    },
    empty(value) {
        // returns true when any of the conditions are met --
        // indicating that the value is considered empty

        if (value === null) return true;
        if (value === undefined) return true;
        // is empty string
        if (is.string(value) && value.trim().length === 0) return true;
        // is empty array
        if (Array.isArray(value) && value.length === 0) return true;
        // is empty object
        if (is.object(value) && Object.keys(value).length === 0) return true;
    },
    nan(num) {
        return isNaN(num);
    },
};

// ========================================================

// removeAllChildNodes.js
/* NOT TO BE USED IN PRODUCTION == FOR BROWSER HACKS ONLY */

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// USAGE:
const container = document.querySelector('#container');
removeAllChildNodes(container);

// createFormObject.js
export function createFormObject(inputsElements) {
    /**
     * #SCOPE:  takes in an array of inputs and returns a single object with the shape
     * {[input.name]L input.value}
     */
    return inputsElements.reduce(
        (obj, item) => ({ ...obj, [item.name]: item.value.trim() }), // trim whitespace
        {}
    );
}


// isValidJson.js
export function isValidJson(string) {
    /**
     * @SCOPE:  uses json.parse to validate a string as json
     * used by:
     * - show-json
     *
     */
    if (typeof string !== "string") return false;
    try {
        JSON.parse(string);
        return true;
    } catch (error) {
        return false;
    }
}


// jsonCompare.js
export function jsonCompare(val1, val2) {
    // unused
    let compare1, compare2;
    const values = [val1, val2];

    const comparators = values.map((val) =>
        isValidJson(val) ? val : JSON.stringify(val)
    );

    return comparators[0] === comparators[1];
};

// arrayFill.js
export function arrayFill(length, val) {
    return new Array(length).fill(val);
};

// combineObjects.js
export function flattenObjects(arr) {
    var object = arr.reduce(
        (obj, item) => Object.assign(obj, { [item.key]: item.value }), {});
    return object
};

// limit.js
export function limit(arr, c) {
    return arr.filter((x, i) => {
        if (i <= c - 1) {
            return true;
        }
    });
};

// reject.js
/*
* Array Reject
* opposite of array.filter, takes a testFn that will remove items that pass the test and returns a new array with the remaining items.
* @link: https://dustinpfister.github.io/2020/07/01/lodash_reject/
*/



function reject(arr, testFn) {
    return arr.filter((item) => !testFn(item))
}


// example: 
let a = [1, 2, 'b', 3];
let test = (el) => typeof el === 'string';

reject(a, test) //=> [1, 2, 3]

// compared to typical array.filter:
a.filter(test) //=> ['b']


// shuffle.js
/**
 * @SCOPE:
 * Shuffles array in place. ES6 version
 * @param {Array} an array of [any] items
 */
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
};


// sortBy.js
export function sortBy(arrToSort = [], values = ["id", "title"]) {
    let sorted;

    if (Array.isArray(values)) {
        arrToSort.sort(
            (a, b) =>
                a[values[0]] > b[values[0]] // compare each value individually
                    ? 1 // return if true
                    : (a[values[0]] === b[values[0]] // check if equal
                        ? a[values[1]] > b[values[1]] // secondary sorting if equal
                            ? 1 // return if secondary true
                            : -1 // return if secondary false
                        : -1) - 1 // return if
        );
    }

    sorted = arrToSort.sort((a, b) => (a[values[0]] > b[values[0]] ? 1 : -1));

    return sorted;
};


// uniqueData.js
export function uniqueData(data = []) {
    return [
        ...data.reduce((map, obj) => map.set(obj.id, obj), new Map()).values(),
    ];
};


// handlePromises.js
export function handlePromises(promises = []) {
    return Promise.all(promises)
        .then((responses) => {
            console.log('handlePromises Success', responses);
            return responses;
        })
        .catch((error) =>
            console.log(
                `handlePromises Error ${JSON.stringify(error, null, 2)}`
            )
        );
};


// waitAtLeast.js
function waitAtLeast(time, promise) {
    const timeoutPromise = new Promise((resolve) => {
        setTimeout(resolve, time)
    })
    return Promise.all([promse, timeoutPromise]).then((values) => values[0])
};

// injectField.js
function injectField(obj, { name, value }) {
    return { ...obj, [name]: value }
};


// removeEmpty.js
export function isEmpty(value) {
    return (
        value === undefined ||
        value === null ||
        (typeof value === "object" && Object.keys(value).length === 0) ||
        (typeof value === "string" && value.trim().length === 0)
    );
}

export function removeEmptyFromObject(obj) {
    const empty = Object.assign(
        ...Object.keys(obj)
            .map((key) => !isEmpty(obj[key]) && { [key]: obj[key] })
            .filter(Boolean)
    );
    return empty;
}

export function removeEmptyFromObjectRecursively(obj) {
    let newObj = {};
    Object.keys(obj).forEach((key) => {
        if (obj[key] === Object(obj[key])) newObj[key] = removeEmpty(obj[key]);
        else if (isEmpty(obj[key])) newObj[key] = obj[key];
    });
    return newObj;
};


// removeKeys.js
export const removeKeys = (obj, keys) => obj !== Object(obj)
    ? obj
    : Array.isArray(obj)
        ? obj.map((item) => removeKeys(item, keys))
        : Object.keys(obj)
            .filter((k) => !keys.includes(k))
            .reduce(
                (acc, x) => Object.assign(acc, { [x]: removeKeys(obj[x], keys) }),
                {}
            )


export function removeKeysRecurr(obj, keys) {
    // @link https://gist.github.com/aurbano/383e691368780e7f5c98#gistcomment-3560352
    /**
     * @SCOPE:  remove keys from a list off of an object or array of objects recursively
     */
    return obj !== Object(obj)
        ? obj
        : Array.isArray(obj)
            ? obj.map((item) => removeKeysRecurr(item, keys))
            : remove(([k]) => !keys.includes(k), obj);
};


// removeRecurr.js
export function removeRecurr(fn, obj) {
    // @SCOPE:  runs a function against every key in an object or array of objects
    return obj !== Object(obj)
        ? obj
        : Array.isArray(obj)
            ? obj.map((item) => removeRecurr(fn, item))
            : remove(fn, obj);
};


// Download javascript Object as JSON
// downloadAsJson.js
function downloadAsJson(exportObj, exportName) {
    var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(exportObj));
    var downloadAnchorNode = document.createElement('a');
    downloadAnchorNode.setAttribute("href", dataStr);
    downloadAnchorNode.setAttribute("download", exportName + ".json");
    document.body.appendChild(downloadAnchorNode); // required for firefox
    downloadAnchorNode.click();
    downloadAnchorNode.remove();
};


// local-markdown-cms
// fs-cms.js
import { promises as fsPromises } from 'fs';
import os from 'os';
import path from 'path';

// used to render and work with local markdown files

export async function pathExists(filePath) {
    try {
        const stat = await fsPromises.stat(filePath);
        return stat.isFile();
    } catch (err) {
        return false;
    }
}

export async function getPostList({ ownerId }) {

    // getAllUserBlogPosts called if ownerId is provided
    const getAllUserBlogPosts = async () => {
        // create posts directory  -- if none exists?
        const postPath = await genPostsPath();
        // get file names for each file in posts directory
        const filenames = await fsPromises.readdir(postPath);
        const posts = [];
        for (const filename of filenames) {
            // get post JSON? content for each post
            const postText = await fsPromises.readFile(path.join(postPath, filename), 'utf8');
            // parse through post JSON content
            const post = JSON.parse(postText);

            posts.push(post);
        }

        return posts;
    };

    if (ownerId) {
        // if ownerId is provided get all posts related to user
        const posts = await getAllUserBlogPosts();

        const ownerPosts = posts.filter((post) => post.ownerId === ownerId);
        ownerPosts.sort((a, b) => b.createdAt - a.createdAt);

        return ownerPosts;
    }

    // when no ownerId is passed in read posts from the local data directory
    const markdownFiles = await fsPromises.readdir('data');

    const dataDirPostList = markdownFiles.map((filename) => {
        const slug = filename.replace(/.md$/, '');
        const [year, month, date, ...rest] = slug.split('-');
        const createdAt = new Date(`${year} ${month} ${date}`).getTime();
        const title = rest.join(' ');

        return {
            slug,
            createdAt,
            title
        };
    });

    const allPosts = [...dataDirPostList, ...(await getAllUserBlogPosts())];

    allPosts.sort((a, b) => b.createdAt - a.createdAt);

    return allPosts;
}

export async function getPost(slug) {
    // Try to fetch from the user's post list
    const filePath = await genPostsFilePath(slug);
    if (await pathExists(filePath)) {
        const postJson = await fsPromises.readFile(filePath, 'utf8');
        return JSON.parse(postJson);
    }

    // Fetch from the data directory
    const [year, month, day, ...rest] = slug.split('-');
    const createdAt = new Date(`${year} ${month} ${day}`).getTime();
    const title = rest.join(' ');
    const content = await fsPromises.readFile(`data/${slug}.md`, 'utf8');

    return {
        slug: slug,
        title,
        content,
        createdAt
    };
}

export async function deletePost(slug) {
    // Try to fetch from the user's post list
    const filePath = await genPostsFilePath(slug);
    if (await pathExists(filePath)) {
        await fsPromises.unlink(filePath);
    }
}

export async function createPost({ ownerId, slug, title, content }) {
    const createdAt = Date.now();

    const post = {
        ownerId,
        slug,
        title,
        content,
        createdAt,
        updatedAt: createdAt
    };

    const filePath = await genPostsFilePath(slug);
    if (await pathExists(filePath)) {
        throw new Error(`Blog post already exists`);
    }

    await fsPromises.writeFile(filePath, JSON.stringify(post, null, 2), 'utf8');
    return post;
}

export async function updatePost({ ownerId, slug, title, content }) {
    const createdAt = Date.now();

    const post = await getPost(slug, { ownerId });
    if (post.ownerId !== ownerId) {
        throw new Error(`Invalid ownerId`);
    }

    post.title = title;
    post.content = content;
    post.updatedAt = Date.now();

    const filePath = await genPostsFilePath(slug);
    await fsPromises.writeFile(filePath, JSON.stringify(post, null, 2), 'utf8');
    return post;
}

function genUserFilePath(userId) {
    return path.join(os.tmpdir(), 'bulletproof-next-app', 'user', `${userId}.json`);
}

async function genCommentsFilePath(slug) {
    const filePath = path.join(os.tmpdir(), 'bulletproof-next-app', 'comments', `${slug}.json`);
    await fsPromises.mkdir(path.dirname(filePath), { recursive: true });

    if (!(await pathExists(filePath))) {
        await fsPromises.writeFile(filePath, '[]', 'utf8');
    }

    return filePath;
}

async function genPostsPath() {
    const postsPath = path.join(os.tmpdir(), 'bulletproof-next-app', 'posts');
    await fsPromises.mkdir(postsPath, { recursive: true });
    return postsPath;
}

async function genPostsFilePath(slug) {
    const filePath = path.join(await genPostsPath(), `${slug}.json`);
    return filePath;
}

export async function saveUser(type, profile) {
    const user = {
        id: `${type}-${profile.id}`,
        [type]: profile,
        profile: {
            name: profile.name,
            avatar: profile.avatar
        }
    };

    const payload = JSON.stringify(user);
    const filePath = genUserFilePath(user.id);
    await fsPromises.mkdir(path.dirname(filePath), { recursive: true });

    await fsPromises.writeFile(filePath, payload, 'utf8');
    return user.id;
}

export async function getUser(id) {
    const filePath = genUserFilePath(id);
    try {
        const jsonString = await fsPromises.readFile(filePath, 'utf8');
        return JSON.parse(jsonString);
    } catch (err) {
        if (err.code === 'ENOENT') {
            return null;
        }

        throw err;
    }
}

async function getAllComments(slug) {
    const filePath = await genCommentsFilePath(slug);
    const content = await fsPromises.readFile(filePath, 'utf8');
    if (!content) {
        return [];
    }

    return JSON.parse(content);
}

export async function getComments(slug, options = {}) {
    const { sort = 1, limit = 5, offset = null } = options;
    const comments = await getAllComments(slug);

    // sort it
    comments.sort((a, b) => {
        return sort === 1 ? a.createdAt - b.createdAt : b.createdAt - a.createdAt;
    });

    // remove everything upto the offset
    let foundOffset = false;
    const commentsWithOffset = offset
        ? comments.filter((c) => {
            if (foundOffset) {
                return true;
            }

            foundOffset = c.createdAt == offset;
            return false;
        })
        : comments;

    // apply the limit
    const commentsWithLimit = commentsWithOffset.slice(0, limit);

    return commentsWithLimit;
}

export async function addComment(slug, comment) {
    const filePath = await genCommentsFilePath(slug);
    const comments = await getAllComments(slug);
    if (!comment.id) {
        comment.id = String(Math.random());
    }
    comments.push(comment);

    await fsPromises.writeFile(filePath, JSON.stringify(comments), 'utf8');
    return comments;
};



// seed.js
function seed(length, schema) {
    return new Array(length) //create a new array with length(num) of 'undefined' values 
        .fill(1) // convert 'undefined' values to the number 1
        .map((_, i) => ({ schema })) // map over the array length(num) of times and output an item based on schema
};

// slugify.js
/* eslint-disable */
export function slugify(text) {
    const from = "ãàáäâẽèéëêìíïîõòóöôùúüûñç·/_,:;"
    const to = "aaaaaeeeeeiiiiooooouuuunc------"

    const newText = text
        .split("")
        .map((letter, i) =>
            letter.replace(new RegExp(from.charAt(i), "g"), to.charAt(i))
        )

    return newText
        .toString() // Cast to string
        .toLowerCase() // Convert the string to lowercase letters
        .trim() // Remove whitespace from both sides of a string
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/&/g, "-y-") // Replace & with 'and'
        .replace(/[^\w\-]+/g, "") // Remove all non-word chars
        .replace(/\-\-+/g, "-") // Replace multiple - with single -
}

// https://gist.github.com/codeguy/6684588


// tools.js
/* eslint-disable */

/**********************************
 * * Enironment helpers
 * ********************************
 */
export const isApiSupported = api => api in window
// if (!isApiSupported('IntersectionObserver')) {}
export const isClient = typeof window === "object"
export const isSSR = typeof window === "undefined"
export const isDev =
    process &&
    process.env &&
    (!process.env.NODE_ENV || process.env.NODE_ENV === "development")

/**********************************
 * * Typography Helpers
 * see "./truncate" for more
 * see "./slugify" for more
 * ********************************
 */

export const getFontSize = () =>
    !isSSR &&
    parseFloat(
        getComputedStyle(document.body, null).fontSize.replace(/[^\d]/g, "")
    )

export const convertEmToPx = val => val.replace("em", "") * getFontSize() + "px"

export const capitalize = string =>
    string.replace(/\b\w/g, c => c.toUpperCase())
//https://attacomsian.com/blog/string-capitalize-javascript

/**********************************
 * * Convenience Functions
 * ********************************
 */
export function shortid() {
    //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
    return (
        Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15)
    )
}

export function formatNumber(num) {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const randomNumGen = (
    // array of random nums
    num, // number of random numbers to generate
    limit = 100 // highest number possible
) => Array.from(Array(num)).map(() => Math.floor(Math.random() * limit))

export const isExternal = string => {
    const urlregex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
    return urlregex.test(string)
}

export const randomConditional = (probability, { truthy, falsy }) =>
    Math.random() >= probability ? truthy : falsy
export const hidden = [`none`, `none`, `block`]

/**********************************
 * * Array Operations
 * ********************************
 */

export const makeArray = string => {
    const newArr = string.split(", ")
    return newArr
}

export const doesInclude = (arr = [], idx = 0) => arr.includes(idx)

/**********************************
 * * Object Operations
 * ********************************
 */

export const mapObject = obj => {
    return isObject(obj)
        ? Object.entries(obj).map((entry, i) => {
            return isObject(entry) ? mapObject(entry) : entry
        })
        : obj
}

export const hasOwnProperty = (obj, prop) =>
    obj ? Object.prototype.hasOwnProperty.call(obj, prop) : false

/**********************************
 * * Conditional Checks
 * ********************************
 */
export const isBoolean = arg => {
    return typeof arg === "boolean"
}

export const isTruthy = (condition, setting) =>
    condition && setting ? setting : !isBoolean(condition) && condition

export const isArray = obj => (Array.isArray(obj) ? true : false)
export const isNull = obj => (obj === null ? true : false)
export const isArrayOrNull = obj => (isNull(obj) && isArray(obj) ? true : false)
export const isObject = obj =>
    obj !== null &&
        typeof obj !== "string" &&
        typeof obj !== "number" &&
        !Array.isArray(obj) &&
        typeof obj === "object"
        ? true
        : false

/**********************************
 * * Form Tools
 * ********************************
 */

export function addDashes(target) {
    let val = target.value.replace(/\D[^\.]/g, "")
    target.value = val.slice(0, 3) + "-" + val.slice(3, 6) + "-" + val.slice(6)
    // usage: addDashes(e.target)
};


// truncate.js
export function truncateOnWord(str, limit) {
    var trimmable =
        "\u0009\u000A\u000B\u000C\u000D\u0020\u00A0\u1680\u180E\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u2028\u2029\u3000\uFEFF"
    var reg = new RegExp("(?=[" + trimmable + "])")
    var words = str.split(reg)
    var count = 0
    return (
        words
            .filter(function (word) {
                count += word.length
                return count <= limit
            })
            .join("") + "..."
    )
};


// Google Maps Listings Scraper
function JSONToCSVConvertor(JSONData, ReportTitle, ShowLabel) {
    // http://jsfiddle.net/d7n0hj6k/1/

    //If JSONData is not an object then JSON.parse will parse the JSON string in an Object
    var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;

    var CSV = '';
    //Set Report title in first row or line

    CSV += ReportTitle + '\r\n\n';

    //This condition will generate the Label/Header
    if (ShowLabel) {
        var row = "";

        //This loop will extract the label from 1st index of on array
        for (var index in arrData[0]) {

            //Now convert each value to string and comma-seprated
            row += index + ',';
        }

        row = row.slice(0, -1);

        //append Label row with line break
        CSV += row + '\r\n';
    }

    //1st loop is to extract each row
    for (var i = 0; i < arrData.length; i++) {
        var row = "";

        //2nd loop will extract each column and convert it in string comma-seprated
        for (var index in arrData[i]) {
            row += '"' + arrData[i][index] + '",';
        }

        row.slice(0, row.length - 1);

        //add a line break after each row
        CSV += row + '\r\n';
    }

    if (CSV == '') {
        alert("Invalid data");
        return;
    }

    //Generate a file name
    var fileName = "MyReport_";
    //this will remove the blank-spaces from the title and replace it with an underscore
    fileName += ReportTitle.replace(/ /g, "_");

    //Initialize file format you want csv or xls
    var uri = 'data:text/csv;charset=utf-8,' + escape(CSV);

    // Now the little tricky part.
    // you can use either>> window.open(uri);
    // but this will not work in some browsers
    // or you will not get the correct file extension    

    //this trick will generate a temp <a /> tag
    var link = document.createElement("a");
    link.href = uri;

    //set the visibility hidden so it will not effect on your web-layout
    link.style = "visibility:hidden";
    link.download = fileName + ".csv";

    //this part will append the anchor tag and remove it after automatic click
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


class Listing {
    constructor(title, rating, details, location, phone, website) {
        this.title = title
        this.rating = rating
        this.details = details
        this.location = location
        this.phone = phone
        this.website = website
    }
}


let listings = [];

if (!listings.length > 0) {
    listings = document.querySelectorAll('.section-result-content')
    console.log('listings found', listings)
    const listingsArr = Array.prototype.slice.call(listings).map(listing => {
        const listTitle = listing.querySelector('.section-result-title > span').textContent
        const listRating = listing.querySelector('.cards-rating-score')?.textContent || 0
        const listDetails = listing.querySelector('.section-result-details')?.textContent || "n/a"
        const listLocation = listing.querySelector('.section-result-location')?.textContent || "n/a"
        const listPhone = listing.querySelector('.section-result-phone-number')?.textContent || "n/a"
        const listWebsite = listing.querySelector('a[href^="http"]')?.href || "n/a"
        const listItem = new Listing(listTitle, listRating, listDetails, listLocation, listPhone, listWebsite)
        return listItem
    })

    const newJSON = JSON.stringify(listingsArr, null, 2)

    if (newJSON) {
        JSONToCSVConvertor(newJSON, "Listings", true)
    }
} else {
    console.log(listings.length)
};


// https://gist.github.com/gaurangrshah/07e47ae7197534b2d1e03d586b161434


// string-utils.js
// String utils
//
// resources:
//  -- mout, https://github.com/mout/mout/tree/master/src/string


export function unPluralize(str = "") {
    // @SCOPE:  if a string ends in a 's' we simple remove the 's'
    if (!str) return;
    str = str?.toLowerCase();
    if (str[str?.length - 1] === "s") str = str?.substring(0, str?.length - 1);
    return str;
}


export function capitalizeFirstWord(str = "") {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function capitalizeEveryWord(str = "") {
    // @link: https://tinyurl.com/yde3emms
    return str.map(capitalizeString).join();
}

export function removeSpecialCharacters(str = "") {
    return str.replace(/[^a-zA-Z ]/g, "");
}

export const toDateTime = (secs) => {
    var t = new Date("1970-01-01T00:30:00Z"); // Unix epoch start.
    t.setSeconds(secs);
    return t;
};

/**
 * "Safer" String.toLowerCase()
 */
function lowerCase(str) {
    return str.toLowerCase();
}

/**
 * "Safer" String.toUpperCase()
 */
function upperCase(str) {
    return str.toUpperCase();
}

/**
 * Convert string to camelCase text.
 */
function camelCase(str) {
    str = replaceAccents(str);
    str = removeNonWord(str)
        .replace(/\-/g, " ") //convert all hyphens to spaces
        .replace(/\s[a-z]/g, upperCase) //convert first char of each word to UPPERCASE
        .replace(/\s+/g, "") //remove spaces
        .replace(/^[A-Z]/g, lowerCase); //convert first char to lowercase
    return str;
}

/**
 * Add space between camelCase text.
 */
function unCamelCase(str) {
    str = str.replace(/([a-z\xE0-\xFF])([A-Z\xC0\xDF])/g, "$1 $2");
    str = str.toLowerCase(); //add space between camelCase text
    return str;
}

/**
 * UPPERCASE first char of each word.
 */
function properCase(str) {
    return lowerCase(str).replace(/^\w|\s\w/g, upperCase);
}

/**
 * camelCase + UPPERCASE first char
 */
function pascalCase(str) {
    return camelCase(str).replace(/^[a-z]/, upperCase);
}

function normalizeLineBreaks(str, lineEnd) {
    lineEnd = lineEnd || "n";

    return str
        .replace(/rn/g, lineEnd) // DOS
        .replace(/r/g, lineEnd) // Mac
        .replace(/n/g, lineEnd); // Unix
}

/**
 * UPPERCASE first char of each sentence and lowercase other chars.
 */
function sentenceCase(str) {
    // Replace first char of each sentence (new line or after '.\s+') to
    // UPPERCASE
    return lowerCase(str).replace(/(^\w)|\.\s+(\w)/gm, upperCase);
}

/**
 * Convert to lower case, remove accents, remove non-word chars and
 * replace spaces with the specified delimeter.
 * Does not split camelCase text.
 */
function slugify(str, delimeter) {
    if (delimeter == null) {
        delimeter = "-";
    }

    str = replaceAccents(str);
    str = removeNonWord(str);
    str = trim(str) //should come after removeNonWord
        .replace(/ +/g, delimeter) //replace spaces with delimeter
        .toLowerCase();

    return str;
}

/**
 * Replaces spaces with hyphens, split camelCase text, remove non-word chars, remove accents and convert to lower case.
 */
function hyphenate(str) {
    str = unCamelCase(str);
    return slugify(str, "-");
}

/**
 * Replaces hyphens with spaces. (only hyphens between word chars)
 */
function unhyphenate(str) {
    return str.replace(/(\w)(-)(\w)/g, "$1 $3");
}

/**
 * Replaces spaces with underscores, split camelCase text, remove
 * non-word chars, remove accents and convert to lower case.
 */
function underscore(str) {
    str = unCamelCase(str);
    return slugify(str, "_");
}

/**
 * Remove non-word chars.
 */
function removeNonWord(str) {
    return str.replace(/[^0-9a-zA-Z\xC0-\xFF \-]/g, "");
}

/**
 * Convert line-breaks from DOS/MAC to a single standard (UNIX by default)
 */
function normalizeLineBreaks(str, lineEnd) {
    lineEnd = lineEnd || "\n";

    return str
        .replace(/\r\n/g, lineEnd) // DOS
        .replace(/\r/g, lineEnd) // Mac
        .replace(/\n/g, lineEnd); // Unix
}

/**
 * Replaces all accented chars with regular ones
 */
function replaceAccents(str) {
    // verifies if the String has accents and replace them
    if (str.search(/[\xC0-\xFF]/g) > -1) {
        str = str
            .replace(/[\xC0-\xC5]/g, "A")
            .replace(/[\xC6]/g, "AE")
            .replace(/[\xC7]/g, "C")
            .replace(/[\xC8-\xCB]/g, "E")
            .replace(/[\xCC-\xCF]/g, "I")
            .replace(/[\xD0]/g, "D")
            .replace(/[\xD1]/g, "N")
            .replace(/[\xD2-\xD6\xD8]/g, "O")
            .replace(/[\xD9-\xDC]/g, "U")
            .replace(/[\xDD]/g, "Y")
            .replace(/[\xDE]/g, "P")
            .replace(/[\xE0-\xE5]/g, "a")
            .replace(/[\xE6]/g, "ae")
            .replace(/[\xE7]/g, "c")
            .replace(/[\xE8-\xEB]/g, "e")
            .replace(/[\xEC-\xEF]/g, "i")
            .replace(/[\xF1]/g, "n")
            .replace(/[\xF2-\xF6\xF8]/g, "o")
            .replace(/[\xF9-\xFC]/g, "u")
            .replace(/[\xFE]/g, "p")
            .replace(/[\xFD\xFF]/g, "y");
    }

    return str;
}

/**
 * Searches for a given substring
 */
function contains(str, substring, fromIndex) {
    return str.indexOf(substring, fromIndex) !== -1;
}

/**
 * Truncate string at full words.
 */
function crop(str, maxChars, append) {
    return truncate(str, maxChars, append, true);
}

/**
 * Escape RegExp string chars.
 */
function escapeRegExp(str) {
    var ESCAPE_CHARS = /[\\.+*?\^$\[\](){}\/'#]/g;
    return str.replace(ESCAPE_CHARS, "\\$&");
}

/**
 * Escapes a string for insertion into HTML.
 */
function escapeHtml(str) {
    str = str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/'/g, "&#39;")
        .replace(/"/g, "&quot;");

    return str;
}

/**
 * Unescapes HTML special chars
 */
function unescapeHtml(str) {
    str = str
        .replace(/&amp;/g, "&")
        .replace(/&lt;/g, "<")
        .replace(/&gt;/g, ">")
        .replace(/&#39;/g, "'")
        .replace(/&quot;/g, '"');
    return str;
}

/**
 * Escape string into unicode sequences
 */
function escapeUnicode(str, shouldEscapePrintable) {
    return str.replace(/[\s\S]/g, function (ch) {
        // skip printable ASCII chars if we should not escape them
        if (!shouldEscapePrintable && /[\x20-\x7E]/.test(ch)) {
            return ch;
        }
        // we use "000" and slice(-4) for brevity, need to pad zeros,
        // unicode escape always have 4 chars after "\u"
        return "\\u" + ("000" + ch.charCodeAt(0).toString(16)).slice(-4);
    });
}

/**
 * Remove HTML tags from string.
 */
function stripHtmlTags(str) {
    return str.replace(/<[^>]*>/g, "");
}

/**
 * Remove non-printable ASCII chars
 */
function removeNonASCII(str) {
    // Matches non-printable ASCII chars -
    // http://en.wikipedia.org/wiki/ASCII#ASCII_printable_characters
    return str.replace(/[^\x20-\x7E]/g, "");
}

/**
 * String interpolation
 */
function interpolate(template, replacements, syntax) {
    var stache = /\{\{(\w+)\}\}/g; //mustache-like

    var replaceFn = function (match, prop) {
        return prop in replacements ? replacements[prop] : "";
    };

    return template.replace(syntax || stache, replaceFn);
}

/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */
function rpad(str, minLen, ch) {
    ch = ch || " ";
    return str.length < minLen ? str + repeat(ch, minLen - str.length) : str;
}

/**
 * Pad string with `char` if its' length is smaller than `minLen`
 */
function lpad(str, minLen, ch) {
    ch = ch || " ";

    return str.length < minLen ? repeat(ch, minLen - str.length) + str : str;
}

/**
 * Repeat string n times
 */
function repeat(str, n) {
    return new Array(n + 1).join(str);
}

/**
 * Limit number of chars.
 */
function truncate(str, maxChars, append, onlyFullWords) {
    append = append || "...";
    maxChars = onlyFullWords ? maxChars + 1 : maxChars;

    str = trim(str);
    if (str.length <= maxChars) {
        return str;
    }
    str = str.substr(0, maxChars - append.length);
    //crop at last space or remove trailing whitespace
    str = onlyFullWords ? str.substr(0, str.lastIndexOf(" ")) : trim(str);
    return str + append;
}

var WHITE_SPACES = [
    " ",
    "\n",
    "\r",
    "\t",
    "\f",
    "\v",
    "\u00A0",
    "\u1680",
    "\u180E",
    "\u2000",
    "\u2001",
    "\u2002",
    "\u2003",
    "\u2004",
    "\u2005",
    "\u2006",
    "\u2007",
    "\u2008",
    "\u2009",
    "\u200A",
    "\u2028",
    "\u2029",
    "\u202F",
    "\u205F",
    "\u3000"
];

/**
 * Remove chars from beginning of string.
 */
function ltrim(str, chars) {
    chars = chars || WHITE_SPACES;

    var start = 0,
        len = str.length,
        charLen = chars.length,
        found = true,
        i,
        c;

    while (found && start < len) {
        found = false;
        i = -1;
        c = str.charAt(start);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                start++;
                break;
            }
        }
    }

    return start >= len ? "" : str.substr(start, len);
}

/**
 * Remove chars from end of string.
 */
function rtrim(str, chars) {
    chars = chars || WHITE_SPACES;

    var end = str.length - 1,
        charLen = chars.length,
        found = true,
        i,
        c;

    while (found && end >= 0) {
        found = false;
        i = -1;
        c = str.charAt(end);

        while (++i < charLen) {
            if (c === chars[i]) {
                found = true;
                end--;
                break;
            }
        }
    }

    return end >= 0 ? str.substring(0, end + 1) : "";
}

/**
 * Remove white-spaces from beginning and end of string.
 */
function trim(str, chars) {
    chars = chars || WHITE_SPACES;
    return ltrim(rtrim(str, chars), chars);
}

/**
 * Capture all capital letters following a word boundary (in case the
 * input is in all caps)
 */
function abbreviate(str) {
    return str.match(/\b([A-Z])/g).join("");
};


// debounce.js
export function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this,
            args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

/*
usage: debounce(anyFunction)
*/


// animatedScrollTo.js
document.getElementsByTagName('button')[0].onclick = function () {
    scrollTo(document.body, 0, 1250);
}

function scrollTo(element, to, duration) {
    var start = element.scrollTop,
        change = to - start,
        currentTime = 0,
        increment = 20;

    var animateScroll = function () {
        currentTime += increment;
        var val = Math.easeInOutQuad(currentTime, start, change, duration);
        element.scrollTop = val;
        if (currentTime < duration) {
            setTimeout(animateScroll, increment);
        }
    };
    animateScroll();
}

//t = current time
//b = start value
//c = change in value
//d = duration
Math.easeInOutQuad = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return c / 2 * t * t + b;
    t--;
    return -c / 2 * (t * (t - 2) - 1) + b;
};


/**
 * Concat arrays
 *
 * @params {array} arrs - List of arrays
 * @example
 * import { concatArrays } from "path/to/array.js"
 *
 * let arr1 = [1, 2, 3];
 * let arr2 = [4, 5, 6];
 *
 * concatArrays(arr1, arr2, [7, 8, 9, 2, 4]);
 * // Return [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */
export let concatArrays = (...arrs) => [].concat(...arrs);

/**
 * Remove duplicates from simple arrays
 *
 * @params {array} arrs - List of arrays
 * @example
 * import { uniqueArray } from "path/to/array.js"
 *
 * uniqueArray([ 1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 4 ]);
 * // Return [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
 */
export let uniqueArray = arr => [...new Set(arr)];

/**
 * Remove duplicates objects in array base on an object key
 *
 * @params {string} p    - Key to look for in each object
 * @params {array}  arr  - Array
 * @example
 * import { unitArrayObjects } from "path/to/array.js"
 *
 * let arr = [
 *   { id: 6, username: 'lorem' },
 *   { id: 8, username: 'ipsum' },
 *   { id: 6, username: 'lorem' },
 *   { id: 7, username: 'dolor' }
 * ];
 *
 * uniqueArrayObjects('id', arr);
 * //
 *   Return :
 *   [
 *     { id: 6, username: 'lorem' },
 *     { id: 8, username: 'ipsum' },
 *     { id: 7, username: 'dolor' }
 *   ]
 */
export let uniqueArrayObjects = (p, arr) => arr.reduce((a, b) => !a.filter(c => b[p] === c[p]).length ? [...a, b] : a, []);

/**
 * Remove duplicates objects in array with deep comparison
 *
 * @params {array}  arr  - Array
 * @example
 * import { unitArrayObjectsDeep } from "path/to/array.js"
 *
 * let arr = [
 *   { id: 6, username: 'lorem' },
 *   { id: 8, username: 'ipsum' },
 *   { id: 6, username: 'dolor' },
 *   { id: 7, username: 'sit' },
 *   { id: 8, username: 'ipsum' },
 * ];
 *
 * uniqueArrayObjectsDeep('id', arr);
 * //
 *   Return :
 *   [
 *     { id: 6, username: 'lorem' },
 *     { id: 8, username: 'ipsum' },
 *     { id: 6, username: 'dolor' },
 *     { id: 7, username: 'sit' }
 *   ]
 */
export let uniqueArrayObjectsDeep = arr => uniqueArray(arr.map(a => JSON.stringify(a))).map(a => JSON.parse(a));


// Check value exist in array
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


/*
    instead of Array.filter, use Array.find for performance

    - filter will loop all array, and get all match
    - find will get first match and stop
*/
'use strict';

const characters = [
    { id: 1, name: 'ironman' },
    { id: 2, name: 'black_widow' },
    { id: 3, name: 'captain_america' },
    { id: 4, name: 'captain_america' },
];

function getCharacter(name) {
    return character => character.name === name;
}

console.log(characters.filter(getCharacter('captain_america')));
// [
//   { id: 3, name: 'captain_america' },
//   { id: 4, name: 'captain_america' },
// ]

console.log(characters.find(getCharacter('captain_america')));
// { id: 3, name: 'captain_america' }


/*
    instead of Array.filter + Array.map, use Array.reduce for performance

    - if filter + map
    100.000 items => loop 100.000 items => 50000 items => loop 50000 items

    - if reduce
    100.000 items
*/
const users = [{
    name: 'Ronaldo',
    age: 23
}, {
    name: 'Messi',
    age: 14
}, {
    name: 'Anoystick',
    age: 22
}];

// NOT GOOD
const valid = users.filter(({ age }) => age >= 18).map(({ name }) => name);

// GOOD
const valid = users.reduce((acc, { age, name }) => {
    return (age >= 18) ? [...acc, name] : acc;
}, []);

// OR - single loop
const names = [];
users.forEach(({ age, name }) => {
    age >= 18 && names.push(name);
});



// Copy not change origin array
const copyArray = (arr) => arr.slice(0);
const arr = [1, 2, 3, "hello", "world"];
const newArr = copyArray(arr);
JSON.stringify(arr) === JSON.stringify(newArr);


// 1 - javascript loop in an array
let myArray = ["blog javascripts", "anonystick"];
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
/* Outputs:
blog javascripts
anonystick
*/

// 2 - Javascript foreach object
const obj = {
    id: 1,
    name: "blog javascript",
    site: 'anonystick.com'
}

for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        console.log(`${key} : ${obj[key]}`)
    }
}

/*
Output:
id : 1
name : blog javascript
site : anonystick.com
*/

// 3 - Javascript foreach object key
const obj = {
    id: 1,
    name: "blog javascript",
    site: 'anonystick.com'
}

console.log(Object.keys(obj));

/*
Output:
["id", "name", "site"]
*/


// 4 - Javascript foreach object value
const obj = {
    id: 1,
    name: "blog javascript",
    site: 'anonystick.com'
}

console.log(Object.values(obj));

/*
Output:
[1, "blog javascript", "anonystick.com"]
*/


// 5 - Javascript foreach object entries
const obj = {
    id: 1,
    name: "blog javascript",
    site: 'anonystick.com'
}

console.log(Object.entries(obj)) // return array [key, value]

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}:${value}`)
})

/*
Output:
id:1
name:blog javascript
site:anonystick.com
*/


// 6 - javascript loop through array of objects
var countries = {
    China: 1371980000,
    India: 1276860000,
    'United States': 321786000,
    Indonesia: 255461700,
    Brazil: 204873000,
    Pakistan: 190860000
};
countries = Object.keys(countries).filter(function (key) {
    // Countries under 1000000000
    return countries[key] <= 1000000000;
});
console.log(countries);
// Results in:
// ["UnitedStates", "Indonesia", "Brazil", "Pakistan"]


// Object into query string parameters in JavaScript
let obj = {
    id: 1234,
    search: 'query string parameters in JavaScript',
    token: '123412341341',
};
/*
Output: https://anonystick.com?id=1234&search=query%20string%20parameters%20in%20JavaScript&token=123412341341
*/

// 1. map + join in javascript
// ES6
var queryString = Object.keys(params).map(key => key + '=' + params[key]).join('&');

// ES5
var queryString = Object.keys(params).map(function (key) {
    return key + '=' + params[key]
}).join('&');


// 2. jquery
var queryString = $.param(params);

// 3. node javascript
const querystring = require('querystring');
let queryString = querystring.stringify(params);


// 4 - encodeURIComponent javascript
var queryString = Object.keys(params).map((key) => {
    return encodeURIComponent(key) + '=' + encodeURIComponent(params[key])
}).join('&');


//  AJAX - PROMISES in jquery
$.ajax({
    data: someData,
    dataType: 'json',
    url: '/path/to/script',
    success: function (data, textStatus, jqXHR) {
        // When AJAX call is successfuly
        console.log('AJAX call successful.');
        console.log(data);
    },
    error: function (jqXHR, textStatus, errorThrown) {
        // When AJAX call has failed
        console.log('AJAX call failed.');
        console.log(textStatus + ': ' + errorThrown);
    },
    complete: function () {
        // When AJAX call is complete, will fire upon success or when error is thrown
        console.log('AJAX call completed');
    },
});

// #Promises and deferred objects
// .done() => .success() 
// .fail() => .error() 
// .always() => .complete()
$.ajax({
    data: someData,
    dataType: 'json',
    url: '/path/to/script'
}).done(function (data) {
    // If successful
    console.log(data);
}).fail(function (jqXHR, textStatus, errorThrown) {
    // If fail
    console.log(textStatus + ': ' + errorThrown);
});


var ajaxCall = $.ajax({
    context: $(element),
    data: someData,
    dataType: 'json',
    url: '/path/to/script'
});

ajaxCall.done(function (data) {
    console.log(data);
});


// Multiple Ajax
var a1 = $.ajax({ /*...*/ }),
    a2 = $.ajax({ /*...*/ });

$.when(a1, a2).done(function (r1, r2) {
    // Each returned resolve has the following structure:
    // [data, textStatus, jqXHR]
    // e.g. To access returned data, access the array at index 0
    console.log(r1[0]);
    console.log(r2[0]);
});


// Incase a2 depend on a1 results
var a1 = $.ajax({
    url: '/path/to/file',
    dataType: 'json'
}),
    a2 = a1.then(function (data) {
        // .then() returns a new promise
        return $.ajax({
            url: '/path/to/another/file',
            dataType: 'json',
            data: data.sessionID
        });
    });

a2.done(function (data) {
    console.log(data);
});


// FOR...OF
// use to loop arrays, array-like-objects, maps, sets, DOM collections
/*
    Array-Like Objects, appear in below cases
    is Objects, like an Array but not an Array
    - arguments
    - HTMLCollection
    - NodeList
    - document.getElementsByTagName
    - document.querySelectorAll
*/
function testArgumentsKeyword() {
    console.log(arguments.length, arguments[0])
}

testArgumentsKeyword('arg1', 'arg2', 'arg3', 'arg4', 'arg5');

// Incase array
console.log(['arg1', 'arg2', 'arg3', 'arg4', 'arg5'].filter(el => el === 'arg2'));  // ["arg2"]

// Incase array-like-objects
function testArgumentsKeyword() {
    console.log(arguments.filter(el => el === 'arg2'))
}

testArgumentsKeyword('arg1', 'arg2', 'arg3', 'arg4', 'arg5');
// "Uncaught TypeError: arguments.filter is not a function"


// Convert Array-like Objects to Arrays in ES6
function testArgumentsKeyword() {
    const arr = Array.from(arguments);
    console.log(arr.filter(el => el === 'arg2'))
};

testArgumentsKeyword('arg1', 'arg2', 'arg3', 'arg4', 'arg5');


// Convert Array-like Objects to Arrays in ≤ ES5
function testArgumentsKeyword() {
    const arr = Array.prototype.slice.call(arguments);
    console.log(arr.filter(el => el === 'arg2'))
}

testArgumentsKeyword('arg1', 'arg2', 'arg3', 'arg4', 'arg5');



// call(), apply() và bind() in javascript


var user = {
    students: {
        name: "Anonystick blog's javascript",
        website: "https://anonystick.com"
    },
    showInfo: function (event) {
        preventDefault(event);
        console.log(this.students.name);  // this: user
    }
}

// Gán hàm thực thi lên sự kiện click chuột vào button
$("button").click(user.showInfo);  // this => button

// Error: Cannot read property 'name' of undefined
// => call(), apply(), bind() used to change this from button => user
$("button").click(user.showInfo.call(user));  // this => user
// OR
$("button").click(user.showInfo.bind(user));  // this => user
// OR


// javascript object map
var myObject = { 'a': 1, 'b': 2, 'c': 3 }
//convert to Array
myObject = Object.keys(myObject);

//Sau đó sử map như một Array.

Object.keys(myObject).map(function (key, index) {
    myObject[key] *= 2;
});

console.log(myObject);
// => { 'a': 2, 'b': 4, 'c': 6 }


// javascript for in object
var myObject = { 'a': 1, 'b': 2, 'c': 3 };

for (var key in myObject) {
    if (myObject.hasOwnProperty(key)) {
        myObject[key] *= 2;
    }
}

console.log(myObject);
// { 'a': 2, 'b': 4, 'c': 6 }
