//함수 정의가 평가되어 함수 객체를 새엇ㅇ하는 시점에 ㅡㅍ로토타입도 더불어 생성됨
console.log(Person.prototype); //{constructor: f}

function Person(name) {
  this.name = name;
}

const Person2 = (name) => {
  this.name = name;
};
console.log(Person2.prototype); //undefined
