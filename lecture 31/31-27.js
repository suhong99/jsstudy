const target = "A AA BB ZZ Aa Bb 12,345";

const regExp = /[\w,]+/g;
const regExp2 = /[\W,]+/g;

console.log(target.match(regExp)); //[ 'A', 'AA', 'BB', 'ZZ', 'Aa', 'Bb', '12,345' ]

console.log(target.match(regExp2)); //[
//     ' ', ' ', ' ',
//     ' ', ' ', ' ',
//     ','
//   ]
