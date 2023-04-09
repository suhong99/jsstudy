//빈 객체 생성
const person = new Object();
//프로퍼티 추가
person.name = "Lee";
person.sayHello = function () {
  console.log("Hi! My name is " + this.name);
};

console.log(person); //{ name: 'Lee', sayHello: [Function (anonymous)] }
person.sayHello(); //Hi! My name is Lee
