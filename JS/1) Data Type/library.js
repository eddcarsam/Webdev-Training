// var Book001 = {
//     title: "JavaScript for Beginners",
//     Author: "Tim Simon",
//     Publisher: "dependently published (3 November 2023)",
//     ISBN: 979 - 8866360512,
//     Subject: "programming",
//     Status: "available",
// }

// // // C++ by Robert Lafore

// var Book002 = {
//     title: "JavaScript All-in-One For Dummies",
//     Author: "Chris Minnick",
//     Publisher: "For Dummies; 1st edition (5 April 2023)",
//     ISBN: 1119906830,
//     Subject: "programming",
//     Status: "available",
// }

// var Book003 = {
//     title: "Javascript: The Good Parts",
//     Author: "Douglas Crockford",
//     Publisher: "O′Reilly; First Edition (16 May 2008)",
//     ISBN: "979 - 8866360582",
//     Subject: "programming",
//     Status: "borrowed",
// }

// var Book004 = {
//     title: "JavaScript Crash Course: A Hands-On, Project-Based Introduction to Programming ",
//     Author: "Nick Morgan",
//     Publisher: "No Starch Press (5 March 2024)",
//     ISBN: 1718502265,
//     Subject: "programming",
//     Status: "borrowed",
// }

// var allBooks = [Book001, Book002, Book003, Book004]


// console.log(allBooks[2].ISBN);

// Do this activity again using Constructors concept
/// Construct atleast 10 books from that each book should have they same properties as they have now

function LibraryConstructor(title, Author, Publisher, ISBN, Subject, Status) {
    this.ltitle = title;
    this.lauthor = Author;
    this.lpublisher = Publisher;
    this.lISBN = ISBN;
    this.lSubject = Subject;
    this.lStatus = Status;
}

var Book001 = new LibraryConstructor("JavaScript for Beginners", "Tim Simon", "dependently published (3 November 2023)", "979 - 8866360512", "programming", "available")
var Book002 = new LibraryConstructor("A Smarter Way to Learn JavaScript", "Mark Myers", "CreateSpace Independent Publishing Platform; F First Edition Used (March 20, 2014)", "978-1497408180", "programming", "available")
var Book003 = new LibraryConstructor("Head First JavaScript Programming: A Brain-Friendly Guide", "Eric Freeman", "O'Reilly Media; 1st edition (May 6, 2014)", "978-1449340131", "programming", "available")
var Book004 = new LibraryConstructor("Eloquent JavaScript", "Marijn Haverbeke", "No Starch Press; 3rd edition (December 4, 2018)", "978-1593279509", "programming", "borrowed")
var Book005 = new LibraryConstructor("JavaScript: The Definitive Guide", "David Flanagan", "O'Reilly Media; 7th edition (June 23, 2020)", "978-1491952023", "programming", "available")
var Book006 = new LibraryConstructor("Secrets of the JavaScript Ninja", "John Resig, Bear Bibeault, and Josip Maras", "Manning; 2nd edition (September 10, 2016)", "978-1617292859", "programming", "available")
var Book007 = new LibraryConstructor("JavaScript: The Good Parts", "Douglas Crockford", "Yahoo Press; 1st edition (June 3, 2008)", "978-0596517748", "programming", "borrowed")
var Book008 = new LibraryConstructor("JavaScript and jQuery: Interactive Front-End Web Development", "Jon Duckett", "Wiley; 1st edition (July 21, 2014)", "978-1118871652", "programming", "available")
var Book009 = new LibraryConstructor("You Don't Know JS: ES6 and Beyond", "Kyle Simpson", "dependently published (3 November 2023)", "979 - 8845360512", "programming", "available")
var Book010 = new LibraryConstructor("Professional JavaScript for Web Developers", "Nicholas C. Zakas", "Packt Publishing; 1st edition (November 30, 2023)", "979 - 8898360512", "programming", "borrowed")

console.log(Book001);