// Comment

console.log("Hi Eddie")


console.log(10); // Number
console.log("10"); // String

// // typeof operator to see the datatype

console.log(typeof 10);
console.log(typeof "10");


// // JS can do Maths for us!

console.log(10 + 9);


console.log(10 + (4 / 6 + 4 * 4 - 1) - 1);

// DMAS

// // Modulus Operator % (checks for remainder)
console.log(10 % 3); // 1
console.log(10 % 4); // 2
console.log(10 % 5); // 0


// // JS has inbuilt Math object

console.log(Math);

console.log(Math.random());


console.log(Math.PI);


// //  Math.floor drops the decial points and returns the whole number

console.log(Math.floor(3.567));
console.log(Math.floor(3.99));


// // Math.round() rounds off a number

console.log(Math.round(4.50));
console.log(Math.round(4.99));
console.log(Math.round(4.49));
console.log(Math.round(4.005999));


// // Generate a random number between 0 - 10

// console.log(Math.random() * 10 );

console.log(Math.floor( Math.random() * 10 ) );



// // concatenation

console.log("21" + 5);

// console.log(21 + 5);

/// //parseInt() to convert a string into a number

console.log(parseInt("21") + 5);

console.log(parseInt("20abc") + 5); // 25
console.log(parseInt("ab20c") + 5); // NaN (Not a Number)
console.log(parseInt("abc20") + 5); // NaN (Not a Number)

// // isNaN() this checks wether this thing is Not a Number

console.log(isNaN("Eddie")); // true
console.log(isNaN(10)); // false
console.log(isNaN("10")); // false because its ignoring the "" commas




// // Strings
// // Sequences of UnicodConsole.log("");e Characters

console.log("Hello Eddie");

console.log("Hello Eddie".length); // 11

console.log("Super Duper".charAt(6));

console.log("Hello" + " " + "Eddie" + "!");
console.log("Hello" + " Eddie" + "!");


console.log("this text should be in upper case".toUpperCase());
console.log("THIS SHOULD BE IN LOWER CASE".toLowerCase().toUpperCase().toLowerCase());

console.log("this text should be".toLocaleUpperCase() + " GFGGGG".toLowerCase());

