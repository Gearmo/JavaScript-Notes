// BOOK 1 CHAPTER 1

// TYPES OF EXPRESSIONS
//  a = b * 2
// "a" & "b" are VARIABLE EXPRESSIONS: anything that is a letter
// "2" is a LITERAL VALUE EXPRESSION: anything that is a number
// "=" & "*" are OPERATORS: anything that assigns & reassigns value
// "b * 2" is an ARITHMETIC EXPRESSION: anything that uses arithmetic between variables
// "a = b * 2" is an ASSIGNMENT EXPRESSION: anything assigned with arithmetic

a = 21;
b = a * 2;

alert(b);
// OR
console.log(b);

var x = 20; //20
x = x + 1; //21
x = x * 2; //42

console.log(x);

// TYPES OF VALUES
"hello"; //string
true; //boolean
42; //number -- to print numbers, convert to string first. See below.

var a = "42";
var b = Number(a);

console.log (a);
console.log (b);

// TYPES OF CONDITIONALS
// 1) IF STATEMENTS
var bank_balance = 302.13; //note the use of the underscore
var amount = 99.99;

if (amount < bank_balance) { //This section is called block
	console.log( "I want to buy this phone!" );
}

// 2) WHILE LOOPS
var i = 0;
while (true) { //"while" is an ITERATOR, which repeats same line of code

	if ((i <= 9) === false) { //"if it hits 9, stop"
		break;
	}

	console.log( i );
	i = i + 1;
}
// 0 1 2 3 4 5 6 7 8 9

// 3) FOR LOOPS
for (var i = 0; i <= 9; i = i + 1) {
	console.log( i );
}
// 0 1 2 3 4 5 6 7 8 9
// The above has 3 clauses: 
// 1) the initialization (var i =0), "While i = 0,
// 2) the conditional test (i <= 9), "And while i is less than 9,"
// 3)  the update (i = i + 1), "then increment by 1."

// FUNCTIONS
const TAX_RATE = 0.08;

function calculateFinalPurchaseAmount(amt) { //amt is a PARAMETER
	amt = amt + (amt * TAX_RATE);
	return amt;
}

var amount = 99.99;

amount = calculateFinalPurchaseAmount( amount );

console.log( amount.toFixed( 2 ) );		// "107.99"

// SCOPES & NESTING
function outer() { // SCOPE 1, only "a" is accessible here
	var a = 1;

	function inner() { // SCOPE 2, "a" & "b" are accessible here
		var b = 2;
		console.log( a + b );	// 3
	}
	inner();

	console.log( a );			// 1, "a" also accessible here
}
outer();