//일반 함수는 중복된 매개변수 이름을 선언해도 에러 발생하지 않음
function normal(a, a) {
  return a + a;
}
console.log(normal(1, 2));

const arrow = (a, a) => a + a;
//SyntaxErroSyntaxError: Duplicate parameter name not allowed in this context
