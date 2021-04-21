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
}



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