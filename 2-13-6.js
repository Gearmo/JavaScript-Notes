let num;

do {
    num = prompt("Please enter a number greater than 100.", 0)
    // 0 will be the default number if nothing inputted
}
    while (num <= 100 && num)
    // keep asking for a number if its less than 100 and is a number.
    // will break after a number greater than 100 is inputted