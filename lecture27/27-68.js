const arr = [1, 2, 3];

// 배열의 끝에서 하나의 요소 복사
arr2 = arr.slice(-1);
console.log(arr2);
arr2.push(2); //[3]
console.log(arr2); //[3,2]
console.log(arr); //[ 1, 2, 3 ]
