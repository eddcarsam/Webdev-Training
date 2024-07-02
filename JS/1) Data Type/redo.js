// // Operator % (checks for remainder)
// console.log(123 % 3); 
// console.log(23 % 4);
// console.log(18 % 5); 


// // Math.round() rounds off a number
// console.log(Math.round(6.30));
// console.log(Math.round(2.10));
// console.log(Math.round(5.68));
// console.log(Math.round(8.01345));

// // console.log(Math.random() * 5 );
// console.log(Math.floor( Math.random() * 5 ) );


// console.log("12" + 3);  //213
// console.log(parseInt("Car80T") + 5); // => NaN
// console.log(parseInt("CSS25") + 5); // => NaN


// console.log(isNaN("Batman")); // true
// console.log(isNaN(12345)); // false
// console.log(isNaN("999")); // false because ignoring the "" 


// console.log("Who am I".length); // 8 charcter
// console.log("LA Clippers".charAt(4));
// console.log("No Pain" + " " + "No Gain" + "!");

// var mysport = new Object();
// mysport[1] = "Basketball"
// mysport[3] = "Tennis"
// mysport[5] = "Swimming"
// mysport[10] = "Cycling"
// mysport['newitem'] = "bowling"
// console.log(mysport);
// console.log(mysport[10]);




// var mybook = {}
// console.log(mybook);

// mybook = {
//     1: "HTML",
//     3: "CSS",
//     5: "Javscript",
//     newbook: "Python",
// }
// console.log(mybook);

// ///change items
// mybook['3'] = "React.Js"
// console.log(mybook);

// var world = {
//     country: "Australia",
//     State: {
//         ACT: "Australian Capital Territory",
//         NSW: "New South Wales",

//         NT: "Northern Territory",
//         QLD: "Queensland",
//         SA: "South Australia",
//         TAS: "Tasmania",
//     }
// }
// console.log(world.State);
// console.log(world.State.NSW);



function Basketballplayer(team, player, numbers) {
    this.nteam = team;
    this.nplayer = player;
    this.nnumber = numbers;
    this.sayNBA = function () {
        console.log("My favourite NBA team", this.nteam, "and favouite player is", this.nplayer, ".He wear number", this.nnumber, ".");
    };
    this.sayball = function() {
        console.log("NBA team has", this.nteam, "team", this.nplayer,"numbers",this.nnumber);
    }
}



var laker = new Basketballplayer("Lakers", "Kobe", 8);
var bulls = new Basketballplayer("bulls", "Jordon", 23);
var clippers = new Basketballplayer("clippers", "Kawhi", 2);
console.log(bulls);
laker.sayNBA()
bulls.sayNBA()
clippers.sayNBA()
bulls.sayball()




var myarray =["Apple","Banana", "Orange" , "Pears"]
console.log(myarray);
myarray.push("nuts")
myarray.push("coke")
console.log(myarray);
myarray.pop()
var sortitems = myarray.sort()
console.log(myarray);
var sortitems = myarray.reverse()
console.log(myarray);


var nnba = ["Kobe","MJ", "shaq"]
var nno=[8,23,32]
var nteam=["Lakers","Bulls","Magic"]
var allnba =nnba.concat(nno,nteam)
console.log(allnba);