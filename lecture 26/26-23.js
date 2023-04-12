const Foo = () => {};
//화살표 함수는 생성자 함수로 호출 할 수 없다
new Foo(); //TypeError
//화살표 함수는 prototype 프로퍼티가 없다.
Foo.hasOwnProperty("prototype"); // false
