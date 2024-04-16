const arr = ["hello", "world"];

//map과 flat 을 순차적으로 실행
console.log(arr.map((x) => x.split("")).flat());
// [
//     'h', 'e', 'l', 'l',
//     'o', 'w', 'o', 'r',
//     'l', 'd'
//   ]
