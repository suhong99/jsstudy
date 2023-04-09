const str = "hello";

// 원시 타입인 문자열이 프로퍼티와 메서드를 갖고 있는 객체처럼 동작한다.
console.log(str.length); //5
console.log(str.toUpperCase); // HELLO
// 래퍼 객체로 프로퍼티에 접근하거나 메서드를 호출한 후 , 다시 원시값으로 되돌림
console.log(typeof str); //string
