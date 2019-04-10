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

{} 

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