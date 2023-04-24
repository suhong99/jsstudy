const target = "A AA B BB Aa Bb";

// 'A' 또는 'B'를 전역 검색한다
const regExp = /A|B/g;
console.log(target.match(regExp));
// [
//     'A', 'A', 'A',
//     'B', 'B', 'B',
//     'A', 'B'
//   ]

//분해되지 않은 단어 검색
const regExp2 = /A+|B+/g;
console.log(target.match(regExp2)); //[ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

//[]사용
const regExp3 = /[AB]+/g;
console.log(target.match(regExp3)); //[ 'A', 'AA', 'B', 'BB', 'A', 'B' ]

