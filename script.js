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
colors = ["red", "green", "blue", "yellow", "black", "violet", "pink", "orange"];

document.body.innerHTML += "<p> I've just created these colors: " + colors + "</p>";

console.log("list: ", colors);

// ? PROPERTIES of ARRAYS

// Get a property of an object by name:

console.log("Array lenght: ", colors.length);

//? METHODS eg:
// Reversing array

console.log("Reversing ", colors.reverse());


//? SHIFT removes first value of the array:

colors.shift();
console.log("Removing first value: ", colors );

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
newcolors.push("brown", "grey", "sraczkowate")
console.log("new colors: ", newcolors);

//? USeful one would return the items in the array separated with przecinki

var arrayString = colors.join(" | ");
console.log("String from this array is: ", arrayString);
