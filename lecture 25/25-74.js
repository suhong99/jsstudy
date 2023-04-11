// 수퍼클래스
class Rectangle {
  constructor(width, heigth) {
    this.width = width;
    this.heigth = heigth;

    console.log(this); //ColorRectangle { width: 2, heigth: 4 }

    console.log(new.target); ////[class ColorRectangle extends Rectangle]
  }

  getArea() {
    return this.width * this.heigth;
  }

  toString() {
    return `width = ${this.width}, heigth = ${this.heigth}`;
  }
}

//서브클래스
class ColorRectangle extends Rectangle {
  constructor(width, heigth, color) {
    super(width, heigth);
    console.log("ColorReatangle의 ", this); //ColorReatangle의  ColorRectangle { width: 2, heigth: 4 }

    this.color = color;
  }

  //메서드 오버라이딩
  toString() {
    return super.toString() + `, color = ${this.color}`;
  }
}

const colorRectangle = new ColorRectangle(2, 4, "red");
console.log(colorRectangle); //ColorRectangle { width: 2, heigth: 4, color: 'red' }

//상속을 통해 getArea 메서드를 호출
console.log(colorRectangle.getArea()); // 8
//오버라이딩된 toString 메서드를 호출
console.log(colorRectangle.toString()); //width = 2, heigth = 4, color = red
