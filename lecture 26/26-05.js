const obj = {
  x: 1,
  //foo는 메서드다
  foo() {
    return this.x;
  },
  //bar에 바인딩된 함수는 일반 함수임
  bar: function () {
    return this.x;
  },
};

console.log(obj.foo()); //1
console.log(obj.bar()); //1

// new obj.foo(); //TypeError
new obj.bar(); // bar{}
