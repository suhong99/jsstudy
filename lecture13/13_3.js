//전역 함수
function foo() {
  console.log("global function");
}

function bar() {
  //중첩함수
  function foo() {
    console.log("local function");
  }
  foo(); //local function
}

bar();
