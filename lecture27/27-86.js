const flat0 = [1, [2, [3, [4]]]].flat();
const flat2 = [1, [2, [3, [4]]]].flat(2);
console.log(flat0); //[ 1, 2, [ 3, [ 4 ] ] ]

console.log(flat2); //[ 1, 2, 3, [ 4 ] ]
