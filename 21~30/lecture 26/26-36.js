const counter = {
  num: 1,
  increase: () => ++this.num,
  check: () => this.num,
};

console.log(counter.check());
console.log(counter.increase());

this.x = 1;
const normal = function () {
  return this.x;
};
const arrow = () => this.x;

console.log(normal.call({ x: 10 })); //10
console.log(arrow.call({ x: 10 })); //1
