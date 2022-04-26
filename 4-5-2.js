// creating a calculator using new

function Calculator() {

    this.read = function() {
      this.a = +prompt('a?', 0); //prompts first number
      this.b = +prompt('b?', 0); //prompts second number
    };
  
    this.sum = function() {
      return this.a + this.b; //returns sum of two numbers
    };
  
    this.mul = function() {
      return this.a * this.b; //returns product of two numbers
    };
  }
  
  let calculator = new Calculator(); //generates a new calculator with prompted numbers
  calculator.read();
  
  alert( "Sum=" + calculator.sum() ); //alerts the sum
  alert( "Product=" + calculator.mul() ); //alerts the product