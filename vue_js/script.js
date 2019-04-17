var data = {
  "name": "Extremely Affordable on-the-road hotel",
  "description": "You'll be thrilled when visiting this extremely cool hotel, wherever you're going, no matter how tired you are, come on in, and enjoy the experience",
  "image": "https://source.unsplash.com/random",
  "price": 99
}





var app = new Vue({
  el: '#app',
  data: data
}
);



// ------------------------------------------ JS VARIABLES and TYPES -----------------------------------------

var box = "blue",
  smallBox = "smallie",
  tinyBox = "tiny",
  longBox = "longie";

// ------------------------------------------ JS VARIABLES and TYPES -----------------------------------------

// A string is character data meaning things like sentences, words, single letters, numbers, or punctuation. 
// Basically it means anything between quote marks.

"this is a string";

"This is Joe's \"favourite\" string";

"This is \
Joe's \
favourite string";

// ------------------------------------------ String Properties and methods -----------------------------------------

var myString = "This is my string. Leave it alone";

myString.length;

myString.toUpperCase;


// ------------------------------------------ NUMBERS -----------------------------------------

1;
1.9;
12.334343434455555555555555555555555553333;
-12;
Infinity;
-Infinity;
NaN;

var myNumber = 33;

Math.round(12.988338383844995);

Math.random();

// ------------------------------------------ BOOLEANS - TRUE OR FALSE  -----------------------------------------

true;
false;

var myLocation = "room", myOtherlocation = "bathroom";

myLocation === myOtherlocation;


// ------------------------------------------ OBJECTS ARRAYS AND MORE  -----------------------------------------

{ }

// that is an empty object


var myEmptyObject = {};

var notEmptyObject = {
  "name": "Pauline",
  "age": 21,
  "is she hot?": true,
};


// ------------------------------------------ OBJECTS for MODELING DATA  -----------------------------------------

var human = {

  eyes: "blue",
  legs: "two",
  head: "one",
  messedup: true,
  averageChildren: 3
};

var bear = {
  genus: "ursus",
  species: "arctos",
  commonName: "brown bear",
  noisy: true,
  deadly: true
};


// ------------------------------------------ MANIPULATING OBJECTS  ----------------------------------------

// If I want to inspect the object and find out what one of its properties is, 
// here's how I can do that. I can type the variable name and then a dot. 

human.head
human.eyes

human["head"];

bear.color = "black";

bear["accomodation"] = "forest";


delete bear.color;


// ------------------------------------------ REFERENCES & OBJECTS  ----------------------------------------

var human2 = human;

// !This will give 2 variables that will point to the same values!!! CAREFUL

// ------------------------------------------ ARRAYS  ----------------------------------------

var myArray = [0, 1, 2, 3, "string", true, false]

var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "Saturday", "Sunday"];

var ArrayOfStuff = [myArray, daysOfTheWeek];

// ------------------------------------------ Manipulating ARRAYS  ----------------------------------------

var cities = [
  'milan',
  'paris',
  'london',
  'berlin',
  'new york'
];

cities[0];

cities[2] = "new york"

cities[cities.length] = "warsaw"

// cities.length adds to the list

cities.push("Cracow");

// PUSH ADDS SOMETHING TO THE END OF THE LIST

cities.pop("warsaw");

// REMOVES ITEM FROM THE LIST


delete cities[2];

// !WILL RESULT WITH DELETING THE item BUT it will leave the space EMPTY !!!!


cities.splice(2, 1);

//this will remove the item from the list completely



// ------------------------------------------ REGULAR EXPRESSIONS  ----------------------------------------

var string1 = "This is bullshit";
var string2 = "This is not bullshit";
var string3 = "This is serious";
var string4 = "this is ok. I was just kidding";

var regex = /this/;

// looks for the exact word in the string

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));


var regex = /this/i;

// looks for the  word in the string case INSENSITIVE , hence i



console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));


var regex = /^this/i;

// looks for the  word in the string AT THE BEGGINING case INSENSITIVE , hence i



var string1 = "This is bullshit";
var string2 = "This is not bullshit";
var string3 = "This is serious";
var string4 = "this is ok. I was just kidding";

console.log(regex.test(string1));
console.log(regex.test(string2));
console.log(regex.test(string3));
console.log(regex.test(string4));


var regex = /this$/i;

// looks for the word in the string AT THE END case INSENSITIVE , hence i




// ------------------------------------------ SIMPLE COMPARISONS  ----------------------------------------

var one = 1, two = 2;

one === one
one === two

one == one

// == also checks aquality but its not very strict

one == 1

//will result in true for ==

one !== one;

// !== means NOT IDENTICAL

one > two;

one >= two;


// ------------------------------------------ ARTHIMETIC OPERATORS  ----------------------------------------

// BASIC OPERATORS

// +
// -
// /
// *

2 + 2;
6 / 2;
4 - 2;
2 * 2;
20 % 2;
// % determines if the number is even or odd

var counter = 0;

counter = counter + 1;

counter += 1

//same as counter = counter + 1 but shorter

counter -= 1;

counter--;

counter *= 2;

"cat" + "dog";

// will add those strings "cat dog"


// ------------------------------------------ LOGICAL OPERATORS  ----------------------------------------

// *&& is AND || is OR and ! is NOT eg. !TRUE  (not true)

var animal1 = "fox";
var animal2 = "cow";
var animal3 = "crow";

animal1 === 'fox' && animal2 === 'cow';



