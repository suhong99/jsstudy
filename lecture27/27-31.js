const arr = [1, 2];

//인덱스가 0 인 요소
console.log(arr[0]); //1
// 존재하지 않는 요소에 접근
console.log(arr[2]); //undefined

// 희소 배열
const arr2 = [1, 2, , , 3];
console.log(Object.getOwnPropertyDescriptors(arr2));
// {
//     '0': { value: 1, writable: true, enumerable: true, configurable: true },
//     '1': { value: 2, writable: true, enumerable: true, configurable: true },
//     '4': { value: 3, writable: true, enumerable: true, configurable: true },
//     length: { value: 5, writable: true, enumerable: false, configurable: false }
//   }
