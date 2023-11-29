// the main concept of using iife is to hide the code in a set of scope that we don't want to pollute the global scope

var baz = 'foo';

(function () {
  var baz = 'gan';
  console.log(baz);
})();

console.log(baz);

function explicate(bar) {
  try {
    let a = 'abbas';
  } catch (error) {
    console.log(a);
  }
  console.log(baz);
}
