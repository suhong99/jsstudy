class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //fullName 은 접근자 함수로 구성된 접근자 프로퍼티다.
  //getter 함수
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  //setter 함수
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
}

const me = new Person("Ungmo", "Lee");

//데이터 프로퍼티를 통한 프로퍼티 값의 참조
console.log(`${me.firstName} ${me.lastName}`); // Ungmo Lee

//접근자 프로퍼티를 통한 프로퍼티 값의 저장
// 접근자 프로퍼티 fullName 에 값을 저장하면 setter 함수가 호출됨
me.fullName = "Heegun Lee";
console.log(me); //Person { firstName: 'Heegun', lastName: 'Lee' }

//접근자 프로퍼티를 통한 프로퍼티 값의 참조
// 접근자 프로펕 fullName에 접근하면 getter 함수가 호출됨
console.log(me.fullName); //Heegun Lee

//fullName 은 접근자 프로퍼티다
//접근자 프로퍼티는 get, set, enumerable, configurable 프로퍼티 어트리뷰르를 갖는다
console.log(Object.getOwnPropertyDescriptor(Person.prototype, "fullName")); //{    get: [Function: get fullName],     set: [Function: set fullName],      enumerable: false,    configurable: true  }
