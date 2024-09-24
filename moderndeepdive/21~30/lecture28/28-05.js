//부동 소수점 오차
console.log(0.1 + 0.2); //0.30000000000000004
console.log(0.1 + 0.2 === 0.3); //false

function isEqual(a, b) {
  //a 와 b를 뺸 값의 절대값이 Number.EPSILON보다 작으면 같은수로 인정한다.
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(isEqual(0.1 + 0.2, 0.3)); //true
