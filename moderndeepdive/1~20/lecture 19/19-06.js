const obj = {};
const parent = { x: 1 };

//getter 함수인 get _prtoto__ 가 호출되어 obj 객체의 프로토타입을 취득
obj.__proto__;

//setter 함수인 set__proto__가 호출되어 obj 객체의 프로토타입을 교체
obj.__proto__ = parent;
console.log(obj.x); //1
