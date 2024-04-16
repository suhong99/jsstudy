//수퍼클래스
class Base {
  constructor(a, b) {
    //#4
    this.a = a;
    this.b = b;
  }
}

//서브클래스
class Derived extends Base {
  constructor(a, b, c) {
    // #2
    super(a, b); //#3
    this.c = c;
  }
}

const derived = new Derived(1, 2, 3); //#1
console.log(derived); // Derived { a: 1, b: 2, c: 3 }
