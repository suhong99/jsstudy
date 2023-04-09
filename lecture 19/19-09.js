//obj는프로토타입 체인의 종점이다. 따라서 Obejct.__proto__를 상속 받을 수 없다.
const obj = Object.create(null);

//obj 는 Object.__proto__를 상속받을 수 없다.
console.log(obj.__proto__); //undefined
// 따라서 __proto 보다 Object.getPrototypeOf 메서ㅡ를 사용하는 편이 좋다
console.log(Object.getPrototypeOf(obj)); //null
