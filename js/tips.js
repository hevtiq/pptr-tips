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
