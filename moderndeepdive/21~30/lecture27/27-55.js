const Queue = (function () {
  function Queue(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array}는배열이 아님`);
    }
    this.array = array;
  }
  Queue.prototype = {
    constructor: Queue,
    //큐 가장 마지막에 데이터 넣음
    enqueue(value) {
      return this.array.push(value);
    },
    // 큐의 가장 처음 데이터 꺼냄 (먼저 넣은 것)
    dequeue() {
      return this.array.shift();
    },
    entries() {
      return [...this.array];
    },
  };
  return Queue;
})();

const queue = new Queue([1, 2]);
console.log(queue.entries()); //[1,2]
console.log(queue.enqueue(3)); //3
console.log(queue.dequeue()); //1
console.log(queue.entries()); //[ 2, 3 ]
