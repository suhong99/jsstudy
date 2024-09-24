const todos = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];

console.log(todos[0].content > todos[1].content);
console.log(todos[0].content < todos[1].content);
console.log(todos[0].content >= todos[1].content);

//비교 함수, 매개변수 key는 프로퍼티 키다. 안됨
function compare2(key) {
  return (a, b) => (a[key] >= b[key] ? 1 : -1);
  //   return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
  // a[key] >= b[key] ? 1 : -1
}
todos.sort(compare2("content"));
console.log(todos);
todos.sort(compare2("id"));
console.log(todos);
