(function () {
  A();

  function c() {
    console.log('00PS!');
  }

  function E(f) {
    console.log('E');
    f();
    var f = F;
  }

  function A() {
    console.log('A');
    B();
  }
})();
