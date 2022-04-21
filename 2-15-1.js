//THIS...
function checkAge(age) {
    if (age > 18) {
      return confirm("You are above 18. Congratulations.")
    } else {
      return confirm("Did your parents allow you?");
    }
}

//IS THE SAME AS THIS...
function checkAge(age) {
    if (age > 18) {
      return confirm("You are above 18. Congratulations.")
    } //no "else"
      return confirm("Did your parents allow you?");
}