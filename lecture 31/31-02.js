//정규 표현식 리터럴
const target = "iIs this all there is?";
// 패턴 : is
// 플래그 : i => 대소문자를 구별하지 않고 검색한다
const regexp = /is/i;

//test 메서드는 target 문자열에 대해 정규 표현식 regexp 의 패턴을
//검색하여 매칭 결과를 불리언 값으로 반환한다
console.log(regexp.test(target)); // //true

const regexp2 = new RegExp(/is/i); //ES6
//const regexp2 = mew RegExp(/is/,'i')

console.log(regexp2.test(target)); //true
