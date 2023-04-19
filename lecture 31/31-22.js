//범위 지정
const target = "A AA BB ZZ Aa Bb 12,345";
//'A' ~'Z'가 한 번 이상 반복되는 문자열을 전역 검색함
const regExp = /[A-Z]+/g;
console.log(target.match(regExp)); //[ 'A', 'AA', 'BB', 'ZZ', 'A', 'B' ]

// 대소문자 구문 안 할 경우
const regExp2 = /[A-Za-z]+/g;
console.log(target.match(regExp2)); //[ 'A', 'AA', 'BB', 'ZZ', 'Aa', 'Bb' ]

//숫자를 검색
const regExp3 = /[0-9]+/g;

console.log(target.match(regExp3)); //[ '12', '345' ]

// 0~9또는 , 가 한 번 이상 반복되는 문자열 검색
const regExp4 = /[0-9,]+/g;
console.log(target.match(regExp4)); //[ '12,345' ]

//\d 사용
const regExp5 = /[\d,]+/g;
console.log(target.match(regExp5)); //[ '12,345' ]

const regExp6 = /[\D,]+/g;
console.log(target.match(regExp6)); //[ 'A AA BB ZZ Aa Bb ', ',' ]