// ------------------------------------------ CONDITIONALS IF  ----------------------------------------


var answer = window.confirm("click OK, get true. Click Cancel, and be false.");

if (answer === true) {
  console.log("you said True!");

}

if (answer === true) {
  console.log("U said true and it is!");
} else {
  console.log("You clicked something else");
}

var answer1 = window.prompt("type in YES, NO, or MAYBE. Then click OK.");

if (answer1 === "YES") {
  console.log("You said YES!");
} else if (answer1 === "MAYBE") {
  console.log("You said maybe. I don't know what now");
} else if (answer1 === "NO") {
  console.log("You siad no. :(");
} else {
  console.log("You're quite a rebel!");
}

// ------------------------------------------ CONDITIONALS SWITCH  ----------------------------------------


switch (answer1) {
  case "YES":
    console.log("you've just wrote YES");
    break;
  case "MAYBE":
    console.log("You've just wrote MAYBE");
    break;
  case "NO":
    console.log("you've just wrote NO");
    break;
  default:
    console.log("you're weird");
    break;
}

// ------------------------------------------ IFs SHORTER  ----------------------------------------

var man = "Joe";

if (man === "Joe") {
  console.log("How you dooooooing?");
} else {
  console.log("The man has no face");
}

var need = "dollars",
  got = "nothing",
  cryAboutIt = true;

if (need === got) {
  console.log("horay! hooray it's a jolly jolly day!");
  cryAboutIt = true;
} else {
  console.log("F@#$ my life");
  cryAboutIt = false;
}

if (cryAboutIt) {
  console.log("Child says: wth?");
}

if (!cryAboutIt) {
  console.log("Pheeew!");
}

// ------------------------------------------ TERNARY OPERATORS ----------------------------------------

var woman = "Eve";

woman === "Eve"

  ? console.log("Girl, you'll be a woman soon")
  : console.log("The paradise is safe.");


var job = (woman === "Eve") ? ("The first one") : ("We're not in trouble");

// ------------------------------------------ CHECKING THA TYPE OF THE variable ----------------------------------------


var thing = 12;

// thing = "twelve";

typeof thing


// ------------------------------------------ LOOPS ----------------------------------------

for (var i = 0; i < 10; i += 1) {

  console.log(i);

}


var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];

for (i = 0; i < pageNames.length; i += 1) {
  if (document.title === pageNames[i]) {
    console.log("we are here: " + pageNames[i]);

  } else {
    console.log("we are not here: " + pageNames[i]);
  }
}



var pageNames = [
  "Home",
  "About Us",
  "Contact Us",
  "JavaScript Playground",
  "News",
  "Blog"
];

for (var p in pageNames) {
  console.log(p, pageNames[p]);
}




// for (var p in pages) {
//   if (pages.hasOwnProperty(p)) {
//     console.log(p, pageNames[p]);
//   }
// }

// ------------------------------------------WHILE  LOOPS ----------------------------------------


var i = 0;
while (i < 10) {
  console.log(i + "... This will go until we hit 10");
  i += 1;
}



var myItem = false;
do {
  console.log(
    "maArray has " + myArray.length +
    "items now. This loop will go until we pop a false"
  );

  myItem = myArray.pop();

} while (myItem !== false);


// ------------------------------------------FUNCTIONS ----------------------------------------





console.log("Hi");
console.log("What up?");
console.log("How you doing?");
console.log("howdy!");


function speak() {
  console.log("hi");
  console.log("What up?");
  console.log("How you doing?");
  console.log("howdy!");
}

speak();


// !------------------------------------------ARGUMENTS IN FUNCTIONS ----------------------------------------

fuddify("rabbit tracks!");

function fuddify(speech) {
if (typeof speech !=="string") {
  console.error("nice twy, awsehole!");
  return;
}

speech = speech.replace(/r/g, "w");
speech = speech.replace(/R/g, "w");

return speech;


}


var utterance = fuddify("You screwy rabbit!");
utterance;

function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
} 

function isEven(num) {
  return num % 2 === 0;
}

12 % 2;
isEven(44);



// !------------------------------------------MORE ON ARGUMENTS ----------------------------------------


function speakSomething(what, howMany) {

  var what = (typeof what !== "undefined") ? what : "Default speech";
  var howMany = (typeof howMany !== "undefined") ? howMany : 10;

  for (var i = 0; i < howMany; i += 1) {
    console.log(what + " (" + i +")"); 
  }

}


speakSomething("hey yooo!");



//------------------------------------------OBJECTS , REFERENCES AND FUNCTIONS ----------------------------------------

var calvin = {
  name: "calvin",
  bestFriend: "hobbes",
  form: "human boy"
};


function transmogrifier(calvin) {
  if (typeof calvin !== "object") {
    console.error("argument is of the wrong type");
    return;
  }

  var randomNumber = Math.floor(Math.random() *5) + 1;

  switch ( randomNumber ) {
    case 1:
    calvin.form = "tyrannosaurus";
    break;
    case 2:
    calvin.form = "grey wolf";
    break;
    case 3:
    calvin.form = "bengal tiger";
    break;
    case 4:
    calvin.form = "grizzly bear";
    break;
    case 5:
    calvin.form = "canary";
    break;
    default: 
    calvin.form = "human boy"
    break;
  }
}

transmogrifier(calvin)


// ------------------------------------------ FUNCTIONS & OBJECTS ----------------------------------------