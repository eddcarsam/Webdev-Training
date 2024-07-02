

/**
 * Array is a collectios of data
 * we can store any data type inside the array
 * array uses index management system
 */

var myArray = [1, 2, "String", { 1: "Chris" }, [1, 2], "a"]

console.log(myArray[0]);

// // traditional way

// var myArray = new Array();

// console.log(myArray);

// // // fill in the values
// myArray[0] = "Eddie"
// myArray[1] = "Huzaifa"
// myArray[2] = "Jim"
// myArray[100] = "Tomie"

// console.log(myArray);

// console.log(myArray[100]);


// console.log(myArray.length); // 101


// // modern syntax

var myArray = [1, 2, 3, 4, 5]

console.log(myArray);

myArray[100] = "Jhon"

console.log(myArray);

myArray[1] = "88" // to modify the value

console.log(myArray);

// // inbuilt functions for array


/**
 * push(element) to add the element at the last index of the array
 * pop() deletes the last element of the array
 */

var myGamesArray = ["GTAV", "Fortnite"]

myGamesArray.push("Valorant1")
myGamesArray.push("Valorant2")
myGamesArray.push("Valorant3")


myGamesArray.pop()

console.log(myGamesArray[1][1]); // o of fortnite


/**
 * sort() to sort the array in ascending order
 * reverse() to flip the array
 * concat() to join one array with the other
 * slice() to cut a portion out of the array and save in a new copy
 */


var myNums = [4, 7, 8, 9, 2, 3, 1, 9]
var mySortedArray = myNums.sort() // ascending order
console.log(mySortedArray);

mySortedArray.reverse() // descending order

console.log(mySortedArray);

var myNames = ["Eddie", "Huzaifa"]
var myOtherNames = ["Sara", "Tim"]
var evenOtherNames = ["John", "BoB"]


// var firstTwoJoined = myNames.concat(myOtherNames)

// console.log(firstTwoJoined);


// var allJoined = firstTwoJoined.concat(evenOtherNames)
// console.log(allJoined);


var allInOne = myNames.concat(myOtherNames, evenOtherNames)

console.log(allInOne);



/// // Slice(), to take a portion out of the array

// var myNewNums = [3, 4, 5, 6,1 ,4, 33, 66, 77]

// // var mySlicedArray = myNewNums.slice(4)
// // var mySlicedArray = myNewNums.slice(4, 7)

// var mySlicedArray = myNewNums.slice(1, 5)

// console.log(myNewNums);
// console.log(mySlicedArray);
 


var myDummyArray = [1, 5, 6, 7, "abc", "xyz", 5, 7, 11, 22, 66]

myDummyArray.splice(1,1);

console.log(myDummyArray);

// myDummyArray.reverse();


// console.log(myDummyArray);

// myDummyArray.pop()
// myDummyArray.pop()


// console.log(myDummyArray);
// myDummyArray.push(1)
// console.log(myDummyArray);

// myDummyArray.reverse()

// console.log(myDummyArray);



// // splice() its just like slice but it does MODIFY the orignal array


var myball1= ["Bulls","Clippers","Lakers","Dallas", 4, 5, 6, 7, 8, 9]

console.log(myball1, "orignal array");

// myball1.splice(2, 1) // remove 1 item at 2nd index
// myball1.splice(2, 3) // remove 3 item at 2nd index
// myball1.splice(2, 1, "dummy") // remove 1 item at 2nd index and replace with dummy
myball1.splice(2, 1, "dummy", "Dummy2", "Dummy3") // remove 1 item at 2nd index and replace with dummy

console.log(myball1, "spliced array");


/**
 * Homework:
 * Revise the inbuot functions practice them in redo
 * 
 * Research slice VS splice
 * make notes add them here in this comment
 * 
 * show me 5 practical examples of both
 * 
 * 
 * 
 * 
 */