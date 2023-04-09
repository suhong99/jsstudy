function Person(name) {
  this.name = name;
}

//프로토타입 메서드
Person.prototype.sayHello = function () {
  console.log(`Hi! My name is ${this.name}`);
};

const me = new Person("Lee");

//hasOwnProperty는 Object.prototype의 메서드
console.log(me.hasOwnProperty("name")); //true

//getPrototypeOf도 마찬가지
Object.getPrototypeOf(Person.prototype) === Object.prototype;
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype); //true

Object.prototype.hasOwnProperty.call(me, "name");
console.log(Object.prototype.hasOwnProperty.call(me, "name")); //true
