function Circle(radius) {
  //생성자 함수 내부의 this는 생성자 함수가 생성할 인스턴스를 가리킨다.
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

//인스턴스의 생성
const circle1 = new Circle(5);
const circle2 = new Circle(10);

console.log(circle1.getDiameter()); //10

//일반함수로서 호출
const circle3 = Circle(15);
//일반 함수로서 호출된 Circle은 반환문이 없으므로 암묵적으로 undefined를 반환
//일반 함수로서 호출된 Circle 내의 this는 전역 객체를 가리킴
console.log(circle3); //undefined
console.log(radius); //15
