//기명 함수 표현식
var namedFunc = function foo() {};
console.log(namedFunc.name); //foo

//익명 함수 표현식
var anonymousFunc = function () {};
//ES5 는 빈 문자열을 갖고, ES6에선 name 프로ㅓ퍼티는 함수 객체를 가리키는 변수 이름을 값으로 갖는다.
console.log(anonymousFunc.name); //anonymousFunc

// 함수선어눔ㄴ
function bar() {}
console.log(bar.name); //bar
