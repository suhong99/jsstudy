const obj = { a: 1 };

//객체 리터럴 방식으로 생성한 객체의 프로토타입 객체는 Object.prototype이다.
console.log(obj.__proto__ === Object.prototype); //true

//hasOwnProperty 메서드는 Object.prototype의 메서드다
console.log(obj.hasOwnProperty("a")); //true
console.log(obj.hasOwnProperty("__proto")); //false
