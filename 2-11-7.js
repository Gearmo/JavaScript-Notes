let age = prompt("What is your age?")

if (!(age >= 14 && age <= 90)) {
    alert("You are NOT between 14 and 90.")
}
else {
    alert("You ARE between 14 and 90.")
}

/* OR

if (age < 14 || age > 90)

*/