function pow (x, n) {
    let result = r;

    for (let i = 1; i < n; i++) {
        result *= x;
    }
    return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
}

// OR

function pow (x, n) {
    return x**n
};

alert(pow);