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
const [,,c] = [5, 4, 6, 9, 7];
console.log(c);  // 6

// destructed the property data of the axios.get('/api/users/7')
// assigned data to a proper variable's name, users
// used the array's destructing assignment to define the variable users as the first index of the data property.
const { data: [user] } = await axios.get('/api/user/7');
console.log(user);  // { username: 'aho' }


