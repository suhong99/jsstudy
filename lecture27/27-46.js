const arr = [1, 2];
let result = arr.push(3, 4);
console.log("result : ", result, "arr : ", arr); //result :  4 arr :  [ 1, 2, 3, 4 ]

arr[arr.length] = 5;
console.log(arr); //[ 1, 2, 3, 4, 5 ]
