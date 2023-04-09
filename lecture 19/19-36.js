const Person = (function () {
  //생성자 함수
  function Person(name) {
    this.name = name;
  }
  //프로토타입 메서드
  Person.prototype.sayHello = function () {
    console.log(`Hi! 난 ${this.name}`);
  };
  //생성자 함수를 반환
  return Person;
})();

const me = new Person("Lee");

//인스턴스 메서드
me.sayHello = function () {
  console.log(`Hey! so dlfma ${this.name}`);
};
// 인스턴스 메서드가 호출됨. 프로토타입  메서드는 인스턴스 메서드에 의해 가려짐
me.sayHello(); // Hey! so dlfma Lee

delete me.sayHello;
me.sayHello(); // Hi! 난 Lee
