const Person = (function () {
  //생성자 함수
  function Person(name) {
    this.name = name;
  }
  //생성ㅈ 함수의 prototype 프로퍼티를 통해 프로토타입을 교체
  Person.prototype = {
    sayHello() {
      console.log(`Hi! 난 ${this.name}`);
    },
  };
  //생성자 함수를 반환
  return Person;
})();

const me = new Person("Lee");

// 프로토타입을 교체하면 constructor 프로퍼티와 생성자 함수 간의 연결이 파괴됨
console.log(me.constructor === Person); //false
// 프로토타입 체인을 따라 Object.prototype의 constructor 프로퍼티가 검색됨
console.log(me.constructor === Object); //true
