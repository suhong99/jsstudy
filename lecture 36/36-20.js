const todos = [
  { id: 1, content: "HTML" },
  { id: 2, content: "CSS" },
];

const [, { id }] = todos;
console.log(id); //2
