//이전 사용 방식
var arr = [1, 2, 3];
// apply 함수의 2번째 인수는 apply 함수가 호출하는 함수의 인수 목록이다.
// 따라서 배열이 펼쳐져서 인수로 전달되는 효과가 있다.
var max = Math.max.apply(null, arr);

const arr2 = [1, 2, 3];

const max2 = Math.max(...arr);
console.log(max); //3
console.log(max2); //3
