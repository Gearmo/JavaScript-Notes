function min(a, b) { //creating two variables
    if (a < b) { //if b is greater than a
        return a; //return a
    }
    else {
        return b; //if not, then return b
    }
}

// OR

function min(a, b) { 
    return a < b ? a : b; // if b is bigger, display a -- if not, display b
}