const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array}는배열이 아님`);
    }
    this.array = array;
  }
  Stack.prototype = {
    constructor: Stack,
    //스택의 가장 마지막에 데이터 넣음
    push(value) {
      return this.array.push(value);
    },
    // 마지막 데이터 꺼냄
    pop() {
      return this.array.pop();
    },
    entries() {
      return [...this.array];
    },
  };
  return Stack;
})();

const stack = new Stack([1, 2]);
console.log(stack.entries()); //[1,2]
console.log(stack.push(3)); //3
console.log(stack.pop()); //3
