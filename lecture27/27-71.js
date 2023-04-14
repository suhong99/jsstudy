const todos = [
  { id: 1, content: "굿" },
  { id: 2, content: "구웃" },
  { id: 3, content: "꾸웃" },
];

//얕은 복사
const _todos = todos.slice();
console.log(_todos === todos); // 별개의 객체임 false

// 배열요소의 참조값이 같음 (얕은 복사)
console.log(_todos[0] === todos[0]); //true
