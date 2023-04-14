const arr = [1, 2, 3, 4, 5];

// 현재 length 프로퍼티 값보다 작은 값을 할당
arr.length = 3;

//배열의 길이가 줌
console.log(arr); //[1,2,3]

const arr2 = [1, 2, 3, 4, 5];
arr2.length = 7;
console.log(arr2); //[ 1, 2, 3, 4, 5, <2 empty items> ]
