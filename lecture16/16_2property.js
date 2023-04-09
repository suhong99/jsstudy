const person = { name: "Lee" };

//프로퍼티동적 생성
person.age = 20;

//프로퍼티 어트리뷰트 정보를제공하는 프로퍼티 디스크립터 객체 반환
console.log(Object.getOwnPropertyDescriptor(person, "name"));
console.log(Object.getOwnPropertyDescriptors(person));
