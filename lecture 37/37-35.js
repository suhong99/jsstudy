const map = new Map();

const lee = { name: "Lee" };
const kim = { name: "Kim" };

// 객체도 키로 사용할 수 있다.
map.set(lee, "developoer").set(kim, "designer");
console.log(map);
// Map(2) {
//     { name: 'Lee' } => 'developoer',
//     { name: 'Kim' } => 'designer'
//   }
