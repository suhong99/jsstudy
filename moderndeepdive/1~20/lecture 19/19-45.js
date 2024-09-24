function Person(name) {
  this.name = name;
}

const me = new Person("Lee");

//프로토타입으로 교체할 객체
const parent = {
  //constructor 프로퍼티와 생성자 함수간의 연결을 상징
  constructor: Person,
  sayHello() {
    console.log(`Hi! My name is ${this.name}`);
  },
};

//생성자 함수의 prototype 프로퍼티와 프로토타입 간의 연결을 설정
Person.prototype = parent;

//me 객체의 프로토타입을 parent 객체로 교체
Object.setPrototypeOf(me, parent);
//위 코드는 아래의 코드와 동일하게 작동
//me.__proto__ = parent

me.sayHello(); //Hi! My name is Lee

// constructor 프로퍼티와 생성자 함수를 가리킴
console.log(me.constructor === Person); //true
console.log(me.constructor === Object); //false

console.log(Person.prototype === Object.getPrototypeOf(me)); //true
