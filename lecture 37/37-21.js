Set.prototype.union = function (set) {
  return new Set([...this, ...set]);
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

console.log(setA.union(setB)); //Set(4) { 1, 2, 3, 4 }

console.log(setB.union(setA)); //Set(4) { 2, 4, 1, 3 }
