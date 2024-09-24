//this 바인딩은 함수 호출방식에 따라 동적으로 결정된다
const foo = function () {
  console.dir(this);
};

// 1. 일반 함수 호출 foo 함수를 일방적으로 호출 시 전역 객체 window를 가리킴
foo(); //window

//2. 메서드 호출
//foo 함수를 프로퍼티 값으로 할당하여 호출 객체 obj를 가리킴
const obj = { foo };
obj.foo(); //{ foo: [Function: foo] }

//3. 생성자 함수 호출, new 연산자와 함꼐 생성자 함수 호출 시
//this는 생성자 함수가 생성한 인스턴스 가리킴
new foo();

//4. Function.prototype/apply/call/bind 메서드에 의한 간접 호출
///foo 함수 내부의 this는 인수에 의해 결정됨
console.log("4번");
const bar = { name: "bar" };
foo.call(bar); //{ name: 'bar' }
foo.apply(bar); //{ name: 'bar' }
foo.bind(bar)(); //{ name: 'bar' }
