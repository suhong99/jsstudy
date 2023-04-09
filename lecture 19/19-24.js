const obj = { x: 1 };
//객체 리터럴에 의해 생성된 obj객체는 Object.prototype을 상속받음
console.log(obj.constructor === Object); //true
console.log(obj.hasOwnProperty("x")); //true
console.log(obj.constructor);
