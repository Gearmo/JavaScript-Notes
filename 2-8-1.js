let a = 1, b = 1; 

let c = ++a;
let d = b++;

alert(a); // 2
alert(b); // 2
alert(c); // 2 (positive increment)
alert(d); // 1 (backwards increment)