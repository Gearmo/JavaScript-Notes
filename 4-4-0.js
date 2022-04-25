// USER BEHAVIOR
let user = {
    name: "John",
    age: 30
};
  
user.sayHi = function() {
    alert("Hello!");
};

user.sayHi = sayHi; //this is a method, which assigns the behavior before being officially executed
  
user.sayHi(); // Hello! // This is known as an act: it gives behavior to the user much like a login or shopping cart

/* --------------------------------------------------*/

// SHORTHANDING
// Method A, better for longer scripts
user = {
    sayHi: function() { //this...
      alert("Hello");
    }
};
  
//Method B, better for shorter scripts
user = {
    sayHi() { //...and this are the same.
      alert("Hello");
    }
};