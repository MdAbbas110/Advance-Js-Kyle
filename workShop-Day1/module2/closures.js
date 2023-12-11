// Definition of Closure
//Closure is when a function "remember" its lexical scope even when the function is executed outside the lexical scope

for (var i = 1; i <= 5; i++) {
  // Yahan pe jab loop chal kar value ho rahe hai to wo 6 ho rahe har bar jab function run kar raha setTime wala to usko clouser se 6 hi mil raha
  setTimeout(function () {
    console.log('i:' + i);
  }, i * 1000);
}

//To aisa kya kara jae ke function ko har bar alag i mile take har sec baad wo print hota rahe and the solution is ifif

for (let i = 1; i <= 5; i++) {
  (function () {
    setTimeout(() => {
      console.log('i: ' + i);
    }, i * 1000);
  })(i);
}

// Let keyword solved this problem of i context being change on each iteration
for (let i = 1; i <= 5; i++) {
  setTimeout(() => {
    console.log('i' + 1);
  }, i * 1000);
}

//? Two characterStick of module or class based approach is
//1> There must be an outer inclosing function
//2> Inside from main fun it have to return atleast one or more references of inner function that have closures over private scope

//* Example of module

var foo = (function () {
  var publicAPI = {
    boo: function () {
      publicAPI.baz();
    },
    baz: function () {
      console.log('inside baz');
    },
  };
  return publicAPI;
})();

foo.boo();
