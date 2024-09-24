// 배열의 중복 요소 제거
const uniq = (array) => [...new Set(array)];
console.log(uniq([2, 1, 2, 3, 4, 4, 3])); //[ 2, 1, 3, 4 ]
