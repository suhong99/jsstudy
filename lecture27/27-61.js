const arr = [1, 2, 3, 4];

//원본 배열의 인덱스 1부터 2개의 요소를 제거하고 그 자리에 새로운 요소 20,30 삽입
const result = arr.splice(1, 2, 20, 30);

//제거한 요소 반환
console.log(result); //[ 2, 3 ]
//원본 훼손
console.log(arr); //[ 1, 20, 30, 4 ]
