let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  /* anything else */ 'What an unusual age!';

alert( message );

/* "?" acts as a conditional for a variable, and colons replace semicolons when multiple conditionals are present.

  (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :

  "If age is less than 3, then (?) print this. Also (:), 
  If age is less than 18, then (?) print this. Also (:), etc."

*/