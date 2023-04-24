const lee = { name: "Lee" };
const kim = { name: "Kim" };

const map = new Map([
  [lee, "developer"],
  [kim, "designer"],
]);

//Map.prototype.keys는 Map 객체에서 요소키를 값으로 갖는 이터레이터를 반환한다.
for (const key of map.keys()) {
  console.log(key);
}

// { name: 'Lee' }
// { name: 'Kim' }

developer;
for (const value of map.values()) {
  console.log(value);
}
// developer
// designer

for (const entry of map.entries()) {
  console.log(entry);
}
// [ { name: 'Lee' }, 'developer' ]
// [ { name: 'Kim' }, 'designer' ]
