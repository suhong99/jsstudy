const [a, b, c] = [1, 2];

const [d, e, f = 3] = [1, 2];

const [h, i] = [1, 2, 3];
console.log(a, b, c); //1 2 undefined

console.log(d, e, f); // 1 2 3

console.log(h, i); //1 2
