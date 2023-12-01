//? topic of new keyword
//  A. JavaScript doesn't have classes
//? B. The new keyword don't have to do with anything about exnihilating an class

function foo() {
  this.baz = 'baz';
  console.log(this.bar + '' + baz);
}

var bar = 'bar';
var baz = new foo(); // Constructor call
//? a function call becomes a constructor call when a new keyword put in front of it
