//생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

const circle = Circle(5);
// 일반함수로 호출 시 this는 전역 객체 window를 가리킴
console.log(circle); //undefined
console.log(radius); //5
console.log(circle.getDiameter()); // TypeError
