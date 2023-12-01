'use strict';
// 4th rule of this keyword in reverse its first

function foo() {
  console.log(this.bar);
}

var bar = 'bar1';

var o1 = { bar: 'bar2', foo: 'foo' };
var o2 = { bar: 'bar3', foo: 'foo' };

// in this case where the function call was direct the default binding rule apply in the case of this
foo(); // bar1 //? this is the default rule without strict mode

//? 3rd of our rules that is in reverse so second
o1.foo(); // bar2
o2.foo(); // bar3
// Now we are calling the function with implicit binding rules apply because they are just references reference in js

//> another way of understanding
var o1 = {
  bar: 'bar1',
  foo: function () {
    console.log(this.bar);
  },

  // var o2 = { bar: "bar2", foo: o1.foo };

  // var bar = "bar3"
  // var foo = o1. foo;

  // o1.foo()  out: bar1
  // o2.foo()  out: bar2
  // foo()     out: bar3
};

// Hard Binding of this key word
function foo() {
  console.log(this.bar);
}

var obj = { bar: 'bar' };
var obj2 = { bar: 'bar2' };

var orig = foo;

foo = function () {
  orig.call(obj);
};

foo(); // bar
foo.call(obj2); // bar

// Another way of creating is without global var hanging around is making a function that can bind

function bind(fn, o) {
  return function () {
    fn.call(o);
  };
}
function foo() {
  console.log(this.bar);
}

var obj = { bar: 'bar' };
var obj2 = { bar: 'bar2' };

foo = bind(foo, obj);

foo();
foo.call(obj2); //? it will ignore the call binding because already been binned
