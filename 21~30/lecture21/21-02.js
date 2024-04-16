//String 생성자 함수에의한 String 객체생성
const strObj = new String("Lee"); //
console.log(typeof strObj); //object

//String 생성자 함수를 통해 생성한 strObj 객체의 프로토타입은 String.prototype이다.
console.log(Object.getPrototypeOf(strObj) === String.prototype); //true
