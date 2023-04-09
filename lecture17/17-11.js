function Circle(radius) {
  //1. 암묵적으로 인스턴스가 생성되고 this에 바인딩된다.
  //2. this에 바인딩되어 있는 인스턴스를 초기화함
  this.radius = radius;
  this.getDiameter = function () {
    return 2 * this.radius;
  };
  // 3. 완성된 인스턴스가  바인딩된 this가 암묵적으로  반환됨
  return {};
}

// 인스턴스 생성. Cricle 생성자 함수는 암묵적으로 this를 반환함
const circle = new Circle(1);
console.log(circle); // {}
