const todos = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];
const todos2 = [
  { id: 4, content: "JavaScript" },
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];
//비교 함수, 매개변수 key는 프로퍼티 키다.
function compare(key) {
  //프로퍼티 값이 문자열인 경우 -산술 연산으로 비교하면 NaN이 나오므로 비교 연산을 사용한다.
  // 비교 함수는 양수 음수 /0을 반환하면 되므로 - 산술 연산 대신 비교 연산을 사용할 수 있다.
  return (a, b) => (a[key] > b[key] ? 1 : a[key] < b[key] ? -1 : 0);
}

//비교 함수, 매개변수 key는 프로퍼티 키다. 안됨
function compare2(key) {
  return (a, b) => (a[key] >= b[key] ? 1 : -1);

  // a[key] >= b[key] ? 1 : -1
}

//id를 기준으로 오름차순 정렬
todos.sort(compare("id"));
console.log(todos, "todos id");

// [
//     { id: 1, content: 'HTML' },
//     { id: 2, content: 'CSS' },
//     { id: 4, content: 'JavaScript' }
//   ]

//id를 기준으로 오름차순 정렬 안됨
todos2.sort(compare2("id"));
console.log(todos2, "todos2 id");
// [
//   { id: 4, content: "JavaScript" },
//   { id: 1, content: "HTML" },
//   { id: 2, content: "CSS" },
// ];

//content 기준으로 오름차순 정렬
todos.sort(compare("content"));
console.log(todos);

//[
//     { id: 2, content: 'CSS' },
//     { id: 1, content: 'HTML' },
//     { id: 4, content: 'JavaScript' }
//   ]

todos2.sort(compare2("content"));
console.log(todos2);
// [
//     { id: 4, content: 'JavaScript' },
//     { id: 1, content: 'HTML' },
//     { id: 2, content: 'CSS' }
//   ]
