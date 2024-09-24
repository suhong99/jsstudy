const users = [
  { id: 1, name: "lee" },
  { id: 2, name: "kim" },
  { id: 3, name: "choi" },
];

console.log(users.findIndex((user) => user.id === 2)); //1
console.log(users.find((user) => user.id === 2)); //{ id: 2, name: 'kim' }
