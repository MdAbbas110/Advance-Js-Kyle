// var foo = 'bar';

function bar() {
  var foo = 'bor';

  function baz(foo) {
    foo = 'bazz';
    boss = 'me';
  }
  baz();
}

// bar();
// foo;
// bam;
// baz();

// Cheating with the lexical scope

var boz = 'boo';

function foo(str) {
  eval(str);
  console.log(boz);
}

foo('var boz = 76');

// another way of cheating lexical scope

var obj = {
  a: 1,
  b: 2,
  c: 3,
};

obj.a = obj.b + obj.c;

with (obj) {
  (a = b + c), (c = a + b), (d = 4);
}

// when we declare D in this case it use to pop out in lexical scope and ask
// i got the lhs declaration of D do you got any reference ans is no
// so that's the reason the with method is blocked in strict mode
