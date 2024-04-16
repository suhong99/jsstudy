//생성자 함수
function Circle(radius) {
  this.radius = radius;
  this.getArea = function () {
    return Math.PI * this.radius ** 2;
  };
}

//프로토타입으로 원 넓이 구하기
function Circle2(radius) {
  this.radius = radius;
}

//모든 원은 동일한 getArea를 가지므로 프로토타입에 추가
Circle.prototype.getArea = function () {
  return Math.PI * this.radius ** 2;
};
