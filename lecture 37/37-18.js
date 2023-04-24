Set.prototype.intersection = function (set) {
  const result = new Set();

  for (const value of set) {
    //2개의 set 요소가 공통되는 요소이면 교집합의 대상이다.
    if (this.has(value)) result.add(value);
  }
  return result;
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

//set A와 B의 교집합
console.log(setA.intersection(setB)); //Set(2) { 2, 4 }
