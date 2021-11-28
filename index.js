function foo() {
  let a = 2;
  function bar() {
    console.log(a);
  }
  function chg() {
    a += 1;
  }
  return [bar, chg];
}
var [baz, chz] = foo();