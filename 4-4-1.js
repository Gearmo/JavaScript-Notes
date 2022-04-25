function makeUser() {
    return {
      name: "John",
      ref: this
    };
}
  
let user = makeUser();
  
alert( user.ref.name ); // What's the result? Error, cannot pull from two keys at the same time