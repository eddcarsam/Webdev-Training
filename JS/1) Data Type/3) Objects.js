/**
 * 
 * Objects
 * 
 * In JS whenever we want to include real life objects we use objects
 * 
 * Syntax:
 * 
 * var myObject = {1: "Chris"} // 1 is the key and "Chris" is the value stored inside that key
 */


// // Traditional Way

// var myObj = new Object();

// console.log(myObj);

// console.log(typeof myObj);

// // // to fill in the values

// myObj[1] = "Eddie"
// myObj[2] = "Huzaifa"
// myObj[3] = "Benji"
// myObj[50] = "Polina"
// myObj['newKey'] = "Sam"

// console.log(myObj);

// // display a single value from the myObj


// console.log(myObj['1']);

// console.log(myObj['3']);

// console.log(myObj['newKey']);

// console.log(myObj.newKey);

// console.log(myObj.2); // X NOT ALLOWED


// // The modern way to make objects


// var myObj = new Object();
var myObj = {}

console.log(myObj);
console.log(typeof myObj);

// // to fill in the values

myObj = {
    1: "Eddie",
    2: "Tariq",
    3: "Huzaifa",
    40: "Polina",
    newkey: "happy"
}

console.log(myObj);

console.log(myObj[2]);

console.log(myObj.newKey);

mynewobj = {
    1: "Notebook",
    2: "RAM",
    3: "Memory",
}
console.log(mynewobj);


mynewobj['2'] = "Something else"

console.log(mynewobj);


var demoObject = {
    firstName: "Eddie",
    lastName: "Lee",
    age: 24,
    phNo: {
        home: 12345,
        office: 67890,
        3: [1, 2, 3, 4, 5, { 1: "Cherry", 2: "Apple", 4: [["Find me!"]] }]
    },
    address: {
        home: "123 WWW Street 123",
        office: "Abc Street Xyz",

    }

}



console.log(demoObject.firstName);
console.log(demoObject.address.home);
console.log(demoObject.phNo[3][5][4][0]);
console.log(demoObject.phNo[3][5][4][0][0]);

// console.log(demoObject.phNo.home);


var donut = {
    type: "Coconut",
    glazed: true,
    sweetness: 7,
    hasChocolates: false
}

var donut2 = {
    type: "Chocolate",
    glazed: true,
    sweetness: 10,
    hasChocolates: true
}

// 100 * 50 = 5000 LINES of code


console.log(donut.type);
console.log(donut2.type);


function DonutConstructor(type, glazed, sweetness, hasChocolate) {
    this.donutType = type;
    this.isGlazed = glazed;
    this.isSweetness = sweetness;
    this.ishaschocolates = hasChocolate;
    this.sayHi = function () {
        console.log("Hi there I am a", this.donutType, " Donut speaking");
    }
    // // make a function which tell about all the properties of the donut
    this.sayStats = function () {
        console.log("Donut Type is: ", this.donutType, "isGlazed", this.isGlazed, "Sweetness Count: ", this.isSweetness + "/10", "has Chocolate? ", this.ishaschocolates);
    };

}


var vanillaDonut = new DonutConstructor("Vanilla", true, 8, false)
var abcDonut = new DonutConstructor("Mad", false, 2, true)
console.log(abcDonut.stats);

vanillaDonut.sayStats()
abcDonut.sayStats()
// console.log(abcDonut);
// console.log(abcDonut.donutType);
// console.log(vanillaDonut.donutType);
// console.log(vanillaDonut.sayHi());
// vanillaDonut.sayHi()
// abcDonut.sayHi()

// console.log(abcDonut.sayHi());


// console.log(console.log("Hi Eddie"));
// console.log("Hi Eddie")

/**
 * Make a vehicle constructor, construct 4 vehicles from that
 *
 * each vehicle should have name tyoe color and tyreSize
 */

// function carlist(name, type, color, typesize) {
//     this.cname = name;
//     this.ctype = type;
//     this.ccolor = color;
//     this.ctypesize = typesize;

// }
// var carHonda = new carlist("Civic", "senden", "red", 15)
// var carToyota = new carlist("Rav4", "4wd", "blue", 17)


// console.log(carHonda);
// console.log(carToyota);





