//first thing there is no actual concept of Hoisting in js its a just a term that we assumed to understand the behavior

//? The variable and function declaration that is moved to the top of the code to get compiled first is called hoisting

//a;/
//b;/

var a = b;
var b = 10;

//a;
//b;

//* think of it as the var a and b is on top
var a;
var b;

// a = b;
// b = 10;

//? here is the tricky que about mutual recursion

a(1);

function a(foo) {
  if (foo > 20) return foo;
  return b(foo + 2);
}

function b(foo) {
  return c(foo) + 1;
}

function c(foo) {
  return a(foo * 2);
}

//* ans of it have to be 39 keep the + 1 in mind in fun b
