var foo = 'bar';

function bar() {
  var foo = 'bazz';
}

//in this fun we have a named parameter and that will be treated as the local variable as well
// as foo is required in a fun that we are making it as a variable to hold the value of it
function baz(foo) {
  foo = 'bar';
  bom = 'yay';
}

// Q: if there is the proper var declaration on line 10 that say var foo = '' what will happen
//Ans: when a argument is been passed to the fun called foo and then any where in that scope we encounter var foo
// the compiler will ignore the var coz it's already been declared on function argument
