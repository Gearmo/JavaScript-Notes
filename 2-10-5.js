let message = 
    (login == "Employee") ? "Hello Employee!" :
    (login == "Director") ? "Greetings Director!" :
    (login == "") ? "Login Error." :
    "";

/* BEFORE 
let message;

if (login == 'Employee') {
  message = 'Hello';
} else if (login == 'Director') {
  message = 'Greetings';
} else if (login == '') {
  message = 'No login';
} else {
  message = '';
}
*/