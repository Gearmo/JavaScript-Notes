/* --- WHILE LOOPS --- */
let i = 0; // Your starting value.
while (i < 3) { // Alerts "0", "1", and "2". Does not include 3.
  alert( i ); // Begins iteration of your value.
  i++; // Acts as a stopper. Without it, this will loop forever.
}

let i = 3;
while (i) { // When "i" becomes 0, the condition becomes false. Loop will stop by this, as if "i = 0".
  alert( i );
  i--; // We going backwards now.
}



/* --- DO LOOPS --- */
let i = 0;
do { // Only use "do" if you want to loop AT LEAST ONCE.
  alert( i );
  i++;
} while (i < 3); // Conditional goes down here. 



/* --- FOR LOOPS --- */
for (start; condition; step) { //this is the general structure of FOR loops. Remember it. Any of the 3 can be omitted, so long as their are included outside the parentheses.
for (; i < 3;) {
  alert( i++ );
}

for (let i = 0; i < 3; i++) { //Same as the 1st example. MUCH more condensed. 
    alert(i);
}



/* --- INLINE DECLARATIONS --- */ 
/* Look at the following 2 examples. Noticed the difference in the placement of "let". */

// (1)
for (let i = 0; i < 3; i++) {
    alert(i); // 0, 1, 2
  }
  alert(i); // error, no such variable

let i = 0;

// (2)
for (i = 0; i < 3; i++) { // use an existing variable
  alert(i); // 0, 1, 2
}

alert(i); // 3, visible, because declared outside of the loop

/* --- BREAKS & CONTINUE --- */
if (!value) break;
if (!value) break labelName; //breaks a specific operation
if (i % 2 == 0) continue;
