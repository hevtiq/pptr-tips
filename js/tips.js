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
    for (idx = 0; idx < arr.length; idx++)
        if (arr[idx] === val)
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
        })
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
            }, 50)
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
    // defines a local cache (Map object)
    const cache = new Map();

    // returns wrapper function
    return (...args) => {
        const key = args.join('-');

        // If cache no value with that key
        if (!cache.has(key)) {
            // stores the value to cache
            cache.set(key, func(args))
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
            fn(arr[i])
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
        console.log("wait. how do you stop that thing?")
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
        container.splice(index, 1)
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
if (valid)
    doSomething();
if (amount > 100)
    doSomething();
else if (amount > 200)
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

        console.log(result.rows[0])
    } catch (err) {
        console.log('Ouch!', err)
    } finally {
        if (conn) { // conn assignment worked, need to close
            await conn.close()
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

        console.log(result)
    })
})

var MongoClient = require('mongodb').MongoClient

MongoClient.connect('mongodb://localhost:27017/animals', function (err, client) {
    if (err) throw err

    var db = client.db('animals')

    db.collection('mammals').find().toArray(function (err, result) {
        if (err) throw err

        console.log(result)
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
    db.run('CREATE TABLE lorem (info TEXT)')
    var stmt = db.prepare('INSERT INTO lorem VALUES (?)')

    for (var i = 0; i < 10; i++) {
        stmt.run('Ipsum ' + i)
    }

    stmt.finalize()

    db.each('SELECT rowid AS id, info FROM lorem', function (err, row) {
        console.log(row.id + ': ' + row.info)
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
        console.log(err)
    } else {
        executeStatement()
    }
})

function executeStatement() {
    request = new Request("select 123, 'hello world'", function (err, rowCount) {
        if (err) {
            console.log(err)
        } else {
            console.log(rowCount + ' rows')
        }
        connection.close()
    })

    request.on('row', function (columns) {
        columns.forEach(function (column) {
            if (column.value === null) {
                console.log('NULL')
            } else {
                console.log(column.value)
            }
        })
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
        console.log('    ' + i + ': ' + reply)
    })

    client.quit()
})


// Connect PostgreSQL Nodejs
// $ npm install pg-promise
var pgp = require('pg-promise')(/* options */)
var db = pgp('postgres://username:password@host:port/database')

db.one('SELECT $1 AS value', 123)
    .then(function (data) {
        console.log('DATA:', data.value)
    })
    .catch(function (error) {
        console.log('ERROR:', error)
    })

// Connect Neo4j Nodejs
// $ npm install apoc
var apoc = require('apoc')

apoc.query('match (n) return n').exec().then(
    function (response) {
        console.log(response)
    },
    function (fail) {
        console.log(fail)
    }
)


// Connect LevelDB Nodejs
var levelup = require('levelup')
var db = levelup('./mydb')

db.put('name', 'LevelUP', function (err) {
    if (err) return console.log('Ooops!', err)

    db.get('name', function (err, value) {
        if (err) return console.log('Ooops!', err)

        console.log('name=' + value)
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
        console.log(err)
    } else {
        console.log(body)
    }
})

// Get a list of all books
books.list(function (err, body) {
    if (err) {
        console.log(err)
    } else {
        console.log(body.rows)
    }
})


// Connect Couchbase
var couchbase = require('couchbase')
var bucket = (new couchbase.Cluster('http://localhost:8091')).openBucket('bucketName')

// add a document to a bucket
bucket.insert('document-key', { name: 'Matt', shoeSize: 13 }, function (err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
    }
})

// get all documents with shoe size 13
var n1ql = 'SELECT d.* FROM `bucketName` d WHERE shoeSize = $1'
var query = N1qlQuery.fromString(n1ql)
bucket.query(query, [13], function (err, result) {
    if (err) {
        console.log(err)
    } else {
        console.log(result)
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
        ...arr.slice(end, arr.length)
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
        groups[val].push(item)
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
        resolve(a * 5)
    })
}

// promise function 2
function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2)
    })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
    return a * 3
}

// promise function 4
function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4)
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
            resolve("something")
        }, 10);
    })

}

fn2 = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("from b");
        })
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
        setTimeout(() => resolve('I did something'), 10000)
    })
}

const watchOverSomeoneDoingSomething = async () => {
    const something = await promiseToDoSomething()
    return something + '\nand I watched'
}

const watchOverSomeoneWatchingSomeoneDoingSomething = async () => {
    const something = await watchOverSomeoneDoingSomething()
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
    // loading.show()
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
        if (obj.hasOwnProperty(key))
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
            if (test(element)) indices.push(index)
            return indices
        }, [])
    } else {
        return this.reduce((indices, element, index) => {
            if (element === test) indices.push(index)
            return indices
        }, [])
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
        throw new Error(`Expecting selector to be a function, but received ${typeof (selector)} instead.`)
    }

    let found = new Set()
    return this.filter(element => {
        if (found.has(selector(element))) {
            return false
        } else {
            found.add(selector(element))
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
console.log(JSON.stringify(arr.limit(2))) ;
// [
//     {"id":1,"name":"king"},
//     {"id":2,"name":"master"}
// ]

// Skip()
console.log(JSON.stringify(arr.skip(2))) ;
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