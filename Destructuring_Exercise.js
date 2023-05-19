// Object Destructuring 1

// This will print:
// 8
// 1846

// Object Destructuring 2

// This will print:
// { yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659 }

// Object Destructuring 3

// These will return:
// "Your name is Alejandro and you like purple"
// "Your name is Melissa and you like green"
// "Your name is undefined and you like green"

// Array Destructuring 1

// This will print:
// "Maya"
// "Marisa"
// "Chi"

// Array Destructuring 2

// This will print:
// "Raindrops on roses"
// "whiskers on kittens"
// ["Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// Array Destructuring 3

// This will print:
// [10, 30, 20]


// ES2015 Object Destructuring
const {numbers: {a, b}} = obj;

// ES2015 One-Line Array Swap with Destructuring
[arr[0], arr[1]] = [arr[1], arr[0]];

// raceResults()
const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});
