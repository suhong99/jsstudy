console.log(x); // undefined
console.log(y); // ReferenceError

var x = 10; // 전역 변수

function foo() {
  //선언하지 않은 식별자에 값을 할당
  y = 20; //window.y = 20
}

foo();

//선언하지 않은 식별자 y를 전역에서 참조할 수 있음
console.log(x + y);
