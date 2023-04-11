class Person {
  constructor(name) {
    //인스턴스 프로퍼티
    this.name = name;
  }
}

const me = new Person("Lee");
console.log(me); //Person {name : "Lee"}

//name은 public하다
console.log(me.name); //Lee
