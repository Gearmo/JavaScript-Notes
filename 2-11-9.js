let login = prompt(`Who's there? Type "Cancel" to exit.`);

if (login == "Cancel") {
    alert("Canceled.")
}
else if (login == "Admin") {
    let password = prompt(`Password? Type "Cancel" to exit.`); {
        if (password == "Cancel") {
            alert("Canceled.");
        }
        else if (password == "TheMaster") {
            alert("Welcome!");
        }
        else {
            alert("Wrong password.");
        }
    }
}
else {
    alert("I don't know you.")
}

// damn, good job