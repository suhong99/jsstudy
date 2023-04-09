//생성자함수
function Circle(radius) {
  if (!new.target) {
    return new Circle(radius);
  }

  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
}

// new 연산자 없이 생성자 함수를 호출하여도 new.target을통해 생성자 함수로서 호출됨
const circle = Circle(5);
console.log(circle.getDiameter()); //10
