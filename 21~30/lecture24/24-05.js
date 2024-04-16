const x = 1;

//1
function outer() {
  const x = 10;
  const inner = function () {
    console.log(x);
  }; //2
  return inner;
}

//outer 함수를 호출하면 중첩함수 inner를 반환함
// outer 함수의 실행 컨텍스트는 실행 컨텍스트 스택에서 팝되어 제거됨
const innerFunc = outer(); //3
innerFunc(); // 4) 10
