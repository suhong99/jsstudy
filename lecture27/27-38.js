const arr = [];

// 배열 요소의 추가
arr[0] = 1;
arr[1] = 2;

//프로퍼티 추가
arr["foo"] = 3;
arr.bar = 4;
arr[1.1] = 5;
console.log(arr); //[ 1, 2, foo: 3, bar: 4, '1.1': 5 ]

console.log(arr.length); //2
