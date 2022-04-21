BUILT-IN FUNCTIONS:
alert(message)
prompt(message)
prompt(message, default)

USER-MADE FUNCTIONS:
function example() {
    alert ("example text")
}

/*-----------------------------------------------*/

LOCAL VARIABLES:
function showMessage() {
    let message = "Hello!" //declaration is INSIDE
    alert (message);
}

showMessage(); //Hello!
alert(message); // ERROR, not local to function

OUTER VARIABLES:
let userName = "John"; //declaration is OUTSIDE, aka global

function showMessage () {
    let message = "Hello, " + userName + "!";
    alert(message);
}

showMessage(); //Hello, John!

/*-----------------------------------------------*/

PARAMETERS:
function showMessage(from, text) { //parameters are in parentheses
    alert(from + ": " + text)
}

showMessage ("Ann", "Hello!");
showMessage ("Ann", "What's up?"); //these are known as arguments

NESTING:
function showMessage(fruits, vegetables = carrots ()) {
    carrots()
}




