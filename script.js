var date = new Date();
// document.body.innerHTML = "<p>Today is: " + date + "</p>";

var a = 5;
var b = 10;
var sum = a + b;
document.body.innerHTML = `
<p>Today is: ${date}</p>
<p>a + b = ${sum}</p>
`;

// !-------------------------------- CONDITIONAL STATEMENTS -----------------------------------
// ? IF STATEMENT

// if(some condition is true) {
//   Do this;
//   and that;
// }

// ? IF / ELSE    STATEMENT

// if(some condition) {
//   is true, do this.
// } else {
//   do something else because obviously this condition is false
// }

// ? EQUALITY // less than // not equal

// if(a==b) {
//   do this
// } else {
// do something else
// } or if (a>b) or (a>=b) or (A!=b) if a is NOT equal to b :)

var a = 5;
var b = 5;
var equal;

if (a == b) {
  equal = true;
} else {
  equal = false;
}
document.body.innerHTML += "The numbers match: " + equal;

// ? AND (&&) / OR (||)  OPERATORS

// if( a == b && c == d ) {}    <--- if a equals b AND c equals d
// if (a == b || c==d) {}          <---- if a equals b OR c equals d  which ofc is either this or that or both
// if ( (a == b || c == d ) && ( ( a == b) != (c ==d) ) ) {}   <--- IF a equals b XOR c equals d (not both)

// !-------------------------------- ARRAYS -----------------------------------

var colors;
colors = [
  "red",
  "green",
  "blue",
  "yellow",
  "black",
  "violet",
  "pink",
  "orange"
];

document.body.innerHTML +=
  "<p> I've just created these colors: " + colors + "</p>";

console.log("list: ", colors);

// ? PROPERTIES of ARRAYS

// Get a property of an object by name:

console.log("Array lenght: ", colors.length);

//? METHODS eg:
// Reversing array

console.log("Reversing ", colors.reverse());

//? SHIFT removes first value of the array:

colors.shift();
console.log("Removing first value: ", colors);

//? Removing last value of the array would be:

colors.pop();
console.log("I've now removed the last color: ", colors);

//? I can also add some colours //#endregion

colors.push("bubblegum", "cornflowerblue");
console.log(colors);

//? I can find certain colors based on their position and then tell how many I want to remove (position, number)

colors.splice(2, 6);
console.log(colors);

//? I can also create a copy of an array and eg. add some new colors to that copy :)

var newcolors = colors.slice();
newcolors.push("brown", "grey", "sraczkowate");
console.log("new colors: ", newcolors);

//? USeful one would return the items in the array separated with przecinki

var arrayString = colors.join(" | ");
console.log("String from this array is: ", arrayString);

// !-------------------------------- FUNCTIONS -----------------------------------

// NAMED FUNCTION

function multiply(a, b) {
  var result = a * b;
  console.log(result);
  return result;
}

var multiplied = multiply(3, 4);

// Annonymous functinons don't have a name, so the parentheses appears zaraz po funcji

var divided = function() {
  var result = 3 / 4;
  console.log("3 divided by 4 is ", result);
};

divided();

// Immediatly invoked  function expressions run as soon as the browser finds them

(function() {
  var result = 12 / 0.75;
  console.log("12 divided by 0.75 is ", result);
})();

function findBiggest() {
  console.log("the function is running!");
}
findBiggest();

function bigger() {
  a > b ? console.log("a: ", a) : console.log("b: ", b);
}

var a = 3 / 4;
var b = 5 / 7;

bigger();

//better creation of function

function bestOne(a, b) {
  a > b ? console.log("a is : ", a) : console.log("b: ", b);
}

var alpha = 3 / 4;
var beta = 5 / 7;

bestOne(alpha, beta);
bestOne(9, 3);

function results(a, b) {
  var result;
  a > b
    ? (result = ["first fraction ", a])
    : (result = ["second fraction ", b]);
  return result;
}

var dupa = 3 / 4;
var jas = 5 / 7;

bestOne(dupa, jas);
bestOne(9, 3);

// !--------------------------------ANONYMOUS FUNCTIONS ----------------------------------

var a = 6;
var b = 5;

var anonim = function() {
  var result;
  a > b ? (result = ["a ", a]) : (result = ["b ", b]);
  console.log(result);
};

anonim();

// !-------------------------------CONST AND LET ----------------------------------

const myconstant = 5;
console.log(myconstant);

// constant variable CANNOT BE CHANGED!!! no matter whaaaat.

// Let is a block scope variable, so a variable with smaller scope than a var.

function logScope() {
  let localVar = 2;

  if (localVar) {
    let localVar = "I'm different!";
    console.log("nested localVar: ", localVar);
  }
  console.log("LogScope localVar: ", localVar);
}

logScope();

// !------------------------------- OBJECTS ----------------------------------

// var course = new Object();

// course.title = "Java Script";
// course.instructor = "Pauline";
// course.level = 1;
// course.published = false;
// course.views = 0;

var course = {
  title: "java script",
  instructor: "Pauline",
  level: 1,
  published: false,
  views: 0
};

console.log(course.instructor);

// !------------------------------- OBJECT CONSTRUCTORS ---------------------------------

function Course(title, instructor, level, published, views) {
  this.title = title;
  this.instructor = instructor;
  this.level = level;
  this.published = published;
  this.views = views;
  this.updateViews = function() {
    return ++this.views;
  };
}

var course01 = new Course("Java Script", "Pauline", 1, "false", 0);
var course02 = new Course("Ecma Script", "PauPau", 1, true, 1234);

console.log(course01);
console.log(course02);



// !------------------------------- DOM EVENTS ---------------------------------

