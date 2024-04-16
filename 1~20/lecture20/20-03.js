function foo() {
  x = 10; // 에러 안뜸
  ("use strict");
}
foo();

function foo2() {
  "use strict";

  y = 10; // ReferenceError: y is not defined
}
foo2();
