const target = "Is this all there is?";
const regExp = /is/;
const regExp2 = /is/g;

console.log(regExp.exec(target)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]

console.log(regExp.test(target)); //true

console.log(target.match(regExp)); //[ 'is', index: 5, input: 'Is this all there is?', groups: undefined ]
// exec 메서드는 문자열 내의 모든 패턴을 ㅇ검색하는 g 플래그를 지정해도 첫 번째 매칭 결과만 반환한다.
// 하지만 String.prototype.match 메서드는 g플래그가 지정되면 모든 매칭 결과를 배열로 바노한함
console.log(target.match(regExp2)); //[ 'is', 'is' ]
