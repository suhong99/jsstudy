const arr = [0];
arr[1] = 1;
// 현재 배열의 length 프로퍼티값보다 큰 인덱스 요소 추가시 희소배열됨
arr[3] = 3;
console.log(arr);

arr[1] = 2;

console.log(arr); //[ 0, 2, <1 empty item>, 3 ]
