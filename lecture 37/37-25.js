//this 가 subset의 상위 집합인지 확인한다
Set.prototype.isSuperset = function (subset) {
  const supersetArr = [...this];
  return [...subset].every((v) => supersetArr.includes(v));
};

const setA = new Set([1, 2, 3, 4]);
const setB = new Set([2, 4]);

//상위 집합인지 확인한다.
console.log(setA.isSuperset(setB)); //true
console.log(setB.isSuperset(setA)); //false
