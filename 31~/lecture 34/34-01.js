const isIterable = (v) =>
  v !== null && typeof v[Symbol.iterator] === "function";

// 배열 문자열 Map Set 등은 이러터블이다.

console.log(isIterable([])); //true
console.log(isIterable("")); //true
console.log(isIterable(new Map())); //true
console.log(isIterable(new Set())); //true
console.log(isIterable({})); //false
