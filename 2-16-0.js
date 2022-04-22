//NORMAL FUNCTION
function sayHi() {
    alert("Hello") 
}

//EXPRESSION FUNCTION
let sayHi = function() {
    alert("Hello");
};

/* ----------------------------------------------------------- */
// The 1st function can be copied onto the 2nd like such:

function sayHi() {   // (1) create
  alert( "Hello" );
}

let func = sayHi;    // (2) copy, "sayHi" in this case is ALREADY a declared value, and therefore can be matched to a new declaration

func(); // Hello     // (3) run the copy (it works)!
sayHi(); // Hello    // this still works too (why wouldn't it)

/* ----------------------------------------------------------- */
//Here's another example of mixing the two:

function ask(question, yes, no) { //functionality of script here
    if (confirm(question)) yes()
    else no();
}
  
function showOk() {
    alert( "You agreed." ); //option A
}
  
function showCancel() {
    alert( "You canceled the execution." ); //option B
}
  
ask("Do you agree?", showOk, showCancel); //Starts here

/* ----------------------------------------------------------- */
//And yet another example using the age-old function

let age = prompt("What is your age?", 18);

let welcome; // this must be present...

if (age < 18) {

  welcome = function() {
    alert("Hello!");
  };

} else {

  welcome = function() {
    alert("Greetings!");
  };

}

welcome(); // ...for this to work, despite being outside of curly braces

/* ----------------------------------------------------------- */
//We can compress the example above even further using the "?" operator

let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  function() { alert("Hello!"); } :
  function() { alert("Greetings!"); };

welcome(); // ok now